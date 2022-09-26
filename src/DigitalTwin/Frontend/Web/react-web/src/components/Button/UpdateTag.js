import './Buttons.css';
import updatetag from "../Data/updatetag1.svg";
function UpdateTag() {

	return (
		<button type="submit" className="btn ButAllMini greenButMini">
			<img src={updatetag} width="60%" height="60%" fill="none" />
		</button>
	)
} export default UpdateTag;