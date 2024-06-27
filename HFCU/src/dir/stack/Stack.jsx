import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Customer from "../pages/Customer";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Accounts from "../pages/Accounts";
import Loans from "../pages/Loans";
import Services from "../pages/Services";
import Savings from "../pages/Savings";
import Loansd from "../pages/Loansd";
import History from "../pages/History";
import Savehis from "../pages/Savehis";
import Loanhis from "../pages/Loanhis";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Changep from "../pages/Changep";
import Changeu from "../pages/Changeu";
import Changepin from "../pages/Changepin";
import Withdraw from "../pages/Withdraw";
import Deposit from "../pages/Deposit";
import Uab from "../pages/Uab";
import Ed from "../pages/Ed";
import Um from "../pages/Um";
import Fa from "../pages/Fa";
import Adsettings from "../pages/Adsettings";
import Adchangeu from "../pages/Adchangeu";
import Adchangep from "../pages/Adchangep";
import Adminlogin from "../pages/Adminlogin";

export default function Stack() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/open-an-account" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/My-account/:id" element={<Customer />} />
        <Route path="/savings-account" element={<Savings />} />
        <Route path="/loan-account" element={<Loansd />} />
        <Route path="/admin/:id" element={<Admin />} />
        <Route path="/adlogin" element={<Adminlogin />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings-change-password" element={<Changep />} />
        <Route path="/admin-settings-change-password" element={<Adchangep />} />
        <Route path="/settings-change-username" element={<Changeu />} />
        <Route path="/admin-settings-change-username" element={<Adchangeu />} />
        <Route path="/settings-change-pin" element={<Changepin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/freeze-account" element={<Fa />} />
        <Route path="/update-markets" element={<Um />} />
        <Route path="/edit-details" element={<Ed />} />
        <Route path="/admin-settings" element={<Adsettings />} />
        <Route path="/update-account-balance" element={<Uab />} />
        <Route path="/savings-history" element={<Savehis />} />
        <Route path="/loan-history" element={<Loanhis />} />
      </Routes>
    </div>
  );
}
