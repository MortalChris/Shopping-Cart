import { Link } from "react-router-dom";
function NavBar() {
    return (
      <>
          <ul id="navBar">
            <div id="leftNav">
              <img src="" alt="" />
              <li><a id="shopName" href="App">Clotho's</a></li>
            </div>
            <div id="rightNav">
              <li id="productPage"><a href="products">Products</a></li>
              <li id="cartPage"><Link to="/cart">Cart</Link></li>
            </div>
          </ul>
      </>
    )
}
  
export default NavBar;