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
import media1 from "./images/media1.png"
import teaPath from "./images/tea.png"
import ticTacToePath from "./images/ttt1.png"
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
import map1 from "./images/map1.png"
import map2 from "./images/map2.png"
import map3 from "./images/map3.png"
import map4 from "./images/map4.png"
import robo1 from "./images/robo1.png"
import robo2 from "./images/robo2.png"
import robo3 from "./images/robo3.png"
import robo4 from "./images/robo4.png"
import robo5 from "./images/robo5.png"
import robo6 from "./images/robo6.png"
import pig1 from "./images/pig1.png"
import pig2 from "./images/pig2.png"
import pig3 from "./images/pig3.png"
import pig4 from "./images/pig4.png"
import cc1 from "./images/cc1.png"
import cc2 from "./images/cc2.png"
import cc3 from "./images/cc3.png"
import cc4 from "./images/cc4.png"
import cc5 from "./images/cc5.png"
import cc6 from "./images/cc6.png"
import cc7 from "./images/cc7.png"
import ajax1 from "./images/ajax1.png"
import ajax2 from "./images/ajax2.png"
import ajax3 from "./images/ajax3.png"
import ajax4 from "./images/ajax4.png"
import ajax5 from "./images/ajax5.png"
import ajax6 from "./images/ajax6.png"
import media2 from "./images/media2.png"
import media3 from "./images/media3.png"
import media4 from "./images/media4.png"
import media5 from "./images/media5.png"
import media6 from "./images/media6.png"
import media7 from "./images/media7.png"

