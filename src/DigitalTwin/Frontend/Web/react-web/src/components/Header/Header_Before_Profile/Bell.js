import { Nav } from 'react-bootstrap';
import '../Header.css';
import { ThemeContextConsumer } from "../../ThemeContext.js";
import bell from "../../Data/bell_icon.svg";
function Bell_Icon(props) {

	return (

		<ThemeContextConsumer >{context => (
			<Nav.Link href="#nogo" className={context.theme + " navbar-brand"}>
				
				<img src={bell} className={context.theme + " icon_for_header"}/>
			</Nav.Link >)
		}
		</ThemeContextConsumer>
	)
} export default Bell_Icon;