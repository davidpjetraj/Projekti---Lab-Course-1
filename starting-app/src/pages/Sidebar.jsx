import { BiBox, BiClipboard, BiHome } from "react-icons/bi"
import { FiSettings } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
        <div className="sidebari">

            <button> <Link to='/app' className="buttoni"> < BiHome />Home </Link> </button>
            <button> <Link to='/products' className="buttoni"> < BiClipboard />Products </Link> </button>
            <button> <Link to='/payment' className="buttoni"> < MdPayment />Payment </Link> </button>
            <button> <Link to='/order' className="buttoni"> < BiBox />Orders </Link> </button>
            <button> <Link to='/setting' className="buttoni"> < FiSettings />Settings </Link> </button>
        </div>
    )
}