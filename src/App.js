import React, { useState, useEffect, useMemo } from "react"
import "tailwindcss/tailwind.css"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import ProjectList from "./components/ProjectList"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Toggle from "./components/Toggle"
import weathermapPath from "./images/weather-map.jpg"
import ajaxPath from "./images/ajax-tools-cropped.jpg"
import cosmicPath from "./images/cosmic-coffee-cropped.jpg"
import mediaQueryPath from "./images/media-query.jpg"
import teaPath from "./images/tea.png"
import ticTacToePath from "./images/tic-tac-toe.png"
import pigPath from "./images/pig-translator.png"
import roboPath from "./images/robo-ear.png"
import dicePath from "./images/dice-game-cropped.png"
import mushroomPath from "./images/treasure-hunt.png"
import hoodDreamPath from "./images/hood-dreams.png"
import phoPath from "./images/simple-as-pho.png"
import catTinderPath from "./images/cat-tinder.png"
import vibeVillasPath from "./images/vibe-villas.png"
import vv1 from "./images/vv1.png"
import vv3 from "./images/vv3.png"
import vv4 from "./images/vv4.png"
import vv5 from "./images/vv5.png"
import tinder1 from "./images/tinder1.png"
import tinder2 from "./images/tinder2.png"
import tinder3 from "./images/tinder3.png"
import tinder4 from "./images/tinder4.png"
import tinder5 from "./images/tinder5.png"
import t1 from "./images/t1.png"
import t2 from "./images/t2.png"
import t3 from "./images/t3.png"
import pho4 from "./images/pho4.png"
import pho2 from "./images/pho2.png"
import pho3 from "./images/pho3.png"

