import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
function Detail() {
    let { id } = useParams();
    const [Category, setCategory] = useState([])
    useEffect(() => {
      GetProduct()
    }, [])
     async function GetProduct() {
         const res= await fetch ("http://localhost:3000/mongoose/"+id)
         const data= await res.json()
         setCategory(data)
    }
  return (
   <>
   <div> <i style={{width:"300px",height:"300px"}} class={Category.icon}></i></div>
<div>{Category.title}</div>
<div>{Category.des}</div>
    <div>{Category.price}$</div>
   </>
  )
}

export default Detail