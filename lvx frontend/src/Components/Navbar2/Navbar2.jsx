import React from 'react'
import Logo from "../Navbar/LVX.svg";
import './Navbar2.css'
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <nav className="navbar2">
        <Link to='/'>
        <img src={Logo} alt="logo" className="logo2" />
        </Link>
      </nav>
  )
}

export default Navbar2;