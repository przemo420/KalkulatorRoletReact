import React from 'react'
import Image from 'react-image-webp';
import { parseUpdateEventToParent } from './helpers'

export class Installation extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
    }

    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.handleType.length === 0 ) {
            this.setState({ handleType: prop.ins });
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
                <h4 className="mb-0">Typ montażu</h4>
                <hr className="mt-1 mb-3"></hr>
                <div className="row justify-content-center text-center">
                    {this.state.handleType.map((item, i) => (
                    <div className={`col-md-4 col-12 form-pick ` + (this.state.active === i ? 'picked' : '')} onClick={() => this.addActiveClass(i)} key={i}>
                        <Image
                            src={`images/handle/`+item.img+'.jpg'}
                            webp={`images/handle/`+item.img+'.webp'}
                            style={{'width': '60%'}}
                        />
                        <p className={ `pick-name ` + ( item.price ? 'charge' : '' )} data-charge={ `* dopłata ` + item.price + ` zł` }>{ item.name }</p>
                     </div>
                    ))}
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}