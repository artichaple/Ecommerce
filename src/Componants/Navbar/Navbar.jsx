import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({cartItems,setcartItems}) => {
  const [search, setSearch] =useState();
  const [searchedProduct, setsearchedProduct] = useState([]);

  

  
  const sendReq = async () => {
    try{
     const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await res.json();
   setsearchedProduct(data.products);
  console.log(data);
} catch(error){
  console.log(error);
}
};

  useEffect(() => {
 if (search){
  sendReq();
 }
 else{
 setsearchedProduct([]);
 }
  },[search]);


  return (
    <>
      <header>
        <div className="sign-up">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#"> Sign Up Now</a>
          </p>
        </div>
        <div className="navbar flex">
          <div className="main-logo flex gap">
            <a href="/">
              <h2>SHOP.CO</h2>
            </a>
            
          </div>
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">On Sale</a>
            </li>
            <li>
              <a href="">New Arrivals</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
          </ul>
          
          <div className="search-bar">
            <div className="search-box-input" >
            <input
                type="text"
                placeholder="Search for product"
                onChange={(e) => setSearch(e.target.value)}
                
                
              />
             
            {
              searchedProduct.map((product)=>{
                return(
                  <>
               <ul>
           <Link to={`productpage/${product.id}`} key={product.id} className="search-box-list" >
                {product.title}
           </Link>
           </ul>
           </>
                );


              })
            } 
            </div>
            <a href="#">
              <img src="assets/search.svg" alt="" />
            </a>
          </div>
          <div className="hugs">
            <div className="cart-container">
            <Link to="cart-page">
               
              <img
                src="	https://ajay-lokhande455.github.io/e-commerce/assets/cart.svg"
                alt=""
                
              />
              <span className="cart-count">{cartItems.length}</span>
            </Link>
            </div>
            <a href="#">
               <img
                src="https://ajay-lokhande455.github.io/e-commerce/assets/account.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </header>
    </>
  ) ;
};

export default Navbar;
