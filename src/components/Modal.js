import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"
import Carousel from "./Carousel.js"
import { ModalWrapper } from "../styles/styles.js"

const Modal = ({ currentProj, handleModalToggle }) => {
  const [hovered, setHovered] = useState(false)
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
      <div className="modal-overlay" onMouseDown={handleOverlayClick}>
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
              <div className="modal-title-and-badges flex w-2/5">
                <div className="line-cool flex">
                  <a
                    href={currentProj?.repoUrl}
                    className="modal-title"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {currentProj?.title}
                  </a>
                  <span
                    className={`flex ${
                      hovered ? "hovered-animation" : "initial-position"
                    }`}
                    style={{ alignItems: "end", paddingBottom: "2vh" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </div>
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
