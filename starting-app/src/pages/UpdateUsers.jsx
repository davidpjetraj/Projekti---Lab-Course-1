import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUsers = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");

    const navigate = useNavigate()
    const location = useLocation()

    const userId = location.pathname.split("/users")[2]

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/users',  {
          name: usernameReg,
          email: emailReg,
          password: passwordReg
      }).then(res => {
        console.log('User has been updated successfully!')
        navigate('/users')
          })
        .catch(err => console.log(err));
      }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1>Update the User</h1>
                <input type="text" name="name" placeholder="Username ..." onChange={(e) => {
                    setUsernameReg(e.target.value);
                    }} />
                <input type="email" name="email" placeholder="Email ..." onChange={(e) => {
                    setEmailReg(e.target.value);
                    }}/>
                <input type="password" name="password" placeholder="Password ..."  onChange={(e) =>{
                    setPasswordReg(e.target.value);
                    }}/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateUsers;