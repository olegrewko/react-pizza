import React from 'react';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';
// import Categories from './components/Categories';
import { Header } from './components';
import Categories from './components/Categories';
// import {  Categories, SortPopup, Button } from './components';
import SortPopup from './components/SortPopup';
import { Home, Cart, Error } from './pages';
// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = React.useState([])
  React.useEffect(()=>{
    // axios.get('http://localhost:3000/db.json')
    // .then(({data}) => {
    //   console.log('axios', data)
    // })

    fetch('http://localhost:3000/db.json').then((resp)=>resp.json()).then(json=>{
      setPizzas(json.pizzas);
    });

  }, [])


  return (
    <div className="wrapper">
      <Header />
      
      <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes" />
      <label for="happy">Happy</label>
      <input class="custom-radio" name="color" type="radio" id="color-green" value="green" />
      <label for="color-green">Green</label>
     

    <div className="content">
      {/* <Cart />
         <Home /> */}
       <Router>
      
        <Routes>
         <Route path = '/' element={<Home items={pizzas}/>} />
       
         <Route  path = '/cart' element={<Cart/>} />
         <Route  path = '/header' element={<Header/>} />
         <Route path = '*' element={<Error/>} />
        </Routes>
       </Router>
    </div>
  </div>
  );
}

export default App;
