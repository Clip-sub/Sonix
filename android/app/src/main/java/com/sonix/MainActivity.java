package com.sonix;

import com.reactnativenavigation.NavigationActivity;
import android.content.Intent;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends NavigationActivity {
    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        dismissSystemAlertsToPreventDetoxFromTimingOut(hasFocus);
    }

    private void dismissSystemAlertsToPreventDetoxFromTimingOut(boolean hasFocus) {
        if (!hasFocus) {
            sendBroadcast(new Intent(Intent.ACTION_CLOSE_SYSTEM_DIALOGS));
        }
    }
}
