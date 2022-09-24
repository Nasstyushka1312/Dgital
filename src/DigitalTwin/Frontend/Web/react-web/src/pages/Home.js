import React, { Component, useState } from 'react';
import ContentForHome from '../components/ContentForHome/ContentForHome.js';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer.js';
import './pages.css';
import LogInPopUp from './Modal/LogInPopUp.js';
function withMyHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useState(false);
        return <Component {...props} myHookValue={myHookValue} />;
    }
}
class Home extends Component { 
    
    render() {
        const [active, setActive] = this.props.myHookValue;
        const updateActive=() => {
            setActive(prev=>!prev)
        }
        return (<>
            <Header active={active} updateActive={updateActive}/>
            <ContentForHome />
            <LogInPopUp active={active} setActive={setActive}/>
            <Footer />
        </>
        );
    }
} export default withMyHook(Home);