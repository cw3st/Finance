import React from "react";
import Navd from "./Navd";

export default function Deposit() {
  return (
    <div className="c">
      <Navd />
      <p className="d">
        <div className="d1">Deposit Money</div>
        <div className="d2">
            <div className="d2a">
                <div>HFCU Account Number</div>
                <div>246 457 6543</div>
            </div>
            <div className="d2b">
                <div>Bank</div>
                <div>Heritage Financial Credit Union</div>
            </div>
            <div  className="d2c">
                <div>Name</div>
                <div>Bruce Wagner</div>
            </div>
        </div>
        <div className="d3">
            <div className="d3a">Deposit money via bank transfer in just 3 steps</div>
            <div className="d3b">
                <div className="d3b1">1.</div>
           <div>Copy the account details above-246 457 6543 is your
           HFCU Account Number.
           </div>  
            </div>
            <div className="d3b">
                <div className="d3b1">2.</div>
                <div>Open the bank app or application you want to transfer money from</div>
            </div>
            <div className="d3b">
                <div className="d3b1">3.</div>
                <div>Transfer the desired amount to your HFCU Account</div>
            </div>
        </div>
      </p>
    </div>
  );
}
