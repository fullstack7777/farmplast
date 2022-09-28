import React from 'react';
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

import './App.css';
import MainMenu from "./components/base/navbar";
import {HomePage} from "./components/home/home_page";
import {ProductPage} from "./components/products/product_page";
import Footer from "./components/base/footer";
import {ContactsPage} from "./components/contacts/contacts_page";
import {WarehousePage} from "./components/warehouse/warehouse_page";
import {OrdersPage} from "./components/order/orders";

function App() {
  return (
    <div className="App">
      <MainMenu/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/warehouses" element={<WarehousePage />} />
                <Route path="/orders" element={<OrdersPage />} />

            </Routes>
        </BrowserRouter>
        <Footer/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
