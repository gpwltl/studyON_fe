# studyON

[직접 참여하기 (studyON 접속)](https://gpwltl.github.io/)

## 0. 해당 코드 
[화면(frontEnd)](https://github.com/TeamTMTB/studyON_fe)

[로그인server(oauth_service)](https://github.com/TeamTMTB/Oauth_Service)

[투두리스트server(todolist-springboot)](https://github.com/TeamTMTB/StudyOn-todolist-springboot)

[포인트server(pointlike-springboot)](https://github.com/TeamTMTB/StudyOn-pointlike-springboot)


## 1. 프로젝트 소개
study mode on의 의미로서 공부를 시작할 때 함께하고픈 의미를 담았고, 시간과 공간의 제약이 없이 언제, 어디서나 사용이 가능하고 공부의 집중 습관을 기를 수 있게 하는 온라인 스터디 공간

## 2. 사용 기술 및 개발 계획
### 1) 사용 기술
- frontEnd
  - React
  - Mobx
- backEnd
  - Oauth2.0
  - Redis
  - Node
  - Socket.io
  - MariaDB

### 2) 개발 계획
- 진행 기간 : 2020.09.10 - 12.04
- 목표 : 힘든 상황 속에서 공부하는 많은 사람들에게 도움이 되는 서비스를 만드는 것이 목표

## 3. 핵심 기능
### 1) 타이머 기능
뽀모도로 공부 방법을 활용한 studyON만의 공부 방법을 적용한 타이머입니다. 공부 시간과 쉬는 시간의 알람이 각각 존재하여 설정된 시간에 맞춰 타이머가 작동됩니다. 접속한 방의 모든 유저에게 동일한 타이머가 실행됩니다. 

### 2) 스터디 그룹(방) 기능
 원하는 공부 패턴을 적용한 방을 만들거나 자신이 원하는 공부 패턴을 적용된 스터디 방에 입장 가능합니다. 스터디 방에 접속하면 타이틀, 공지사항, 타이머, 게시판 등을 공유하고 게시판에는 알람 끈 유저 목록, todo 체크한 유저 목록, 현 공부 주기를 띄워줍니다. 

### 3) Todo와 Calendar 기능
 오늘 자신이 할 일을 적어둘 수 있는 Todo가 존재합니다. 이에 지난 날의 할 일 목록을 확인할 수 있는 캘린더가 함께 존재합니다. 또한 캘린더에는 만족도평가에 따른 만족도를 표시하여 한 달의 자신의 공부 평가를 확인할 수 있습니다. 

### 4) Point 기능
 포인트를 이용하여 해당 서비스를 이용하게 됩니다. 회원가입 시 1000포인트 지급되고 스터디 방을 만들거나 입장했을 때 차감되며 알람을 제때 끈 ‘오늘의 공부왕’ 타이틀을 가지게 되면 차감되었던 포인트를 환급받을 수 있습니다. 


