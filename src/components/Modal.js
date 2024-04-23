import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons"

const Modal = ({ currentProj, handleModalToggle }) => {
  const [hovered, setHovered] = useState(false)
  const modalRef = useRef(null)

  const handleOverlayClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      handleModalToggle()
    }
  }

  const handleHover = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div ref={modalRef} className="modal">
        <div className="w-1/4 modal-text-cont">
          <div>
            <FontAwesomeIcon
              onClick={() => handleModalToggle()}
              icon={faTimesCircle}
              className="hover transition"
            />
            <div
              className="modal-title flex"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div className="modal-title-and-arrow flex">
                <a
                  href={currentProj?.repoUrl}
                  className="modal-title"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
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
            </div>
            <ul className="flex gap-2">
              {currentProj.builtWithArray.map((item, index) => (
                <li key={index}>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-3/4">
          {currentProj.images &&
            currentProj.images.map((image, index) => (
              <img
                className="modal-image"
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
