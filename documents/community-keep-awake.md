# Keep Awake
github : https://github.com/capacitor-community/keep-awake

```
npm install @capacitor-community/keep-awake
npx cap sync
```

```
import { KeepAwake } from '@capacitor-community/keep-awake';

const keepAwake = async () => {
  await KeepAwake.keepAwake();
};

const allowSleep = async () => {
  await KeepAwake.allowSleep();
};
```

