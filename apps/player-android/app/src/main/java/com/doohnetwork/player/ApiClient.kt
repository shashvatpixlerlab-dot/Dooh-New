package com.doohnetwork.player

import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

data class PlayerConfig(
    val loopSeconds: Int,
    val slotCount: Int,
    val heartbeatSeconds: Int
)

data class SchedulePosition(
    val slotIndex: Int,
    val type: String,
    val imageUrl: String,
    val bookingId: String?
)

data class DaySchedule(
    val date: String,
    val defaultImageUrl: String,
    val positions: List<SchedulePosition>
)

class ApiClient(private val baseUrl: String) {
    private val client = OkHttpClient()
    private val jsonType = "application/json".toMediaType()

    fun login(credential: String): Pair<String, PlayerConfig> {
        val body = JSONObject().put("credential", credential).toString()
        val req = Request.Builder()
            .url("$baseUrl/device/login")
            .post(body.toRequestBody(jsonType))
            .build()
        val res = client.newCall(req).execute()
        if (!res.isSuccessful) throw ApiException("Login failed: ${res.code}")
        val json = JSONObject(res.body!!.string())
        val config = json.getJSONObject("config")
        return json.getString("device_token") to PlayerConfig(
            loopSeconds = config.getInt("loop_seconds"),
            slotCount = config.getInt("slot_count"),
            heartbeatSeconds = config.getInt("heartbeat_seconds")
        )
    }

    fun fetchSchedule(token: String, date: String? = null): DaySchedule {
        val url = if (date != null) "$baseUrl/device/schedule?date=$date" else "$baseUrl/device/schedule"
        val req = Request.Builder()
            .url(url)
            .header("Authorization", "Bearer $token")
            .get()
            .build()
        val res = client.newCall(req).execute()
        if (!res.isSuccessful) throw ApiException("Schedule failed: ${res.code}")
        val json = JSONObject(res.body!!.string())
        val positions = mutableListOf<SchedulePosition>()
        val arr = json.getJSONArray("positions")
        for (i in 0 until arr.length()) {
            val p = arr.getJSONObject(i)
            positions.add(
                SchedulePosition(
                    slotIndex = p.getInt("slot_index"),
                    type = p.getString("type"),
                    imageUrl = p.getString("image_url"),
                    bookingId = p.optString("booking_id", null)
                )
            )
        }
        return DaySchedule(
            date = json.getString("date"),
            defaultImageUrl = json.getString("default_image_url"),
            positions = positions
        )
    }

    fun heartbeat(
        token: String,
        deviceId: String,
        slot: Int,
        image: String,
        appVersion: String
    ) {
        val body = JSONObject()
            .put("device_id", deviceId)
            .put("currently_showing_slot", slot)
            .put("currently_showing_image", image)
            .put("app_version", appVersion)
            .put("timestamp", java.time.Instant.now().toString())
            .toString()
        val req = Request.Builder()
            .url("$baseUrl/device/heartbeat")
            .header("Authorization", "Bearer $token")
            .post(body.toRequestBody(jsonType))
            .build()
        client.newCall(req).execute().close()
    }
}

class ApiException(message: String) : Exception(message)
