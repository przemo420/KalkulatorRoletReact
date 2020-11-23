import "./Color.css";
import Biel from "./images/01_biel.png";
import Ral from "./images/antracyt-RAL-7016.png";
import Braz from "./images/braz-RAL-8028.png";
import Krem from "./images/krem-RAL-1014.png";
import Antracyt from "./images/ok-Antracyt.png";
import DabB from "./images/ok-DabBagienny.png";
import Mahon from "./images/ok-mahon.png";
import Orzech from "./images/ok-Orzech.png";
import Sosna from "./images/ok-Sosna.png";
import Winchester from "./images/ok-Winchester.png";
import ZlotyDab from "./images/ok-ZlotyDab.png";
import SrebnyRal from "./images/srebrny-RAL-9006.png";
import ZlotyDabRal from "./images/zloty-dab-RAL8003.png";
import React, { useState } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Color({ setSelectedMode }) {
  const [selectedButton, setSelectedButton] = useState();

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
                  onClick={() => {
                    onButtonClick(Biel);
                    setSelectedButton("refuse1");
                  }}
                  className={
                    selectedButton === "refuse1" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL9016 BIEL</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color2">
                <button
                  onClick={() => {
                    onButtonClick(Ral);
                    setSelectedButton("refuse2");
                  }}
                  className={
                    selectedButton === "refuse2" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL8028 ANCTRATYT PÓŁMAT</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color3">
                <button
                  onClick={() => {
                    onButtonClick(Braz);
                    setSelectedButton("refuse3");
                  }}
                  className={
                    selectedButton === "refuse3" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL8028 BRĄZ</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color4">
                <button
                  onClick={() => {
                    onButtonClick(Krem);
                    setSelectedButton("refuse4");
                  }}
                  className={
                    selectedButton === "refuse4" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL1014 KREM PÓŁMAT</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color5">
                <button
                  onClick={() => {
                    onButtonClick(Antracyt);
                    setSelectedButton("refuse5");
                  }}
                  className={
                    selectedButton === "refuse5" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color6">
                <button
                  onClick={() => {
                    onButtonClick(Mahon);
                    setSelectedButton("refuse26");
                  }}
                  className={
                    selectedButton === "refuse26" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>ANTRACYT</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color7">
                <button
                  onClick={() => {
                    onButtonClick(Sosna);
                    setSelectedButton("refuse27");
                  }}
                  className={
                    selectedButton === "refuse27" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>SOSNA GÓRSKA</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color8">
                <button
                  onClick={() => {
                    onButtonClick(Orzech);
                    setSelectedButton("refuse28");
                  }}
                  className={
                    selectedButton === "refuse28" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>ORZECH</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color9">
                <button
                  onClick={() => {
                    onButtonClick(Winchester);
                    setSelectedButton("refuse29");
                  }}
                  className={
                    selectedButton === "refuse29" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>WINCHESTER</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color10">
                <button
                  onClick={() => {
                    onButtonClick(ZlotyDab);
                    setSelectedButton("refuse30");
                  }}
                  className={
                    selectedButton === "refuse30" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>ZŁOTY DĄB</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color11">
                <button
                  onClick={() => {
                    onButtonClick(ZlotyDabRal);
                    setSelectedButton("refuse31");
                  }}
                  className={
                    selectedButton === "refuse31" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL8003 ZŁOTY DĄB</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color12">
                <button
                  onClick={() => {
                    onButtonClick(SrebnyRal);
                    setSelectedButton("refuse32");
                  }}
                  className={
                    selectedButton === "refuse32" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>RAL9006 SREBNY PÓŁMAT</p>
            </div>
            <div className="systemColor">
              <div className="color" id="color13">
                <button
                  onClick={() => {
                    onButtonClick(DabB);
                    setSelectedButton("refuse33");
                  }}
                  className={
                    selectedButton === "refuse33" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>DĄB BAGIENNY</p>
              <p id="dop">*dopłata 30zł</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
