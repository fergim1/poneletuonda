import React from "react";
import GraySections from "../images/colors/sections/secciones.js";

export const SideSections = ({
  handleSideSectionSelected,
  sectionSelected,
  sideSections,
}) => {
  return (
    <div
      className={
        sideSections
          ? "side-sections-container animate__animated animate__slideInUp"
          : "side-sections-close"
      }
    >
      {GraySections.map((obj, index) => (
        <button
          className="side-sections-wrapper"
          onClick={() => handleSideSectionSelected(obj.nombre)}
          key={index}
        >
          <img
            className="side-sections-img"
            src={obj.seccion}
            alt={obj.nombre}
          />
          <p
            className={`side-sections-name ${
              sectionSelected === obj.nombre && "side-sections-name-selected"
            } `}
          >
            {obj.nombre}
          </p>
        </button>
      ))}
    </div>
  );
};
