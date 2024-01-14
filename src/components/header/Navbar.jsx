// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header/Navbar.css'; // Import the CSS file for styling
//import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  //const { loginWithRedirect, logout, isAuthenticated, user, } = useAuth0();
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu" className="navbar-link">Menu</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">Cart</Link>
        </li>
        <li className="navbar-item">
          <Link to="/orders" className="navbar-link">Orders</Link>
        </li>
        <li className="navbar-item">
          <Link to="/account" className="navbar-link">Profile</Link>
        </li>

        <div className='user-auth'>
          <div className='img-auth'>
          <button className="btn-auth"to="/"> Log In</button></div> 
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
