import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './Product';
import Sell from './Sell';
import Login from './Login';
import About from './About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/product/:id' element={<Product />} />
    <Route path='/sell' element={<Sell/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/about' element={<About />} />
  </Routes>
  </BrowserRouter>
);
