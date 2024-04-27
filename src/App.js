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
import ticTacToePath from "./images/ttt1.png"
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
import dreams1 from "./images/dreams1.png"
import dreams2 from "./images/dreams2.png"
import dreams3 from "./images/dreams3.png"
import dreams4 from "./images/dreams4.png"
import roll1 from "./images/roll1.png"
import roll2 from "./images/roll2.png"
import roll3 from "./images/roll3.png"
import roll4 from "./images/roll4.png"
import roll5 from "./images/roll5.png"
import shroom1 from "./images/shroom1.png"
import shroom2 from "./images/shroom2.png"
import shroom3 from "./images/shroom3.png"
import ttt2 from "./images/ttt2.png"
import ttt3 from "./images/ttt3.png"
import ttt4 from "./images/ttt4.png"
import ttt5 from "./images/ttt5.png"
import ttt6 from "./images/ttt6.png"

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
        id: 6,
        alt: "tic tac toe game",
        date: "Mar. 2024",
        title: "Sidewalk tic-tac-toe",
        builtWith: "React",
        builtWithArray: ["React"],
        image: ticTacToePath,
        images: [ticTacToePath, ttt2, ttt3, ttt4, ttt5, ttt6],
        repoUrl: "https://github.com/smorgannicole/sidewalk-tic-tac-toe",
        description: (
          <span>
            A React app where users can engage in tic-tac-toe matches against
            one another. Hand-drawn elements were created using
            <a
              className="text-gray-500"
              href="https://www.adobe.com/products/fresco.html"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Adobe Fresco
            </a>
            .
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
        images: [dreams1, dreams2, dreams3, dreams4],
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/text-based-game-team-ms",
        description: (
          <span>
            A text-based game where users immerse themselves in interactive
            fiction. User interactions from the IRB console drive the narrative
            forward.
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
        id: 12,
        alt: "magic mushroom hunt",
        date: "Feb. 2024",
        title: "Mushroom Hunt",
        builtWith: "React",
        builtWithArray: ["React"],
        image: mushroomPath,
        images: [shroom1, shroom2, shroom3],
        repoUrl:
          "https://github.com/learn-academy-2024-alpha/treasure-hunt-smorgannicole",
        description: (
          <span>
            A React project where mushrooms appear in randomized locations
            during each game. Players must rely on luck to select the elusive
            magic mushroom, which changes every playthrough, in under five
            tries. As users click to pick mushrooms, they are moved to a basket
            while their randomized descriptions are recorded in a notebook.
          </span>
        ),
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
        id: 11,
        alt: "dice roll game",
        date: "Feb. 2024",
        title: "Dice Roll",
        builtWith: "React",
        builtWithArray: ["React"],
        image: dicePath,
        images: [roll1, roll2, roll3, roll4, roll5],
        repoUrl: "https://github.com/smorgannicole/dice-roll",
        description: (
          <span>
            A react app where each roll corresponds to graphics and colors on a
            particular die. Users may switch between different themed dice and
            roll a new set of six corresponding emojis. Rolls are logged may be
            cleared at any time.
          </span>
        ),
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
        id: 13,
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
            style={{
              height: "fit-content",
              overflowY: "scroll",
              padding: "5vh 1vw",
            }}
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
