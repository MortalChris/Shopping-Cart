import { useState } from 'react'
import { useEffect } from 'react';
import './Products.css'
import NavBar from './NavBar.jsx'

function Products() {
    const [data, setData] = useState([]);
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
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products;