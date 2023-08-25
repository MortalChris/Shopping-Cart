import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  return (
    <>
        <ul id="navBar">
          <div id="leftNav">
            <img src="" alt="" />
            <li><a href="App">Clotho's</a></li>
          </div>
          <div id="rightNav">
            <li id="productPage"><a href="products">Products</a></li>
            <li id="cartPage"><a href="cart">Cart</a></li>
          </div>
        </ul>
        <div id="hero">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam quaerat. Dolores labore aspernatur eos, molestiae hic laboriosam, magni nostrum vel aut mollitia voluptatum ducimus nesciunt minima, voluptas ea explicabo.</p>
          <a href="products"><button>Products</button></a>
        </div>
        <footer>
          <p>Made by Christian A. Valeri</p>
        </footer>
    </>
  )
}

export default App;
