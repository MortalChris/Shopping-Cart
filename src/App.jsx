import { Link } from "react-router-dom";
import NavBar from './NavBar.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div id="hero">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          ullam quaerat. Dolores labore aspernatur eos, molestiae hic
          laboriosam, magni nostrum vel aut mollitia voluptatum ducimus nesciunt
          minima, voluptas ea explicabo.
        </p>
        <Link to="/products">
          <button>Products</button>
        </Link>
      </div>
      <footer>
        <p>Made by Christian A. Valeri</p>
      </footer>
    </>
  );
}

export default App;