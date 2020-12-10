import React, { Component } from 'react';

import { Header } from './Blind/Header'
import { Dimensions } from './Blind/Dimensions'
import { Installation } from './Blind/Installation'
import { Material } from './Blind/Material'
import { Color } from './Blind/Color'
class Blind extends Component {
    onChangeForm = (e) => {
        let user = this.state.user
        if (e.target.name === 'firstname') {
            user.firstName = e.target.value;
        } else if (e.target.name === 'lastname') {
            user.lastName = e.target.value;
        } else if (e.target.name === 'email') {
            user.email = e.target.value;
        }
        this.setState({user})
    }

    render(){
        return(
            <form>
                <Header></Header>
                <Dimensions onChangeForm={this.onChangeForm}></Dimensions>
                <Installation></Installation>
                <Material></Material>
                <Color></Color>
            </form>
        )
    }
}

export default Blind;