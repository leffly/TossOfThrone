import React from 'react';
import '../css/about.css';
import {Container, Content, FlexboxGrid, Panel} from 'rsuite';
import ThroneImg from '../images/throne.png';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={23}>
                            <Panel className="panelLabel" shaded>
                                <div className="throneImageWrapper">
                                    <h3>Welcome adventurer</h3>
                                    <img src={ThroneImg} alt="Throne of TOT" width="200" />
                                </div>
                                <div className="descriptionWrapper">
                                    <p>I am LEFFLY the rightful king of Toss of throne I share my humble project with my people right here</p>
                                    <p>Github: <a href"/"></a></p>
                                </div>

                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        );
    }
}

export default About;
