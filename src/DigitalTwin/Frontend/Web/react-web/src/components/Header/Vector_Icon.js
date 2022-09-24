import { Nav } from 'react-bootstrap';
import './Header.css';
import { ThemeContextConsumer } from "../ThemeContext.js";
import vector from '../Data/vector.svg';
function Vector_Icon() { 
    return (
        <ThemeContextConsumer>
            {context => (<Nav.Link className={context.theme + " navbar-brand"} onClick={context.toggleTheme}>
                <img fill="#000000" src={vector} className={context.theme + " icon_for_header"}/>
            </Nav.Link>)}
        </ThemeContextConsumer>
        )
} export default Vector_Icon;