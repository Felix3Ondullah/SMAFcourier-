import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css"


const Navbar =({onLogout}) =>{
    // function handleLogout() {
    //     fetch("http://localhost:3000/logout", {
    //       method: "DELETE",
    //     }).then(() => onLogout());
    //   }
    return(
        <> 
        <header>
            <div className="container  container-flex">
                <nav>
                    <div className="navbar">
                    <NavLink to ='/' className="navitem"> Home </NavLink>
                    <NavLink to ='/login' className="navitem"> Login </NavLink>
                    {/* <NavLink to ='/logout' className="navitem"> Logout </NavLink> */}
                    <NavLink to ='/admin' className="navitem"> Admin </NavLink>
                    <NavLink to ='/contact' className="navitem"> ContactUs </NavLink>
                    <header>
                      <button className="logout-btn">Logout</button>
                    </header>
                    </div>
                </nav>

            </div>
        </header>
        </>

    )
}

export default Navbar;



