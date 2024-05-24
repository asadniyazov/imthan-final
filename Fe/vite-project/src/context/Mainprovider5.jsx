import React, { useState } from 'react'
import { createContext } from 'react'
import uselocalstorage from '../Hooks/uselocalstorage'
export const Maincontext =createContext()
function Mainprovider5({children}) {
    const [Basket, setBasket] = uselocalstorage("basket",[])
    const [Wishlist, setWishlist] = uselocalstorage("wishlist",[])
    function AddBasket(item) {
         const index=Basket.findIndex((x)=>x._id===item._id)
         if (index===-1) {
             return setBasket([...Basket,{...item,count:1}])
         }
    }

    function RemoveBasket(item) {
        return setBasket([...Basket.filter((x)=>x._id!==item._id)])
   }


   function IncreaseBasket(item) {
    const index=Basket.findIndex((x)=>x._id===item._id)
    const element=Basket[index]
    if (index!==-1) {
        element.count++
        return setBasket([...Basket])
    }
}
function DEcreaseBasket(item) {
    const index=Basket.findIndex((x)=>x._id===item._id)
    const element=Basket[index]
    if (element.count>1) {
        element.count--
        return setBasket([...Basket])
    }
}
function Gettotal() {
    return Basket.reduce((prev,initial)=>prev+(initial.count*initial.price),0)
}

function AddWishlist(item) {
    const index=Wishlist.findIndex((x)=>x._id===item._id)
    if (index===-1) {
        return setWishlist([...Wishlist,{...item,count:1}])
    }
    else{
        return setWishlist([...Wishlist.filter((x)=>x._id!==item._id)])
    }
}
function isExsisted(item) {
     return Wishlist.find((x)=>x._id===item._id)
}
  return (
  <Maincontext.Provider value={{Basket,Wishlist,AddWishlist,AddBasket,RemoveBasket,IncreaseBasket,DEcreaseBasket,Gettotal,isExsisted}}>{children}</Maincontext.Provider>
  )
}

export default Mainprovider5