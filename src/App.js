import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Orders from "./Components/Orders";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
<<<<<<< HEAD
import Maps from "./Components/maps";
=======
import Signup from "./Components/Signup";
import OrderForm from "./Components/OrderForm";
import Admin from "./Components/Admin";
>>>>>>> 078baf659d097adea9674f611281b31d3cbed6d3


const App =() => {
  // const [login, setlogin]= useState("")
  return(
    <>
      <Navbar />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/order' element={<Orders/>} />
         <Route path='/login' element={<Login/>} />
<<<<<<< HEAD
         <Route path='/maps' element={<Maps/>} />
=======
         <Route path='/signup' element={<Signup/>} />
         <Route path='/orderform' element={<OrderForm />} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/contact' element={<ContactUs/>} />
>>>>>>> 078baf659d097adea9674f611281b31d3cbed6d3
         </Routes>
      <Footer/>

</>

  )}
export default App;