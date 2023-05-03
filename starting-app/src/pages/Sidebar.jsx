import { BiBox, BiClipboard, BiHome } from "react-icons/bi"
import { FiSettings } from "react-icons/fi";
import { MdPayment } from "react-icons/md";

export const Sidebar = () => {
    return(
        <div className="sidebari">

            <button className="active"><BiHome />Home</button>
            <button><BiClipboard />Products</button>
            <button><MdPayment />Payment</button>
            <button><BiBox />Orders</button>
            <button><FiSettings />Settings</button>
        </div>
    )
}