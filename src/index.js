import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/app.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'

// console.log(store.getState())
// import { createStore } from 'redux';

// function counterR(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }
// const store = createStore(counterR);

// store.subscribe(() => console.log('хранилище изменилось', store.getState()))


// function counterR(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }
// const store = createStore(counterR);

// store.dispatch({ type: 'counter/incremented'})
// store.dispatch({ type: 'counter/decremented'})
// const inc = () => {
//   store.dispatch({
//     type: 'counter/incremented'
//   })
// }
// store.subscribe(() => {
//   console.log('изменение', store.getState())
// })

ReactDOM.render(
  <React.StrictMode>
     <Router>
               
   </Router>

   <Provider store={store}>
    <App />
    </Provider>
    
   {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
