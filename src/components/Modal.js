import React, { useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import Carousel from "./Carousel.js"
import { ModalWrapper } from "../styles/styles.js"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const Modal = ({ currentProj, handleModalToggle, isHome }) => {
  const modalRef = useRef(null)
  const carouselRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (
      !modalRef.current.contains(event.target) ||
      (!modalRef.current.contains(event.target) &&
        carouselRef.current.contains(event.target))
    ) {
      handleModalToggle()
    }
  }

  console.log(isHome)

  return (
    <ModalWrapper>
      <div
        className={isHome ? "modal-overlay-home" : "modal-overlay"}
        onMouseDown={handleOverlayClick}
      >
        <div ref={modalRef} className="modal">
          <div
            className="flex mt-1"
            style={{ width: "100%", position: "relative" }}
          >
            <FontAwesomeIcon
              onClick={() => handleModalToggle()}
              icon={faTimesCircle}
              className="hover transition modal-x"
            />
            <div
              className="top-modal flex"
              style={{
                width: "100%",
                position: "relative",
                justifyContent: "space-between",
              }}
            >
              <div
                className="modal-title-and-badges flex w-2/5"
                style={{ paddingRight: "1vw" }}
              >
                <div className="flex">
                  <p className="modal-title">{currentProj?.title}</p>
                </div>
                <a
                  href={currentProj?.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-repo transition hover"
                >
                  View Repo
                  <OpenInNewIcon style={{ height: "2.5vh" }} />
                </a>
                <ul className="flex gap-2">
                  {currentProj.builtWithArray.map((item, index) => (
                    <li key={index}>
                      <span
                        className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                        style={{ backgroundColor: "#d1c5b6" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  fontSize: "1.9vh",
                  alignItems: "center",
                }}
                className="flex w-3/5"
              >
                {currentProj.description}
              </div>
            </div>
            <Carousel ref={carouselRef} currentProj={currentProj} />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default Modal
