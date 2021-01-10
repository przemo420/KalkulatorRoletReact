import React from 'react'
import { parseUpdateEventToParent } from './helpers'

export class Installation extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
    }

    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.active == null ) {
            console.log( 'componentDidUpdate Installation' );
            this.setState({ handleType: prop.ins, active: 0 });
            this.sendUpdate( 0 );
        }
    }

    addActiveClass( i ) {
        this.setState({ active: i });
        this.sendUpdate( i );
    };

    sendUpdate = ( i ) => {
        parseUpdateEventToParent( this, {
            'installation': i
        });
    }
    render() {
        return(
            <div>
                <h4 className="mt-5">Typ montażu</h4>
                <hr></hr>
                <div className="row justify-content-center">
                    {this.state.handleType.map((item, i) => (
                    <div className={`col-md-4 col-12 text-center ` + (this.state.active === i ? 'alert alert-primary' : '')} onClick={() => this.addActiveClass(i)} key={i}>
                         <img src={`images/handle/`+item.img} alt={item.name} width="80%"/>
                         <small>{item.name}</small>
                     </div>
                    ))}
                </div>
            </div>
        )
    }
}