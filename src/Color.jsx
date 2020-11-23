<<<<<<< HEAD
import "./Color.css";
import P201 from "./images/P201.jpg";
import P202 from "./images/P202.jpg";
import P203 from "./images/P203.jpg";
import P204 from "./images/P206.jpg";
import P205 from "./images/P205.jpg";
import P206 from "./images/P206.jpg";
import React, { useState} from "react";
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
                  onClick={() => { onButtonClick(P201);setSelectedButton("refuse1")}}
                  className={selectedButton === "refuse1" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color2">
                <button
                   onClick={() => { onButtonClick(P202);setSelectedButton("refuse2")}}
                   className={selectedButton === "refuse2" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color3">
                <button
                   onClick={() => { onButtonClick(P203);setSelectedButton("refuse3")}}
                   className={selectedButton === "refuse3" ? "pointActive" : "point"}
                
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color4">
                <button
                   onClick={() => { onButtonClick(P204);setSelectedButton("refuse4")}}
                   className={selectedButton === "refuse4" ? "pointActive" : "point"}
              
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color5">
                <button
                   onClick={() => { onButtonClick(P205);setSelectedButton("refuse5")}}
                   className={selectedButton === "refuse5" ? "pointActive" : "point"}
                  
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color6">
                <button
                   onClick={() => { onButtonClick(P206);setSelectedButton("refuse6")}}
                   className={selectedButton === "refuse6" ? "pointActive" : "point"}
                
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
=======
import "./Color.css";
import P201 from "./images/P201.jpg";
import P202 from "./images/P202.jpg";
import P203 from "./images/P203.jpg";
import P204 from "./images/P206.jpg";
import P205 from "./images/P205.jpg";
import P206 from "./images/P206.jpg";
import React, { useState} from "react";
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
                  onClick={() => { onButtonClick(P201);setSelectedButton("refuse1")}}
                  className={selectedButton === "refuse1" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color2">
                <button
                   onClick={() => { onButtonClick(P202);setSelectedButton("refuse2")}}
                   className={selectedButton === "refuse2" ? "pointActive" : "point"}
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color3">
                <button
                   onClick={() => { onButtonClick(P203);setSelectedButton("refuse3")}}
                   className={selectedButton === "refuse3" ? "pointActive" : "point"}
                
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color4">
                <button
                   onClick={() => { onButtonClick(P204);setSelectedButton("refuse4")}}
                   className={selectedButton === "refuse4" ? "pointActive" : "point"}
              
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color5">
                <button
                   onClick={() => { onButtonClick(P205);setSelectedButton("refuse5")}}
                   className={selectedButton === "refuse5" ? "pointActive" : "point"}
                  
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="systemColor">
              <div className="fabric" id="color6">
                <button
                   onClick={() => { onButtonClick(P206);setSelectedButton("refuse6")}}
                   className={selectedButton === "refuse6" ? "pointActive" : "point"}
                
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
>>>>>>> 389fe81... add hooks improve css
