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
        let value = target.type === 'checkbox' ? target.checked : ( target.value ).replace( ',', '.' );
        const name = target.name;

        //if( isNaN( value ) ) value = '';

        /*if( value > 10 ) {
            value = Math.ceil( value / 10 ) * 10;
        }*/

        if( name === 'width' ) {
            if( value < this.state.validate.width.min || isNaN( value ) ) this.setState({ h: 'in', 'hmsg': 'Minimalna szerokość to '+ this.state.validate.width.min +'.00 cm' });
            else if( value > this.state.validate.width.max ) this.setState({ h: 'in', 'hmsg': 'Maksymalna szerokość to '+ this.state.validate.width.max +'cm' });
            else this.setState({ h: '', 'hmsg': '' });
        } else if( name === 'height' ) {
            if( value < this.state.validate.height.min || isNaN( value ) ) this.setState({ v: 'in', 'vmsg': 'Minimalna wysokość to '+ this.state.validate.height.min +'.00 cm' });
            else if( value > this.state.validate.height.max ) this.setState({ v: 'in', 'vmsg': 'Maksymalna wysokość to '+ this.state.validate.height.max +'cm' });
            else this.setState({ v: '', 'vmsg': '' });
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
            <h4 className="mb-0">Wymiary</h4>
            <hr className="mt-1 mb-3"></hr>

            <div className="form-row">
                <div className="col">
                    <input type="number" onChange={this.handleChange} name="width" className={"form-control is-"+( this.state.h ?? 'in' )+"valid"} placeholder="Minimalna szerokość 50cm" value={this.state.width} />
                    
                    <div className={"invalid-feedback "+( this.state.h ? '' : "d-none" )}>
                        { this.state.hmsg }
                    </div>

                    <small className="text-muted">
                        minimalna szerokość rolety { this.state.validate.width.min }.00 cm
                    </small>
                </div>
                <div className="col">
                    <input type="number" onChange={this.handleChange} name="height" className={"form-control is-"+( this.state.v ?? 'in' )+"valid"} placeholder="Minimalna wysokość 50cm" value={this.state.height}/>
                   
                    <div className={"invalid-feedback "+( this.state.v ? '' : "d-none" )}>
                        { this.state.vmsg }
                    </div>

                    <small className="text-muted">
                        minimalna wysokość rolety { this.state.validate.height.min }.00 cm
                    </small>
                </div>
            </div>
        </div>)
    }
}