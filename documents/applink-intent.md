# App Link & Deep Link & Intent

## App Link
브라우저 혹은 메신저 등에서 link를 클릭했을 때 App으로 바로 연결하는 것을 "App Links" 라고 합니다.

App Link를 설정하기 위해서는 앱 및 웹서버 에서 각각 설정을 해 주어야 합니다.

Android
참조 : https://developer.android.com/training/app-links/verify-site-associations
### App 에서 설정
AndroidManifest.xml
```
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="domain.name" />
</intent-filter>
```

### 웹서버에서의 설정
document  root 아래로 assetslinks.json 파일 생성
```
/.well-known/assetlinks.json

https://domain.name/.well-known/assetlinks.json
```

assetslinks.json
```
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "game.pondol.watersort.app",
    "sha256_cert_fingerprints":
    ["25:C4:50:FB:B4:25:F6:B5:55:10:02:EA:F3:AA:04:C5:6D:00:7C:95:2C:D1:1F:4B:46:DC:23:28:8A:6B:E8:7B"]
  }
}]
```
위의 sha256_cert_fingerprints 는
```
keytool -list -v -keystore my-release-key.keystore
```
명령어를 통해 획득하실 수 있습니다.

### android studio 활용하기
위의 내용은 안드로이드 스튜디오에서 테스트로 해 볼 수 도 있는데 아래와 같습니다.
Tools > App Links Assistant
이곳에서는 총 4가지 단계가 있습니다.
#### 1. Add URL intent filters
AndroidManifest.xml 에 intent 설정
#### 2. Add logic to handle the intent
MainActivity 에 추가 (이부분은 capacitor에서 처리 하므로 skip - 아래 Intent 참조)
#### 3. Associate website
assetslinks.json 파일 생성
#### 4. Test on device or emulator
테스트

## Intent
들어오는 데이타를 받기
```
import { App, AppState, URLOpenListenerEvent  } from '@capacitor/app';

..............
App.addListener('appUrlOpen', data => {
    const slug = data.url.split(".app").pop();
    console.log('slug >>', slug);
    console.log('App opened with URL  appUrlOpen :', JSON.stringify(data));
});
```
다른 앱으로 내용 보내기
```
const { value } = await AppLauncher.canOpenUrl({ url: id }); // 깔린 앱인지 확인
if (value) {
    await AppLauncher.openUrl({ url: 'com.getcapacitor.myapp://page?id=portfolio' });
} else {
    if (Capacitor.isNativePlatform()) {
        NativeMarket.openStoreListing({
           appId: 'com.getcapacitor.myapp',
        });
    }
}
```
