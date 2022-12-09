//  import React,{useEffect, useState} from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Orders from "./Components/Orders";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import OrderForm from "./Components/OrderForm";
import DetailsCard from "./Components/DetailsCard";
import Admin from "./Components/Admin";
// import Email from './Components/email';


const App =() => {
  // const[user, setUser]= useState(null)

  // useEffect(() => {
  //   // auto-login
  //   fetch("http://localhost:3000/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />
  
  return(
    <>
      <Navbar/>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route exact path='/contact' element={<ContactUs/>} />
         <Route exact path='/admin' element={<Admin/>} />
         <Route exact path='/signup' element={<Signup/>} />
         <Route exact path='/login' element={<Login />} />
         <Route exact path='/admin' element={<Admin/>} />
         <Route exact path='/orderform' element={<OrderForm />} />
         <Route exact path="/order/:id" element={<DetailsCard />} />
         <Route exact path='/admin' element={<Admin/>} />
         <Route exact path='/contact' element={<ContactUs/>} />
         <Route exact path='/order' element={<Orders/>} />
         </Routes>
      <Footer/>
</>

  )}
export default App;