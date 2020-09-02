import React from 'react';
import {Container, Content, FlexboxGrid, Panel} from 'rsuite';


class Error extends React.Component {

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

                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        );
    }
}

export default Error;