// 새로운 컴포넌트를 생성하고.
// 이 컴포넌트는 html 을 생성하게 될 것이다.

import React from 'react';
import ReactDOM from 'react-dom'; // 컴포넌트를 가져와 DOM 에 삽입하는 라이브러리

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// 이 컴포넌트가 만든 html 을 가져가고, 페이지에 반영한다(DOM 에 반영한다).
ReactDOM.render(
    <App />, // 컴포넌트를 인스턴스화 하여 전달
    document.getElementById('root') // 타겟 엘리먼트 설정, DOM node
    );
registerServiceWorker();
