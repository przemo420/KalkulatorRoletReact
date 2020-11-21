import "./Color.css";
import P201 from "./images/P201.jpg";
import P202 from "./images/P202.jpg";
import P203 from "./images/P203.jpg";
import P204 from "./images/P206.jpg";
import P205 from "./images/P205.jpg";
import P206 from "./images/P206.jpg";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Color({ setSelectedMode }) {
  const onButtonClick = (mode) => {
    setSelectedMode(mode);
  };
  return (
    <>
      <div className="colorSection">
        <h2>Kolor Systemu</h2>
        <hr className="colorHr" />
        <div className="centerDiv">
          <div className="chooseColor">
            <div className="systemColor">
              <div className="color" id="color1">
                <button
                  onClick={() => onButtonClick(P201)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color2">
                <button
                  onClick={() => onButtonClick(P202)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color3">
                <button
                  onClick={() => onButtonClick(P203)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color4">
                <button
                  onClick={() => onButtonClick(P204)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color5">
                <button
                  onClick={() => onButtonClick(P205)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color6">
                <button
                  onClick={() => onButtonClick(P206)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
              <p id="dop">*dopłata 30zł</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
