import "./Asemblay.css";
import p2 from "./images/secend.jpg";
import p3 from "./images/third.jpg";
import p1 from "./images/first.jpg";
import React, { useState} from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Asemblay({ setSelectedMode }) {
    const [selectedButton, setSelectedButton] = useState();

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
                 onClick={() => { onButtonClick(p1);setSelectedButton("refuse20")}}
                 className={selectedButton === "refuse20" ? "pointerActive" : "pointer"}
              ></button>
            </div>
            <p>Montaż bezinwazyjny standard</p>
          </div>
          <div className="coverText">
            <div className="cover" id="cover2">
              <img src={p2} height="92" width="69" alt="p2" />
              <button
               onClick={() => { onButtonClick(p2);setSelectedButton("refuse21")}}
               className={selectedButton === "refuse21" ? "pointerActive" : "pointer"}
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
                onClick={() => { onButtonClick(p1);setSelectedButton("refuse22")}}
                className={selectedButton === "refuse22" ? "pointerActive" : "pointer"}
              ></button>
            </div>
            <p>Montaż inwazyjny</p>
          </div>
        </div>
      </div>
    </>
  );
}
