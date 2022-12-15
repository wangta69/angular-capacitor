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

## 1 시간만에 만들기
[angular + capacitor + android studio 를 이용하여 앱만들기](documents/build-app-in-1hour.md)

## Angular Basic Setting
[angular 설치](documents/angular-set-basic.md)

## 안드로이드 스튜디어 사용법
[안드로이드 스튜디오 간단한 사용법](documents/android.md)

## 자주사용하는 명령어
angular 에서 작업한 내용을 build 한다.
```
ng build
```
build된 내용을 native platforms 의 public 으로 옮기고 capacitor.config.json 파일을 생성한다.
```
--- www folder update
npx cap copy
--- capacitor update
npx cap update
--- www | capacitor update
npx cap sync
```
open the project in Android Studio
```
npx cap open android
```
To run the project on a device or emulator, run:
```
npx cap run android
```


## 버젼업 (Android)
버젼업을 할경우 반드시 build.gradle의 versionCode 와 versionName을 수정하여야한다. 특히 버젼코드는 기존 버젼보다 반드시 높은 것을 사용한다.
```
android > app > build.gradle
versionCode 1   <= 유저에게는 보여지지 않음, 정수로 계속 올려야 함
versionName "1.0" <= 유저에게 보여짐
```




## 주요 Capacitor package 사용법

### 앱 아이콘 및 Splash Screens 용 이미지 제작
[문서보기](documents/package-creating-splash-screens-and-icons.md)

### SplashScreen
https://capacitorjs.com/docs/apis/splash-screen

### status-bar
[문서보기](documents/package-status-bar.md)


### Local Notification
[문서보기](documents/package-local-notificaion.md)

### 앱에 광고를 달자 - ADMOB
[문서보기](documents/package-admob.md)

### 결제시스템  - Purchase
[문서보기](documents/package-purchase.md)

### 파일다루기 (FileSystem)
[문서보기](documents/package-filesystem.md)





capacitor-community/native-market  2.0 에서만 동작하므로 아래 것을 다운 받아서 처리
```
npm i https://github.com/hermitdemschoenenleben/native-market
```

## 주요 Angular Package 사용법
### 다국어 설정
[app 의 다국어 번역](documents/ngx-translate.md)
[앱아이콘의 다국어 출력](documents/mutilangual-app.md)
## APP Market 등록
### Google Play
[문서보기](documents/market-google-play.md)
### App Store
### Share (social share)
[문서보기](documents/share.md)
### App link & Intent
[문서보기](documents/applink-intent.md)
### Keep Awake (앱이 sleep 하지 않게 하기)
[문서보기](documents/community-keep-awake.md)
## LIVE RELOAD
[문서보기](documents/live-reload.md)
## CHROME DEBUGGING
[문서보기](documents/chrome-debugging.md)

## 에러처리
[문서보기](documents/error.md)

## Cordova Plugins
[문서보기](documents/cordova-plugins.md)

