package com.doohnetwork.player

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class LoginActivity : AppCompatActivity() {
    private val tokenStore by lazy { TokenStore(this) }
    private val api by lazy { ApiClient(BuildConfig.API_BASE_URL) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (tokenStore.isPaired()) {
            startPlayer()
            return
        }
        setContentView(R.layout.activity_login)

        val credentialInput = findViewById<EditText>(R.id.credentialInput)
        val status = findViewById<TextView>(R.id.statusText)
        findViewById<Button>(R.id.loginButton).setOnClickListener {
            val credential = credentialInput.text.toString().trim()
            if (credential.isEmpty()) return@setOnClickListener
            status.text = "Pairing…"
            lifecycleScope.launch {
                try {
                    val (token, _) = withContext(Dispatchers.IO) {
                        api.login(credential)
                    }
                    tokenStore.deviceToken = token
                    val payload = token.split(".")[1]
                    val padded = payload + "=".repeat((4 - payload.length % 4) % 4)
                    val json = String(android.util.Base64.decode(padded, android.util.Base64.URL_SAFE))
                    val deviceId = org.json.JSONObject(json).getString("sub")
                    tokenStore.deviceId = deviceId
                    startPlayer()
                } catch (e: Exception) {
                    status.text = "Login failed: ${e.message}"
                }
            }
        }
    }

    private fun startPlayer() {
        startActivity(Intent(this, PlayerActivity::class.java))
        finish()
    }
}
