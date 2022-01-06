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
[angular + capacitor + android studio 를 이용하여 앱만들기](build-app-in-1hour.md)

## 안드로이드 스튜디어 사용법
[안드로이드 스튜디오 간단한 사용법](android.md)

## 자주사용하는 명령어
angular 에서 작업한 내용을 build 한다.
```
ng build
```
build된 내용을 native platforms 의 public 으로 옮기고 capacitor.config.json 파일을 생성한다.
```
npx cap copy
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




## 중요 package 사용법

### 앱 아이콘 및 Splash Screens 용 이미지 제작
[문서보기](package-creating-splash-screens-and-icons.md)

### Live Reload

### SplashScreen
https://capacitorjs.com/docs/apis/splash-screen

### status-bar
https://capacitorjs.com/docs/apis/status-bar


### 앱에 광고를 달자 - ADMOB
[문서보기](package-admob.md)


capacitor-community/native-market  2.0 에서만 동작하므로 아래 것을 다운 받아서 처리
npm i https://github.com/hermitdemschoenenleben/native-market


