import React from "react";
import { CgLogOut } from "react-icons/cg";
import Nava from "./Nava";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Ed() {
  const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:4003/logout-admin")
        .then((result) => {
          console.log(result);
          navigate(`/adlogin`);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400) {
            console.log("error400");
          } else {
            console.log("error404");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="c">
      <Nava />
      <p className="c2">
        <div className="c21">
          <div className="c2a">Welcome Admin</div>
          <div className="c2b" onClick={logout}>
            <CgLogOut className="c2bb" />
            Logout
          </div>
        </div>
      </p>
      <table className="ad2">
        <thead className="ad2a">
          <tr>
            <th className="ad2b1">Name</th>
            <th className="ad2b2">Username</th>
            <th className="ad2b3">Password</th>
            <th className="ad2b4">Email</th>
            <th className="ad2b5">Payment PIN</th>
          </tr>
        </thead>
        <tbody className="ad2b">
          <tr>
            <td className="ad2c1">
              Bruce Wagner
              <button className="ad2c55">Update</button>
            </td>
            <td className="ad2c2">
              {" "}
              Bwagner
              <button className="ad2c55">Update</button>
            </td>
            <td className="ad2c3">
              {" "}
              0000000000
              <button className="ad2c55">Update</button>
            </td>
            <td className="ad2c4">
              brucewagner@gmail.com
              <button className="ad2c55">Update</button>
            </td>
            <td className="ad2c5">
              2323
              <button className="ad2c55">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
