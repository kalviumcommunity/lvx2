import React, { useEffect, useState } from "react";
import "./navbar.css";
import Logo from "../../Images/LVX.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  // const { loginWithRedirect, user, logout, loginWithPopup } = useAuth0();
  const {  user, loginWithPopup } = useAuth0();

  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    if (JSON.parse(sessionStorage.getItem("user"))) {
      console.log(JSON.parse(sessionStorage.getItem('user')))
      setUserDetails(JSON.parse(sessionStorage.getItem("user")));
    }
  },[])
  useEffect(() => {
    if (user) {
      setUserDetails(user);
      sessionStorage.setItem("user", JSON.stringify(user));
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <nav className="navbar">
        <Link to="/">
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
          <Link to="/about">
            <div className="abtus">ABOUT US</div>
          </Link>
        </div>
        <div className="login">
          <div
            className="log"
            onClick={(e) => {
              if (userDetails) {
                navigate("loggedin");
              } else {
                loginWithPopup();
                setUserDetails(user);
              }
            }}
          >
            {" "}
            {userDetails ? userDetails.given_name : "LOGIN"}{" "}
          </div>
        </div>
        <div className="sell">
          <Link to="/sell">
            <div id="sel">SELL</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
