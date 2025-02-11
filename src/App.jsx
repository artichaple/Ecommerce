// basic structure or pattern of url base/ routes/ querry paramaeter key value pair paramas
import './App.css'
import React, { useState } from 'react'
import {BrowserRouter ,Route, Routes}from "react-router-dom";
import Home from './Pages/Home';

import ProductPage from './Pages/ProductPage';
import Onsale from './Pages/Onsale';
import Shop from './Pages/Shop';
import NewArrivals from './Pages/NewArrivals';
import Brands from './Pages/Brands';
import Navbar from './Componants/Navbar/Navbar';
import"./App.css";
import Footer from './Componants/Footer/Footer';
import CartPage from './Pages/CartPage';



const App = () => {
    const initialState=JSON.parse(localStorage.getItem("cartItem"))||[];
  const[cartItems, setcartItems]=useState(initialState);
  return (
    <>
  <BrowserRouter>
   <Navbar cartItems={cartItems} setcartItems={setcartItems} />
  <Routes>

    <Route path='/' element={<Home/>}/>
  <Route path="onsale" element={<Onsale/>}/>
  <Route path="shop" element={<Shop/>}/>
   <Route path="newarrivals" element={<NewArrivals/>}/>
<Route path="brands" element={<Brands/>}/>
  <Route path="productpage/:id" element={<ProductPage cartItems={cartItems} setcartItems={setcartItems}/>}/>
  <Route path="cart-page"  element={<CartPage cartItems={cartItems} setcartItems={setcartItems}/>}/>
   
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>





  );
};

export default App





