import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Maincontext } from '../context/Mainprovider5'
function Wishlist() {
    const {isExsisted,AddWishlist} = useContext(Maincontext)
  return (
    <>
<Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
 {Category.map((x)=><>
 <div onClick={()=>AddWishlist(x)}>{isExsisted(x) ?<i class="fa-solid fa-heart"></i> :<i class="fa-regular fa-heart"></i> }</div>
<div key={x._id}>
    <i style={{width:"300px",height:"300px"}} class={x.icon}></i>
    <div>{x.title}</div>
    <div>{x.des}</div>
    <div>{x.price}$</div>

  
</div>
</>)}
  </>
  )
}

export default Wishlist