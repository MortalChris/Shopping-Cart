// import { useState } from 'react'
import './Cart.css'
import NavBar from './NavBar.jsx'
import { CartItems } from './Products.jsx'

function Cart() {
    return (
        <>
            <NavBar />
            <CartItems />
        </>
    );
}


export default Cart;