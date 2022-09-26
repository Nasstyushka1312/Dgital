import './Buttons.css';
import { Container } from 'react-bootstrap';
function ButtonOpt(props) {

	return (
		<button type="submit" className="btn blueBut" style={{ borderRadius: '2px', width:'100%'} }>
			<Container style={{
				margin: '0px 10px',
				padding: '0px',
			}} >
				<p className={"textOpenSans14 " + props.ClassName}>{props.textForButton}</p>
			</Container>
		</button>
	)
} export default ButtonOpt;