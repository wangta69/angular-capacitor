# Local Notification
[공식 문서](https://capacitorjs.com/docs/apis/local-notifications#scheduleon)
[추천 예제](https://catchconsole.com/code-example/ionic-capacitor-local-notification)
## Install
```
npm install @capacitor/local-notifications
npx cap sync
```

```
public async schedule(notification: any): Promise<void> {
    LocalNotifications['schedule']({
      notifications: [
        notification
      ]
    });
}

const notification = {....};
schedule(notification)
```

## notification 에 대한 다양한 예제
### 매분마다
```
const randomId = Math.floor(Math.random() * 10000) + 1;
const notification = {
  title: 'my title',
  body: 'my body',
  id: randomId,
  schedule: {
   every: "minute"
  },
};

```
### 매일 특정시간
```
const randomId = Math.floor(Math.random() * 10000) + 1;
const notification = {
  title: 'my title',
  body: 'my body',
  id: randomId,
  schedule: {
      // at: new Date(Date.now() + 1000 * 60), // in a minute
      on: {hour: 9, minute: 33, second: 0},
      repeats: true,
      every: "day"
  },
};

```

### 특정시간마다
```
const randomId = Math.floor(Math.random() * 10000) + 1;
const notification = {
  title: 'my title',
  body: 'my body',
  id: randomId,
  schedule: {
      at: new Date(Date.now() + 1000 * 60), // in a minute
      allowWhileIdle: true,
  },
};

```