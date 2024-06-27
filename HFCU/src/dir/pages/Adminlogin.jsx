import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";

export default function Adminlogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:4003/login-admin", {
          username,
          password,
        })
        .then((result) => {
          console.log(result)
          const userData = result?.data.user
          console.log(userData)
          navigate(`/admin/${userData._id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='loginin'>
       <form action="" className="login" onSubmit={handleLogin}>
        <div className='log'>Welcome!</div>
        <div className="login1">Please login to your account</div>
        <input
          type="text"
          placeholder="Username"
          className="in1"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div>pjfjf</div>
        <input
          placeholder="Password"
          className="in2"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>pff</div>
        <button type="submit" className="fgo">
          Login
        </button>
      </form>
    </div>
  )
}
