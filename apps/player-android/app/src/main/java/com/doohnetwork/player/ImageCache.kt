package com.doohnetwork.player

import android.content.Context
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.File
import java.security.MessageDigest

class ImageCache(context: Context) {
    private val dir = File(context.cacheDir, "schedule_images").apply { mkdirs() }
    private val client = OkHttpClient()

    fun getLocalPath(url: String): File {
        val hash = MessageDigest.getInstance("SHA-256")
            .digest(url.toByteArray())
            .joinToString("") { "%02x".format(it) }
        return File(dir, "$hash.img")
    }

    fun download(url: String): File {
        val file = getLocalPath(url)
        if (file.exists() && file.length() > 0) return file
        val res = client.newCall(Request.Builder().url(url).get().build()).execute()
        if (!res.isSuccessful) throw ApiException("Download failed: $url")
        res.body!!.byteStream().use { input ->
            file.outputStream().use { output -> input.copyTo(output) }
        }
        return file
    }

    fun clear() {
        dir.listFiles()?.forEach { it.delete() }
    }
}
