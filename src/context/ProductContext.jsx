import { createContext, useContext, useState } from "react";

const ProductContext = createContext([]);

function ProductContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prevCart) => [...prevCart, product]);
  };
  return (
    <ProductContext.Provider value={{ cartProducts, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContextProvider;

function useProductContext() {
  return useContext(ProductContext);
}
export { useProductContext };