const App = () => {
  const [toggleShow, setToggleShow] = useState(false)
  const location = useLocation()
  const [isGrid, setIsGrid] = useState(true)
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true)
    } else {
      setIsHome(false)
    }

    if (location.pathname === "/Projects" || location.pathname === "/") {
      setToggleShow(true)
    } else {
      setToggleShow(false)
    }
  }, [location.pathname])

  const projects = useMemo(
    () => [
      {
        id: 1,
        alt: "vibe villas landing page",
        date: "Apr. 2024",
        title: "Vibe Villas",
        builtWith: "React / Rails / Reactstrap",
        builtWithArray: ["React", "Rails", "Reactstrap"],
        image: vibeVillasPath,
        images: [vibeVillasPath, vv1, vv3, vv4, vv5],
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/apartment-app-frontend-the-smiths",
        description: (
          <span>
            A React and Rails API project with a PostgreSQL database. User
            authentication and authorization are handled via Devise and JWT,
            enabling users to list units for rent and manage their listings.
            Visitors can view available units, access unit info, and engage in
            listing management functionalities upon logging in.
            <br />
            <a
              className="text-gray-500"
              href="https://github.com/mark19242"
              target="_blank"
              rel="noreferrer"
            >
              Mark Smith
            </a>{" "}
            contributed to this project.
          </span>
        ),
      },
      {
        id: 10,
        alt: "simple as pho food ordering app",
        date: "Mar. 2024",
        title: "Simple as Pho",
        builtWith: "React / SCSS",
        builtWithArray: ["React", "SCSS"],
        image: phoPath,
        images: [phoPath, pho2, pho3, pho4],
        repoUrl: "https://github.com/smorgannicole/simple-as-pho",
        description: (
          <span>
            A React app where users can add and delete items from their carts.
            Interactive modals showcase food items illustrated using Adobe
            Fresco.
          </span>
        ),
      },
      {
        id: 2,
        alt: "cat tinder project",
        date: "Mar. 2024",
        title: "Cat Tinder",
        builtWith: "React / Rails / Reactstrap",
        builtWithArray: ["React", "Rails", "Reactstrap"],
        image: catTinderPath,
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/cat-tinder-frontend-ryan-amir-morgan",
        images: [catTinderPath, tinder1, tinder2, tinder3, tinder4, tinder5],
        description: (
          <span>
            A full-stack, decoupled application with a PostgreSQL database.
            Users can view, heart, edit, add , and delete kitties. Kitties may
            be filtered by age and searched by name.
            <br />
            <a
              className="text-gray-500"
              href="https://github.com/Rashadjaxon"
              target="_blank"
              rel="noreferrer"
            >
              Amir Jackson
            </a>{" "}
            and{" "}
            <a
              className="text-gray-500"
              href="https://github.com/Rlemus93"
              target="_blank"
              rel="noreferrer"
            >
              Ryan Lemus
            </a>{" "}
            contributed to this project.
          </span>
        ),
      },
      {
        id: 4,
        alt: "hood dreams text-based game",
        date: "Mar. 2024",
        title: "Hood Dreams",
        builtWith: "Ruby",
        builtWithArray: ["Ruby"],
        image: hoodDreamPath,
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/text-based-game-team-ms",
      },
      {
        id: 13,
        alt: "tic tac toe game",
        date: "Mar. 2024",
        title: "Tic Tac Techies",
        builtWith: "JS",
        builtWithArray: ["JS"],
        image: ticTacToePath,
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/tic-tac-toe-tic-tac-techies",
      },
      {
        id: 7,
        alt: "robo active listening",
        date: "Feb. 2024",
        title: "Active Listening",
        builtWith: "React",
        builtWithArray: ["React"],
        image: roboPath,
        repoUrl: "https://github.com/smorgannicole/robo-ear",
      },
      {
        id: 11,
        alt: "magic mushroom hunt",
        date: "Feb. 2024",
        title: "Mushroom Hunt",
        builtWith: "React",
        builtWithArray: ["React"],
        image: mushroomPath,
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/treasure-hunt-smorgannicole",
      },
      {
        id: 14,
        alt: "pig latin translator",
        date: "Feb. 2024",
        title: "Pig Latin Translator",
        builtWith: "React / Tailwind",
        builtWithArray: ["React", "Tailwind"],
        image: pigPath,
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/pig-latin-pink-m-m-s",
      },
      {
        id: 6,
        alt: "dice roll game",
        date: "Feb. 2024",
        title: "Dice Roll",
        builtWith: "React",
        builtWithArray: ["React"],
        image: dicePath,
        repoUrl: "https://github.com/smorgannicole/dice-roll",
      },
      {
        id: 5,
        alt: "tea react project",
        date: "Dec. 2023",
        title: "Tea House",
        builtWith: "React / Boonaki Tea API",
        builtWithArray: ["React", "Boonaki Tea API"],
        image: teaPath,
        images: [teaPath, t1, t2, t3],
        repoUrl: "https://github.com/smorgannicole/tea-react-project",
        description: (
          <span>
            A React app where visitors access tea info via the Boonaki API. Tea
            enthusiasts can add, delete, and edit teas, all stored locally.
          </span>
        ),
      },
      {
        id: 8,
        alt: "cosmic coffee",
        date: "Nov. 2023",
        title: "Cosmic Coffee",
        builtWith: "JS",
        builtWithArray: ["JS"],
        image: cosmicPath,
        repoUrl: "https://github.com/pennington-smith/coffee-project",
      },
      {
        id: 3,
        alt: "weather-app",
        date: "Nov. 2023",
        title: "Weather Map",
        builtWith: "JS / OpenWeather API / Mapbox API",
        builtWithArray: ["JS", "OpenWeather API", "Mapbox API"],
        image: weathermapPath,
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/js/weather_map.js",
      },
      {
        id: 9,
        alt: "ajax tools",
        date: "Nov. 2023",
        title: "Ajax Rental Tools",
        builtWith: "JS",
        builtWithArray: ["JS"],
        image: ajaxPath,
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/data/ajax-store.html",
      },
      {
        id: 12,
        alt: "media query",
        date: "Oct. 2023",
        title: "Park City",
        builtWith: "Bootstrap",
        builtWithArray: ["CSS", "HTML", "Bootstrap"],
        image: mediaQueryPath,
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/css/media-queries-exercise.css",
      },
    ],
    []
  )

  return (
    <>
      <div className="page-wrapper">
        <div className="border flex">
          <div className="w-1/5">
            <NavBar setIsGrid={setIsGrid} />
          </div>
          <div
            className="w-4/5"
            style={{ height: "fit-content", overflowY: "scroll" }}
          >
            <div
              className="toggle-cont flex mt-8"
              style={{ justifyContent: "end" }}
            >
              {toggleShow && <Toggle isGrid={isGrid} setIsGrid={setIsGrid} />}
            </div>
            <Routes>
              <Route
                path="/"
                element={<ProjectCard projects={projects} isHome={isHome} />}
              />
              <Route
                path="/Projects"
                element={<ProjectList projects={projects} />}
              />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
