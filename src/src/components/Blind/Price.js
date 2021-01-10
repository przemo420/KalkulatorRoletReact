import React from 'react';
export class Price extends React.Component {
    constructor(props) {
        super(props);

        this.state = { price: 0, qty: 0 };
    }

    render() {
        return(
            <div>
            <h4 className="mt-5">Cena / ilość sztuk na aukcji</h4>
            <hr></hr>
            <div>
                Cena: <span>{ this.state.price } zł</span>
            </div>
            <div>
                Wylicytuj: <span>{ this.state.qty } szt.</span>
            </div>
            <div> 
                <button className="btn btn-success">+ dodaj kolejną roletę</button> 
                <button className="btn">Przejdź do aukcji</button>
            </div>
            </div>
        )
    }
}
