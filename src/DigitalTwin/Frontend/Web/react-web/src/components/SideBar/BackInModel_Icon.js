import { Nav } from 'react-bootstrap';
import './SideBar.css';
import Back_Icon from '../Data/BackIn_Icon.svg';
function BackIn_Icon(props) {

	return (

		
			<Nav.Link onClick={() => { props.updateActive() }} >
				<img className="imgForPanel" src={Back_Icon} />
			</Nav.Link >
	)
} export default BackIn_Icon;