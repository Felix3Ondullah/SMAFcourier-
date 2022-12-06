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
                    <NavLink to ='/login' className="navitem"> Login </NavLink>
<<<<<<< HEAD
                    <NavLink to ='/maps' className="navitem"> Map</NavLink>
=======
                    <NavLink to ='/admin' className="navitem"> Admin </NavLink>
                    <NavLink to ='/contact' className="navitem"> ContactUs </NavLink>
>>>>>>> 078baf659d097adea9674f611281b31d3cbed6d3
                    </div>
                </nav>

            </div>
        </header>
        </>

    )
}

export default Navbar;



