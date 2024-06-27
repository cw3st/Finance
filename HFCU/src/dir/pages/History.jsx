import React from 'react'
import { GoCalendar } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navd from './Navd';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  const logout = async (e) => {
    try {
      await axios
        .get("http://localhost:4003/logout")
        .then((result) => {
          console.log(result);
          navigate(`/login`);
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
        <Navd />
      <p className='ht'>
        <div className='ht1'>Transactions</div>
        <div className='ht22'>
        <div className='ht2'>
            <Link to='/history' className='htt'>All Transactions</Link>
            <Link to='/savings-history' className='htt'>Savings</Link>
            <Link to='/loan-history' className='htt'>Loan</Link>
        </div>
        <div className='ht3'>p</div>
        </div>
        <div className='ht4'>
            <div>
            <GoCalendar />
            </div>   
            17 Jun-30 Jun 2024
            <div>
            <FaChevronDown />
            </div>        
        </div>
        <div className='ht5'>No transaction yet</div>
      </p>
    </div>
  )
}
