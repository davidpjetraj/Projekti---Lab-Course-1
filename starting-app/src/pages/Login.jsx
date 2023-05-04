import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="logindiv">
            <>
        <form className="loginform">

                <div className="icona"><RiAccountCircleFill/></div>
            <select name="market" id="">
                <option value="zgjidh">Zgjidhe Marketin</option>
                <option value="shop1">Shop 1</option>
                <option value="shop2">Shop 2</option>
                <option value="shop3">Shop 3</option>
                <option value="shop4">Shop 4</option>
            </select>
            <input type="text" placeholder="Username ..." />
            <input type="password" placeholder="Password ..." />
            <button type="submit"><Link to='/app'>Login</Link></button>
        </form>
        </>
        </div>
    )
}