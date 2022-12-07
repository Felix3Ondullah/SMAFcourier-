import React,{useEffect, useState} from "react";
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
import UpdateOrder from "./Components/UpdateOrder";


const App =() => {
  // const[orders, setOrders]= useState("")

  //   useEffect((
  //       fetch("http://127.0.0.1:4000/orders")
  //       .then(r=>r.json())
  //       .then(orders=> setOrders(orders))
  //   ),[])
  return(
    <>
      <Navbar/>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
          <Route path='/admin' element={<Admin/>} />
         <Route path='/orderform' element={<OrderForm />} />
<<<<<<< HEAD
         <Route path='/order' element={<Orders/>} />
         <Route path='/updateorder' element={<UpdateOrder/>} />
       
        
=======
         <Route path="/order/:id" element={<DetailsCard />} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/contact' element={<ContactUs/>} />
>>>>>>> 3a90103b0be766134619ef768dced9e768a16a5e
         </Routes>
      <Footer/>
</>

  )}
export default App;