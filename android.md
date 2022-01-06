# 안드로이드 스튜디오
## APK 생성
Build > Generate Signed Bundle / APK...
![alt apk 생성](assets/images/android-studio1.png)

APK선택 > Next
![alt apk 생성](assets/images/android-studio2.png)

키스토어 선택 및 패스워드입력
![alt apk 생성](assets/images/android-studio3.png)

Release로 선택
![alt apk 생성](assets/images/android-studio4.png)

Event Log에서 메시지 확인
![alt apk 생성](assets/images/android-studio5.png)

locate 선택하면 생성된 폴더로 이동
![alt apk 생성](assets/images/android-studio6.png)

## Logcat
Logcat을 이용하면 javascript의 log로 출력되는 정보를 확인할 수 있습니다.

![alt Logcat](assets/images/android-studio8.png)
![alt Logcat](assets/images/android-studio7.png)


[error]
You can't rollout this release because it doesn't allow any existing users to upgrade to the newly added app bundles.
[solution]
안드로이드 스튜디오
Project > android > app > build.gradle
versionCode 10102
versionName "1.2"
이 기존 버젼보다 높아야 함
