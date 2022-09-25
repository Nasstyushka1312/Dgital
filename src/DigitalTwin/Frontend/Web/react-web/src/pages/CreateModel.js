import React, { Component } from 'react';
import CardForBody from './../components/Card_For_body/CardForBody.js';
import './pages.css';
import Input from './../components/input/Input.js';
import { Container } from 'react-bootstrap';
import Header_Before_Profile from '../components/Header/Header_Before_Profile/Header_Before_Profile';
import { ThemeContextConsumer } from "../components/ThemeContext";
import ButtonOpt from "../components/Button/ButtonOpt";
import Combobox from '../components/Combobox/ComboBox.js';
import SideBar from '../components/SideBar/SideBar.js';
import { Link } from 'react-router-dom';
class CreateModel extends Component {
    render() {

        return (<>
                <ThemeContextConsumer>{context => (
                    <div style={{ height: '100%' }}>
                    <Header_Before_Profile />
                    <div className={context.theme + "Gray " + "body_style"}>
                        <CardForBody>
                            
                                <h5 style={{ fontFamily: 'Open Sans', margin: '20px 0px 50px 0px' }}>Создание модели</h5>
                            <Input Label="Наименование модели" placeholder="Введите наименование..."></Input>
                            <Combobox></Combobox>
                            <Container style={{
                                display: 'flex', padding: '25px 0px 5px 0px', justifyContent: 'center'
                            }}>
                                <Link style={{ width: '100%', display:'flex', justifyContent:'center' }} to={"/dashbordEmpty"}>
                                    < ButtonOpt textForButton="Создать модель" /></Link>
                        </Container>
                            <div id="Warning"><a style={{ color: '#F5CA5D', textDecoration: 'auto' }} href="/models">Вернуться к моделям</a></div>
                            
                        </CardForBody>
                        </div>
                    </div>)}
                </ThemeContextConsumer>
            )
        </>
        );
    }
} export default CreateModel;
