import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Preview } from './components/Preview'
import Blind from './components/Blind'


class App extends Component {
  constructor(props) {
    super(props);

    this.updatePreview = this.updatePreview.bind(this);
    this.state = { blinds: [], fullPrice: 0, fullQty: 0 };
  }

  updatePreview = (data) => {
    let fullPrice = this.state.fullPrice; let fullQty = this.state.fullQty; let fullBlinds = this.state.blinds.slice();

    fullPrice += data.price;
    fullQty += data.qty;

    data.blinds.price = data.price;
    data.blinds.qty = data.qty;

    fullBlinds.push( data.blinds );

    this.setState({
      blinds: fullBlinds,
      fullPrice: fullPrice,
      fullQty: fullQty
    });

    console.log( 'updatePreview', data, fullPrice, fullQty, fullBlinds );
  }
  render() {
    return (
      <div className="row App mt-5">
          <article className="col-md-6">
            <Preview data={ this.state }></Preview>
          </article>
          <article className="col-md-6">
            <Blind updatePrev={ this.updatePreview }></Blind>
          </article>
      </div>
    );
  }
}

export default App;