import './Buttons.css';
import cross from "./../Data/cross-circle-svgrepo-com.svg";
function ButtonCross() {

	return (
			<button type="submit" className="btn redBut ButAllMini">
			<img src={cross} width="21px" height="21px" className="icon_for_but"/>
			</button>
	)
} export default ButtonCross;