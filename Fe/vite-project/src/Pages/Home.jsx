import React, { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Maincontext } from '../context/Mainprovider5';
function Home() {
    const {AddBasket,isExsisted,AddWishlist} = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
      GetProduct()
    }, [])
     async function GetProduct() {
         const res= await fetch ("http://localhost:3000/mongoose/")
         const data= await res.json()
         setCategory(data)
    }
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
    <buton><Link to={'/detail/'+x._id}>Go Detail</Link></buton>
    <button onClick={()=>AddBasket(x)}>Add Basket</button>
  
</div>
</>)}
</>
  )
}

export default Home