import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import Ngsoftlogo from '../assets/ngsoftlogo.jpg';


const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <header className="header__middle">
        <div className="container">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                            <img className="logo" src={Ngsoftlogo} alt="ngsoftlogo" />
                    </NavLink>
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Who We Are <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink  activeClassName='is-active'  to={`/ngsoftglance`}> NGSoft At A Glance </NavLink> </li>
                                <li><NavLink activeClassName='is-active' to={`/ngsoftstaff`}>NGSoft Staff </NavLink> </li>
                                <li><NavLink activeClassName='is-active' to={`/management`}>NGSoft Mgt.</NavLink> </li>
                                <li><NavLink activeClassName='is-active' to={`/boardmembers`}> Board of Directors </NavLink> </li>
                                <li><NavLink activeClassName='is-active' to={`/structure`}>NGSoft Structure </NavLink> </li>
                                <li><NavLink activeClassName='is-active' to={`/partners`}>Serv. Del. Partners </NavLink> </li>
                            </ul>
                        </li>
                        <li className="menu-item " ><NavLink activeClassName='is-active' to={`/what_we_do`}>What We Do</NavLink> </li>
                        <li className="menu-item " ><NavLink activeClassName='is-active' to={`/aboutpage`}>About Us</NavLink> </li>
                        <li className="menu-item " ><NavLink activeClassName='is-active' to={`/out_reach`}>OutReach</NavLink> </li>
                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu