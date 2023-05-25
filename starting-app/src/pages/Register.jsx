import { RiAccountCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios'
import '../Register.css'

export const Register = () => {
  const [usernameReg, setUernameReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");
  
    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
       }).then((response) => {
          console.log(response);
       });
     };
  
    return (
        <div className="registerdiv">
            <>
        <form className="registerform">
          <h2>Register Page</h2>
          <div className="icona"><RiAccountCircleFill/></div>
            <input type="text" name="name" placeholder="Username ..." onChange={(e) => {
              setUernameReg(e.target.value);
           }} />
            <input type="email" name="email" placeholder="Email ..." onChange={(e) => {
              setEmailReg(e.target.value);
           }}/>
            <input type="password" name="password" placeholder="Password ..." onChange={(e) =>{
              setPasswordReg(e.target.value);
           }}/>
            <button onClick={register}>Register
                {/* <Link to='/home' className="registerbutton"> Register </Link> */}
            </button>
            <p><Link to='/'>Login</Link></p>
        </form>
        </>
        </div>
    )
}