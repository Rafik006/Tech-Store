import React, { useContext } from 'react'
const CartItem = (props) => {
    const {id,productName,productPrice,productImage}=props.data
    const {removeItemFromCart,cartItems,addItemToCart,handleInputChange}=props
  return (
    <div className='cart-item'>
        <img src={productImage} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p >${productPrice}</p>
            <div className='count-handler'>
                <button onClick={()=>removeItemFromCart(id)}>-</button>
                <input value={cartItems[id]}  onChange={(e)=>handleInputChange(+e.target.value,id)}/>
                <button onClick={()=>addItemToCart(id)}>+</button>
            </div>
        </div>
      
    </div>
  )
}

export default CartItem
