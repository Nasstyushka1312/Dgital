import React, { useState } from 'react';
import Profile_Icon from '../Header/Profile_Icon';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "#nogo",
            name: "Dashboard",
            icon: <Profile_Icon />
        },
        {
            path: "#nogo",
            name: "About",
            icon: <Profile_Icon />
        },
        {
            path: "#nogo",
            name: "Analytics",
            icon: <Profile_Icon />
        },
        {
            path: "#nogo",
            name: "Comment",
            icon: <Profile_Icon />
        },
        {
            path: "#nogo",
            name: "Product",
            icon: <Profile_Icon />
        },
        {
            path: "#nogo",
            name: "Product List",
            icon: <Profile_Icon />
        }
    ]
    return (
        <div className="contForPanel">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="LogoForPanel">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <Profile_Icon onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="TextPanel" activeclassName="activeForPanel">
                            <div className="IconForPanel">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="TextForButPanel">{item.name}</div>
                        </NavLink>
                    )) 
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;