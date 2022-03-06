import React,{ useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import "./Sidenav.css"
import { IconContext } from 'react-icons';

import { SidenavItems } from './SidenavItems';

export default function Sidenav({user, logo}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            <a className="menuBars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </a>
            <a>{logo}</a>
            <h1 className='name'>Hi {user}!</h1>
        </div>
        <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
            <ul className="navMenuItems" onClick={showSidebar}>
                <li className="navbarToggle">
                    <a className="menuBars">
                        <AiIcons.AiOutlineClose/>
                    </a>
                </li>
                {SidenavItems.map((item, index) => {
                    return (
                    <li key={index} className={item.cName}>
                        <a href={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
