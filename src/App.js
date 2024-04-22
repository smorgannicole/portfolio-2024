import React, { useState, useEffect } from "react"
import "tailwindcss/tailwind.css"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import ProjectList from "./components/ProjectList"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Toggle from "./components/Toggle"

const App = () => {
  const [toggleShow, setToggleShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/Projects" || location.pathname === "/") {
      setToggleShow(true)
    } else {
      setToggleShow(false)
    }
  }, [location.pathname])

  return (
    <>
      <div className="page-wrapper">
        <div className="border flex">
          <div className="w-1/5">
            <NavBar />
          </div>
          <div className="w-4/5">
            <div
              className="toggle-cont flex mt-8"
              style={{ justifyContent: "end" }}
            >
              {toggleShow && <Toggle />}
            </div>
            <Routes>
              <Route path="/" element={<ProjectCard />} />
              <Route path="/Projects" element={<ProjectList />} />
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
