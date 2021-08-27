import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useCustomHook } from './context'
const Modal = () => {

  const {isModalOn, closeModel} = useCustomHook();

  return <div className = {`${(isModalOn)? "modal-overlay show-modal":"modal-overlay"}`}>
    <div className = 'modal-container'>
      <h3>Modal Content</h3>
      <button className = "close-modal-btn" onClick = {closeModel}>
        <FaTimes/>
      </button>
    </div>

  </div>
}

export default Modal
