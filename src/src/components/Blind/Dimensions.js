import React from 'react';
export default class Dimensions extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { 
            width: 0, 
            height: 0, 
            h: '', 
            v: '', 
            msg: '',
            validate: {
                width: {
                    min: 0,
                    max: 0
                },
                height: {
                    min: 0,
                    max: 0
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.width === 0 ) {
            console.log( 'componentDidUpdate Dimensions' );

            this.setState({ 
                validate: {
                    width: {
                        min: prop.dim.width.min, 
                        value: prop.dim.width.min,
                        max: prop.dim.width.max,
                    },
                    height: {
                        min: prop.dim.height.min,
                        value: prop.dim.height.min,
                        max: prop.dim.height.max
                    }
                },
                width: prop.dim.width.min,
                height: prop.dim.height.min
            });

            this.sendUpdate();
        }
    }

    handleChange = (event) => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : parseInt( target.value );
        const name = target.name;

        if( name === 'width' ) {
            if( isNaN( value ) ) value = this.state.validate.width.min;

            value = Math.ceil( value / 10 ) * 10;

            if( value < this.state.validate.width.min ) this.setState({ h: 'in', 'msg': 'Minimalna szerokość to '+ this.state.validate.width.min +'cm' });
            else if( value > this.state.validate.width.max ) this.setState({ h: 'in', 'msg': 'Maksymalna szerokość to '+ this.state.validate.width.max +'cm' });
            else this.setState({ h: '', 'msg': '' });
        } else if( name === 'height' ) {
            if( isNaN( value ) ) value = this.state.validate.height.min;
            
            value = Math.ceil( value / 10 ) * 10;

            if( value < this.state.validate.height.min ) this.setState({ v: 'in', 'msg': 'Minimalna wysokość to '+ this.state.validate.height.min +'cm' });
            else if( value > this.state.validate.height.max ) this.setState({ v: 'in', 'msg': 'Maksymalna wysokość to '+ this.state.validate.height.max +'cm' });
            else this.setState({ v: '', 'msg': '' });
        }

        this.setState({
            [name]: value
        });

        this.sendUpdate();
    }

    sendUpdate = () => {
        let $this = this;

        setTimeout(function(){
            if( $this.state.msg === '' ) {
                $this.props.onUpdate( {
                    'width': $this.state.width,
                    'height': $this.state.height
                });
            }
        }, 100 );
    }
    render() {
        return(
        <div className="form-group">
            <h4 className="mt-5">Wymiary</h4>
            <hr></hr>
            <div className="input-group">
                <input type="text" onChange={this.handleChange} name="width" className={"form-control is-"+( this.state.h ?? 'in' )+"valid"} placeholder="Minimalna szerokość 50cm" value={this.state.width} />
                <span className="input-group-text">x</span>
                <input type="text" onChange={this.handleChange} name="height" className={"form-control is-"+( this.state.v ?? 'in' )+"valid"} placeholder="Minimalna wysokość 50cm" value={this.state.height}/>
                <div className={"invalid-feedback "+( this.state.v || this.state.h ? '' : "d-none" )}>
                    {this.state.msg}
                </div>
            </div>
        </div>)
    }
}