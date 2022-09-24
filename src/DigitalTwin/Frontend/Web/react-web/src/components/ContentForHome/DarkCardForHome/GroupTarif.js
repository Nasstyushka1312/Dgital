import './DarkCardForHome.css';
import { Container } from 'react-bootstrap';
import Tarif from './Tarif/Tarif.js';
import { Tariff } from '../../../components/classForDataBase';
import { ThemeContextConsumer } from "../../ThemeContext"
function GroupTarif() {
    const tariffs = [
            new Tariff("Прогнозирование урожайности", "5000 руб/год", ["Возможность 1", "Возможность 2", "Возможность 3", "Возможность 4", "Возможность 5"]),
            new Tariff("Прогнозирование нештатных ситуаций", "10000 руб/год", ["Возможность 1", "Возможность 2", "Возможность 3", "Возможность 4", "Возможность 5"]),
        new Tariff("Поддержка принятия решений", "15000 руб/год", ["Возможность 1", "Возможность 2", "Возможность 3", "Возможность 4", "Возможность 5"])
        ]
    return (
        <ThemeContextConsumer>{context => (
            <Container className={context.theme + "Gray" + " textForCardDark"}>
                <p className={context.theme + "Gray"} style={{ fontSize: '17px', margin: '0px 0px 10px 0px', fontFamily: 'Roboto!important', background: '#ffffff00' }} >Тарифные планы</p>
                <Container id="TarifList">
                    {tariffs.map((tariff) => <Tarif data={tariff} light={context.theme} />)}
                </Container>
            </Container>
        )}</ThemeContextConsumer>

    );
} export default GroupTarif;