import React from 'react'

export class Preview extends React.Component {
    constructor(props) {
        super(props);

        this.state = { blinds: [], fullPrice: 0, fullQty: 0 };
    }

    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props;

        
        if( typeof prop.data === 'undefined' || previousProps === this.props) return;

        console.log( 'Preview update', prop.data.blinds );

        this.setState({
            blinds: prop.data.blinds,
            fullPrice: prop.data.fullPrice,
            fullQty: prop.data.fullQty,
            previewImage: prop.data.previewImage
        })
    }

    render() {
        return(
        <div class="fixed">
            <div className="p-4 text-center leftSide">
                <img src="images/bezinwazyjne.png" alt="Roleta plisowana" width="100%" id="previewFrame"/>
                <div id="previewBlind" style={{ 
                    backgroundImage: `url(images/color/`+this.state.previewImage+')'
                }}></div>
            </div>
            <div className="p-4 leftSide mt-5">
                <div className="pr-5 leftSide mb-2 text-right">
                    <div className="price1">
                        <small>Cena:&nbsp;</small>
                        <span>{ (this.state.fullPrice).toFixed(2) }&nbsp;zł</span>
                    </div>
                    <div className="price">
                        <small>Wylicytuj:&nbsp;</small>
                        <span>{ this.state.fullQty }&nbsp;szt.</span>
                    </div>
                </div>
            {this.state.blinds.map((item, i) => (
                <div className="alert alert-primary" key={ i }>Roleta { i + 1 } - { item.blindMaterial } - { item.blindColor } - { item.price } zł - { item.qty } szt.</div>
            ))}
            </div>
        </div>
        )
    }
}