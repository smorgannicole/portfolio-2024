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
        <div className="card-cont columns-1 gap-10 sm:columns-2 lg:columns-3">
          {sortedProjects.map((project) => (
            <img
              className="thumbnail"
              src={project.image}
              alt={project.alt}
              key={project.id}
              onClick={() => handleModalToggle(project)}
            />
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