const App = () => {
  const [toggleShow, setToggleShow] = useState(false)
  const location = useLocation()
  const [isGrid, setIsGrid] = useState(true)
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true)
      setIsGrid(true)
    } else {
      setIsHome(false)
    }

    if (location.pathname === "/Projects" || location.pathname === "/") {
      setToggleShow(true)
    } else {
      setToggleShow(false)
    }
    document.body.className =
      location.pathname === "/About" ? "body-other" : "body-home"
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
        palette: [
          "#DFAD9D",
          "#F2C29D",
          "#775455",
          "#B4795A",
          "#874C2C",
          "#4C3C38",
          "#957765",
          "#FFFFFF",
          "#F4D1A9",
          "#E5C6A8",
        ],
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
        palette: [
          "#191E32",
          "#D7BFD7",
          "#6A5044",
          "#AED5F0",
          "#191D32",
          "#7B7A77",
          "#A69E91",
          "#131933",
          "#F9C3BE",
          "#94E891",
        ],
        repoUrl: "https://github.com/smorgannicole/simple-as-pho",
        description: (
          <span>
            A React app where users can add and delete items from their carts.
            Interactive modals showcase food items illustrated using{" "}
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
        palette: [
          "#212124",
          "#1C1E1F",
          "#333132",
          "#5F5957",
          "#232424",
          "#1D1E20",
          "#AD922A",
          "#1B1D1E",
          "#E8D32F",
          "#22201F",
        ],
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
        id: 7,
        alt: "tic tac toe game",
        date: "Mar. 2024",
        title: "Sidewalk tic-tac-toe",
        builtWith: "React",
        builtWithArray: ["React"],
        image: ticTacToePath,
        images: [ticTacToePath, ttt2, ttt3, ttt4, ttt5, ttt6],
        palette: [
          "#D5C993",
          "#F3F3F3",
          "#A6A6A6",
          "#8C8C8C",
          "#D9945A",
          "#B2B3B1",
          "#D4D4D4",
          "#898A87",
          "#AEC597",
          "#C86060",
        ],
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
        id: 13,
        alt: "hood dreams text-based game",
        date: "Mar. 2024",
        title: "Hood Dreams",
        builtWith: "Ruby",
        builtWithArray: ["Ruby"],
        image: hoodDreamPath,
        images: [dreams1, dreams2, dreams3, dreams4],
        palette: [
          "#1E1E1E",
          "#1E1E1E",
          "#464646",
          "#1E1E1E",
          "#232323",
          "#1E1E1E",
          "#9E9E9E",
          "#202020",
          "#252525",
          "#222222",
        ],
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
        id: 8,
        alt: "robo active listening",
        date: "Feb. 2024",
        title: "Active Listening",
        builtWith: "React",
        builtWithArray: ["React"],
        image: robo6,
        images: [robo1, robo2, robo3, robo4, robo5, robo6],
        palette: [
          "#131112",
          "#E8C7D7",
          "#DDC0DE",
          "#937F90",
          "#BFD657",
          "#D2B9E7",
          "#FEFEFE",
          "#5B4B52",
          "#75656D",
          "#C7B2F1",
        ],
        repoUrl: "https://github.com/smorgannicole/robo-ear",
        description: (
          <span>
            A React app that features four "robots" that dynamically respond to
            user input in real-time. "Good Robot" echoes the user's input
            exactly, "Bad Robot" mimics the input with a repetitive "BLABLA..."
            pattern, and the third and fourth robots respond the same no matter
            the input.
            <br />
            <a
              className="text-gray-500"
              href="https://github.com/Louie-cpu"
              target="_blank"
              rel="noreferrer"
            >
              Louis Moreno
            </a>{" "}
            contributed to this project.
          </span>
        ),
      },
      {
        id: 12,
        alt: "magic mushroom hunt",
        date: "Feb. 2024",
        title: "Mushroom Hunt",
        builtWith: "React",
        builtWithArray: ["React"],
        image: shroom1,
        images: [shroom1, shroom2, shroom3],
        palette: [
          "#D8CDAE",
          "#D59B74",
          "#FFFFFE",
          "#A5CB77",
          "#86B548",
          "#F25A42",
          "#FDC10A",
          "#9EC25C",
          "#1818CF",
          "#F6F8F1",
        ],
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
        id: 4,
        alt: "pig latin translator",
        date: "Feb. 2024",
        title: "Pig Latin Translator",
        builtWith: "React / Tailwind",
        builtWithArray: ["React", "Tailwind"],
        image: pig4,
        images: [pig1, pig2, pig3, pig4],
        palette: [
          "#DFCBD4",
          "#4A4849",
          "#F6EDF1",
          "#CAC2C5",
          "#0E0E0E",
          "#B8B0AF",
          "#7C7779",
          "#000000",
          "#F7E5E8",
          "#E0CDD5",
        ],
        repoUrl: "https://github.com/smorgannicole/pig-latin-translator",
        description: (
          <span>
            A React app that translates english words into pig latin. English
            and pig latin words are logged.
          </span>
        ),
      },
      {
        id: 3,
        alt: "dice roll game",
        date: "Feb. 2024",
        title: "Dice Roll",
        builtWith: "React",
        builtWithArray: ["React"],
        image: roll1,
        images: [roll1, roll2, roll3, roll4, roll5],
        palette: [
          "#2A2B27",
          "#F5F5F6",
          "#E5DDE3",
          "#F5F6F7",
          "#BEB3C7",
          "#ABD4E6",
          "#9BB14C",
          "#F9FAFA",
          "#969491",
          "#E4CEC0",
        ],
        repoUrl: "https://github.com/smorgannicole/dice-roll",
        description: (
          <span>
            A React app where each roll corresponds to graphics and colors on a
            particular die. Users may switch between different themed dice and
            roll a new set of six corresponding emojis. Rolls are logged may be
            cleared at any time.
          </span>
        ),
      },
      {
        id: 6,
        alt: "tea react project",
        date: "Dec. 2023",
        title: "Tea House",
        builtWith: "React / Boonaki Tea API",
        builtWithArray: ["React", "Boonaki Tea API"],
        image: teaPath,
        images: [teaPath, t1, t2, t3],
        palette: [
          "#AFB18D",
          "#D2CFB7",
          "#F0EEE9",
          "#F4F5F7",
          "#969C6E",
          "#69807D",
          "#F5F0DA",
          "#D9C591",
          "#A66E57",
          "#869272",
        ],
        repoUrl: "https://github.com/smorgannicole/tea-react-project",
        description: (
          <span>
            A React app where visitors access tea info via the Boonaki API. Tea
            enthusiasts can add, delete, and edit teas, all stored locally.
          </span>
        ),
      },
      {
        id: 5,
        alt: "cosmic coffee",
        date: "Nov. 2023",
        title: "Cosmic Coffee",
        builtWith: "JS",
        builtWithArray: ["JS"],
        image: cc1,
        images: [cc1, cc2, cc3, cc4, cc5, cc6, cc7],
        palette: [
          "#E7C7D0",
          "#F1E5E0",
          "#CED6E5",
          "#F0E7E4",
          "#E5CDD4",
          "#B1BFD9",
          "#ECDBDA",
          "#ffff",
          "#000",
          "#99A3C9",
        ],
        repoUrl: "https://github.com/pennington-smith/coffee-project",
        description: (
          <span>
            A React app where users can search coffees by name or filter by
            roast. Coffee cards may be clicked and "flipped" to reveal more
            info. The app enables users to create, edit, and delete their own
            custom coffees, stored locally for convenience.
            <br />
            <a
              className="text-gray-500"
              href="https://github.com/penningtron"
              target="_blank"
              rel="noreferrer"
            >
              Nathan Pennington
            </a>{" "}
            contributed to this project.
          </span>
        ),
      },
      {
        id: 11,
        alt: "weather-app",
        date: "Nov. 2023",
        title: "Weather Map",
        builtWith: "JS / OpenWeather API / Mapbox API",
        builtWithArray: ["JS", "OpenWeather API", "Mapbox API"],
        image: map1,
        images: [map1, map2, map3, map4],
        palette: [
          "#CFD0E0",
          "#FEFEFE",
          "#4E0295",
          "#6EBAF6",
          "#530C9A",
          "#B7DDFB",
          "#B798D4",
          "#B7AFCC",
          "#AFCBE8",
          "#672CA4",
        ],
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/js/weather_map.js",
        description: (
          <span>
            Built using HTML, CSS, and JavaScript. OpenWeatherMap API is used to
            display weather info in a specific location. Users can search for
            desired locations with the forecast updated dynamically. Mapbox API
            is used to visually transition from the previous location to the
            newly searched one.
          </span>
        ),
      },
      {
        id: 9,
        alt: "ajax tools",
        date: "Nov. 2023",
        title: "Ajax Tools",
        builtWith: "JS",
        builtWithArray: ["JS"],
        image: ajax1,
        images: [ajax1, ajax2, ajax3, ajax4, ajax5, ajax6],
        palette: [
          "#212532",
          "#EBDAAB",
          "#191C27",
          "#9F988C",
          "#616D80",
          "#F7D54E",
          "#5A5F6B",
          "#010101",
          "#292E3C",
          "#664746",
        ],
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/data/ajax-store.html",
        description: (
          <span>
            Built using HTML, CSS, and JavaScript. Designed to simulate API
            requests, this application retrieves tool objects from a JSON file,
            mimicking working with external data sources.
          </span>
        ),
      },
      {
        id: 9.5,
        alt: "media query",
        date: "Oct. 2023",
        title: "Park City",
        builtWith: "HTML / CSS / Bootstrap",
        builtWithArray: ["HTML", "CSS", "Bootstrap"],
        image: media1,
        images: [media1, media2, media3, media4, media5, media6, media7],
        palette: [
          "#C6D2DB",
          "#DDDFE0",
          "#F0EFEF",
          "#242626",
          "#EC9B3A",
          "#C5C2BD",
          "#E55739",
          "#34352F",
          "#16A3AB",
          "#7AB06C",
        ],
        repoUrl:
          "https://github.com/smorgannicole/codeup-web-exercises/blob/main/css/media-queries-exercise.css",
        description: (
          <span>
            Designed as a platform for honing proficiency in media queries, this
            project presents three wireframes of layouts to be replicated. The
            objective is to rebuild the site from scratch with detail and
            precision.
          </span>
        ),
      },
    ],
    []
  )

  return (
    <>
      <div className="page-wrapper">
        <div className="border flex" style={{ overflowY: "scroll" }}>
          <div className="w-1/5">
            <NavBar setIsGrid={setIsGrid} />
          </div>
          <div
            className="w-4/5 larger-sect"
            style={{
              padding: "0 1.5vw",
              paddingBottom: "4.5vh",
              alignItems: location.pathname === "/About" ? "end" : "",
              display: location.pathname === "/About" ? "flex" : "",
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
