import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/common/Navbar';
import { useState } from 'react';
import Products from './component/Products/Products';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './component/Products/ProductDetails';
import Cart from './component/Cart/Cart';
import Checkout from './component/Checkout';
import Order from './component/Order'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={ProductDetails} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="/order" Component={Order} />
      </Routes>
    </>
  );
}

export default App;
