package com.doohnetwork.player

import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Test

class ScheduleFixtureTest {
    @Test
    fun scheduleHasSixPositions() {
        val fixture = """
        {
          "date": "2026-06-15",
          "default_image_url": "https://cdn.example.com/venue-default.jpg",
          "positions": [
            {"slot_index": 1, "type": "booked", "image_url": "https://cdn.example.com/ad-aaa.jpg", "booking_id": "00000000-0000-4000-8000-000000000001"},
            {"slot_index": 2, "type": "default", "image_url": "https://cdn.example.com/venue-default.jpg"},
            {"slot_index": 3, "type": "booked", "image_url": "https://cdn.example.com/ad-bbb.jpg", "booking_id": "00000000-0000-4000-8000-000000000002"},
            {"slot_index": 4, "type": "default", "image_url": "https://cdn.example.com/venue-default.jpg"},
            {"slot_index": 5, "type": "default", "image_url": "https://cdn.example.com/venue-default.jpg"},
            {"slot_index": 6, "type": "default", "image_url": "https://cdn.example.com/venue-default.jpg"}
          ]
        }
        """.trimIndent()
        val json = JSONObject(fixture)
        assertEquals(6, json.getJSONArray("positions").length())
        assertEquals("2026-06-15", json.getString("date"))
    }
}
