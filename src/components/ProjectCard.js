import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import { SyncLoader } from "react-spinners"
import Modal from "./Modal"

const ProjectCard = ({ projects, isHome }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentProj, setCurrentProj] = useState(null)

  useEffect(() => {
    const imagePromises = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = project.image
        img.onload = () => resolve()
        img.onerror = () => reject()
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => console.error("error loading images"))
  }, [projects])

  const override = css`
    display: block;
    margin: 0 auto;
  `

  const sortedProjects = [...projects].sort((a, b) => a.id - b.id)

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
      {imagesLoaded ? (
        <div className="card-cont columns-1 sm:columns-2 lg:columns-3">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              style={{
                paddingTop:
                  project.title === "Tea House"
                    ? "13.5vh"
                    : project.title === "Simple as Pho"
                    ? "27vh"
                    : "0",
              }}
              className="img-padding"
            >
              <img
                className="thumbnail"
                src={project.image}
                alt={project.alt}
                onClick={() => handleModalToggle(project)}
              />
            </div>
          ))}
          {modalOpen && (
            <Modal
              currentProj={currentProj}
              handleModalToggle={handleModalToggle}
              isHome={isHome}
            />
          )}
        </div>
      ) : (
        <div className="card-cont">
          <SyncLoader
            color={"#999999"}
            loading={true}
            css={override}
            size={15}
          />
        </div>
      )}
    </>
  )
}

export default ProjectCard
