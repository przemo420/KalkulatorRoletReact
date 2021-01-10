import React from 'react';
import { parseUpdateEventToParent } from './helpers'

export class Material extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
    }
    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.active == null ) {
            console.log( 'componentDidUpdate Material' );
            this.setState({ handleType: prop.mat, active: 0 });
            this.sendUpdate( 0 );
        }
    }

    addActiveClass( i ) {
        this.setState({ active: i });
        this.sendUpdate( i );
    };

    sendUpdate = ( i ) => {
        parseUpdateEventToParent( this, {
            'material': i
        }); 
    }

    render() {
        return(
            <div>
                <h4 className="mt-5">Tkanina</h4>
                <hr></hr>
                <div className="row justify-content-center">
                    {this.state.handleType.map((item, i) => (
                    <div className={`col-md-3 col-12 m-2 p-2 text-center ` + (this.state.active === i ? 'alert alert-primary' : '')} onClick={() => this.addActiveClass(i)} key={i}>
                         <img src={`images/material/`+item.img+'.png'} alt="Tkanina" width="80%"/>
                     </div>
                    ))}
                </div>
            </div>
        )
    }
}