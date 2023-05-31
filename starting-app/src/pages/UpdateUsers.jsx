import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUsers = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",       
    });

    const navigate = useNavigate()
    const location = useLocation()

    const userId = location.pathname.split("/users")[2]

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/users/"+ userId, user)
            navigate("/users")
        }catch(err){
            console.log(err)
        }

    }

    console.log(user)
    return(
        <div className="form">
            <h1>Update the User</h1>
            <input type="text" placeholder="Username..." onChange={handleChange} name="name"/>
            <input type="email" placeholder="Email..." onChange={handleChange} name="email"/>
            <input type="password" placeholder="Password..." onChange={handleChange} name="password"/>
            <button onClick={handleClick}>Update</button>
        
        </div>
    )
}

export default UpdateUsers;