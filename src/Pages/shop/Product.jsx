import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
const Product = (props) => {
    const {id,productName,productPrice,productImage}=props.data
    const {cartItems,addItemToCart,removeItemFromCart}=useContext(ShopContext)
    const cartItemAmount=cartItems[id]
  return (
    <div className='product'>
    <img src={productImage}/>
    <div className="description">
        <p><b>{productName}</b></p>
        <p> ${productPrice}</p>
    </div>
    <button className="addToCartBtn" onClick={()=>addItemToCart(id)} >
        Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
    </button>
    </div>
  )
}

export default Product
