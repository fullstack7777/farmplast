import React from 'react';
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

import './App.css';
import {HomePage} from "./components/home/home_page";
import ProductPage from "./components/products/product_page";
import Footer from "./components/base/footer";
import ContactsPage from "./components/contacts/contacts_page";
import {WarehousePage} from "./components/warehouse/warehouse_page";
import OrdersPage from "./components/order/orders";
import CartsPage from "./components/cart/carts";
import NewNavBar from "./components/base/new_nav_bar";

function App() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("session", "0040d80a9cc8dd3b9a19630117");
    urlencoded.append("quantity", "1");
    urlencoded.append("product_id", "83");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return (
    <div className="App">
      <NewNavBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/warehouses" element={<WarehousePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/carts" element={<CartsPage />} />

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
