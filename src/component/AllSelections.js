import React from "react";
import GraySections from "../images/colors/sections/secciones.js";

export const AllSelections = ({ handleSectionSelected, handleModal, sectionSelected }) => {
  const handleSelection = (name) => {
    handleSectionSelected(name);
    handleModal();
  };

  return (
    <div className="modal-wrapper">
      {GraySections.map((obj, index) => (
        <button
          className="section-wrapper"
          onClick={() => handleSelection(obj.nombre)}
          key={index}
        >
          <img className="sections-img" src={obj.seccion} alt={obj.nombre} />
          <p
            className={`sections-name ${ sectionSelected === obj.nombre && "selected"} `}
          >
            {obj.nombre}
          </p>
        </button>
      ))}
    </div>
  );
};
