import {  Nav} from 'react-bootstrap';
import './Header.css';
import { ThemeContextConsumer } from "../ThemeContext.js";
import profile from '../Data/profile.svg';
function Profile_Icon(props) {
	
	return (
		
		<ThemeContextConsumer >{context => (
			<Nav.Link onClick={() => { props.updateActive()} } className={context.theme + " navbar-brand"}>
				<img id="Layer_1" className={context.theme + " icon_for_header"} src={profile}/>
			</Nav.Link >)
		}
		</ThemeContextConsumer>
		)
} export default Profile_Icon;