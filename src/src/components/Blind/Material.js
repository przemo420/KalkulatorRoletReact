import React from 'react';
import Image from 'react-image-webp';
import { parseUpdateEventToParent } from './helpers'

export class Material extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
    }
    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.handleType.length === 0 ) {
            this.setState({ handleType: prop.mat });
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
            <div className="border-pick mt-3">
                <h4 className="mb-0">Kolor systemu</h4>
                <hr className="mt-1 mb-2"></hr>
                <div className="row justify-content-center text-center">
                    {this.state.handleType.map((item, i) => (
                    <div className='col-md-2 col-4 m-0 p-0' onClick={() => this.addActiveClass(i)} key={i}>
                        <div className={ "m-2 p-2 form-pick " + (this.state.active === i ? 'picked' : '')}>
                            <Image
                                src={`images/material/`+item.img+'.png'}
                                webp={`images/material/`+item.img+'.png'}
                            />
                        </div>
                        <p className={ `pick-name ` + ( item.price > 0 ? 'charge' : '' )} data-charge={ `* dopłata ` + item.price + ` zł` }>{ item.name }</p>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}