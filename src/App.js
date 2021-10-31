import React, { useState } from "react";
import whiteSneakerBackground from "./images/white-sneaker.png";
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
import { MdOutlineMenu } from 'react-icons/md'
import { Modal } from "./component/Modal";

import "./App.css";
import { SideSections } from "./component/SideSections";
import { SideOneSection } from "./component/SideOneSection";


export const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [sideSections, setSideSections] = useState(false)
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
    handleModal()
  };

  const handleSideSectionSelected = (sectionSelected) => {
    setSectionSelected(sectionSelected);
    handleSideSections()
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
        <img
          className="colors-img"
          key={index}
          src={obj.colorImg}
          alt={obj.color}
          onClick={() => handleColorSelected(obj.sectionColor)}
        />
      );
    });
  };

  const filterSection = (array) => {
    let [oneSection] = array.filter(
      (section) => section.nombre === sectionSelected
    );
    return (
      <div
        className="sections-one-selected"
        onClick={() => handleSectionSelected(oneSection.nombre)}
      >
        <p 
          className="sections-only-name"
        >
          {oneSection.nombre}
        </p>
          <MdOutlineMenu
            className='sections-icon'
          />
      </div>
    );
  };

 

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  const handleSideSections = () => {
    setSideSections(!sideSections)
  }
  

  return (
    <div className="App">
      <div className="logo-wrapper">
        <img src={Logo} className="logo-img" alt="Move-Now-logo" />
      </div>

      <div className="sneaker-wrapper">
        <div className='sneaker-wrapper-sneaker-background'>
          <img
            src={whiteSneakerBackground}
            alt="sneaker-background"
            className="sneaker-img"
          />
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
          {/* <SideOneSection
            sectionSelected={sectionSelected}
            handleSideSections={handleSideSections}
          /> */}

      </div>

      <div className="sections-wrapper">
        {filterSection(GraySections)}
      </div>

      <div className="sections-and-color-container">
          <SideOneSection
            sectionSelected={sectionSelected}
            handleSideSections={handleSideSections}
          />
        <div className='colors-wrapper-img-circle'>
          {sectionSelected === "puntera" && handleColorsBySection(punteras)}

          {sectionSelected === "lateral" && handleColorsBySection(laterales)}

          {sectionSelected === "suela" && handleColorsBySection(suelas)}

          {sectionSelected === "cordones" && handleColorsBySection(cordones)}

          {sectionSelected === "interior" && handleColorsBySection(interiores)}

          {sectionSelected === "ojalillos" && handleColorsBySection(ojalillos)}

          {sectionSelected === "trensilla" && handleColorsBySection(trensillas)}

          {sectionSelected === "talon" && handleColorsBySection(talones)}

          {sectionSelected === "lengueta" && handleColorsBySection(lenguetas)}
          <SideSections
          sideSections={sideSections}
          handleSideSectionSelected={handleSideSectionSelected}
          sectionSelected= {sectionSelected} 
        />
        </div>
      </div>
        
        {/* <SideSections
          sideSections={sideSections}
          handleSideSectionSelected={handleSideSectionSelected}
          sectionSelected= {sectionSelected} 
        /> */}
        <Modal 
          modalOpen={modalOpen}
          handleModal={handleModal} 
          handleSectionSelected={handleSectionSelected}
          sectionSelected= {sectionSelected}
        />

     
    </div>
  );
};

export default App;
