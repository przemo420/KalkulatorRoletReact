import "./App.css";
import Show from "./Show";
import p4 from "./images/p4.jpg";
import Price from "./Price";
import Date from "./Date";
import Fabric from "./Fabric";
import Asemblay from "./Asemblay";
import Color from "./Color";
import Email from "./Email";
import PriceQuantity from "./PriceQuantity";
import React, { useState } from "react";
export default function App() {
  const [selectedMode, setSelectedMode] = useState(p4);
  return (
    <>
      <body>
        <div className="all_holder">
          <div className="left_column">
            <Show selectedMode={selectedMode} />
            <Price />
          </div>
          <div className="right_column">
            <Date />
            <Asemblay setSelectedMode={setSelectedMode} />
            <Fabric setSelectedMode={setSelectedMode} />
            <Color setSelectedMode={setSelectedMode} />
            <PriceQuantity />
            <Email />
          </div>
        </div>
      </body>
    </>
  );
}
