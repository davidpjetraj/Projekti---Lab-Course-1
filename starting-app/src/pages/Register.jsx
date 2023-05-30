import { RiAccountCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Axios from 'axios'
import '../Register.css'
import axios from "axios";

export const Register = () => {

  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState ("");
  const [passwordReg, setPasswordReg] = useState ("");

    const navigate =  useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/register',  {
        name: usernameReg,
        email: emailReg,
        password: passwordReg
    }).then(res => 
        {
          console.log(res);
          navigate('/login')
        })
      .catch(err => console.log(err));
    }

    return (
        <div className="registerdiv">
            <>
        <form onSubmit={handleSubmit} className="registerform">
          <h2>Register Page</h2>
          <div className="icona"><RiAccountCircleFill/></div>
            <input type="text" name="name" placeholder="Username ..."onChange={(e) => {
              setUsernameReg(e.target.value);
           }} />
            <input type="email" name="email" placeholder="Email ..." onChange={(e) => {
              setEmailReg(e.target.value);
           }}/>
            <input type="password" name="password" placeholder="Password ..."  onChange={(e) =>{
              setPasswordReg(e.target.value);
           }}/>
            <button type="submit">Register
                {/* <Link to='/home' className="registerbutton"> Register </Link> */}
            </button>
            <p><Link to='/'>Login</Link></p>
        </form>
        </>
        </div>
    )
}