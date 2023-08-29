import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Cart from './Cart.jsx'
import {CartItems, Products} from './Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);