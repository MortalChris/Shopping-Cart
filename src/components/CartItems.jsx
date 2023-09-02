import { useState } from "react";

function CartItems({ products }) {
    const [totalPrice, setTotalPrice] = useState(0);

    function QuantityButton() {
        const [quantity, setQuantity] = useState(0);

        function add() {
            setQuantity(quantity + 1);
        }
        function subtract() {
            if (quantity > 0) {
                setQuantity(quantity - 1);
            }
        }
        return (
            <>
                <button onClick={subtract}>-</button>
                <p>{quantity}</p>
                <button onClick={add}>+</button>
            </>
        )
    }



    if (products && products.length === 0) {
        console.log("Empty Cart");
        return (
            <>
                <h2 id="cartEmtpy">Cart is currently Empty!</h2>
            </>
        )
    } else {
        console.log("Cart has items");
        return (
            <div id="cartsContainer">
                <h1 id="totalPrice">Total Price: {totalPrice}</h1>
                {products && products.map((product) => (
                <div className="cartBoxes" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <div className="cartProductInfoContainer">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <h2>${product.price}</h2>
                        <QuantityButton />
                    </div>
                </div>
                ))}
                <button id="checkOutButton">CheckOut</button>
        </div>
        )
    }
}

export default CartItems;