import React from "react";
import logo from "../components/IMG_E1332-min.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navd from "./Navd";

export default function Profile() {
  return (
    <div className="c">
     <Navd />
      <p>
        <div className="p1">
        <RiAccountCircleFill className="p1a" />
        <div className="p1a1">
            <span className="p1a1a">Full Name:</span>
            <span className="p1a1b">Bruce Wagner</span>
        </div>
        <div className="p1a2">
            <span className="p1a2a">Mobile Number:</span>
            <span className="p1a2b">+(718) 599-5039</span>
        </div>
        <div className="p1a2">
            <span>Gender:</span>
            <span className="p1a2c">Male</span>
        </div>
        <div className="p1a2">
            <span>Date Of Birth:</span>
            <span className="p1a2d">15/07/1985</span>
        </div>
        <div className="p1a2">
            <span className="p1a2ee">Email:</span>
            <span className="p1a2e">brucewagner@gmail.com</span>
        </div>
        <div className="p1a2">
            <span className="p1a2ff">Address:</span>
            <span className="p1a2f">Springer Avenue</span>
        </div>
        </div>
        <div className="p2">
        <div className="p2a">
            <span className="p2b1">HFCU Account:</span>
            <span className="p2b2">37848459638</span>
        </div>
        <div className="p2b">
            <span className="p2b1">SSIN:</span>
            <span className="p2b3">16788266388</span>
        </div>
        </div>
      </p>
    </div>
  );
}
