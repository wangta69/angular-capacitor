#Share
공식문서 : https://capacitorjs.com/docs/apis/share
```
npm install @capacitor/share
npx cap sync
```
```
import { Share } from '@capacitor/share';

await Share.share({
  title: 'See cool stuff',
  text: 'Really awesome thing you need to see right meow',
  url: 'http://ionicframework.com/',
  dialogTitle: 'Share with buddies',
});
```