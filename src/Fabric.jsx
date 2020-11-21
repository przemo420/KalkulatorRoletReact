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
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap"
  rel="stylesheet"
/>;
export default function Fabric({ setSelectedMode }) {
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
                  onClick={() => onButtonClick(P206)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric2">
                <button
                  onClick={() => onButtonClick(P207)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric3">
                <button
                  onClick={() => onButtonClick(P208)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric4">
                <button
                  onClick={() => onButtonClick(P209)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric5">
                <button
                  onClick={() => onButtonClick(P210)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric6">
                <button
                  onClick={() => onButtonClick(P211)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
          </div>
          <div className="chooseFabric">
            <div className="fabricColor">
              <div className="fabric" id="fabric7">
                <button
                  onClick={() => onButtonClick(P212)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric8">
                <button
                  onClick={() => onButtonClick(P213)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric9">
                <button
                  onClick={() => onButtonClick(P214)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric10">
                <button
                  onClick={() => onButtonClick(P215)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric11">
                <button
                  onClick={() => onButtonClick(P216)}
                  className="point"
                ></button>
              </div>
              <p>Kolor1</p>
            </div>
            <div className="fabricColor">
              <div className="fabric" id="fabric12">
                <button
                  onClick={() => onButtonClick(P217)}
                  className="point"
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
