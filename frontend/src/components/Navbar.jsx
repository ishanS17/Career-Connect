import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  // Function to toggle the navbar
  const toggleNavbar = () => setShow(!show);

  // Function to close the navbar on link click (only in mobile view)
  const handleLinkClick = () => {
    if (show) setShow(false);
  };

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li>
            <a href="#HowItWorks">ABOUT</a>
            </li>
            <li>
            <a href="#footer">CONTACT US</a>
            </li>
            <li>
              <Link to="/jobs" onClick={handleLinkClick}>
                FIND JOBS
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to="/dashboard" onClick={handleLinkClick}>
                  MY PROFILE
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={handleLinkClick}>
                  LOG IN
                </Link>
              </li>
               
              
            )}
          </ul>
        </div>
        <GiHamburgerMenu
          className="hamburger"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        />
      </nav>
    </>
  );
};

export default Navbar;
