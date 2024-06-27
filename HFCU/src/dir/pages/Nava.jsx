import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "../components/IMG_E1332-min.png";
import React from 'react'

export default function Nava() {
    const [showResponsiveNav, setShowResponsiveNav] = useState(false);

    return (
      <nav className="c1">
        <div className="logo">
       <img src={logo} alt="" className='c1a1'/>
       <div className='logo2'>
        <div className='logo2a'>Heritage Financial</div>
        <div className='logo2b'>Credit Union</div>
       </div>
      </div>
        {showResponsiveNav ? (
          // Responsive Nav
          <ul className="navd-links-responsive">
            <li><Link to='/admin/:id' className="cnn1">Users</Link></li>
            <li><Link to='/update-account-balance' className="cnn2">Update Account Balance</Link></li>
            <li><Link to='/edit-details' className="cnn3">Edit Details</Link></li>
            <li><Link to='/update-markets' className="cnn4">Update Markets</Link></li>
            <li><Link to='/freeze-account' className="cnn5">Freeze Account</Link></li>
            <li><Link to='/admin-settings' className="cnn6">Settings</Link></li>
          </ul>
        ) : (
          // Normal Nav
          <ul className="nav-links">
            <li><Link to='/admin/:id' className="cn1">Users</Link></li>
            <li><Link to='/update-account-balance' className="cn2">Update Account Balance</Link></li>
            <li><Link to='/edit-details' className="cn3">Edit Details</Link></li>
            <li><Link to='/update-markets' className="cn4">Update Markets</Link></li>
            <li><Link to='/freeze-account' className="cn4">Freeze Account</Link></li>
            <Link to='/admin-settings' className="c1c11">
          <IoSettingsOutline className="c1c1" />
        </Link>
          </ul>
        )}
        <div className="burger" onClick={() => setShowResponsiveNav(!showResponsiveNav)}>
      <FaBars color='white'/>
      </div>
      </nav>
    );
  }