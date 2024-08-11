import React from "react";
import "./NavMenu.css";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoExit } from "react-icons/io5";

function NavMenu() {
  return (
    <div className="NavMenu">
      <img src="/assets/logo.png" className="logo" alt="" />
      <form action="#" id="Search-form">
        <input type="search" className="Search-input" placeholder="جست و جو" />
        <button className="Search-btn">
          <FaSearch />
        </button>
      </form>
      <div className="Nav-actions">
        <img src="/assets/profileimg.jfif" className="Profile-img" alt="" />
        <IoIosNotifications />
        <IoExit />
      </div>
    </div>
  );
}

export default NavMenu;
