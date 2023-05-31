import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",       
    });

const navigate = useNavigate()

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3001/users", user)
            navigate("/users")
        }catch(err){
            console.log(err)
        }

    }

    console.log(user)
    return(
        <div className="form">
            <h1>Add New User</h1>
            <input type="text" placeholder="Username..." onChange={handleChange} name="name"/>
            <input type="email" placeholder="Email..." onChange={handleChange} name="email"/>
            <input type="password" placeholder="Password..." onChange={handleChange} name="password"/>
            <button onClick={handleClick}>Add</button>
        
        </div>
    )
}

export default AddUser;