import React, { useRef } from "react"
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

  return (
    <ModalWrapper>
      <div
        className={isHome ? "modal-overlay-home" : "modal-overlay"}
        onMouseDown={handleOverlayClick}
      >
        <div ref={modalRef} className="modal">
          <div className="flex palette-cont">
            {currentProj.palette?.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  height: "2vh",
                  width: "5.5vw",
                }}
                className="square"
              ></div>
            ))}
          </div>
          <div
            className="flex mt-1 mod-text-cont"
            style={{ width: "100%", position: "relative", height: "20vh" }}
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
                  <OpenInNewIcon
                    style={{ height: "2.5vh", paddingBottom: "0.25vh" }}
                  />
                </a>
                <ul className="flex gap-2">
                  {currentProj.builtWithArray.map((item, index) => (
                    <li key={index}>
                      <span
                        className="inline-flex items-center rounded-md bg-gray-100 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 badgy"
                        style={{
                          backgroundColor: "#d1c5b6",
                          padding: "0.5vh 0.75vw",
                          fontSize: "1.5vh",
                        }}
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
                className="flex w-3/5 description"
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
