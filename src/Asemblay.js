import "./Asemblay.css";
import React from "react";
import p1 from "./images/p1.jpg";
import p2 from "./images/p2.jpg";
import p3 from "./images/p3.jpg";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Asemblay({ setSelectedMode }) {
  const onButtonClick = (mode) => {
    setSelectedMode(mode);
  };
  return (
    <>
      <div className="asembleySection">
        <h2>Typ Montażu</h2>
        <hr className="asemblayHr" />
        <div className="chooseCover">
          <div className="coverText">
            <div className="cover" id="cover1">
              <img src={p1} height="92" width="69" alt="p1" />
              <button
                onClick={() => onButtonClick(p1)}
                className="pointer"
              ></button>
            </div>
            <p>Montaż bezinwazyjny standard</p>
          </div>
          <div className="coverText">
            <div className="cover" id="cover2">
              <img src={p2} height="92" width="69" alt="p2" />
              <button
                onClick={() => onButtonClick(p2)}
                className="pointer"
              ></button>
            </div>
            <p>
              Montaż
              <br />
              bezinwazyjny do&nbsp;okien z&nbsp;nawiewnikiem
            </p>
          </div>
          <div className="coverText">
            <div className="cover" id="cover3">
              <img src={p3} height="92" width="69" alt="p3" />
              <button
                onClick={() => onButtonClick(p3)}
                className="pointer"
              ></button>
            </div>
            <p>Montaż inwazyjny</p>
          </div>
        </div>
      </div>
    </>
  );
}
