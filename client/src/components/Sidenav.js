import React,{ useState } from 'react'
import "./Sidenav.css"

export default function Sidenav({user, logo}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <div className="navbar">
            <a className="menuBars">
                <button onClick={showSidebar}>hamburger bar goes here - to the left</button>
            </a>
            <a>{logo}</a>
            <h1>Hi {user}!</h1>
        </div>
        <nav className={sidebar ? `${'navMenu'} ${'active'}`: 'navMenu'}>
            <ul className="navMenuItems" onClick={showSidebar}>
                <li className="navbarToggle">
                    <a className="menuBars">
                        <button>close navbar icon here</button>
                    </a>
                </li>
                <li className="navText">
                    <a>
                        {/* icon element goes here */}
                        <span>item 1</span>
                    </a>
                </li>
                <li className="navText">
                    <a>
                        {/* icon element goes here */}
                        <span>item 2</span>
                    </a>
                </li>
                <li className="navText">
                    <a>
                        {/* icon element goes here */}
                        <span>item 3</span>
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}
