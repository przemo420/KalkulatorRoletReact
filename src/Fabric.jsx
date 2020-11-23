import "./Fabric.css";
import P206 from "./images/P206.jpg";
import P207 from "./images/P207.jpg";
import P208 from "./images/P208.jpg";
import P209 from "./images/P209.jpg";
import P210 from "./images/P210.jpg";
import P211 from "./images/P211.jpg";
import P212 from "./images/P212.jpg";
import P213 from "./images/P213.jpg";
import P214 from "./images/P214.jpg";
import P215 from "./images/P215.jpg";
import P216 from "./images/P216.jpg";
import P217 from "./images/P217.jpg";
import React, { useState} from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Fabric({ setSelectedMode }) {
  const [selectedButton, setSelectedButton] = useState();

  const onButtonClick = (mode) => {
    setSelectedMode(mode);
  };
  return (
    <>
      <div className="fabricSection">
        <h2>Tkanina</h2>
        <hr className="fabricHr" />
        <div className="centerDiv">
          <div className="chooseFabric">
            <div class="fabricColor">
              <div class="fabric" id="fabric1">
                <button
                  onClick={() => { onButtonClick(P206);setSelectedButton("refuse8")}}
                  className={selectedButton === "refuse8" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric2">
                <button
                  onClick={() => { onButtonClick(P207);setSelectedButton("refuse9")}}
                  className={selectedButton === "refuse9" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric3">
                <button
                  onClick={() => { onButtonClick(P208);setSelectedButton("refuse10")}}
                  className={selectedButton === "refuse10" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric4">
                <button
                 onClick={() => { onButtonClick(P209);setSelectedButton("refuse11")}}
                 className={selectedButton === "refuse11" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric5">
                <button
                 onClick={() => { onButtonClick(P210);setSelectedButton("refuse12")}}
                 className={selectedButton === "refuse12" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric6">
                <button
                   onClick={() => { onButtonClick(P211);setSelectedButton("refuse13")}}
                   className={selectedButton === "refuse13" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
          </div>
          <div className="chooseFabric">
            <div className="fabricColor">
              <div className="fabric" id="fabric7">
                <button
                   onClick={() => { onButtonClick(P212);setSelectedButton("refuse14")}}
                   className={selectedButton === "refuse14" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric8">
                <button
                 onClick={() => { onButtonClick(P213);setSelectedButton("refuse15")}}
                 className={selectedButton === "refuse15" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric9">
                <button
                   onClick={() => { onButtonClick(P214);setSelectedButton("refuse16")}}
                   className={selectedButton === "refuse16" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric10">
                <button
                   onClick={() => { onButtonClick(P215);setSelectedButton("refuse17")}}
                   className={selectedButton === "refuse17" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric11">
                <button
                   onClick={() => { onButtonClick(P216);setSelectedButton("refuse18")}}
                   className={selectedButton === "refuse18" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric12">
                <button
                   onClick={() => { onButtonClick(P217);setSelectedButton("refuse19")}}
                   className={selectedButton === "refuse19" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
