import "./Fabric.css";
import P201 from "./images/P201.jpg";
import P202 from "./images/P202.jpg";
import P203 from "./images/P203.jpg";
import P204 from "./images/P206.jpg";
import P205 from "./images/P205.jpg";
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
import P218 from "./images/P218.jpg";
import React, { useState } from "react";
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
              <div class="fabric" id="p201">
                <button
                  onClick={() => {
                    onButtonClick(P201);
                    setSelectedButton("refuse8");
                  }}
                  className={
                    selectedButton === "refuse8" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P201</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p202">
                <button
                  onClick={() => {
                    onButtonClick(P202);
                    setSelectedButton("refuse9");
                  }}
                  className={
                    selectedButton === "refuse9" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P202</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p203">
                <button
                  onClick={() => {
                    onButtonClick(P203);
                    setSelectedButton("refuse10");
                  }}
                  className={
                    selectedButton === "refuse10" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P203</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p204">
                <button
                  onClick={() => {
                    onButtonClick(P204);
                    setSelectedButton("refuse11");
                  }}
                  className={
                    selectedButton === "refuse11" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P204</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p205">
                <button
                  onClick={() => {
                    onButtonClick(P205);
                    setSelectedButton("refuse12");
                  }}
                  className={
                    selectedButton === "refuse12" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P205</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p206">
                <button
                  onClick={() => {
                    onButtonClick(P206);
                    setSelectedButton("refuse13");
                  }}
                  className={
                    selectedButton === "refuse13" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P206</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p207">
                <button
                  onClick={() => {
                    onButtonClick(P207);
                    setSelectedButton("refuse14");
                  }}
                  className={
                    selectedButton === "refuse14" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P207</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p208">
                <button
                  onClick={() => {
                    onButtonClick(P208);
                    setSelectedButton("refuse15");
                  }}
                  className={
                    selectedButton === "refuse15" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P208</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p209">
                <button
                  onClick={() => {
                    onButtonClick(P209);
                    setSelectedButton("refuse16");
                  }}
                  className={
                    selectedButton === "refuse16" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P209</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p210">
                <button
                  onClick={() => {
                    onButtonClick(P210);
                    setSelectedButton("refuse17");
                  }}
                  className={
                    selectedButton === "refuse17" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P210</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p211">
                <button
                  onClick={() => {
                    onButtonClick(P211);
                    setSelectedButton("refuse18");
                  }}
                  className={
                    selectedButton === "refuse18" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P211</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p212">
                <button
                  onClick={() => {
                    onButtonClick(P212);
                    setSelectedButton("refuse19");
                  }}
                  className={
                    selectedButton === "refuse19" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P212</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p213">
                <button
                  onClick={() => {
                    onButtonClick(P213);
                    setSelectedButton("refuse20");
                  }}
                  className={
                    selectedButton === "refuse20" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P213</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p214">
                <button
                  onClick={() => {
                    onButtonClick(P214);
                    setSelectedButton("refuse21");
                  }}
                  className={
                    selectedButton === "refuse21" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P214</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p215">
                <button
                  onClick={() => {
                    onButtonClick(P215);
                    setSelectedButton("refuse22");
                  }}
                  className={
                    selectedButton === "refuse22" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P215</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p216">
                <button
                  onClick={() => {
                    onButtonClick(P216);
                    setSelectedButton("refuse23");
                  }}
                  className={
                    selectedButton === "refuse23" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P216</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p217">
                <button
                  onClick={() => {
                    onButtonClick(P217);
                    setSelectedButton("refuse24");
                  }}
                  className={
                    selectedButton === "refuse24" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P217</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="p218">
                <button
                  onClick={() => {
                    onButtonClick(P218);
                    setSelectedButton("refuse25");
                  }}
                  className={
                    selectedButton === "refuse25" ? "pointActive" : "point"
                  }
                ></button>
              </div>
              <p>P218</p>
            </div>
          </div>
          </div>
        </div>
     
    </>
  );
}
