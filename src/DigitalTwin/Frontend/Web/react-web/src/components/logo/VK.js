import { ThemeContextConsumer } from "../ThemeContext";
import './logo.css';
import vk from "./../Data/vk-com.svg";
function VK() {

	return (
		<ThemeContextConsumer >{context => (
			<img src={vk} className={context.theme + " " + context.theme + "ForInsideCard  " + " icon_for_modal"}/>
					)
		}
		</ThemeContextConsumer>
	)
} export default VK;