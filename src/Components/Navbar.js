import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Navbar.css"


const Navbar =() =>{
    return(
        <> 
        <header>
            <div className="container  container-flex">
                <nav>
                    <div className="navbar">
                    <NavLink to ='/' className="navitem"> Home </NavLink>
                    <NavLink to ='/contact' className="navitem"> ContactUs </NavLink>
                    <NavLink to ='/order' className="navitem"> Order </NavLink>
                    <NavLink to ='/login' className="navitem"> Login </NavLink>
                    <NavLink to ='/maps' className="navitem"> Map</NavLink>
                    </div>
                </nav>

            </div>
        </header>
        </>

    )
}

export default Navbar;



