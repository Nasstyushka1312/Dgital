import './logo.css';
import { ThemeContextConsumer } from "../ThemeContext";
import yandex from "./../Data/yandex-international.svg";
function Yandex() {

	return (
		<ThemeContextConsumer >{context => (

			<img src={yandex} className={context.theme + " " + context.theme + "ForInsideCard  " + " icon_for_modal"} />
)
		}
		</ThemeContextConsumer>
	)
} export default Yandex;