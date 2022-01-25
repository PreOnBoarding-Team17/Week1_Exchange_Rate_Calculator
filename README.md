# 🔥 Week 1 Assignment_WireBarley, RedBrick

🧱 원티드 프리온보딩 프론트엔드 코스 - 첫번째 과제

<br/>

## 🌎 배포

[배포 링크](http://calc-exchange-rate-17.s3-website.ap-northeast-2.amazonaws.com/)

<br/>

## 👋🏻 팀원 소개

| 이름                                       | 담당 기능                                                          |
| ------------------------------------------ | ------------------------------------------------------------------ |
| [황상섭](https://github.com/sangseophwang) | 1번 환율 계산기 담당, 디자인, 환경설정 구축, API 및 환율 로직 구현 |
| [금보배](https://github.com/BobaeKeum)     | 1번 환율 계산기 담당, 레이아웃 구성, submit 버튼 기능 구현 |
| [정인권](https://github.com/developjik)    | 2번 환율 계산기 담당, select 입력 및 상태 관리, API 로직 구현  |
| [현다솜](https://github.com/som-syom)      | 2번 환율 계산기 담당, input 입력 및 상태관리,tab container 로직 및 상태관리, 프로젝트 배포 |

<br/>

## ✔ 과제 구현 목록

- 1번 환율 계산기

  - 수취국가의 select box를 변경할 때마다 해당 국가의 환율이 바뀝니다.
  - 송금액에 USD 숫자를 입력하고 submit 버튼을 클릭하면 수취금액이 환산됩니다.
  - 환율과 수취금액은 소숫점 2째자리까지, 3자리 이상 되면 콤마를 찍어 보여줍니다.
  - 환율 정보는 API를 통해 미리 저장해놓고 수취국가를 변경할 때마다 저장된 값을 보여줍니다.
  - 수취금액을 입력하지 않거나 / 0보다 작은 금액이거나 / 10,000보다 큰 금액 / 혹은 바른 숫자가 아니면 에러 메세지를 띄웁니다.

- 2번 환율 계산기
  - 사용자가 숫자만 입력할 수 있고, 1000 이상을 입력할 경우 자동적으로 “1,000”와 같이 변경됩니다.
  - 숫자 입력은 소숫점 자리까지 지원합니다.
  - 드롭다운 메뉴에 통화는 USD, CAD, KRW, HKD, JPY, CNY 로 한정됩니다.
  - “USD” 드롭다운 메뉴를 “CAD”로 선택할 경우, 화면 예시에 제시된 탭 “CAD”는 제거되고 “USD”로 생성됩니다.
  - 사용자의 수치 입력 혹은 드롭다운 메뉴를 이용한 통화 변경시 변경될 환율과 기준일 정보는 동기화 되어 변경됩니다.
  - 모든 환율 계산 결과는 소숫점 둘째자리까지 표기됩니다.
  - 기준일의 날짜 포맷은 반드시 `2022-Jan-01` 형식을 따릅니다.

<br/>

## 🚀 프로젝트 설치 및 실행

```plaintext
💡 https://currencylayer.com/ 에서 가입하고 무료 API KEY를 발급받은 다음 최상단 폴더에 .env 파일에 키를 넣어주세요!
```

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/PreOnBoarding-Team17/Week1_Exchange_Rate_Calculator.git
```

2. 프로젝트 패키지 설치

```plaintext
$ yarn install
```

3. 프로젝트 실행

```plaintext
$ yarn start
```

<br/>

## 🌲 프로젝트 구조

```bash
src
├── API
│   └── index.jsx
├── Components
│   ├── First
│   │    ├── scss
│   │    │    └── First.scss
│   │    └── index.jsx
│   └── Second
│        ├── scss
│        │    ├── Second.scss
│        │    ├── TabContent.scss
│        │    └── TabTitle.scss
│        ├── index.jsx
│        ├── TabContent.jsx
│        └── TabTitle.jsx
├── Styles
│    ├── _mixins.scss
│    └── _reset.scss
├── App.jsx
├── App.scss
└── index.js
```

<br/>

## 📽 시연 영상

1. 계산기 1
  - 수취국가 선택시 환율 생성
  <br/>
  
  ![계산기1-1](https://user-images.githubusercontent.com/79933417/151006740-af78cf07-e12c-43c6-b948-b573f61f0895.gif)
  
  - 송금액 계산
  <br/>
  
  ![계산기1-2](https://user-images.githubusercontent.com/79933417/151007909-781814f3-cab7-49f8-890b-6aa7d08323d3.gif)

  - 송금액을 올바르게 입력하지 않았을 시 경고창
  <br/>
  
  ![계산기1-3](https://user-images.githubusercontent.com/79933417/151008033-e93f31ec-23c3-4756-98d8-c0374b52a5f8.gif)

- 계산기 2
  - 국가 선택시 환율 변경
  <br/>
  
  ![계산기2-1](https://user-images.githubusercontent.com/79933417/151008318-a40682a2-a541-44b6-912e-6a33f2976457.gif)
  
  - 드롭다운 선택
  <br/>
  
  ![계산기2-2](https://user-images.githubusercontent.com/79933417/151008413-dc4da351-5254-472d-87b2-8d87beb34b4d.gif)



