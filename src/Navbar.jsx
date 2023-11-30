import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  return (
    <>
      <nav className="main-menu">
        <div className="logo">
          <h1>My Logo</h1>
        </div>

        <div
          className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"}
        >
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active_class" to="/">
                About
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/">
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social_media">
          <ul>
            <li>
              <NavLink exact to="login">
                <Button variant="contained" sx={{ fontSize: "13px" }}>
                  Login
                </Button>
              </NavLink>
            </li>

            <li>
              <NavLink exact to="signup">
                <Button variant="contained" sx={{ fontSize: "13px" }}>
                  Signup
                </Button>
              </NavLink>
            </li>
          </ul>
          <div className="hamburger-icon">
            <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)}>
              {showMediaIcon ? <IoClose /> : <GiHamburgerMenu />}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
