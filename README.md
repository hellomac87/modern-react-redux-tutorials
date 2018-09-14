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

### export module, class, state

### class 기반의 컴포넌트

- 클래스 컴포넌트는 내부적인 정보를 저장하려 할때 사용한다.
- ES6 기반의 클래스 : 자바스크립트 객체 형태이다.
- 이 클래시를 react 라이브러리의 Component 를 상속받도록 한다.

### 이벤트 핸들링
[React DOC - Handling Event](https://reactjs.org/docs/handling-events.html)
- 리액트에서 이벤트를 핸들링 할때는 두가지 과정을 거친다.
- 첫번째, 이벤트 핸들러 선언 (이벤트 핸들러 = 이벤트가 발생 할 때 마다 실행되는 함수)
- 두번째, 이벤트 핸들러를 살펴보려는 요소에 전달한다.

### state
- state는 자바스크립트 객체로써, 유저 이벤트를 저장하고 반응하는데 이용된다.
- 우리가 정의한 컴포넌트 기반의 각 클래스는 그 자체의 스테이트 객체를 갖는다.
- 각각의 클래스 기반 컴포넌트는 자체 복사된 스테이트를 갖고 있다.
- 컴포넌트 스테이트가 바뀔 때 마다, 컴포넌트는 즉시 리렌더링하고 자식 요소들에게도 렌더링하도록 강제한다.

#### constructor
- 모든 자바스크립트 클래스는 특별한 함수인 constructor 가 있다.
- 이 함수는 첫번째로 시작된다.
- 클래스가 생성될 때마다 자동적으로 실행된다.
- 변수나 상태값을 초기화하는 등에 주로 이용된다.
- `super()`를 호출하면서 부모 클래스(React.Component class)의 메소드를 이용 할 수 있다.