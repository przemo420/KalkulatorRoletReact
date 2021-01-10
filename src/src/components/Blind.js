import React from 'react';

import { Header } from './Blind/Header'
import Dimensions from './Blind/Dimensions'
import { Installation } from './Blind/Installation'
import { Material } from './Blind/Material'
import { Color } from './Blind/Color'
import { Price } from './Blind/Price'
import { Contact } from './Contact'

import { getStartConfig, updateFormData } from '../services/UserService'

class Blind extends React.Component {
    constructor(props) {
        super(props);

        this.state = { startData: { 'load': false } };
        this.formState = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.getStartConfig();
    }

    /*createUser = (e) => {
        createUser(this.state.user)
          .then(response => {
            console.log(response);
            this.setState({numberOfUsers: this.state.numberOfUsers + 1})
        });
    }*/
  
    getStartConfig = () => {
      getStartConfig()
        .then( conf => {
          console.log( 'startData loaded', conf );
          conf.load = true;
          this.setState({ startData: conf, configLoad: true });
        });
    }

    updateData = ( data ) => {
        this.formState = Object.assign( this.formState, data );
        
        if( Object.keys( this.formState ).length === 5 ) { // Wszystkie pola uzupełnione
            updateFormData( this.formState ).then( ret => {
                let priceData = { price: ret.price, qty: ret.qty };
                
                this.setState({ priceData: priceData, configLoad: false });
                console.log( 'returnFormData', ret );
            })
        }
    }

    handleSubmit = (event) => {
        //const target = event.target;
        //let value = target.type === 'checkbox' ? target.checked : parseInt( target.value );
        //const name = target.name;

        console.log( this.formState );
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <Header></Header>
                <Dimensions config={ this.state.startData } onUpdate={ this.updateData }></Dimensions>
                <Installation config={ this.state.startData } onUpdate={ this.updateData }></Installation>
                <Material config={ this.state.startData } onUpdate={ this.updateData }></Material>
                <Color config={ this.state.startData } onUpdate={ this.updateData }></Color>
                <Price config={ this.state.startData } data={ this.state.priceData } onUpdate={ this.updateData }></Price>
                <Contact config={ this.state.startData } onUpdate={ this.updateData }></Contact>
            </form>
        )
    }
}

export default Blind;