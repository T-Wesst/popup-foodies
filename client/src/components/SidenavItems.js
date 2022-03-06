import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidenavItems = [
    {
        title:'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'navText'
    },
    {
        title:'My Profile',
        path: '/profile',
        icon: <FaIcons.FaUserCircle/>,
        cName: 'navText'
    },
    {
        title:'My Cart',
        path: '/cart',
        icon: <AiIcons.AiOutlineShoppingCart/>,
        cName: 'navText'
    },
    {
        title:'Log Out',
        path: '/logout',
        icon: <IoIcons.IoLogOutOutline/>,
        cName: 'navText'
    },
    {
        title:'View Map',
        path: '/map',
        icon: <FaIcons.FaMapMarkerAlt/>,
        cName: 'navText'
    },
];