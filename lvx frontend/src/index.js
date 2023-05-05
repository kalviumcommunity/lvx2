import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import Product from "./pages/Product/product";
import Sell from "./pages/Sell/Sell";
import Loggedin from "./pages/loggedin/loggedin";
import About from "./pages/about/About";
import Home from "./pages/home/home";
import Navbar from "./Components/Navbar/Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/loggedin" element={<Loggedin />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
