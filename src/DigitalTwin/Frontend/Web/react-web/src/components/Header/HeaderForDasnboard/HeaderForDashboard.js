import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../Header.css';
import NavLinksForDashboard from './NavLinksForDashboard.js';
import { ThemeContextConsumer } from "../../ThemeContext.js";
export default class HeaderForDashboard extends Component {
    
    render() {
        
        return (
            <ThemeContextConsumer>{context => (
                <Navbar className={context.theme + " " + context.theme + "Header" + " navbar navbar-expand-lg navbar-dark sticky-top"} id="hForModels" collapseOnSelect expand="lg" variant="dark">
                    <Container id="menu1">
                        <Navbar.Brand href="/" className={context.theme + " navbar-brandForD"} id="ModelLogo" />
                        <NavLinksForDashboard/>
                    </Container>
                </Navbar>)}
           </ThemeContextConsumer>
        )
    }
};