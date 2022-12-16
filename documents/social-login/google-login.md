# Google Login
https://www.npmjs.com/package/@codetrix-studio/capacitor-google-auth

```
npm i --save @codetrix-studio/capacitor-google-auth
npx cap update
```
## Web
```
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

// use hook after platform dom ready
GoogleAuth.initialize({
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});
```
component.ts
```
async googleLogin() {
    const user: any = await GoogleAuth.signIn();
}
```

### Capacitor
capacitor.config.json
```
{
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "xxxxxx-xxxxxxxxxxxxxxxxxx.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
}
```
#### serverClientId 구하기
아래 링크를 참조하여 클라인언트 ID를 구한다.
[문서보기](../google/google-cloud-console.md)

component.ts
```
async googleLogin() {
    const user: any = await GoogleAuth.signIn();
}
```

## FireBase + Angular 를 이용한  Social Login
이번에는 firebase를 이용한 social login 을 다루어 보겠습니다.
추천은 위의 @codetrix-studio/capacitor-google-auth 사용하기를 권장하며 friebase 를 이용하는 방법은 순수한 angular social login 용입니다.
참조 : https://www.positronx.io/full-angular-firebase-authentication-system/
```
npm install firebase @angular/fire
```
enviorment.ts
```
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxxxxxxx-xxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxx",
    measurementId: "xxxxxxxxxxxxxxxx"
  }
};
```
아래 링크를 참조하여 클라인언트 ID를 구한다.
[문서보기](../google/firebase.md)

app.module.ts
```
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideMessaging, getMessaging } from '@angular/fire/messaging'; -- 이부분은 사용하지 않을 예정

@NgModule({
    imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideMessaging(() => getMessaging()),
    ],
})
```
component.ts
```
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export class GoogleAuthS {
    constructor(
    ) {}

    GoogleAuth(): Promise<any> {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        return new Promise((resolve, reject) => {
            signInWithPopup(auth, provider)
            .then((result) => {

                resolve(result);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                reject(error);
            });

        });
    }

    /**
    * 로그인 버튼을 눌렀을 경우
    */
    async googleLogin() {
        this.GoogleAuth().then((data: any)=>{
            console.log(data);
        });
    }
}
```

