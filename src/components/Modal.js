import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const Modal = ({ currentProj, handleModalToggle }) => {
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleModalToggle()
    }
  }

  return (
    <>
      <div className="modal-overlay" onMouseDown={() => handleOverlayClick}>
        <div ref={modalRef} className="modal-cont d-flex">
          <div>{currentProj?.title}</div>
          <FontAwesomeIcon
            onClick={() => handleModalToggle()}
            icon={faTimesCircle}
            className="hover transition"
          />
        </div>
      </div>
    </>
  )
}

export default Modal
