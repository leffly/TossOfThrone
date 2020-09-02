import React from 'react';
import '../css/App.css';
import  "../css/navigation.css";
import logo from '../images/tot_logo.png';
import { Navbar, Nav, Icon } from 'rsuite';
import MainApplication from "../MainApplication";
import About from "../pages/About";

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
        <Navbar {...props}>
            <Navbar.Header>
                <img id="logo" src={logo} alt={''} height="56" />
            </Navbar.Header>
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item className="NavMainLabel" eventKey="/">
                        Toss of throne
                    </Nav.Item>
                </Nav>
                <Nav onSelect={onSelect} activeKey={activeKey} pullRight>
                    <Nav.Item icon={<Icon icon="info" />} eventKey="/about">
                        About
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};

class NavigationMenu extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            activeKey: null
        };
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    renderActivePage(activeKey){
        activeKey = (!!activeKey) ? activeKey : "/";
        switch (activeKey) {
            case "/":
                return (<MainApplication />);
            case "/about":
                return (<About />);
            default:
                return (<p>SOMETHING WENT WRONG</p>);
        }
    }

    render() {
        const { activeKey } = this.state;
        return (
            <div>
            <header className="navigation">
                <NavBarInstance activeKey={activeKey} onSelect={this.handleSelect} />
            </header>
                {
                    this.renderActivePage(activeKey)
                }
            </div>
        );
    }
}

export default NavigationMenu;