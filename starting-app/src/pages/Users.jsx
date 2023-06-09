import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const User = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchAllUsers = async ()=>{
            try{
                const res = await axios.get("http://localhost:3001/users")
                setUsers(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllUsers()
    }, [])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:3001/users/"+id)
            window.location.reload()
            
        } catch(err){
            console.log(err)
        }
    }

    return(
        <div className="tabelaa">
            <h1>Users</h1>
            <div   className="usertabela">
                <button className="useraddbt" ><Link to="/add-users">Add new user</Link></button>
                    <form onSubmit={handleDelete}>
                {users.map(user=>(
                    <div className="user" key={user.id}>
                        <tr>
                            <td>Username: </td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td>{user.password}</td>
                        </tr>
                        <tr>
                            <td><button type="submit">Delete</button></td>
                            <td><button><Link to={'/updateUsers/${user.id}'}>Update</Link></button></td>
                        </tr>
                    </div>
                ))}
                </form>
            </div>
        </div>
    )
}

export default User;