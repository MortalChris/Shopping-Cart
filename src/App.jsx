import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  return (
    <>
      <div id="navbar">
        <ul>
          <div id="left-nav">
            <img src="" alt="" />
            <li><a>Clotho's</a></li>
          </div>
          <div id="right-nav">
            <li><a>Products</a></li>
            <li><a>Cart</a></li>
          </div>
        </ul>
        <div id="hero">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam quaerat. Dolores labore aspernatur eos, molestiae hic laboriosam, magni nostrum vel aut mollitia voluptatum ducimus nesciunt minima, voluptas ea explicabo.</p>
          <button>Products</button>
        </div>
        <footer>
          <p>Mde by Christian A. Valeri</p>
        </footer>
      </div>
    </>
  )
}

export default App
