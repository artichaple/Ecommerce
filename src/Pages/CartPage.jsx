import React from 'react'
import CounterButton from '../Componants/Counter/CounterButton'

const CartPage = ({cartItems,setcartItems}) => {
  return (
    <>
    <div > 
   {

 
    cartItems.map((product)=>{
        return(
            <>
           <div className='cart_item'>
            <div  className='cart_image'>
              <img src={product.img_url} alt="" />
            
            
       </div>         
       <div className='Cart-details'>
        <p>{product.title}</p>
       {/* <p>{product.desc}</p> */}
        <p>${product.price}</p>
        <p>{product.brand}</p>
        <p> {product.category}</p>
       <p> {product.availabilityStatus}</p>

       <button>remove</button>
       
       </div>

      
       </div> 
      
        </>
     )



    })
}

</div>
    
</>
  )
}

export default CartPage