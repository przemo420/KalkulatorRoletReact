import React from 'react'

export class Material extends React.Component {
    constructor(props) {
        super(props);
        this.handleType = [
            { 'img': 'antracyt', 'price': 0 },
            { 'img': 'antracyt2', 'price': 0 },
            { 'img': 'biel', 'price': 0 },
            { 'img': 'braz', 'price': 0 },
            { 'img': 'dabbagienny', 'price': 0 },
            { 'img': 'krem', 'price': 0 },
            { 'img': 'mahon', 'price': 0 },
            { 'img': 'orzech', 'price': 0 },
            { 'img': 'sosna', 'price': 0 },
            { 'img': 'winchester', 'price': 0 },
            { 'img': 'zlotydab', 'price': 0 },
            { 'img': 'zlotydab2', 'price': 0 }
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
                <h4 className="mt-5">Tkanina</h4>
                <hr></hr>
                <div className="row justify-content-center">
                    {this.handleType.map((item, i) => (
                    <div className={`col-md-3 col-12 m-2 p-2 text-center ` + (this.state.active === i ? 'alert alert-primary' : '')} onClick={() => this.addActiveClass(i)} key={i}>
                         <img src={`images/material/`+item.img+'.png'} alt="Tkanina" width="80%"/>
                     </div>
                    ))}
                </div>
            </div>
        )
    }
}