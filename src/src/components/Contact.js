import React from 'react';
export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
        this.form = [
            { 'name': "Imie", 'type': "text", 'id': "name" },
            { 'name': "Nazwisko", 'type': "text", 'id': "surname" },
            { 'name': "Adres email", 'type': "email", 'id': "email" },
            { 'name': "Numer telefonu", 'type': "text", 'id': "phone" },
            { 'name': "Nick allegro", 'type': "text", 'id': "allegro" },

            { 'name': "Wyrażam zgodę na przetwarzanie danych", 'type': 'checkbox', 'id': 'rodo' },
            { 'name': "Potwierdzam zgodność zamówienia", 'type': 'checkbox', 'id': 'confirm' },
            { 'name': "Nie odstąpię od umowy w ciągu 14 dni", 'type': 'checkbox', 'id': 'complaint' }, 
            { 'name': "Wyślij kopie zamówienia do mnie na maila", 'type': 'checkbox', 'id': 'copy' }
        ];
    }
    componentDidUpdate( previousProps, previousState ) {
        /*const prop = this.props.config;

        if( prop.load && previousProps !== this.props ) {
            console.log( 'componentDidUpdate Contact' );
            this.setState({ handleType: prop.ins });
        }*/
    }

    addActiveClass( i ) {
        this.setState({ active: i });
    };

    render() {
        return(
        <div>
            <h4 className="mt-5">Wyślij wycenę na maila</h4>
            <hr></hr>
            <div className="row">
            { this.form.map((item, i) => (
                <div className={ item.type !== 'checkbox' ? "col-6" : "col-12" } key={ i }>
                <div className={ item.type !== 'checkbox' ? "mb-3" : '' }>
                    <input type={ item.type } className={ item.type !== 'checkbox' ? "form-control" : "" } id={ item.id } placeholder={ item.name } aria-describedby="emailHelp"/>
                    { item.type === 'checkbox' ? (<label htmlFor={ item.id } className="form-label">&nbsp;{ item.name }</label>) : '' }
                </div>
                </div>
            )) }
            </div>
            <div className="row justify-content-center">
                <input type="submit" className="btn btn-primary mt-4 mb-1 col-11" value="Wyślij"/>
            </div>
        </div>
        )
    }
}