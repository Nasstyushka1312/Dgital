import React, { Component } from 'react';
import Header_Before_Profile from '../components/Header/Header_Before_Profile/Header_Before_Profile';
import { ThemeContextConsumer } from '../components/ThemeContext.js';
import Inside_Card_For_Body from '../components/Inside_Card_For_Body/Inside_Card_For_Body';
import CardForBody from '../components/Card_For_body/CardForBody';
import './pages.css';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Culture } from '../components/classForDataBase'
import ModelsCont from '../components/CardsModels/ModelsCont';
class Models extends Component {

    cultures = [
        new Culture("Пшеница", "Вид модели", "Текущее мероприятие", "Совет", "#00A500"),
        new Culture("Кукуруза", "Вид модели", "Текущее мероприятие", "Совет", "#FFCC00"),
        new Culture("Название модели", "Вид модели", "Текущее мероприятие", "Совет", "#FE0000"),
    ]
    render() {
        return (
            <ThemeContextConsumer>{context => (
                <div style={{ height: '100%' }}>
                    <Header_Before_Profile />
                    <div className={context.theme + "Gray " + "body_style"}>
                        <ModelsCont culture={this.cultures}/>
                    </div>
                </div>)}
            </ThemeContextConsumer>
        );
    }
} export default Models;