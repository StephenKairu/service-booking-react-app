import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
// import Logo from '../assets/images/BarbershopLogo.jpg'

export default function NavBar() {
return (
    <div className="navbar">
        <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contactpage">Contact Us</NavLink>
        </ul>
    </div>
);
}