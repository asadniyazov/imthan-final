import React, { useEffect, useState } from 'react'
import "./Admin.scss"
function Admin() {
    const [Category, setCategory] = useState([])
    const [Search, setSearch] = useState("")
    useEffect(() => {
      GetProduct()
    }, [])
     async function GetProduct() {
         const res= await fetch ("http://localhost:3000/mongoose/")
         const data= await res.json()
         setCategory(data)
    }

    async function DeleteProduct(id) {
        const res= await fetch ("http://localhost:3000/mongoose/"+id,{method:"delete"})
         GetProduct()
   }
   
   function SortedByName() {
    setCategory([...Category.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))])
   }

   function SortedByNamedes() {
    setCategory([...Category.sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0))])
   }

   function SortedByprice() {
    setCategory([...Category.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
   }
  return (

<>
 <div>
 <input type="text" value={Search} onChange={(e)=>setSearch(e.target.value)} />
 <button onClick={()=>SortedByName()}> A-z</button>
 <button onClick={()=>SortedByNamedes()}>Z-a</button>
 <button onClick={()=>SortedByprice()}>Price</button>
<table>
    <thead>
  <tr>
    <th>id</th>
    <th>Name</th>
    <th>Descriptiuon</th>
    <th>icon</th>
    <th>price</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
      {Category.filter((x)=>x.title.toLowerCase().includes(Search.toLowerCase()))
      .map((x)=><>
      <tr>

        <td>{x._id}</td>
    <td>{x.title}</td>
    <td>{x.des}</td>
    <td><i  class={x.icon}></i></td>
    <td>{x.price}</td>
    <td><button onClick={()=>DeleteProduct(x._id)}>Delete</button></td>
      </tr>
      </>)

      }
  </tbody>
  </table>
 </div>

</>
  )
}

export default Admin