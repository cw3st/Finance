import React from 'react'
import { CgLogOut } from "react-icons/cg";
import Nava from './Nava';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Admin() {
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
    <div className='c'>
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
      <table className='ad2'>
        <thead className='ad2a'>
        <tr>
          <th className='ad2b1'>Name</th>
          <th className='ad2b2'>Date Joined</th>
          <th className='ad2b3'>Account Balance</th>
          <th className='ad2b4'>Delete</th>
          <th className='ad2b5'>Send Email</th>
          </tr>
        </thead>
        <tbody className='ad2b'>
        <tr>
          <td className='ad2c1'>Bruce Wagner</td>
          <td className='ad2c2'>20/06/2024</td>
          <td className='ad2c3'>$5000.28</td>
          <td className='ad2c4'>
          <button className='ad2c44'>Delete</button>
          </td>
          <td className='ad2c5'>
          <button className='ad2c55'>Send Email</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
