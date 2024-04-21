import weathermapPath from "../images/weather-map.jpg"
import ajaxPath from "../images/ajax-tools.jpg"
import cosmicPath from "../images/cosmic-coffee.jpg"
import mediaQueryPath from "../images/media-query.jpg"
import teaPath from "../images/tea.png"
import ticTacToePath from "../images/tic-tac-toe.png"
import pigPath from "../images/pig-translator.png"
import roboPath from "../images/robo-ear.png"
import dicePath from "../images/dice-game-cropped.png"
import mushroomPath from "../images/treasure-hunt.png"
import hoodPath from "../images/hood-dreams.png"
import phoPath from "../images/simple-as-pho.png"
import catTinderPath from "../images/cat-tinder.png"
import vibeVillasPath from "../images/vibe-villas.png"
import { useState, useEffect, useMemo } from "react"
import { css } from "@emotion/react"
import { SyncLoader } from "react-spinners"

const ProjectCard = () => {
  const projects = useMemo(
    () => [
      { id: 14, src: vibeVillasPath, alt: "vibe villas landing page" },
      { id: 12, src: phoPath, alt: "simple as pho food ordering app" },
      { id: 13, src: catTinderPath, alt: "cat tinder project" },
      { id: 3, src: weathermapPath, alt: "weather-app" },
      { id: 2, src: ticTacToePath, alt: "tic tac toe game" },
      { id: 9, src: dicePath, alt: "dice roll game" },
      { id: 1, src: teaPath, alt: "tea react project" },
      { id: 4, src: cosmicPath, alt: "cosmic coffee" },
      { id: 5, src: ajaxPath, alt: "ajax tools" },
      { id: 8, src: roboPath, alt: "robo active listening" },
      { id: 10, src: mushroomPath, alt: "magic mushroom hunt" },
      { id: 6, src: mediaQueryPath, alt: "media query" },
      { id: 11, src: hoodPath, alt: "hood dreams text-based game" },
      { id: 7, src: pigPath, alt: "pig latin translator" },
    ],
    []
  )
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const imagePromises = projects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = project.src
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

  return (
    <>
      {imagesLoaded ? (
        <div className="card-cont columns-1 gap-10 sm:columns-2 lg:columns-3">
          {projects.map((project) => (
            <div className="thumbnail-wrapper" key={project.id}>
              <img className="thumbnail" src={project.src} alt={project.alt} />
            </div>
          ))}
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
