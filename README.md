# Our Now (ON)

## 간략 소개

- 카카오톡과 같이 실시간 채팅 기능을 중심으로 다양한 기능을 담은 웹앱입니다.

## 사용 기술 스택

- [x] MySQL Sequlize 💎
- [x] Express.js
- [x] React.js (Styled-Components, Hooks)
- [x] Node.js
- [x] Socket.io
- [x] Passport.js

- 본 프로젝트의 **주 목적은 RDBMS: MySQL, webSocket에 대한 학습**이며,
  Express.js + React.js의 조합에 익숙해지기 위해 구상한 사이드 프로젝트입니다.

## 기본 기능

- [x] 로그인
- [x] Peer to Peer 채팅방
- [x] 채팅
- [x] 접속상태 표시
- [x] 상태 메세지 설정
- [ ] 친구 초대 (단톡방 구현)
- [ ] 배포

## 추가 기능

- [ ] 유저 차단기능
- [ ] 이미지 전송
- [ ] 동영상 전송
- [ ] 이모티콘 전송
- [ ] 친한 친구 설정
- [ ] 공지
- [ ] 메세지 읽음 숫자
- [ ] 실시간 채팅방 배경음 설정
- [ ] 화상채팅 (WebRTC) 💎

## 보너스

- [ ] 챗봇

#### 현재 해결할 문제

- [x] ~~메세지를 보낼 때마다 전체를 갱신하지 않고 송수신 처리된 부분만 갱신하는 방식으로 수정하기~~
- [x] ~~origin 메세지 시간순으로 정렬하기 (필수)~~
- [x] ~~메세지가 글로벌 소켓으로 전송되는 문제 (필수)~~
- [ ] 모든 api 정리하기

#### 참고할 자료

- 소켓 룸 생성
  https://gist.github.com/crtr0/2896891
- MySQL 데이터 수정
  https://stackoverflow.com/questions/8158244/how-to-update-a-record-using-sequelize-for-node
