import { useState } from 'react'
import { useEffect } from 'react'
import './Products.css'
import NavBar from './NavBar.jsx'

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
        console.log("Empty Cart")
        return (
            <>
                <h2>Cart is Empty</h2>
            </>
        )
        
    } else {
        console.log("Car has items")
        return (
            <div id="cartItemList">
                {products && products.map(product => (
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
        )
    }

}

function Products() {
    const [data, setData] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(response => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    function addToCart(product) {
        setCartProducts(prevCart => [...prevCart, product]);
    }
    
    return (
        <>
            <NavBar />
            <div id="productsContainer">
                {data.map(product => (
                    <div className="productBoxes" key={product.id}>
                        <img className="productImg" src={product.image} alt={product.title} />
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)} className="productCheck" id="productButton">Add to Cart</button>
                    </div>
                ))}
                {/* <CartItems products={cartProducts} /> */}
            </div>
        </>
    );
}

export { Products, CartItems };