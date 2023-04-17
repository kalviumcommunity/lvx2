import React from "react";
import "./navbar.css";
import Logo from "./LVX.svg";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to='/'>
        <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="searchbar">
          <input
            type="text"
            className="input"
            placeholder="search for any product"
          />
          <div className="icon">
            <FiSearch size={30} />
          </div>
        </div>
        <div className="about">
          <Link to='/about'>
            <div className="abtus">ABOUT US</div>
          </Link>
        </div>
        <div className="login">
          <Link to='/login'>
            <div id="log">LOGIN</div>
          </Link>
        </div>
        <div className="sell" >
        <Link to='/sell'>
          <div id="sel">SELL</div>
        </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
