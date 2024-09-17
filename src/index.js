import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server";
import {ProductPageProvider} from "./components/Product/productPageContext";
import { CartContext, CartProvider } from './components/cartPage/cartContext';
import { BrowserRouter } from "react-router-dom";
import { WishListProvider } from './context/wishlistContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <CartProvider> 
        <WishListProvider>
          <ProductPageProvider>
            <App />
          </ProductPageProvider>
         </WishListProvider>
         </CartProvider> 
       </BrowserRouter>
     </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
