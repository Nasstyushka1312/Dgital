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
        }
    ]
    return (
        <div className="contForPanel">
            <div style={{ width: state.collapsed ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: state.collapsed ? "block" : "none" }} className="LogoForPanel">Logo</h1>
                    <div style={{ marginLeft: state.collapsed ? "50px" : "0px" }} className="bars">
                        <Profile_Icon onClick={toggleCollapsed} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="TextPanel" activeclassName="activeForPanel">
                            <div className="IconForPanel">{item.icon}</div>
                            <div style={{ display: state.collapsed ? "block" : "none" }} className="TextForButPanel">{item.name}</div>
                        </NavLink>
                    )) 
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;