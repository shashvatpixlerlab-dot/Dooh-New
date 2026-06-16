package com.doohnetwork.player

import android.graphics.BitmapFactory
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.io.File

class PlayerActivity : AppCompatActivity() {
    private val tokenStore by lazy { TokenStore(this) }
    private val api by lazy { ApiClient(BuildConfig.API_BASE_URL) }
    private val cache by lazy { ImageCache(this) }
    private val handler = Handler(Looper.getMainLooper())

    private var schedule: DaySchedule? = null
    private var positionIndex = 0
    private var heartbeatJob: Job? = null
    private var scheduleJob: Job? = null
    private var watchdogJob: Job? = null
    private var lastAdvanceAt = System.currentTimeMillis()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_player)
        startKiosk()
        refreshSchedule()
        startSchedulePoller()
        startHeartbeat()
        startWatchdog()
        startLoop()
    }

    private fun startKiosk() {
        try {
            startLockTask()
        } catch (_: Exception) {
            // Lock task requires device owner or pinning in dev
        }
    }

    private fun refreshSchedule() {
        val token = tokenStore.deviceToken ?: return
        lifecycleScope.launch {
            try {
                val newSchedule = withContext(Dispatchers.IO) {
                    api.fetchSchedule(token)
                }
                withContext(Dispatchers.IO) {
                    newSchedule.positions.forEach { cache.download(it.imageUrl) }
                }
                schedule = newSchedule
                findViewById<TextView>(R.id.statusText).text =
                    "Schedule ${newSchedule.date} loaded"
            } catch (e: Exception) {
                findViewById<TextView>(R.id.statusText).text = "Schedule error: ${e.message}"
            }
        }
    }

    private fun startSchedulePoller() {
        scheduleJob?.cancel()
        scheduleJob = lifecycleScope.launch {
            while (isActive) {
                delay(3 * 60 * 1000L)
                refreshSchedule()
            }
        }
    }

    private fun startHeartbeat() {
        val token = tokenStore.deviceToken ?: return
        val deviceId = tokenStore.deviceId ?: return
        heartbeatJob?.cancel()
        heartbeatJob = lifecycleScope.launch {
            while (isActive) {
                try {
                    val current = schedule?.positions?.getOrNull(positionIndex)
                    withContext(Dispatchers.IO) {
                        api.heartbeat(
                            token,
                            deviceId,
                            current?.slotIndex ?: 1,
                            current?.imageUrl?.substringAfterLast("/") ?: "default",
                            BuildConfig.VERSION_NAME
                        )
                    }
                } catch (_: Exception) { }
                delay(60_000L)
            }
        }
    }

    private fun startWatchdog() {
        watchdogJob?.cancel()
        watchdogJob = lifecycleScope.launch {
            while (isActive) {
                delay(30_000L)
                if (System.currentTimeMillis() - lastAdvanceAt > 45_000L) {
                    handler.post { recreate() }
                }
            }
        }
    }

    private fun startLoop() {
        handler.post(loopRunnable)
    }

    private val loopRunnable = object : Runnable {
        override fun run() {
            val positions = schedule?.positions
            if (!positions.isNullOrEmpty()) {
                val pos = positions[positionIndex % positions.size]
                showImage(pos.imageUrl)
                findViewById<TextView>(R.id.slotText).text = "Slot ${pos.slotIndex}"
                positionIndex = (positionIndex + 1) % positions.size
                lastAdvanceAt = System.currentTimeMillis()
            }
            handler.postDelayed(this, 10_000L)
        }
    }

    private fun showImage(url: String) {
        lifecycleScope.launch {
            try {
                val file: File = withContext(Dispatchers.IO) { cache.getLocalPath(url) }
                if (!file.exists()) {
                    withContext(Dispatchers.IO) { cache.download(url) }
                }
                val bitmap = withContext(Dispatchers.IO) {
                    BitmapFactory.decodeFile(file.absolutePath)
                }
                findViewById<ImageView>(R.id.imageView).setImageBitmap(bitmap)
            } catch (_: Exception) {
                // Keep showing last frame on error
            }
        }
    }

    override fun onDestroy() {
        handler.removeCallbacks(loopRunnable)
        heartbeatJob?.cancel()
        scheduleJob?.cancel()
        watchdogJob?.cancel()
        super.onDestroy()
    }
}
