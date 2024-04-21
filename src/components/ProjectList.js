import React, { useState } from "react"
import weathermapPath from "../images/weather-map.jpg"
import ajaxPath from "../images/ajax-tools-cropped.jpg"
import cosmicPath from "../images/cosmic-coffee-cropped.jpg"
import mediaQueryPath from "../images/media-query.jpg"
import teaPath from "../images/tea.png"
import ticTacToePath from "../images/tic-tac-toe.png"
import hoodDreamPath from "../images/hood-dreams.png"
import pigPath from "../images/pig-translator.png"
import roboPath from "../images/robo-ear.png"
import dicePath from "../images/dice-game-cropped.png"
import mushroomPath from "../images/treasure-hunt.png"
import phoPath from "../images/simple-as-pho.png"
import catTinderPath from "../images/cat-tinder.png"
import vibeVillasPath from "../images/vibe-villas.png"
import Modal from "../components/Modal"

const ProjectList = () => {
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

  const projects = [
    {
      id: 14,
      date: "Apr. 2024",
      title: "Vibe Villas",
      builtWith: "React / Rails / Reactstrap",
      image: vibeVillasPath,
    },
    {
      id: 13,
      date: "Mar. 2024",
      title: "Cat Tinder",
      builtWith: "React / Rails / Reactstrap",
      image: catTinderPath,
    },
    {
      id: 10,
      date: "Mar. 2024",
      title: "Simple as Pho",
      builtWith: "React / SASS / Adobe Fresco",
      image: phoPath,
    },
    {
      id: 12,
      date: "Mar. 2024",
      title: "Hood Dreams",
      builtWith: "Ruby",
      image: hoodDreamPath,
    },
    {
      id: 3,
      date: "Mar. 2024",
      title: "Tic Tac Techies",
      builtWith: "JS",
      image: ticTacToePath,
    },
    {
      id: 11,
      date: "Feb. 2024",
      title: "Active Listening",
      builtWith: "React / Photoshop",
      image: roboPath,
    },
    {
      id: 8,
      date: "Feb. 2024",
      title: "Mushroom Hunt",
      builtWith: "React",
      image: mushroomPath,
    },
    {
      id: 7,
      date: "Feb. 2024",
      title: "Pig Latin Translator",
      builtWith: "React / Tailwind",
      image: pigPath,
    },
    {
      id: 9,
      date: "Feb. 2024",
      title: "Dice Roll",
      builtWith: "React",
      image: dicePath,
    },
    {
      id: 1,
      date: "Dec. 2023",
      title: "Tea House",
      builtWith: "React / Boonaki Tea API",
      image: teaPath,
    },
    {
      id: 4,
      date: "Nov. 2023",
      title: "Ajax Rental Tools",
      builtWith: "JS",
      image: ajaxPath,
    },
    {
      id: 2,
      date: "Nov. 2023",
      title: "Weather Map",
      builtWith: "JS / OpenWeather API / Mapbox API",
      image: weathermapPath,
    },
    {
      id: 5,
      date: "Nov. 2023",
      title: "Cosmic Coffee",
      builtWith: "JS / local storage manipulation",
      image: cosmicPath,
    },
    {
      id: 6,
      date: "Oct. 2023",
      title: "Park City",
      builtWith: "Bootstrap",
      image: mediaQueryPath,
    },
  ]

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
          {projects.map((project, index) => (
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
                {hoveredProject && hoveredProject.id === project.id && (
                  <img
                    className="map-list-img"
                    src={project.image}
                    alt={project.title}
                    style={{
                      top: project.title === "Park City" ? "-93px" : "-25px",
                    }}
                  />
                )}
                <span
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleModalToggle(project)}
                  className="major-span"
                >
                  <span style={{ fontSize: 12, fontWeight: 900 }}>
                    {project.date} / {project.builtWith} /{" "}
                  </span>
                  <span style={{ fontSize: 46, fontWeight: 100 }}>
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
