import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Switch, Route } from "react-router-dom";

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
