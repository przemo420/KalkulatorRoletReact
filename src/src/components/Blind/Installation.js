import React from 'react'

export class Installation extends React.Component {
    constructor(props) {
        super(props);
        this.handleType = [
            {'name': 'Montaż bezinwazyjny standard', 'img': 'first.jpg', 'price': 0},
            {'name': 'Montaż bezinwazyjny do okien z nawiewnikiem', 'img': 'secend.jpg', 'price': 0},
            {'name': 'Montaż inwazyjny', 'img': 'third.jpg', 'price': 0}
        ];

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null };
    }

    addActiveClass( i ) {
        this.setState({ active: i });
    };
    render() {
        return(
            <div>
                <h4 className="mt-5">Typ montażu</h4>
                <hr></hr>
                <div className="row justify-content-center">
                    {this.handleType.map((item, i) => (
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