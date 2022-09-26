import CardForBody from './../Card_For_body/CardForBody';
import './ContentDashboard.css';
import { Container, Col } from 'react-bootstrap';
import { ThemeContextConsumer } from '../ThemeContext';
import ButtonOpt from '../Button/ButtonOpt';
import ButtonSensorOiT from './../Button/ButtonSensorIoT';
import Combobox from '../Combobox/ComboBox';
import Input from '../input/Input';
import MapBut from '../Button/MapBut';
function ContentDashboard() {
        return (
            <ThemeContextConsumer>{context => (
                <Container className={context.theme + "Gray "+ "contForDashboardEM "}>
                    <Container className="cardSize" >
                        <CardForBody><Container className="ContForCardDash"><p className="textForStatus" >Статус модели</p>
                        <Col className="ColForBut"><p className="NeedingText">Требуется добавить исторические данные!</p>
                                <Col style={{ margin: '6px 0px 6px 85px', display: 'flex', justifyContent: 'flex-end' } }></Col></Col>
                        <Container className="contButton">
                            <ButtonOpt textForButton="Импортировать"></ButtonOpt>
                        </Container>
                        
                        <div className="Warning">Файл импорта должен соответсвовать
                            <a style={{ color: '#F5CA5D', textDecorationLine: 'none' }} href="#nogo"> шаблону </a>
                        </div>
                        <p className="textForStatus marForDescr" >Если модель не имеет исторических данных, нажмите “Начальное состояние”
                        </p>
                        <Container className="contButton">
                            <ButtonOpt textForButton="Начальное состояние"></ButtonOpt>
                        </Container>
                    </Container></CardForBody></Container>
                    <Container className="cardSize" ><CardForBody><Container className="ContForCardDash"><p className="textForStatus" >Статус модели</p>
                        <Col className="ColForBut"><p className="NeedingText">Требуется добавить технику!</p>
                            <Col style={{ margin: '6px 0px 6px 85px', height: '28px', paddingRight: '28px', display: 'flex', justifyContent: 'flex-end' }}></Col></Col>

                            <Container style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'flex-end', padding: '0px', margin:'0px 0px 0.5rem 0px', width: '100%' }}>
                                <Combobox classTextCombobox="textForSign12" textCombobox="Наименование техники" classNameCont="padCombobox "></Combobox>
                                <Input Label="Количество" classNameP="textForSign12" className="ForDashboard" contClass="contForCardDashb"></Input></Container>
                            <Container className="contButton">
                                <ButtonOpt textForButton="Добавить"></ButtonOpt></Container>
                        </Container>
                        </CardForBody>
                    </Container>
                    <Container className="cardSize" >
                        <CardForBody><Container className="ContForCardDash"><p className="textForStatus" >Статус модели</p>
                            <Col className="ColForBut"><p className="NeedingText">Требуется заполнить данные карты!</p>
                                <Col style={{ margin: '6px 0px 6px 85px', display: 'flex', justifyContent: 'flex-end' }}><MapBut/></Col></Col>
                        </Container></CardForBody></Container>
                    <Container className="cardSize" ><CardForBody>
                        <Container className="ContForCardDash"><p className="textForStatus" >
                        Статус датчиков</p>
                            <Col className="ColForBut"><p className="NeedingTextYellow ">Нет ни одного датчика!</p>
                                <Col style={{ margin: '6px 0px 6px 85px', display:'flex', justifyContent: 'flex-end' }}><ButtonSensorOiT /></Col></Col>
                    </Container></CardForBody></Container>
                    <Container className="cardSize" ><CardForBody><Container className="ContForCardDash"><p className="textForStatus" >Статус модели</p>
                        <Col className="ColForBut"><p className="NeedingText">Требуется определить тип почвы!</p>
                            <Col style={{ margin: '6px 0px 6px 85px', height: '28px', paddingRight: '28px', display: 'flex', justifyContent: 'flex-end' }}></Col></Col>

                        <Container style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'flex-end', padding: '0px', margin: '0px 0px 0.5rem 0px', width: '100%' }}>
                            <Combobox classTextCombobox="textForSign12" textCombobox="Наименование техники" classNameCont="padCombobox "></Combobox>
                            <Container style={{ width:'30%' }}/></Container>
                        <Container className="contButton">
                            <ButtonOpt textForButton="Добавить"></ButtonOpt></Container>
                    </Container>
                    </CardForBody>
                    </Container>
</Container>
            )
            }
            </ThemeContextConsumer>
        );
}export default ContentDashboard;