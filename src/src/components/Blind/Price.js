import React from 'react';
export class Price extends React.Component {
    constructor(props) {
        super(props);

        this.state = { price: 0, qty: 0 };
        this.addBlind = this.addBlind.bind(this);
    }

    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props;

        if( typeof prop.data === 'undefined' || prop.data.price === this.state.price ) return;

        this.setState({ price: prop.data.price, qty: prop.data.qty });
        console.log( 'componentDidUpdate Price', prop );
    }

    addBlind( e ) {
        this.props.addBlind();
        e.preventDefault();
    };

    render() {
        return(
        <div className="mt-3">
            <h4 className="mb-0">Cena / ilość sztuk na aukcji</h4>
            <hr className="mt-1 mb-2"></hr>
            <div className="text-right">
                <div className="price1">
                    <small>Cena:&nbsp;</small>
                    <span>{ this.state.price }&nbsp;zł</span>
                </div>
                <div className="price">
                    <small>Wylicytuj:&nbsp;</small>
                    <span>{ this.state.qty }&nbsp;szt.</span>
                </div>
            </div>
            <div className="row mt-4 justify-content-center"> 
                <button className="btn btn-success col-5" onClick={(e) => this.addBlind(e)}>+ dodaj kolejną roletę</button> 
                <button className="btn btn-light col-5 ms-md-auto">Przejdź do aukcji</button>
            </div>
        </div>
        )
    }
}
