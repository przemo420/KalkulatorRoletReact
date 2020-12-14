import React from 'react'
var MIN_WIDTH_VALUE = 50;
var MAX_WIDTH_VALUE = 2000;
var MIN_HEIGHT_VALUE = 50;
var MAX_HEIGHT_VALUE = 2000;
export class Dimensions extends React.Component {
    constructor(props) {
        super(props)
        this.state = { horizontal: MIN_WIDTH_VALUE, vertical: MIN_HEIGHT_VALUE }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : parseInt( target.value );
        const name = target.name;

        switch( name ) {
            case 'horizontal': {
                if( value < MIN_WIDTH_VALUE ) {
                    value = MIN_WIDTH_VALUE;
                } else if( value > MAX_WIDTH_VALUE ) {
                    value = MAX_WIDTH_VALUE;
                }

                break;
            } 

            case 'vertical': {
                if( value < MIN_HEIGHT_VALUE ) {
                    value = MIN_HEIGHT_VALUE
                } else if( value > MAX_HEIGHT_VALUE ) {
                    value = MAX_HEIGHT_VALUE;
                }
                break;
            } 

            default: {}
        }

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
        <div className="form-group">
            <h4 className="mt-5">Wymiary</h4>
            <hr></hr>
            <div className="input-group">
                <input type="text" onChange={this.handleChange} name="horizontal" className="form-control is-valid" placeholder="Minimalna szerokość 50cm" value={this.state.horizontal} />
                <span className="input-group-text">x</span>
                <input type="text" onChange={this.handleChange} name="vertical" className="form-control is-valid" placeholder="Minimalna wysokość 50cm" value={this.state.vertical}/>
                <div class="invalid-feedback d-none">
                    Please choose a username.
                </div>
            </div>
        </div>
        )
    }
}