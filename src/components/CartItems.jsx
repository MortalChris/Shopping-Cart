import { useState } from "react";

function CartItems({ products }) {
  const [quantity, setQuantity] = useState(0);

  function add() {
    setQuantity(quantity + 1);
  }

  function subtract() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  if (products && products.length === 0) {
    console.log("Empty Cart");
    return (
      <>
        <h2>Cart is Empty</h2>
      </>
    );
  } else {
    console.log("Cart has items");
    return (
      <div id="cartItemList">
        {products &&
          products.map((product) => (
            <div className="cartItem" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <div>
                <button onClick={subtract}>-</button>
                <p>{quantity}</p>
                <button onClick={add}>+</button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default CartItems;