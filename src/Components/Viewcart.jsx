import React, { useEffect, useState, useContext } from 'react'
import './Viewcart.css'
import Product from './Product';
import { cartContext } from '../App';
const Cart = () => {
  const [total,setTotal]=useState(0);
  const {cart,setCart} = useContext(cartContext);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0));
  },[cart]);
  return (
    <>
    <h2 className=" ">Cart Products</h2>
     <div className='cart-container'>
      
        {
          cart.map((Product)=>(
            <div className='cart-product' key={Product.id}>
            <div className='img'>
          <img src={Product.image_url} alt='image'/>
        </div>         
        <div className='cart-product-details'>
          <h3>{Product.name}</h3>
          <p>Price RS:{Product.price}</p>
        </div>
        </div>
          ))
        }
      
      <h3>Total amount Rs:{total}</h3>

    </div>
    </>
   
  )
}

export default Cart
