import React from "react";
import { IoMdClose } from 'react-icons/io'
import { AllSelections } from "./AllSelections.js";

export const Modal = ({ handleModal, handleSectionSelected, sectionSelected,}) => {

  return (
    <div className="modal animate__animated animate__slideInLeft">
      <div 
        onClick={handleModal}
        className='modal-wrapper-icon-close'
      >
        <IoMdClose
            className='modal-icon-close'
        />
      </div>
        <AllSelections
          handleSectionSelected = {handleSectionSelected}
          handleModal = {handleModal}
          sectionSelected = {sectionSelected}
        />
    </div>
  );
};
