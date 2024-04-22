import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import ProjectList from "./components/ProjectList"
import ProjectCard from "./components/ProjectCard"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Toggle from "./components/Toggle"

const App = () => {
  const [isGrid, setIsGrid] = useState(true)

  const handleToGrid = () => {
    setIsGrid(true)
  }
  const handleToRow = () => {
    setIsGrid(false)
  }

  const isProjectsTab = window.location.pathname === "/Projects"
  const isHomeTab = window.location.pathname === "/"

  return (
    <>
      <div className="page-wrapper">
        <NavBar />
        <div className="border flex">
          <div className="w-1/5"></div>
          <div className="w-4/5">
            <div className="toggle-cont mt-8">
              {(isProjectsTab || isHomeTab) && (
                <Toggle
                  isGrid={isGrid}
                  handleToRow={handleToRow}
                  handleToGrid={handleToGrid}
                />
              )}
            </div>
          </div>
          <Routes>
            <Route path="/" element={<ProjectCard />} />
            <Route path="/Projects" element={<ProjectList />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
