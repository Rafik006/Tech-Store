import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cartItem'
import './cart.css'
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const {cartItems,addItemToCart,removeItemFromCart,handleInputChange,getTotal}=useContext(ShopContext)
  const totalAmout=getTotal()
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div><h1>Your Cart Item</h1></div>
      <div className="cart-items">
        {PRODUCTS.map(product=>{
          if(cartItems[product.id]!==0){
            return <CartItem key={product.id} cartItems={cartItems} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} handleInputChange={handleInputChange} data={product}/>
          }
        })}
      </div>
        {totalAmout>0?     <div className="checkout">
        <p>Subtotal: ${totalAmout}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>:<p>Your Cart is Empty</p>}
      
    </div>
  )
}

export default Cart
