import React, { Component } from 'react';

import { Header } from './Blind/Header'
import { Dimensions } from './Blind/Dimensions'
import { Installation } from './Blind/Installation'
import { Material } from './Blind/Material'
import { Color } from './Blind/Color'

var MIN_WIDTH_VALUE = 50;
var MAX_WIDTH_VALUE = 50;
var MIN_HEIGHT_VALUE = 50;
var MAX_HEIGHT_VALUE = 50;

class Blind extends Component {
    property = {
        size: { width: 0, height: 0 },
        users: [],
        numberOfUsers: 0
    }
    onChangeDimension = (e) => {
        let size = this.property.size;
        let tarValue = e.target.value;

        switch( e.target.name ) {
            case 'width': {
                if( tarValue < MIN_WIDTH_VALUE || tarValue > MAX_WIDTH_VALUE ) {
                    //return;
                } 

                size.width = tarValue;
                break;
            } 

            case 'height': {
                if( tarValue < MIN_HEIGHT_VALUE || tarValue > MAX_HEIGHT_VALUE ) {
                    //return;
                } 

                size.height = tarValue;
                break;
            } 

            default: {}
        }

        this.setState({ value: tarValue });
    }

    render(){
        return(
            <form>
                <Header></Header>
                <Dimensions onChangeForm={this.onChangeDimension}></Dimensions>
                <Installation></Installation>
                <Material></Material>
                <Color></Color>
            </form>
        )
    }
}

export default Blind;