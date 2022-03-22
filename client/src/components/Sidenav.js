import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidenavItems } from './SidenavItems';
import "./Sidenav.css"


export default function Sidenav({user, logo}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <Link to='#' className="menuBars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
            <Link to="/home">{logo}</Link>
            <h1 className='name'>Hi {user}!</h1>
        </div>
        <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
            <ul className="navMenuItems" onClick={showSidebar}>
                <li className="navbarToggle">
                    <Link to='#' className="menuBars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidenavItems.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
