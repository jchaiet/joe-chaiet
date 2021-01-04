import React, { useState, useEffect, useRef } from 'react'

import { FiX } from 'react-icons/fi';

import './ImagesModal.scss';

export default function ImagesModal(props) {
  const { image, setShowImagesModal, showImagesModal } = props;

  return (
    <div className="modal modal--images">
      <div className="modal__header modal__header--images">
        <h3>Images</h3>
        <button onClick={() => setShowImagesModal(false)} >
          <FiX />
        </button>
        
      </div>
      <div className="modal__content modal__content--images">
        <img src={image} alt="projects" />
      </div>
    </div>
  )
}
