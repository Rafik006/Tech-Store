import React, { createContext,useState} from 'react'
import { PRODUCTS } from '../products'
export const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0
    }
    return cart
}


const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart())
  
    const addItemToCart=itemId=>{
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeItemFromCart=itemId=>{
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotal=()=>{
        let total=0
        for(let key in cartItems){
            if(cartItems[key]>0){
                for(let i=0;i<PRODUCTS.length;i++){
                    if(PRODUCTS[i].id===+key){
                        total+=PRODUCTS[i].productPrice*cartItems[key]
                    }
                }
            }
        }
        return total
    }
    
    
    const handleInputChange=(value,id)=>setCartItems(prev=>({...prev,[id]:value}))
    const contextValue={cartItems,addItemToCart,removeItemFromCart,handleInputChange,getTotal}
  return <ShopContext.Provider value={contextValue}> {props.children} </ShopContext.Provider>
}

export default ShopContextProvider
