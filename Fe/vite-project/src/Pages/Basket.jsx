import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Maincontext } from '../context/Mainprovider5'

function Basket() {
    const {Basket,RemoveBasket,IncreaseBasket,DEcreaseBasket,Gettotal} = useContext(Maincontext)
  return (
   <>
   <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>Total :{Gettotal()}</div>
 {Basket.map((x)=><>
<div key={x._id}>
    <i style={{width:"300px",height:"300px"}} class={x.icon}></i>
    <div>{x.title}</div>
    <div>{x.des}</div>
    <div>{x.price}$</div>
    <button onClick={()=>RemoveBasket(x)}>X</button>
    <button onClick={()=>DEcreaseBasket(x)}>-</button>
    <button onClick={()=>IncreaseBasket(x)}>+</button>
</div>
</>)}
   </>
  )
}

export default Basket
