import { useState } from "react";
import { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
// import { Link } from "react-router-dom";
import NavBar from '../NavBar.jsx'
import '../Products.css'

function Products() {
    const [data, setData] = useState([]);
    const { addToCart } = useProductContext();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(response => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

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
                        <button onClick={() => {addToCart(product);alert("Product added to cart");}} className="productCheck" id="productButton">Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;