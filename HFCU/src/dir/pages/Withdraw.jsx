import React from "react";
import Navd from "./Navd";

export default function Withdraw() {
  return (
    <div className="c">
      <Navd />
      <form className="cp">
        <div className="cp1">Recipient Details</div>
        <input
          type="text"
          placeholder="Enter Account Number"
          required
          className="cp3"
        />
        <div>dfd</div>
        <input
          type="text"
          placeholder="Enter Account Name"
          required
          className="cp3"
        />
        <div>dfd</div>
        <input
          type="text"
          placeholder="Enter Bank Account"
          required
          className="cp3"
        />
        <div className="cp1">Transaction Details</div>
        <input
          type="text"
          placeholder="Enter Amount"
          required
          className="cp3"
        />
        <div>dfd</div>
        <input type="text" placeholder="Enter PIN" required className="cp3" />
        <div>dfd</div>
        <button type="submit" className="w1">
          Transact
        </button>
      </form>
    </div>
  );
}
