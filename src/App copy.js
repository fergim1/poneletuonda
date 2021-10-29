import React, { useState } from "react";
import whiteSneakerBackground from "./images/white-sneaker.png";
import Carousel from "react-elastic-carousel";
import GraySections from "./images/colors/sections/secciones.js";
import Logo from "./logo-400x400.png";
import {
  cordones,
  interiores,
  laterales,
  lenguetas,
  ojalillos,
  punteras,
  suelas,
  talones,
  trensillas,
  whiteSneaker,
} from "./images/colors/colors.js";

import "./App.css";

const breakPointsSections = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const breakPointsColors = [
  { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 6 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 },
];

export const App = () => {
  const [sectionSelected, setSectionSelected] = useState("puntera");
  const [sections, setSections] = useState({
    puntera: whiteSneaker.puntera,
    lateral: whiteSneaker.lateral,
    cordones: whiteSneaker.cordones,
    interior: whiteSneaker.interior,
    lengueta: whiteSneaker.lengueta,
    ojalillos: whiteSneaker.ojalillos,
    suela: whiteSneaker.suela,
    talon: whiteSneaker.talon,
    trensilla: whiteSneaker.trensilla,
  });

  const handleSectionSelected = (sectionSelected) => {
    setSectionSelected(sectionSelected);
  };

  const handleColorSelected = (sectionColor) => {
    setSections({
      ...sections,
      [sectionSelected]: sectionColor,
    });
  };

  const handleColorsBySection = (array) => {
    return array.map((obj, index) => {
      return (
        <div className="styling-example" key={index}>
          <img
            className="colors-img"
            src={obj.colorImg}
            alt={obj.color}
            onClick={() => handleColorSelected(obj.sectionColor)}
          />
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="logo-wrapper">
        <img src={Logo} className="logo-img" alt="Move-Now-logo" />
      </div>

      <div className="sneaker-wrapper">
        <img src={whiteSneakerBackground} alt="sneaker-background" className="sneaker-img" />
        <img src={sections.cordones} alt="cordones" className="sneaker-img" />
        <img src={sections.interior} alt="interior" className="sneaker-img" />
        <img src={sections.lateral} alt="lateral" className="sneaker-img" />
        <img src={sections.lengueta} alt="lengueta" className="sneaker-img" />
        <img src={sections.ojalillos} alt="ojalillos" className="sneaker-img" />
        <img src={sections.puntera} alt="puntera" className="sneaker-img" />
        <img src={sections.suela} alt="suela" className="sneaker-img" />
        <img src={sections.talon} alt="talon" className="sneaker-img" />
        <img src={sections.trensilla} alt="trensilla" className="sneaker-img" />
      </div>

      <div className="sections-wrapper">
        <Carousel breakPoints={breakPointsSections} pagination={false}>
          {GraySections.map((obj, index) => (
            <div className="styling-example" key={index}>
              <button
                className="section-wrapper"
                onClick={() => handleSectionSelected(obj.nombre)}
              >
                <img
                  className="sections-img"
                  src={obj.seccion}
                  alt={obj.nombre}
                />
                <p
                  className={`sections-name ${
                    sectionSelected === obj.nombre && "selected"
                  } `}
                >
                  {obj.nombre}
                </p>
              </button>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="colors-wrapper">
        <Carousel breakPoints={breakPointsColors} pagination={false}>
          {sectionSelected === "puntera" && handleColorsBySection(punteras)}

          {sectionSelected === "lateral" && handleColorsBySection(laterales)}

          {sectionSelected === "suela" && handleColorsBySection(suelas)}

          {sectionSelected === "cordones" && handleColorsBySection(cordones)}

          {sectionSelected === "interior" && handleColorsBySection(interiores)}

          {sectionSelected === "ojalillos" && handleColorsBySection(ojalillos)}

          {sectionSelected === "trensilla" && handleColorsBySection(trensillas)}

          {sectionSelected === "talon" && handleColorsBySection(talones)}

          {sectionSelected === "lengueta" && handleColorsBySection(lenguetas)}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
