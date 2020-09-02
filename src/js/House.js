import React from 'react';
import houseBaratheon from '../images/houses/house_baratheon.jpg';
import HouseGreyjoy from '../images/houses/house_greyjoy.jpg';
import HouseLannister from '../images/houses/house_lannister.jpg';
import HouseStark from '../images/houses/house_stark.jpg';
import HouseTyrell from '../images/houses/house_tyrell.jpg';
import HouseMartell from '../images/houses/house_martell.jpg';
import houseBaratheonSelected from '../images/houses/selected/house_baratheon_selected.jpg';
import HouseGreyjoySelected from '../images/houses/selected/house_greyjoy_selected.jpg';
import HouseLannisterSelected from '../images/houses/selected/house_lannister_selected.jpg';
import HouseStarkSelected from '../images/houses/selected/house_stark_selected.jpg';
import HouseTyrellSelected from '../images/houses/selected/house_tyrell_selected.jpg';
import HouseMartellSelected from '../images/houses/selected/house_martell_selected.jpg';

class House extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            houseType: this.getHouseRender(props.houseName),
            name: props.houseName,
            isSelected: (!!props.isSelected),
            width: (!!props.width) ? props.width : 160,
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.houseName !== prevProps.houseName || this.props.isSelected !== prevProps.isSelected){
            this.setState({houseType: this.getHouseRender(this.props.houseName)});
        }
    }

    getHouseRender(houseName){
        let houseType = {};
        switch (houseName){
            case "Stark":
                houseType = !!this.props.isSelected ? HouseStarkSelected : HouseStark;
                break;
            case "Martell":
                houseType = !!this.props.isSelected ? HouseMartellSelected : HouseMartell;
                break;
            case "Tyrell":
                houseType = !!this.props.isSelected ? HouseTyrellSelected : HouseTyrell;
                break;
            case "Baratheon":
                houseType = !!this.props.isSelected ? houseBaratheonSelected : houseBaratheon;
                break;
            case "Greyjoy":
                houseType = !!this.props.isSelected ? HouseGreyjoySelected : HouseGreyjoy;
                break;
            case "Lannister":
                houseType = !!this.props.isSelected ? HouseLannisterSelected : HouseLannister;
                break;
            default:
                break;
        }
        return houseType;
    }

    render() {
        return (
                <img src={this.state.houseType} alt={"House " + this.state.name} width={this.state.width} />
            );
    }

}

export default House;