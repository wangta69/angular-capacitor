# ADMOB 달기
## Admob 가입
먼저 google Admob에 가입하자
[Google Admob](https://admob.google.com/intl/ko/home/)

## Add Admob Plugin
https://github.com/capacitor-community/admob
```
% npm install --save @capacitor-community/admob
% npx cap update
```
## Android
아래와 같이 수정을 하자
### android/app/src/main/java/ ** / ** /MainActivity.java
registerPlugin(com.getcapacitor.community.admob.AdMob.class); 추가
```
package com.my.first.app;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(com.getcapacitor.community.admob.AdMob.class);
    }

}
```

### android/app/src/main/AndroidManifest.xml
```
<meta-data
android:name="com.google.android.gms.ads.APPLICATION_ID"
android:value="@string/admob_app_id"/>
```
 추가
```
<manifest>
    <application>
        ..........
        <meta-data
     android:name="com.google.android.gms.ads.APPLICATION_ID"
     android:value="@string/admob_app_id"/>
```
### android/app/src/main/res/values/strings.xml
[APP_ID]는 google Admob에 가입한 후 획득할 수 있습니다.
```
<string name="admob_app_id">[APP_ID]</string>
```


### 몇몇 주요 options
```
tagForChildDirectedTreatment :어린이를 대상으로 할 경우 이부분을 true로 벼경
isTesting: true,
```

##IOS
Add the following in the ios/App/App/info.plist file inside of the outermost <dict>:
```
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[APP_ID]</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>
<key>NSUserTrackingUsageDescription</key>
<string>[Why you use NSUserTracking. ex: This identifier will be used to deliver personalized ads to you.]</string>
```
