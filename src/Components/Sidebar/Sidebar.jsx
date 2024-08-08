import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <ul className="Sidebar">
      <li className="Sidebar-item">
        <span>
          <FaHome />
        </span>
        <NavLink to='/' className={(link) => (link.isActive ? "active" : "")}>
          خانه
        </NavLink>
      </li>
      <li className="Sidebar-item">
        <span>
          <FaProductHunt />
        </span>
        <NavLink to='/products' className={(link) => (link.isActive ? "active" : "")}>
          محصولات
        </NavLink>
      </li>
      <li className="Sidebar-item">
        <span>
          <FaUsers />
        </span>
        <NavLink to='/users' className={(link) => (link.isActive ? "active" : "")}>
          کاربران
        </NavLink>
      </li>
      <li className="Sidebar-item">
        <span>
          <FaUserPlus />
        </span>
        <NavLink to='/newuser' className={(link) => (link.isActive ? "active" : "")}>
          کاربر جدید
        </NavLink>
      </li>
      <li className="Sidebar-item">
        <span>
          <FaPlusCircle />
        </span>
        <NavLink to='/newproduct' className={(link) => (link.isActive ? "active" : "")}>
          محصول جدید
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
