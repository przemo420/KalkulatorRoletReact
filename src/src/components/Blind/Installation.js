import React from 'react'
export class Installation extends React.Component {
    constructor(props) {
        super(props)
        this.handleType = [
            {'name': 'Montaż bezinwazyjny standard', 'img': require( '../../images/handle/first.jpg' ), 'price': 0},
            {'name': 'Montaż bezinwazyjny do okien z nawiewnikiem', 'img': require( '../../images/handle/secend.jpg' ), 'price': 0},
            {'name': 'Montaż inwazyjny', 'img': require( '../../images/handle/third.jpg' ), 'price': 0}
        ];

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

    }

    render() {
        return(
            <div>
                <h4 className="mt-5">Typ montażu</h4>
                <hr></hr>
                <div class="row justify-content-center">
                    {this.handleType.map((item, i) => (
                       <div class="col-md-4 col-12 text-center alert alert-primary" onClick={this.handleChange}>
                           <img src={item.img} alt={item.name} width="80%"/>
                           <small>{item.name}</small>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}