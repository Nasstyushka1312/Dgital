import React, { useState } from 'react';
import Profile_Icon from '../Header/Profile_Icon';
import { NavLink } from 'react-router-dom';
import BackIn_Icon from './BackInModel_Icon';
import SensorsIoT from './SensorsIoT';
import Map_Icon from './Map_Icon';
import HomePanel_Icon from './HomePanel_Icon';
import './SideBar.css';

const Sidebar = ({ children }) => {
    const state = {
        collapsed: false,
    }
    const toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    const menuItem = [
        {
            path: "#nogo",
            name: "Dashboard",
            icon: <HomePanel_Icon/>
        },
        {
            path: "#nogo",
            name: "About",
            icon: <Map_Icon/>
        },
        {
            path: "#nogo",
            name: "Analytics",
            icon: <SensorsIoT/>
        },
        {
            path: "#nogo",
            name: "Comment",
            icon: <BackIn_Icon />
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
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="LogoForPanel">Logo</h1>
                    <div className="bars">
                        <Profile_Icon onClick={toggleCollapsed} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="TextPanel" activeclassName="activeForPanel">
                            <div className="IconForPanel">{item.icon}</div>
                            <div className="TextForButPanel">{item.name}</div>
                        </NavLink>
                    )) 
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;