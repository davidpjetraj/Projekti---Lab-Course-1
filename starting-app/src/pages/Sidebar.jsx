import { BiBox, BiClipboard, BiHome } from "react-icons/bi"
import { FiSettings } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { Link , useResolvedPath , useMatch, resolvePath } from "react-router-dom";

export const Sidebar = () => {
    return(



        <div className="sidebari">
            <ul >
                <CustomLink to='/app' ><li className="buttoni">< BiHome className="icona" />Home</li></CustomLink>
                <CustomLink to='/products' ><li className="buttoni">< BiClipboard className="icona" />Products</li></CustomLink>
                <CustomLink to='/payment' ><li className="buttoni">< MdPayment className="icona" />Payment</li></CustomLink>
                <CustomLink to='/order' ><li className="buttoni">< BiBox className="icona" />Orders</li></CustomLink>
                <CustomLink to='/setting' ><li className="buttoni">< FiSettings className="icona" />Settings</li></CustomLink>
                
            </ul>
        </div>
    )
}
function CustomLink({ to , children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname , end:true})

    return(
        <li className={isActive ? "active": "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}