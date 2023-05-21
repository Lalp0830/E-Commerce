import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Products from './component/Products';
import {Routes,Route} from "react-router-dom";
import ProductDetails from './component/ProductDetails';

function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b243a';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#84c7a8';
      
    }
  }
  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Routes>
       <Route exact path="/" Component={Home}/>
       <Route exact path="/products" Component={Products}/>
       <Route exact path="/products/:id" Component={ProductDetails}/>
    </Routes>
    
    </>
  );
}

export default App;
