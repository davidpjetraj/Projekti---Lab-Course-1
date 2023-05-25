import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");

    const [loginStatus, setLoginStatus] = useState("");
    const [statusHolder] = useState('message');

    const navigate = useNavigate();

    const login = () => {
    Axios.post("http://localhost:3001/login", {
       username: username,
       password: password,
    }).then((response) => {
       if (!response.data.message) {
          setLoginStatus( response.data.message);
       } else {
          setLoginStatus (response.data[0].username);
          navigate.push('/home');

       }
    });
    };


    return (
        <div className="logindiv">
        <>
            <form className="loginform">
                <h2>Login Page</h2>
                <span className={statusHolder}>{loginStatus}</span>
                <div className="icona"><RiAccountCircleFill/></div>
                    {/* <select name="market" id="">
                        <option value="zgjidh">Zgjidhe Marketin</option>
                        <option value="shop1">Shop 1</option>
                        <option value="shop2">Shop 2</option>
                        <option value="shop3">Shop 3</option>
                        <option value="shop4">Shop 4</option>
                    </select> */}
                    <input type="text" name="name" placeholder="Username ..." value={username} onChange = { (e) => {
                    setUsername (e.target.value);}}/>
                    <input type="password" name="password" placeholder="Password ..." value={password} onChange = { (e) => {
                    setPassword (e.target.value);}}/>
                    <button onClick={login} type="submit">Login
                        {/* <Link to='/home' className="loginbutton">Login</Link> */}
                    </button>
                    <p><Link to='/register'>Create a new Account</Link></p>
            </form>
        </>
        </div>
    )
}