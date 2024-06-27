import React from "react";
import logo from "../components/IMG_E1332-min.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navd from "./Navd";

export default function Changep() {
  return (
    <div className="c">
        <Navd  />
      <form className="cp">
        <div className="cp1">Change Password</div>
        <input type="text" placeholder="Current Password" required  className="cp2"/>
        <div>pjfjf</div>
        <input type="text" placeholder="Choose New Password" required  className="cp3"/>
        <div>pjfjf</div>
        <input type="text" placeholder="Confirm New Password" required className="cp3"/>
        <div>pjfjf</div>
        <button type="submit"  className="cp4">Submit</button>
      </form>
    </div>
  );
}
