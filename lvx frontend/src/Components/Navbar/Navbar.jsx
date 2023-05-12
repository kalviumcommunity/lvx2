import React, { useEffect, useState,useRef } from "react";
import "./navbar.css";
import Logo from "../../Images/LVX.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "../../context";

function Navbar() {
  const { user, loginWithPopup } = useAuth0();
  const [userDetails, setUserDetails] = useState(null);
  const {setSearchTerm, setSearchData} = useGlobalContext();
  const navigate = useNavigate();
  const searchQuery = useRef('');

  document.addEventListener('keyup', (event)=>{
    if(event.key==='Enter' && searchQuery.current.value.trim()){
      handleSearch()
    }
  })

  const handleSearch = (e) => {
    if(e){
      e.preventDefault()
    }
    navigate('/');
    setSearchTerm(searchQuery.current.value.trim())
  }

  const handleGoHome =() =>{
    navigate('/')
    setSearchData(null)
    setSearchTerm('')
    searchQuery.current.value = ''
  }

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("user"))) {
      setUserDetails(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);
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
          <img onClick={handleGoHome} src={Logo} alt="logo" className="logo" />
        <div className="searchbar">
          <input
            type="text"
            className="input"
            placeholder="search for a product"
            ref={searchQuery}
          />
          <div className="icon" onClick={handleSearch}>
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
