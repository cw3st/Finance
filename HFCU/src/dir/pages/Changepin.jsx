import React from "react";
import logo from "../components/IMG_E1332-min.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navd from "./Navd";

export default function Changepin() {
  return (
    <div className="c">
      <Navd />
      <form className="cp">
        <div className="cp1">Change PIN</div>
        <input type="text" placeholder="Current PIN" required className="cp2" />
        <div>ddd</div>
        <input
          type="text"
          placeholder="Choose New PIN"
          required
          className="cp3"
        />
        <div>ddd</div>
        <input
          type="text"
          placeholder="Confirm New PIN"
          required
          className="cp3"
        />
        <div>ddd</div>
        <button type="submit" className="cp4">
          Submit
        </button>
      </form>
    </div>
  );
}
