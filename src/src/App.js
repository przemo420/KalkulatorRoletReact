import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Preview } from './components/Preview'
import Blind from './components/Blind'

import { updateFormData } from './services/UserService'
import { cloneStateValue } from './components/Blind/helpers'

class App extends Component {
  constructor(props) {
    super(props);

    this.updatePreview = this.updatePreview.bind(this);
    this.removeBlind = this.removeBlind.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { blinds: [], fullPrice: 0, fullQty: 0, previewImage: "P201" };
  }

  removeBlind = (bid) => {
    let blind = this.state.blinds.slice()[ bid ]; 
    let blinds = this.state.blinds.filter(function(item,i) {
      return i !== bid
    });

    this.setState({
      blinds: blinds,
      fullPrice: this.state.fullPrice - blind.price,
      fullQty: this.state.fullQty - blind.qty
    });
    console.log( 'removeBlind', blinds );
  }
  updatePreview = (data) => {
    let fullPrice = this.state.fullPrice; let fullQty = this.state.fullQty; let fullBlinds = cloneStateValue( this.state.blinds );

    if( typeof data.previewImage === 'string' ) {
      this.setState({ previewImage: data.previewImage });
      return;
    }
    
    if( typeof data.price !== 'undefined' ) {
      fullPrice += parseFloat(data.price);
      fullQty += data.qty;

      data.blinds.price = parseFloat( data.price );
      data.blinds.qty = data.qty;

      fullBlinds.push( data.blinds );

      this.setState({
        blinds: fullBlinds,
        fullPrice: fullPrice,
        fullQty: fullQty
      });
    }

    console.log( 'updatePreview', data, fullPrice, fullQty, fullBlinds );
  }

  handleSubmit = (state) => {
    //const target = event.target;
    //let value = target.type === 'checkbox' ? target.checked : parseInt( target.value );
    //const name = target.name;

    let blinds = { 'blinds': cloneStateValue( this.state.blinds ), 'price': cloneStateValue( this.state.fullPrice), 'qty': cloneStateValue( this.state.fullQty ) };
    let data = Object.assign( {}, state, blinds );

    if( !blinds.blinds.length ) {
      return alert( 'Najpierw dodaj roletę do zestawu.' );
    }
    console.log( data );

    updateFormData( data, 'send' ).then( ret => {
      alert( ret.msg );
    }).catch(err => {
      alert('Serwer nie odpowiada.');
        console.log( 'returnFormData/send/catch: ', err );
    });
  }

  render() {
    return (
      <div className="row h-100 App mt-5">
          <article className="col-md-6">
            <Preview data={ this.state } removeBlind={ this.removeBlind }></Preview>
          </article>
          <article className="col-md-6 h-75 overflow">
            <Blind updatePrev={ this.updatePreview } handleSubmit={ this.handleSubmit }></Blind>
          </article>
      </div>
    );
  }
}

export default App;