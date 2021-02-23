import React from 'react';
import Image from 'react-image-webp';
import { parseUpdateEventToParent } from './helpers';

export class Color extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [], bImgUrl: 'images/color/' };
    }
    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( this.state.active == null ) {
            console.log( 'componentDidUpdate Color' );
            this.setState({ handleType: prop.color, active: 0 });
            this.sendUpdate( 0 );
        }
    }

    addActiveClass( i ) {
        //jQuery('#previewBlind').css( 'background-image', this.state.bImgUrl + this.state.handleType[ i ].img );

        this.setState({ active: i });
        this.sendUpdate( i );
    };

    sendUpdate = ( i ) => {
        parseUpdateEventToParent( this, {
            'color': i
        }); 
    }
    render() {
        const renderColorList = ()=>{
            if( typeof this.state.handleType === 'object' && this.state.handleType.length ) {
                return this.state.handleType.map((item, i) => (
                    <div className='col-md-2 col-4 m-0 p-0' onClick={() => this.addActiveClass(i)} key={i}>
                        <div className={ "m-2 p-2 form-pick " + (this.state.active === i ? 'picked' : '')}>
                            <Image
                                src={this.state.bImgUrl+item.img+'.jpg'}
                                webp={this.state.bImgUrl+item.img+'.webp'}
                            />
                        </div>
                        <p className={ `pick-name ` + ( item.price > 0 ? 'charge' : '' )} data-charge={ `* dopłata ` + item.price + ` zł` }>{ item.name }</p>
                    </div>
                ));
            }

            return ('');
        }
        return(
            <div className="border-pick mt-3">
                <h4 className="mb-0">Tkanina</h4>
                <hr className="mt-1 mb-2"></hr>
                <div className="row justify-content-center text-center">
                    { renderColorList() }
                </div>
            </div>
        )
    }
}