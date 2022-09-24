import './LogInPopUp.css';
import { ThemeContextConsumer } from "../../components/ThemeContext";
import yandex from "../../components/Data/yandex-international.svg";
function Yandex() {

	return (
		<ThemeContextConsumer >{context => (
			<img src={yandex} className={context.theme + " icon_for_modal"} />
		)
		}
		</ThemeContextConsumer>
	)
} export default Yandex;