import React from "react";
import GraySections from "../images/colors/sections/secciones.js";

export const SideOneSection = ({ sectionSelected, handleSideSections }) => {

  let [oneSection] = GraySections.filter(
    (section) => section.nombre === sectionSelected
  );

  return (
    <div
      className="sections-side-one-selected-desktop"
      onClick={handleSideSections}
    >
      {/* <MdOutlineMenu className="sections-side-icon" /> */}
      <div className='sections-side-one-selected-img-p'>
        <img
          className="sections-side-img"
          src={oneSection.seccion}
          alt={oneSection.nombre}
        />
        <p className="sections-only-name-desktop">{oneSection.nombre}</p>
      </div>
    </div>
  );
};
