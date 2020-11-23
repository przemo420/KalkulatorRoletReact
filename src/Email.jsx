import "./Email.css";
import React from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default class Email extends React.Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      noname: "",
      email: "",
      telNumber: "",
      allegro: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNonameChange = this.handleNonameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handletelNumberChange = this.handletelNumberChange.bind(this);
    this.handleAllegroChange = this.handleAllegroChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleNonameChange(event) {
    this.setState({ noname: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handletelNumberChange(event) {
    this.setState({ telNumber: event.target.value });
  }
  handleAllegroChange(event) {
    this.setState({ allegro: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      "Name" + this.state.name,
      "Noname" + this.state.noname,
      "Emal" + this.state.email,
      "Phone Number" + this.state.telNumber,
      "Allegro" + this.state.allegro
    );
  }
  render() {
    const { loading } = this.state;
    return (
     
      <>
        <div className="emailSection">
          <h2>Wyślij ofertę</h2>
          <hr className="emailHr" />
          <form className="emailForm" onSubmit={this.handleSubmit}>
            <div className="takeForm">
              <div className="inputForms">
                <input
                  className="inputEmail"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  placeholder="Imie"
                ></input>
                <input
                  className="inputEmail"
                  type="text"
                  value={this.state.noname}
                  onChange={this.handleNonameChange}
                  placeholder="Nazwisko"
                ></input>
                <input
                  className="inputEmail"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Email"
                ></input>
              </div>
              <div className="inputForms">
                <input
                  className="inputEmail"
                  type="text"
                  value={this.state.telNumber}
                  onChange={this.handletelNumberChange}
                  placeholder="Numer Telefonu"
                ></input>
                <input
                  className="inputEmail"
                  type="text"
                  value={this.state.allegro}
                  onChange={this.handleAllegroChange}
                  placeholder="Nazwa użytkownika na Allegro"
                ></input>
              </div>
            </div>
            <div class="checkboxForms">
              <label>
                <input type="checkbox" />
                <p>Wyrażam zgodę na przetwarzanie danych</p>
              </label>
              <label>
                <input type="checkbox" />
                <p>Potwierdzam zgodność zamówienia</p>
              </label>
              <label>
                <input type="checkbox" />
                <p>Nie odstąpię od umowy w ciągu 14 dni</p>
              </label>
              <label>
                <input type="checkbox" />
                <p>Wyślij kopie zamówienia do mnie na maila</p>
              </label>
            </div>
            <button className="sendEmail" type="submit" onClick={this.fetchData} disabled={loading}>
            {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "20px",fontSize:"24px",color:"black" }}
            />
          )}
             {loading}<h1>WYŚLIJ</h1> <div className="emailPlain"></div>
            </button>
          </form>
        </div>
      </>
    );
  }
}

