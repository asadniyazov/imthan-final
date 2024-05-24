import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Maincontext } from '../context/Mainprovider5'

function Navbar() {
    const {Basket,Wishlist} = useContext(Maincontext)
  return (
    <>
    <div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link to={"admin"}>Admn</Link></li>
            <li><Link to={"add"}>Add</Link></li>
            <li><Link to={"basket"}>Basket{Basket.length}</Link></li>
            <li><Link to={"wishlist"}>Wishlist{Wishlist.length}</Link></li>
            </ul>
            </div></>
  )
}

export default Navbar