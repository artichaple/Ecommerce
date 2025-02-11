import React from 'react'
import { useState } from 'react';
import"./counterbutton.css";

const CounterButton = () => {
    const [count, setCount] = useState(0);
        
        function increaseCounter(){
            setCount(count+1)
        }
        function decreaseCounter(){
            setCount(count-1)
        }



  return (
    <div className='counterdisplay'>
        
 <button onClick={decreaseCounter} className='cd_btn'>-</button> 
        <span>{count}</span>
<button onClick={increaseCounter} className='cd_btn'>+</button>
</div>


  )
}

export default CounterButton