import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

function Sidebar() {
  return (
    <ul className='Sidebar'>
        <li className='Sidebar-item'>
            <span>
                <FaHome/>
            </span>
            <NavLink>خانه</NavLink>
        </li>
        <li className='Sidebar-item'>
            <span>
                <FaHome/>
            </span>
            <NavLink>محصولات</NavLink>
        </li>
        <li className='Sidebar-item'>
            <span>
                <FaHome/>
            </span>
            <NavLink>کاربران</NavLink>
        </li>
        <li className='Sidebar-item'>
            <span>
                <FaHome/>
            </span>
            <NavLink>کاربر جدید</NavLink>
        </li>
        <li className='Sidebar-item'>
            <span>
                <FaHome/>
            </span>
            <NavLink>محصول جدید</NavLink>
        </li>
    </ul>
  )
}

export default Sidebar