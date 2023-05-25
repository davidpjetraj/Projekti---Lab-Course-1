import { FiSearch } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  const [loginStatus, setLoginStatus] = useState("");

    return(
        <header className="Header">
          <div className="firstdiv">
            <div className="name">
                <h1>UBT - Market</h1>
            </div>
          </div>
          <div>
            <div className="useri">
                <h3>{loginStatus}</h3>
                <button><RiAccountCircleFill className="i"/></button>
                <button><Link to="/"><BiLogIn className="i"/></Link></button>
            </div>
           </div>
        </header>
    )
}