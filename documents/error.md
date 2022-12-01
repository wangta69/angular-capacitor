## net::ERR_CLEARTEXT_NOT_PERMITTED
Android studio > app > manifests > AndroidManifest.xml
android:usesCleartextTraffic="true" 를 아래처럼 추가한다.
```
<application
       .....................
       android:usesCleartextTraffic="true"
       >
```