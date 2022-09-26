import React, { Component } from 'react';
import CardForBody from './../components/Card_For_body/CardForBody.js';
import './pages.css';
import Input from './../components/input/Input.js';
import { Container } from 'react-bootstrap';
import HeaderForDashboard from '../components/Header/HeaderForDasnboard/HeaderForDashboard';
import { ThemeContextConsumer } from "../components/ThemeContext";
import ButtonOpt from "../components/Button/ButtonOpt";
import Combobox from '../components/Combobox/ComboBox.js';
import SideBar from '../components/SideBar/SideBar.js';
import ContentDashboard from './../components/ContentDashboard/ContentDashboard';
class DashbordEmpty extends Component {
    render() {

        return (<>
            <ThemeContextConsumer>{context => (
                <div style={{ height: '100%' }}>
                    <HeaderForDashboard />
                    <div className={context.theme + "Gray " + "body_style"}>
                        <SideBar/>
                        <ContentDashboard/>
                    </div>
                </div>)}
            </ThemeContextConsumer>
           
        </>
        );
    }
} export default DashbordEmpty;