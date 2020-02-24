import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import userProfile from "../assets/images/pankaj.jpg";

const Navigations = () => {
  return (
    <div id="top-nav">
      <div className="custom-column-3">
        <ul className="logo">
          <li>
            <img src={require("../assets/images/logo.png")} />
          </li>
        </ul>
      </div>
      <div className="custom-column-3">
        <ul style={{ display: "inline-flex" }}>
          <li className="menu-navigation">
            <NavLink to="/">Log In</NavLink>
          </li>
          <li className="menu-navigation">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="menu-navigation">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="menu-navigation">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="menu-navigation">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="menu-navigation">
            <NavLink to="/users">User</NavLink>
          </li>
        </ul>
      </div>
      <div className="custom-column-3">
        <ul className="user-profile">
          <li>
            <img src={userProfile} />
            <ul className="user-settings">
              <li>Pankaj Yadav</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Navigations);
