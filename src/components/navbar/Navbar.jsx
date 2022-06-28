import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

export const Navbar = () => {
  const [active, setActive] = useState(false);


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
  const PaystackHookExample = () => {
    return (
      <div>
        <button>Donate</button>
      </div>
    );
  };
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
            <a href="" className="about-link">
              Our History
            </a>
            <a href="" className="about-link">
              Mission
            </a>
            <a href="" className="about-link">
              Our Team
            </a>
          </div>
        </div>

        <Link to="/thefoundation" className="Nlink link-pos2">
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
            <Link to="/project" className="Nlink">
              <a>Donate</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
