import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLInks from "./NavLinks";
import SideDrawer from "./SideDrawer";
const MainNavigation = (props) => {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLInks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLInks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
