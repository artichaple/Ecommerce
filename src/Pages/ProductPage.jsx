import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productpage.css"
import CounterButton from "../Componants/Counter/CounterButton";

const ProductPage = ({cartItems,setcartItems}) => {
  const { id } = useParams();


  const [productDetails, setProductDetails] = useState(null);

  async function showdetails() {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProductDetails(data);
  
    } catch (error) {
      console.error( error);
    }
  }

  useEffect(() => {
    showdetails();
  }, []);

   function Additemto_cart(){
  // setcartItems((prev)=>[...prev , id]
  console.log(productDetails);
   const cart={
    img_url:productDetails.thumbnail,
    id:productDetails.id,
    title: productDetails.title,
    desc:productDetails.description,
    brand:productDetails.brand,
    category:productDetails.category,
     price:productDetails.price,
  
    availabilityStatus:productDetails.availabilityStatus,
};
   console.log(cart);

  const cartArray=[...cartItems, cart]

    setcartItems(cartArray);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
   

    
  
   }

   

  if (!productDetails) {
    return <p>loading........</p>;
  }

  return (
    <>
      <div className="details">
        <div className=" image_style">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
         />
       </div>
        <div className="information">
          <h1 className="product-title">
             {productDetails.title}
          </h1>
      <div className="priceanddiscount">
          <p >
           ${productDetails.price}
          </p>
        <button>
        -{productDetails.discountPercentage}%
        </button>
        </div>
          <p className="productdesc">
           {productDetails.description}
           </p>
          <p className="brand">
          {productDetails.brand}
          </p>
         

         

          <button onClick={()=>{Additemto_cart()}} className="add-to-cart">Add to Cart</button>
          
           


       </div>





      </div>
    </>
  );
};

export default ProductPage;
