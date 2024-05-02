import style from "../Modals/Modal.module.css"

import React, { useEffect, useRef } from 'react';

function Modal(props) {
    const modalContainerRef = useRef(null);
  
    const handleCloseModal = () => {
      props.onClose();
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (props.trigger && modalContainerRef.current && event.target === modalContainerRef.current) {
          handleCloseModal();
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [props]);
  
    return props.trigger ? (
      <div className={style.modalContainer} ref={modalContainerRef}>
        <div className={style.modal}>
          {props.children}
        </div>
      </div>
    ) : null;
  }
  
  export default Modal;