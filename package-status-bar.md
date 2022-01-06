# Status Bar
[공식문서](https://capacitorjs.com/docs/apis/status-bar)
```
// iOS only
window.addEventListener('statusTap', function () {
  console.log('statusbar tapped');
});
StatusBar.setOverlaysWebView({ overlay: false }); // OverLay 기능
await StatusBar.setStyle({ style: Style.Dark }); // Dark일경우 폰트가 흰핵, Light 인경우 폰트가 검은색
await StatusBar.show();
```