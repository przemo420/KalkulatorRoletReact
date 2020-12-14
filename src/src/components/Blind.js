import React, { Component } from 'react';

import { Header } from './Blind/Header'
import { Dimensions } from './Blind/Dimensions'
import { Installation } from './Blind/Installation'
import { Material } from './Blind/Material'
import { Color } from './Blind/Color'

class Blind extends Component {
    property = {
        size: { width: 0, height: 0 },
        users: [],
        numberOfUsers: 0
    }
    onChangeDimension = (e) => {
        let tarValue = e.target.value;


        this.setState({ value: tarValue });
    }

    render(){
        return(
            <form>
                <Header></Header>
                <Dimensions></Dimensions>
                <Installation></Installation>
                <Material></Material>
                <Color></Color>
            </form>
        )
    }
}

export default Blind;