import './Buttons.css';
import updatetag from "../Data/updatetag1.svg";
function UpdateTag() {

	return (
		<button type="submit" className="btn upTagBut ButAllMini">
			<img src={updatetag} width="60%" height="60%" fill="none" />
		</button>
	)
} export default UpdateTag;