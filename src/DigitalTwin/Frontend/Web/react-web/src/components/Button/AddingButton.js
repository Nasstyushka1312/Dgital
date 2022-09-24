import './Buttons.css';
import { Container } from 'react-bootstrap';
import plusForButtonAdding from "./../Data/icons8-plus.svg";
function AddingButton(props) {

	return (
		<button type="submit" className="btn blueBut" >
			<Container style={{
				display: 'flex',
				margin: '0%',
				padding: '0%',
				alignItems: 'center' } } >
				<img fill="#228BE6" src={plusForButtonAdding} className={"plus " + props.ClassName}/>
				<p className={ "textOpenSans "+props.ClassName}>{props.textForButton}</p>
			</Container>
			</button>
	)
} export default AddingButton;