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
        this.formState = { 'installation': null, 'material': null, 'color': null };
        this.waitingForSend = { 'status': false, 'statusList': {} };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateData = this.updateData.bind(this);
        this.addBlind = this.addBlind.bind(this);
        this.updateForm = this.updateForm.bind(this);
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
          conf.load = true;
          
          this.setState({ startData: conf, configLoad: true });
        });
    }

    addBlind = () => {
        if( typeof this.state.priceData.price === 'undefined' || 
            this.state.startData.load === false ||
            this.formState.color == null ||
            this.formState.material == null ||
            this.formState.installation == null ||
            this.state.priceData.qty === 0 ) return;

        let tStartData = this.state.startData,
            tColor = tStartData.color[ this.formState.color ],
            tMaterial = tStartData.mat[ this.formState.material ],
            state = JSON.parse(JSON.stringify(this.formState));

        state.blindColor = tColor.name;
        state.blindMaterial = tMaterial.name;
        state.price = this.state.priceData.price;

        this.formState.blindImage = tColor.image;

        this.props.updatePrev({
            blinds: state,
            price: this.state.priceData.price,
            qty: this.state.priceData.qty
        });
    }

    updateData = ( data ) => {
        this.formState = Object.assign( this.formState, data );
        
        if( Object.keys( this.formState ).length < 5 ) return;

        if ( ( this.formState.width > this.state.startData.dim.width.max ||
            this.formState.width < this.state.startData.dim.width.min ) ||
            ( this.formState.height > this.state.startData.dim.height.max ||
            this.formState.height < this.state.startData.dim.height.min ) ) {
                this.setState({ priceData: { price: '0.00', qty: '0' } });
                return;
            }

        this.waitingForSend.statusList = this.formState;
        
        if( this.waitingForSend.status === true ) {
            console.log('BLok!');
            return;
        }

        this.waitingForSend.status = true;

        if( typeof data.color === 'number' ) {
            this.props.updatePrev({
                previewImage: this.state.startData.color[ data.color ].img
            });
        }

        setTimeout( this.updateForm, 100);
    }

    updateForm = () => {
        updateFormData( this.waitingForSend.statusList, 'calc' ).then( ret => {
            if( ret.success ) {
                let priceData = { price: parseFloat(ret.price).toFixed(2), qty: ret.qty };
                    
                this.setState({ priceData: priceData });
            }

            this.waitingForSend.status = false;
        }).catch(err => {
            this.waitingForSend.status = false;
        });
    }

    handleSubmit = (event) => {
        //const target = event.target;
        //let value = target.type === 'checkbox' ? target.checked : parseInt( target.value );
        //const name = target.name;
        event.preventDefault();

        let stringify = JSON.stringify( this.formState );
        var state = JSON.parse( stringify );

        this.props.handleSubmit( state );

        event.preventDefault();
    }

    render(){
        return(
            <form className="p-4" onSubmit={(e) =>  this.handleSubmit(e) }>
                <Header></Header>
                <Dimensions config={ this.state.startData } onUpdate={ this.updateData }></Dimensions>
                <Installation config={ this.state.startData } onUpdate={ this.updateData }></Installation>
                <Material config={ this.state.startData } onUpdate={ this.updateData }></Material>
                <Color config={ this.state.startData } onUpdate={ this.updateData }></Color>
                <Price config={ this.state.startData } data={ this.state.priceData } addBlind={ this.addBlind }></Price>
                <Contact config={ this.state.startData } onUpdate={ this.updateData }></Contact>
            </form>
        )
    }
}

export default Blind;