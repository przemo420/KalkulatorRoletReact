import React from 'react';
export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
        this.form = [
            { 'name': "Imie", 'type': "text", 'id': "name" },
            { 'name': "Nazwisko", 'type': "text", 'id': "surname" },
            { 'name': "Email", 'type': "email", 'id': "email" },
            { 'name': "Numer telefonu", 'type': "text", 'id': "phone" },
            { 'name': "Nazwa użytkownika allegro", 'type': "text", 'id': "allegro" },

            { 'name': "Wyrażam zgodę na przetwarzanie danych", 'type': 'checkbox', 'id': 'rodo' },
            { 'name': "Potwierdzam zgodność zamówienia", 'type': 'checkbox', 'id': 'confirm' },
            { 'name': "Nie odstąpię od umowy w ciągu 14 dni", 'type': 'checkbox', 'id': 'complaint' }, 
            { 'name': "Wyślij kopie zamówienia do mnie na maila", 'type': 'checkbox', 'id': 'copy' }
        ];
    }
    componentDidUpdate( previousProps, previousState ) {
        const prop = this.props.config;

        if( prop.load && previousProps !== this.props ) {
            console.log( 'componentDidUpdate' );
            this.setState({ handleType: prop.ins });
        }
    }

    addActiveClass( i ) {
        this.setState({ active: i });
    };

    render() {
        return(
        <div>
            <h4 className="mt-5">Wyślij ofertę</h4>
            <hr></hr>
            { this.form.map((item, i) => (
                <div className="mb-3">
                    <input type={ item.type } className={ item.type !== 'checkbox' ? "form-control" : "" } id={ item.id } placeholder={ item.name } aria-describedby="emailHelp"/>
                    { item.type === 'checkbox' ? (<label for={ item.id } className="form-label">&nbsp;{ item.name }</label>) : '' }
                </div>
            )) }
            <input type="submit" className="btn btn-primary mb-3" value="Wyślij"/>
        </div>
        )
    }
}