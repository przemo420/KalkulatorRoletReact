import React from 'react';
export class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = { active: null, handleType: [] };
        this.form = [
            { 'name': "Imie", 'type': "text", 'id': "name", 'half': 1 },
            { 'name': "Nazwisko", 'type': "text", 'id': "surname", 'half': 2 },
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
            console.log( 'componentDidUpdate Contact' );
            this.setState({ handleType: prop.ins });
        }
    }

    addActiveClass( i ) {
        this.setState({ active: i });
    };

    render() {
        return(
        <div>
            <h4 className="mt-5">Wyślij wycenę na maila</h4>
            <hr></hr>
            { this.form.map((item, i) => (
                /*{ if ( i,half == 1 ) {
                    <div class="row">
                } if ( i.half ) {
                    <div class="col">
                } }*/
                <div className="mb-3">
                    <input type={ item.type } className={ item.type !== 'checkbox' ? "form-control" : "" } id={ item.id } placeholder={ item.name } aria-describedby="emailHelp"/>
                    { item.type === 'checkbox' ? (<label for={ item.id } className="form-label">&nbsp;{ item.name }</label>) : '' }
                </div>
                /*{ if ( i.half ) { 
                    </div>
                } if ( i.half == 2 ) {
                    </div>
                } }*/
            )) }
            <div className="row">
                <div className="col-12 col-md-6">
                    
                </div>
                <div className="col-12 col-md-6">
                    <input type="submit" className="btn btn-primary mb-3" value="Wyślij"/>
                </div>
            </div>
        </div>
        )
    }
}