import React from 'react';

import { Header } from './Blind/Header'
import Dimensions from './Blind/Dimensions'
import { Installation } from './Blind/Installation'
import { Material } from './Blind/Material'
import { Color } from './Blind/Color'

import { getStartConfig, createUser } from '../services/UserService'

class Blind extends React.Component {
    constructor(props) {
        super(props)

        this.state = { startData: { 'load': false } };
    }

    componentDidMount() {
        this.getStartConfig();
    }

    createUser = (e) => {
        createUser(this.state.user)
          .then(response => {
            console.log(response);
            this.setState({numberOfUsers: this.state.numberOfUsers + 1})
        });
    }
  
    getStartConfig = () => {
      getStartConfig()
        .then( conf => {
          console.log( 'startData loaded', conf );
          conf.load = true;
          this.setState({ startData: conf });
        });
    }
    render(){
        return(
            <form>
                <Header></Header>
                <Dimensions config={ this.state.startData }></Dimensions>
                <Installation config={ this.state.startData }></Installation>
                <Material config={ this.state.startData }></Material>
                <Color config={ this.state.startData }></Color>
            </form>
        )
    }
}

export default Blind;