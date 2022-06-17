# 다국어(아이콘)

아이콘 마다 다양한 언어로 이름을 나타내기 위해서는 아래와 같이 하여야 합니다.

https://developer.android.com/training/basics/supporting-devices/languages?hl=ko

```
<resource type>-b+<language code>[+<country code>]
```
가령 한국어로 아이콘을 표시하기 위해서는 아래와 같이 처리하시면 됩니다.

1. android > app > src > main > res 로 이동
2. values-b+ko  라는 폴더를 생성 및 strings.xml 파일 생성
```
<?xml version='1.0' encoding='utf-8'?>
<resources>
  <string name="title_activity_main">슬라이딩 퍼즐</string>
</resources>

```

이렇게 처리하시면 모바일의 언어선택시 이 이름도 변경됩니다.