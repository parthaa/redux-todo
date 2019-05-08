import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';
import Body from './components/connected/Body';
import Header from './components/connected/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
}

var store = createStore(reducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root')
);