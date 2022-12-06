import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Orders from "./Components/Orders";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Maps from "./Components/maps";


const App =() => {
  return(
    <>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/order' element={<Orders/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/maps' element={<Maps/>} />
         </Routes>
      <Footer/>

</>

  )}
export default App;