import { FiSearch } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

export const Header = () => {
    return(
        <header className="Header">
            <div className="name">
                <h1>UBT - Market</h1>
            </div>
            <div className="search">
                <input className="searchbar" type="search" placeholder="Search product or any order..." />
                <button className="icona"><FiSearch/></button>
            </div>
            <div className="useri">
                <h3>Shitesi 1</h3>
                <button><RiAccountCircleFill className="i"/></button>
                <button><BiLogIn className="i"/></button>
            </div>
        </header>
    )
}