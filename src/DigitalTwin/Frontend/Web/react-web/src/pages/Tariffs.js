import React, { Component } from 'react';
import Header_Before_Profile from '../components/Header/Header_Before_Profile/Header_Before_Profile';
import { ThemeContextConsumer } from '../components/ThemeContext.js';
import CardForTariffs from '../components/Inside_Card_For_Body/Inside_Card_For_Tariffs';
import CardForBody from '../components/Card_For_body/CardForBody';
import './pages.css';
import { Row, Col, Container } from 'react-bootstrap';
import Table_For_Tariffs from '../components/Table_For_Tariffs/Table_For_Tariffs';
import { MyTariff } from './../components/classForDataBase.js';
import AddingButton from '../components/Button/AddingButton';
class Tariffs extends Component {
     AddCancel = ['Наименование подписки 1',
        'Наименование подписки 2',
        'Наименование подписки 3',
        'Наименование подписки 4'
    ]

    myTariffs = [
        new MyTariff("1", "Подписка 1", new Date(2020, 4, 7).toLocaleDateString(), 5000),
        new MyTariff("2", "Подписка 2", new Date(2020, 7, 21).toLocaleDateString(), 10000),
        new MyTariff("3", "Подписка 3", new Date(2020, 11, 12).toLocaleDateString(), 22000),
        new MyTariff("4", "Подписка 4", new Date(2021, 1, 30).toLocaleDateString(), 35000),
        new MyTariff("5", "Подписка 5", new Date(2021, 4, 25).toLocaleDateString(), 5000),
        new MyTariff("6", "Подписка 2", new Date(2021, 9, 28).toLocaleDateString(), 10000),
        new MyTariff("7", "Подписка 3", new Date(2022, 0, 22).toLocaleDateString(), 22000),
        new MyTariff("8", "Подписка 4", new Date(2022, 4, 13).toLocaleDateString(), 35000),
    ]
    
    render() {
        return (
            <ThemeContextConsumer>{context => (
                <div style={{ height: '100%' }}>
                    <Header_Before_Profile />
                    <div className={context.theme + "Gray " + "body_style"}>
                        <Col className="MargForCol">
                        <CardForBody >
                                <p className="textOpenSansForHistTar">Продлить/отменить подписки</p>
                                
                                {this.AddCancel.map((addcanc) =>
                                    <CardForTariffs AddCancel={addcanc} />)}
                                <AddingButton textForButton="Добавить подписку"/>
                            <a href="#nogo" className="linkAutoriz">описание подписок</a>
                            </CardForBody></Col>
                        <Col className="MargForCol">
                            <CardForBody>
                                <Container className="ContForHistoryTariff">
                                <p className="textOpenSansForHistTar" >История подписок</p>
                                    <Table_For_Tariffs myTariffs={this.myTariffs} />
                                </Container>
                            </CardForBody></Col>
                    </div>
                </div>)}
            </ThemeContextConsumer>
        );
    }
} export default Tariffs;