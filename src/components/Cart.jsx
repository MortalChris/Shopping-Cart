import { useProductContext } from "../context/ProductContext";
import CartItems from "./CartItems";
import NavBar from '../NavBar.jsx'
import '../Cart.css'

function Cart() {
  const { cartProducts } = useProductContext();

  return (
    <>
      <NavBar />
      <CartItems products={cartProducts} />
    </>
  )
  
}

export default Cart;