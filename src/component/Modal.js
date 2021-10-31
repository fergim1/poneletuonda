import React from "react";
import { BiChevronDown } from "react-icons/bi";
import GraySections from "../images/colors/sections/secciones.js";

export const Modal = ({ handleModal, handleSectionSelected, sectionSelected, modalOpen}) => {

  const handleSelection = (name) => {
    handleSectionSelected(name);
    handleModal();
  };

  return (
    <div className={ modalOpen ? "modal-container" : 'modal-close'}>
      <div className='modal-background animate__animated animate__slideInUp'>
          <div onClick={handleModal} className="modal-wrapper-icon-close">
            <BiChevronDown className="modal-icon-close" />
          </div>
          <div className="modal-wrapper">
            {GraySections.map((obj, index) => (
              <button
                className="section-wrapper"
                onClick={() => handleSelection(obj.nombre)}
                key={index}
              >
                <img className="sections-img" src={obj.seccion} alt={obj.nombre} />
                <p
                  className={`sections-name ${ sectionSelected === obj.nombre && "modal-sections-name-selected"} `}
                >
                  {obj.nombre}
                </p>
              </button>
            ))}
          </div>
      </div>
    </div>
  );
};
