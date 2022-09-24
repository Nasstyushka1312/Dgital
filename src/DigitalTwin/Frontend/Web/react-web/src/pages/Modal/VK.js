import { Nav } from 'react-bootstrap';
import './LogInPopUp.css';
import vk from '../../components/Data/vk-com.svg';
import { ThemeContextConsumer } from "../../components/ThemeContext";
function VK() {

	return (
		<ThemeContextConsumer >{context => (
			<img src={vk} className={context.theme + " icon_for_modal"}/>)
		}
		</ThemeContextConsumer>
	)
} export default VK;