# StephenGrider modern-react-redux-tutorials

### 프로젝트 - 깃허브 주소
[https://github.com/StephenGrider/ReduxCasts](https://github.com/StephenGrider/ReduxCasts)

### 프로젝트 설정
- 강좌에서 사용하는 BoilerPlate 대신 create-react-app 을 통해 기본 프로젝트를 설정한다.

### 프로젝트 목표
- 리액트만을 사용하여 Youtube API를 이용한 동영상 검색 페이지 제작

### 리액트란 무엇인가
- 자바스크립트 라이브러리
- 웹 브라우저에 보여지는 html 을 만드는 라이브러리

#### 컴포넌트란
- component 혹은 view
- 자바스크립트로 만드는 컴포넌트는 궁극적으로 html 로 만들어진다.

### JSX
- 부분적인 템플릿 혹은 변형된 자바스크립트로 자바스크립트 안에 html 처럼 보이는 소스코드를 사용할 수 있게 도와준다.
- 웹팩, 바벨을 사용하여, JSX를 바닐라 자바스크립트로 변환하여 브라우저가 이해할 수 있게 만든다.
- JSX 는 실제 html 로 변환되어 제공된다.
- JSX 의 궁극적인 목적은 자바스크립트 코드를 html 로 만드는 것이다.
- JSX => 바닐라 자바스크립트 => DOM

### 컴포넌트 인스턴스와 컴포넌트 클래스의 차이
- react 는 컴포넌트를 생성하고 관리
- react-dom 은 생성된 컴포넌트를 DOM 과 연결

- DOM 에 렌더링 하기 전에 컴포넌트를 인스턴스화(JSX 로 만든다) 해야한다. 