import "./Date.css";
import React from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
    };
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }
  handleHeightChange(event) {
    this.setState({ height: event.target.value });
  }
  handleWidthChange(event) {
    this.setState({ width: event.target.value });
  }

  render() {
    return (
      <>
        <div className="dataSection">
          <div className="textSection">
            <h1>Kalkulator rolet plisowanych</h1>
            <h4>
              Kalkulator pokazuje cenę i ilość sztuk jaką należy wpisać polu Kup
              Teraz na Alegro
            </h4>
            <h2>Wymiary</h2>
          </div>
          <hr className="dateHr" />
          <form>
            <div className="inputData">
              <input
                type="text"
                className="blind"
                value={this.state.width}
                onChange={this.handleWidthChange}
                placeholder="Szerokość plisy"
              ></input>
              <h5 className="firstH5">minimalna szerokość rolety 50cm</h5>
            </div>
            <div className="inputData blind1">
              <input
                type="text"
                className="blind"
                value={this.state.height}
                onChange={this.handleHeightChange}
                placeholder="Wysokość plisy"
              ></input>
              <h5 className="secendH5">minimalna wysokość rolety 50cm</h5>
            </div>
          </form>
        </div>
      </>
    );
  }
}
