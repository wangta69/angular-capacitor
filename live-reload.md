# LIVE RELOAD



### local ip
먼저 본인의 local ip를 확인한다.
Windows user 는 command 창에서
```
ipconfig
```
그러면
IPv4 주소가 나온다.예(http://192.168.0.xx)

### angular를 실행한다.
이때 중요한 것은 --host=0.0.0.0 으로 지정한다.
```
ng serve --host=0.0.0.0 --disable-host-check
```
별도의 --port 를 지정하지 않으면 4200번에서 실행될 것이다.
위에서 획득한 IPv4와 포트를 아래 config.ts의 url에 입력한다.
### capacitor.config.ts 수정

```
const config: CapacitorConfig = {
  ..........................
  server: {
      url: 'http://192.168.0.xx:4200',
      cleartext: true
  }
};
```
capacitor.config 정보를 업데이트한다.
```
npx cap copy
```
이후로는 동작은 동일하다.

이렇게 하면 실시간 업데이트가 가능하다. 물론 native device에도 이후 동일하게 작동하는 것이 가능하다.
## 매우중요
배포시에는 반드시 capacitory.config 에서 server 정보를 삭제한다. 
