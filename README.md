# Hybirid APP 제작 (Angular + Capacitor)
## 기본명령

### Install Capacitor
```
ng add @capacitor/angular
```
### Build the Web App.
```
ng build --prod
```
### Install the native platforms you want to target.
```
npm i @capacitor/ios
npm i @capacitor/android
```
```
npx cap add android
npx cap add ios
```

angualr 작업 디렉토리(web assets ) 을 native 폴더로 이동(android/app/src/main/assets/public) \
android/app/src/main/assets 에 capacitor.coinfig.json 파일을 생성

```
npx cap copy
```
## 1 시간만에 만들기

### Android App
open the project in Android Studio
```
npx cap open android
```
To run the project on a device or emulator, run:
```
npx cap run android
```


### 실행방법 요약
ng build
npx cap copy
이후 안드로이드 스튜디오에러 run or debug

[안드로이드 스튜디오에서 APK 만들기](android.md)

## 중요 package 사용법

### Creating Splash Screens and Icons
앱아이콘을 mobile의 resolution에 맞게 자동으로 제작
Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

```
npm install -g cordova-res
```
프로젝트 Top level 에 아래와 같은 폴더를 만들고 각각
icon.png(1024x1024) 및 splash.png(2732x2732)를 만들어 준다.
anddroid 의 경우 하위 폴더 android를 만들어주고 icon-background.png(432x432) 와
icon-foreground.png(432x432)를 각각 만들어준다.
```
resources/
├── icon.png
└── splash.png
    └── android
        ├── icon-background.png
        └── icon-foreground.png
```

모든 이미지를 생성하고 native 프로젝트로 카피하기위해 아래 명령을 입력한다.
```
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```
res 이하의 각가의 폴더안으로 이미지들이 저장된다.
```
android/
└── src
    └── main
        └── res
```
[ERROR]
```
Error occurred while copying resources\android\icon\mdpi-foreground.png
```
Step 1

432x432 크기의  icon-background.png  및 icon-foreground.png 만들어
<Project Directory>/resources/android/ 폴더에 넣는다.

### Live Reload

### SplashScreen
https://capacitorjs.com/docs/apis/splash-screen

### status-bar
https://capacitorjs.com/docs/apis/status-bar


### 앱에 광고를 달 - ADMOB
https://github.com/capacitor-community/admob
% npm install --save @capacitor-community/admob
% npx cap update

android/app/src/main/java/**/**/MainActivity.java
```
package game.pondol.nonogram.app;
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

android/app/src/main/AndroidManifest.xml
```
<manifest>
    <application>
    ..........
    <meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```
android/app/src/main/res/values/strings.xml
```
<string name="admob_app_id">[APP_ID]</string>
```