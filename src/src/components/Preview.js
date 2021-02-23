import React from 'react';
import {isWebpSupported} from 'react-image-webp/dist/utils';

export class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.state = { blinds: [], fullPrice: 0, fullQty: 0, previewImage: 'P201' };
        this.extension = isWebpSupported() ? [ 'webp', 'webp' ] : [ 'jpg', 'png' ];

        this.removeBlind = this.removeBlind.bind(this);
    }

    removeBlind = (i) => {
        this.props.removeBlind( i );
    }
    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props;
        
        if( typeof prop.data === 'undefined' || previousProps === this.props) return;

        this.setState({
            blinds: prop.data.blinds,
            fullPrice: (prop.data.fullPrice).toFixed(2),
            fullQty: prop.data.fullQty,
            previewImage: prop.data.previewImage
        })
    }

    render() {
        return(
        <div>
            <div className="">
                <div className="p-4 text-center leftSide">
                    <img src={"images/bezinwazyjne."+this.extension[1]} alt="Roleta plisowana" width="100%" id="previewFrame"/>
                    <div id="previewBlind" style={{ 
                        backgroundImage: `url('images/color/` + this.state.previewImage + `.` + this.extension[0] + `')`
                    }}></div>
                </div>
                <div className="p-4 leftSide mt-5">
                    <div className="text-center">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#blindListContainer">Twoje zestawy rolet</button>
                    </div>

                    <div className="pr-5 leftSide mb-2 text-right">
                        <div className="price1">
                            <small>Cena:&nbsp;</small>
                            <span>{ this.state.fullPrice }&nbsp;zł</span>
                        </div>
                        <div className="price">
                            <small>Wylicytuj:&nbsp;</small>
                            <span>{ this.state.fullQty }&nbsp;szt.</span>
                        </div>
                    </div>

                    <div className="modal fade" id="blindListContainer" tabIndex="-1" aria-labelledby="blindListLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="blindListLabel">Twoje rolety</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                {this.state.blinds.length > 0 ?
                                this.state.blinds.map((item, i) => (
                                    <div className="alert alert-primary" key={ i }>
                                        Roleta { i + 1 } - { item.blindMaterial } - { item.blindColor } - { item.price } zł - { item.qty } szt.
                                        
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.removeBlind(i)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                ))
                                :
                                <div>Nie dodałeś jeszcze żadnej rolety.</div>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}