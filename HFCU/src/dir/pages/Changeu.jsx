import React from "react";
import logo from "../components/IMG_E1332-min.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navd from "./Navd";

export default function Changeu() {
  return (
    <div className="c">
      <Navd />
      <form className="cp">
        <div className="cp1">Change Username</div>
        <div className="cu">Bwagner34</div>
        <input
          type="text"
          placeholder="Choose New Username"
          required
          className="cp3"
        />
        <div>fde</div>
        <button type="submit" className="cp4">
          Submit
        </button>
      </form>
    </div>
  );
}
