import './Tarif.css';
import { Card } from 'react-bootstrap';
import { ThemeContextConsumer } from "../../../ThemeContext";
function Tarif(props) {

    return (
        <Card className={props.light +"BorderForCard " + props.light+ " TarifCard"}>
            <h4 className={props.light+ " text"}>{props.data["name"]}</h4>
            <p className={props.light + " text"}>{props.data["cost"]}</p>
            <ul className="text" id="tarifUL" >
                {props.data.possibility.map((pos, i) => (<li key={pos + i}>{pos}</li>))}
            </ul>
                </Card>
    );
} export default Tarif;