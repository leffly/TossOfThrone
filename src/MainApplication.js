import React from 'react';
import './css/App.css';
import {Container, Content, Panel, FlexboxGrid, Button, Col, Input, InputGroup, Icon, Animation} from 'rsuite';
import House from "./js/House";

class MainApplication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            numberOfPlayers: 0,
            isTossed: false,
            houses: {
                isBaratheonSelected: false,
                isStarkSelected: false,
                isMartellSelected: false,
                isTyrellSelected: false,
                isLannisterSelected: false,
                isGreyjoySelected: false,
                isArrynSelected: false,
                isTargaryenSelected: false,
                selected: []
            },
            players:[
                {
                    name: "",
                    tossedHouse: ""
                }
            ]
        };
        this.stepOnChange = this.stepOnChange.bind(this);
        this.stepOnNext = this.stepOnNext.bind(this);
        this.stepOnPrevious = this.stepOnPrevious.bind(this);
        this.onClickBaratheon = this.onClickBaratheon.bind(this);
        this.onClickGreyjoy = this.onClickGreyjoy.bind(this);
        this.onClickLannister = this.onClickLannister.bind(this);
        this.onClickStark = this.onClickStark.bind(this);
        this.onClickTyrell = this.onClickTyrell.bind(this);
        this.onClickMartell = this.onClickMartell.bind(this);
        this.onClickArryn = this.onClickArryn.bind(this);
        this.onClickTargaryen = this.onClickTargaryen.bind(this);
        this.recalculateNumberOfPlayers = this.recalculateNumberOfPlayers.bind(this);
        this.onClickTossThrones = this.onClickTossThrones.bind(this);
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    componentDidMount() {
        let state = this.state;
        state.players = [...Array(14)];
        for(let i = 0; i < 14; i++){
            state.players[i] = {
                name: "",
                tossedHouse: ""
            }
        }
        this.setState(state);
    }

    stepOnChange(nextStep){
        let currentState = this.state;
        currentState.step = nextStep;
        this.setState(currentState);
    }

    stepOnNext(){
        this.stepOnChange(this.state.step + 1);
    }

    stepOnPrevious(){
        this.stepOnChange(this.state.step - 1);
    }

    inputOnChange(value, index){
        let player = this.state.players[index];
        player.name = value;
        let state = this.state;
        state.players[index] = player;
        this.setState(state);
    }

    onClickBaratheon(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isBaratheonSelected = !this.state.houses.isBaratheonSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isBaratheonSelected);
        (currentState.houses.isBaratheonSelected) ?
            currentState.houses.selected.push("House Baratheon") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Baratheon"),1)
        this.setState(currentState);
    }

    onClickLannister(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isLannisterSelected = !this.state.houses.isLannisterSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isLannisterSelected);
        (currentState.houses.isLannisterSelected) ?
            currentState.houses.selected.push("House Lannister") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Lannister"),1)
        this.setState(currentState);
    }

    onClickMartell(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isMartellSelected = !this.state.houses.isMartellSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isMartellSelected);
        (currentState.houses.isMartellSelected) ?
            currentState.houses.selected.push("House Martell") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Martell"),1)
        this.setState(currentState);
    }

    onClickTyrell(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isTyrellSelected = !this.state.houses.isTyrellSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isTyrellSelected);
        (currentState.houses.isTyrellSelected) ?
            currentState.houses.selected.push("House Tyrell") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Tyrell"),1)
        this.setState(currentState);
    }

    onClickStark(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isStarkSelected = !this.state.houses.isStarkSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isStarkSelected);
        (currentState.houses.isStarkSelected) ?
            currentState.houses.selected.push("House Stark") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Stark"),1)
        this.setState(currentState);
    }

    onClickGreyjoy(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isGreyjoySelected = !this.state.houses.isGreyjoySelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isGreyjoySelected);
        (currentState.houses.isGreyjoySelected) ?
            currentState.houses.selected.push("House Greyjoy") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Greyjoy"),1)
        this.setState(currentState);
    }

    onClickArryn(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isArrynSelected = !this.state.houses.isArrynSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isArrynSelected);
        (currentState.houses.isArrynSelected) ?
            currentState.houses.selected.push("House Arryn") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Arryn"),1)
        this.setState(currentState);
    }

    onClickTargaryen(){
        let currentState = this.state;
        currentState.isTossed = false;
        currentState.houses.isTargaryenSelected = !this.state.houses.isTargaryenSelected;
        currentState.numberOfPlayers = this.recalculateNumberOfPlayers(currentState.houses.isTargaryenSelected);
        (currentState.houses.isTargaryenSelected) ?
            currentState.houses.selected.push("House Targaryen") :
            currentState.houses.selected.splice(currentState.houses.selected.indexOf("House Targaryen"),1)
        this.setState(currentState);
    }

    recalculateNumberOfPlayers(isHouseSelected){
        let numberOfplayers = this.state.numberOfPlayers;
        return (isHouseSelected) ? ++numberOfplayers : --numberOfplayers;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getRandomHouse(alreadyTossedHouses){
        let tossPoll = Object.assign([], this.state.houses.selected);
        tossPoll = tossPoll.filter((house) => !alreadyTossedHouses.includes(house));
        return tossPoll[this.getRandomInt(tossPoll.length)];
    }

    tossThrones(){
        let players = this.state.players;
        let tossedHouses = [];
        for(let i = 0; i < this.state.numberOfPlayers; i++){
            let randHouse = this.getRandomHouse(tossedHouses);
            tossedHouses.push(randHouse);
            players[i].tossedHouse = randHouse;
        }
        return players;
    }

    onClickTossThrones(){
        let currentState = this.state;
        currentState.isTossed = true;
        currentState.players = this.tossThrones();
        this.setState(currentState);
    }

    render() {
        return (
            <Container className="App">
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={23}>
                            <Panel className="panelLabel" header="Select Houses:" shaded>
                                <FlexboxGrid justify="center">
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickBaratheon}>
                                            <House houseName="Baratheon" isSelected={this.state.houses.isBaratheonSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickGreyjoy}>
                                            <House houseName="Greyjoy" isSelected={this.state.houses.isGreyjoySelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickLannister}>
                                            <House houseName="Lannister" isSelected={this.state.houses.isLannisterSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickStark}>
                                            <House houseName="Stark" isSelected={this.state.houses.isStarkSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickTyrell}>
                                            <House houseName="Tyrell" isSelected={this.state.houses.isTyrellSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickMartell}>
                                            <House houseName="Martell" isSelected={this.state.houses.isMartellSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickArryn}>
                                            <House houseName="Arryn" isSelected={this.state.houses.isArrynSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className="house" componentClass={Col} colspan={12} md={3}>
                                        <div onClick={this.onClickTargaryen}>
                                            <House houseName="Targaryen" isSelected={this.state.houses.isTargaryenSelected} />
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </Panel>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={23}>
                            {
                                (this.state.numberOfPlayers > 0) ? (
                                    <Panel className="panelLabel" header="Enter players:" shaded>
                                        {
                                            [...Array(this.state.numberOfPlayers)].map((_, i) => {
                                                let playerNo = i+1;
                                                return (
                                                    <InputGroup className="playerName" key={playerNo} inside>
                                                        <InputGroup.Addon>
                                                            <Icon icon="avatar" />
                                                        </InputGroup.Addon>
                                                        <Input placeholder={"Player " + playerNo} onChange={(e) => this.inputOnChange(e, i)} />
                                                    </InputGroup>
                                                );
                                            })
                                        }
                                    </Panel>
                                ) : ""
                            }
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={23}>
                            {
                                (this.state.numberOfPlayers > 1) ? (
                                    <Panel>
                                        <Button size="lg" className="tossButton" color="yellow" appearance="ghost" onClick={this.onClickTossThrones} block>
                                            TOSS THRONES
                                        </Button>
                                    </Panel>
                                ) : ""
                            }
                        </FlexboxGrid.Item>
                        {
                            (this.state.isTossed) ? (
                                <FlexboxGrid.Item colspan={23}>
                                    <Animation.Bounce in={this.state.isTossed}>{(props, ref) =>
                                        <Panel {...props} ref={ref} shaded>
                                            <FlexboxGrid justify="center">
                                                {
                                                    [...Array(this.state.numberOfPlayers)].map((_, i) => {
                                                        return (
                                                            <FlexboxGrid.Item className="house" componentClass={Col}
                                                                              colspan={12} md={3} key={i + 1}>
                                                                <Panel shaded bordered bodyFill
                                                                       style={{display: 'inline-block', width: 180}}>
                                                                    <House
                                                                        houseName={this.state.players[i].tossedHouse.split(" ")[1]}
                                                                        width="178"/>
                                                                    <Panel className="tossedCard"
                                                                        header={(!!this.state.players[i].name) ? this.state.players[i].name : ("Player " + (i + 1))}>
                                                                        <h5 className="houseName">
                                                                            {this.state.players[i].tossedHouse}
                                                                        </h5>
                                                                    </Panel>
                                                                </Panel>
                                                            </FlexboxGrid.Item>
                                                        );
                                                    })
                                                }
                                            </FlexboxGrid>
                                        </Panel>
                                    }
                                    </Animation.Bounce>
                                </FlexboxGrid.Item>
                            ) : ""
                        }
                    </FlexboxGrid>
                </Content>
            </Container>
        );
    }
}

export default MainApplication;
