import { BiBox, BiClipboard, BiHome, BiUser } from "react-icons/bi"
import { Link , useResolvedPath , useMatch } from "react-router-dom";

export const Sidebar = () => {
    return(



        <div className="sidebari">
            <ul >
                <CustomLink to='/' ><li className="buttoni">< BiHome className="icona" />Home</li></CustomLink>
                <CustomLink to='/users' ><li className="buttoni">< BiUser className="icona" />Users</li></CustomLink>
                <CustomLink to='/products' ><li className="buttoni">< BiClipboard className="icona" />Products</li></CustomLink>
                <CustomLink to='/fatura' ><li className="buttoni">< BiBox className="icona" />Fatura</li></CustomLink>                
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