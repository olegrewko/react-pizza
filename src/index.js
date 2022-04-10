import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
function counterR(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
const store = createStore(counterR);
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
   
    <App />
    {/* <Route exact path="/" component={App} />
    <Route exact path="/qw" component={Header} /> */}
    {/* <Route path="/cart" component={Cart} exact /> */}
    {/* </Router> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
