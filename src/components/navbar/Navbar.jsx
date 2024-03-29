import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePaystackPayment } from "react-paystack";
import "./navbar2.css"

export const Navbar = () => {


  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: "2000",
    publicKey: "pk_test_c43feef40cfad4cced96a44b52d8ead6408baa49",
  };
  const initializePayment = usePaystackPayment(config);
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  // const PaystackHookExample = () => {
  //   return (
  //     <div>
  //       <button>Donate</button>
  //     </div>
  //   );
  // };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/manlikeemma/image/upload/v1655408480/Ibeji%20Foundation/logo_copy_rwgmt9.png"
            className="logo-size"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-btn navbar-btn1">
        <Link to="/" className="Nlink link-pos2">
          <a>Home</a>
        </Link>
        <div className="dropdown">
          <Link to="/aboutus" className="Nlink abt-pos ">
            <a>About Us</a>
          </Link>
          <div className="dropdown-content">
            <a href="#history" className="about-link about-link3">
              Our History
            </a>
            <a href="#mission" className="about-link about-link3">
              Our Mission
            </a>
            <a href="#team" className="about-link about-link3">
              Our Team
            </a>
          </div>
        </div>

{/* 
        <div className="menu-item">
          <Link to="/aboutus" className="Nlink abt-pos dropdown_head">
            <a>About Us</a>
          </Link>
          <div className="sub-menu">
          <li class="menu-item b"> <a href="#history" className="about-link about-link3">
              Our History
            </a></li>
            <li class="menu-item b"> <a href="#mission" className="about-link about-link3">
              Our Mission
            </a></li>
            <li class="menu-item b"> <a href="#team" className="about-link about-link3">
              Our Team
            </a></li>
          </div>
        </div> */}
           {/* <li class="menu-item">
      <a href="#0" className="dropdown_head">About us</a>
      <ol class="sub-menu">
        <li class="menu-item b"><a href="#0" style={{color:"red"}}>Big Widgets</a></li>
        <li class="menu-item b"><a href="#0">Bigger Widgets</a></li>
        <li class="menu-item b"><a href="#0">Huge Widgets</a></li>
      </ol>
    </li> */}

        <Link to="/thefoundation" className="Nlink link-pos2 other_link">
          <a>The Foundation</a>
        </Link>
        <Link to="/project" className="Nlink link-pos2">
          <a>Our Work</a>
        </Link>
        <button
          type="button"
          className="donate-btn Nlink"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Donate
        </button>

        <div className="dropdown">
          <Link to="#" className=" dropbtn hamburger">
            <a>
              <GiHamburgerMenu />
            </a>
          </Link>
          <div className="dropdown-content drop">
            <Link to="/" className="Nlink">
              <a>Home</a>
            </Link>
            <Link to="/aboutus" className="Nlink">
              <a>About Us</a>
            </Link>
            <Link to="/thefoundation" className="Nlink">
              <a>The Foundation</a>
            </Link>
            <Link to="/project" className="Nlink">
              <a>Project</a>
            </Link>
            <button
          type="button"
          className="donate-btn donate-btn2 "
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Donate
        </button>

          </div>
        </div>
      </div>
    </div>
  );
};
