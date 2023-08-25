import React from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../Asset 3.png";
import DropDown from "./DropDown";
import NavRight from "./NavRight";

const Header = () => {
  return (
    <header>
      <div className="media">
        <div className="nav_wrapper">
          <NavLink to="/" className="logo">
            {/* <img
              src={Logo}
              alt="The Movie Database (TMDB)"
              className="logo_img"
            /> */}
          </NavLink>
          <DropDown />
          <NavRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
