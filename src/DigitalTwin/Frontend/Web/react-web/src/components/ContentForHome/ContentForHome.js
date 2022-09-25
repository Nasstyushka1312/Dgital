import field from '../Data/Frame 25.png';
import './ContentForHome.css';
import { Container } from 'react-bootstrap';
import CardBlur from './CardBlur.js';
import { ThemeContextConsumer } from '../ThemeContext';
function ContentForHome() {
    return (
        <ThemeContextConsumer>{context => (
            <Container className={context.theme+"Gray"} id="ContainerForHome">
            <Container id="field" />
            <CardBlur/>
        </Container>
            )
        }
            </ThemeContextConsumer>
        );
} export default ContentForHome;