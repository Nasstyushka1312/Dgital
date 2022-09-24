import { ThemeContextConsumer } from "../ThemeContext";
import './logo.css';
import Gplus from "./../Data/google-plus.svg";
function GPlus() {

	return (
		<ThemeContextConsumer >{context => (
			<img src={Gplus} className={context.theme + " ForInsideCard  "  + " icon_for_modal"} id="colorGreen"/>
		)
		}
		</ThemeContextConsumer>
	)
} export default GPlus;