import React from 'react'
import { useSelector } from 'react-redux'
import '../Navbar/Navbar.css'

function Navbar() {

    let {totalCartItems,totalCartAmt} = useSelector((store)=>{return store.cart})

  return (
    <nav>
      <h1>Cart: {totalCartItems}</h1>
      <h1>Total Amount: {totalCartAmt}</h1>
    
    </nav>
  )
}

export default Navbar
