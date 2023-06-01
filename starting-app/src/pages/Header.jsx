// import { FiSearch } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Header = () => {
  const [name, setName] =useState('')
  const  navigate = useNavigate()
  
  useEffect(()=> {
    axios.get('http://localhost:3001')
    .then( res =>  {
      if (res.data.valid) {
        setName(res.data.name);
      }else {
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  })

  const handleLogout = () => {
    axios.get('/logout')
      .then(response => {
        window.location.href = '/login';
        navigate('/login')
      })
      .catch(error => {
        console.log(error);
      });
  };

    return(
        <header className="Header">
          <div className="firstdiv">
            <div className="name">
                <h1>UBT - Market</h1>
            </div>
          </div>
          <div>
            <div className="useri">
                <h3>{name}</h3>
                <RiAccountCircleFill className="i"/>
                <form onSubmit={handleLogout}>
                  <button type="submit"><Link to="/login"><BiLogOut className="i"/></Link></button>
                </form>
            </div>
           </div>
        </header>
    )
}