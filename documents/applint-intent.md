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
    "package_name": "com.example",
    "sha256_cert_fingerprints":
    ["14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"]
  }
}]
```
위의 sha256_cert_fingerprints 는
```
keytool -list -v -keystore my-release-key.keystore
```
명령어를 통해 획득하실 수 있습니다.