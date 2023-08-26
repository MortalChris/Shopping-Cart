import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar.jsx'
import './App.css'

function App() {  
  return (
    <>
        <NavBar />
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
