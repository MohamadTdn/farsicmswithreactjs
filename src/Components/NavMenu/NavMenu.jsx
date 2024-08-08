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
        <input
          type="search"
          className="Search-input"
          placeholder="Search"
        />
        <button className="Search-btn">
          <FaSearch />
        </button>
      </form>
      <div className="Nav-actions">
        <IoIosNotifications/>
        <IoExit/>
      </div>
    </div>
  );
}

export default NavMenu;
