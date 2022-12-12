
import React,{useState} from "react";
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
// import UpdateOrder from './Components/UpdateOrder';
import AdminDash from './Components/AdminDash';
import Maps from './Components/maps';
import Email from './Components/email';



// const App =() => {
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
  


const App =() => {
  const [user, setUser] = useState(null)

 

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
         <Route exact path='/maps' element={<Maps/>} />
         <Route exact path='/email' element={<Email/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/login' element={<Login onLogin={setUser}/>} />
         <Route path='/signup' element={<Signup onLogin={setUser}/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/orderform' element={<OrderForm />} />
         <Route path="/order/:id" element={<DetailsCard />} />
         {/* <Route path="/updateorder/:id" element={<UpdateOrder />} /> */}
         <Route path='/admin' element={<Admin/>} />
         <Route path='/admindashboard' element={<AdminDash/>} />
         <Route path='/contact' element={<ContactUs/>} />
         <Route path='/order' element={<Orders onLogin={setUser}/>} />
         </Routes>
      <Footer/>
</>

  )}
export default App