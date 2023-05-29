import { RiAccountCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Axios from 'axios'
import '../Register.css'
import axios from "axios";

export const Register = () => {
  // const [usernameReg, setUernameReg] = useState("");
  //   const [emailReg, setEmailReg] = useState ("");
  //   const [passwordReg, setPasswordReg] = useState ("");
  
  //   const register = () => {
  //     Axios.post("http://localhost:3001/register", {
  //       username: usernameReg,
  //       email: emailReg,
  //       password: passwordReg,
  //      }).then((response) => {
  //         console.log(response);
  //      });
  //    };
// function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

    const navigate =  useNavigate();

    const handleInput = (event) => {
      setValues(prev =>  ({...prev, [event.target.name]: [event.target.value]}))
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/register',  values)
      .then(res => 
        {
          console.log(res);
          navigate('/')
        })
      .catch(err => console.log(err));
    }

    return (
        <div className="registerdiv">
            <>
        <form onSubmit={handleSubmit} className="registerform">
          <h2>Register Page</h2>
          <div className="icona"><RiAccountCircleFill/></div>
            <input type="text" name="name" placeholder="Username ..." onChange={handleInput} />
            <input type="email" name="email" placeholder="Email ..." onChange={handleInput}/>
            <input type="password" name="password" placeholder="Password ..." onChange={handleInput}/>
            <button type="submit">Register
                {/* <Link to='/home' className="registerbutton"> Register </Link> */}
            </button>
            <p><Link to='/login'>Login</Link></p>
        </form>
        </>
        </div>
    )
}