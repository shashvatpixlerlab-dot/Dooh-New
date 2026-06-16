package com.doohnetwork.player

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent?) {
        if (intent?.action != Intent.ACTION_BOOT_COMPLETED) return
        val target = if (TokenStore(context).isPaired()) {
            PlayerActivity::class.java
        } else {
            LoginActivity::class.java
        }
        val launch = Intent(context, target).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(launch)
    }
}
