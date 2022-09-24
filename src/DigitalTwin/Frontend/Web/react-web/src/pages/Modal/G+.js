import './LogInPopUp.css';
import { ThemeContextConsumer } from "../../components/ThemeContext";
import Gplus from "../../components/Data/google-plus.svg";
function GPlus() {

	return (
		<ThemeContextConsumer >{context => (
			<img src={Gplus} className={context.theme + " icon_for_modal"} />
		)
		}
		</ThemeContextConsumer>
	)
} export default GPlus;