// import logoSvg from './assets/img/pizza-logo.svg';
import './App.css';
// import Categories from './components/Categories';
import { Header } from './components';
import Categories from './components/Categories';
// import {  Categories, SortPopup, Button } from './components';
import SortPopup from './components/SortPopup';
import { Home, Cart, Error } from './pages';
// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="wrapper">
      <Header />
      
      <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes" />
      <label for="happy">Happy</label>
     

    <div className="content">
      {/* <Cart />
         <Home /> */}
       <Router>  
        <Routes>
         <Route  path="/" element={<Home/>} /> 
         <Route  path = '/cart' element={<Cart/>} />
         <Route path = '*' element={<Error/>} />
        </Routes>
       </Router>
    </div>
  </div>
  );
}

export default App;
