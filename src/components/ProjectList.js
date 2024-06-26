import React, { useState } from "react"
import Modal from "../components/Modal"

const ProjectList = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentProj, setCurrentProj] = useState(null)

  const handleModalToggle = (project) => {
    setModalOpen(!modalOpen)
    setCurrentProj(project)
    if (!modalOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }

  return (
    <>
      <div className="proj-list-cont">
        <div
          className="map-list-cont w-3/4"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {projects.map((project) => (
            <div
              className="unified-length"
              style={{ width: "100%", justifyContent: "end" }}
              key={project.id}
            >
              {modalOpen && (
                <Modal
                  currentProj={currentProj}
                  handleModalToggle={handleModalToggle}
                />
              )}
              <p
                className="map-list-item whitespace-nowrap map-list-text"
                style={{ textAlign: "right" }}
              >
                <img
                  className="map-list-img"
                  src={project.image}
                  alt={project.title}
                  style={{
                    top: project.title === "Park City" ? "-10vh" : "-5vh",
                    opacity:
                      hoveredProject && hoveredProject === project.id
                        ? "1"
                        : "0",
                  }}
                />
                <span
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleModalToggle(project)}
                  className="color-hover color-transition"
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="list-deets"
                    style={{ fontSize: "1.75vh", fontWeight: 900 }}
                  >
                    {project.date} / {project.builtWith} /{" "}
                  </span>
                  <span
                    className="list-title"
                    style={{ fontSize: "6vh", fontWeight: 100 }}
                  >
                    {project.title}
                  </span>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectList
