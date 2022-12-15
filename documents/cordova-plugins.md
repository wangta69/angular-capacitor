# Cordova plugins 사용하기
https://eliteionic.com/tutorials/migrating-cordova-plugins-to-capacitor-android/
```
npm install cordova-plugin-name
npx cap sync
```

코르도바 플러그인이 @awesome-cordova-plugins wrapper 이면 아래처럼 사용한다.
```
npm install @awesome-cordova-plugins/plugin-name
```
특정한 버젼을 사용할 경우 혹은 플러그인을 업데이트 할 경우
```
npm install cordova-plugin-name@version
npx cap sync
```

### @awesome-cordova-plugins
module.ts
```
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@NgModule({
    providers: [
        InAppBrowser
    ],

})

```
component.ts
```
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
constructor(
        private iab: InAppBrowser,
    ) {

    }

    const browser = this.iab.create(URL);

```
