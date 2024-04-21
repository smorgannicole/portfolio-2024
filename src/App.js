import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import "./App.css"
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
  let component
  switch (window.location.pathname) {
    case "/":
      component = isGrid ? <ProjectCard /> : <ProjectList />
      break
    case "/Projects":
      component = isGrid ? <ProjectCard /> : <ProjectList />
      break
    case "/About":
      component = <About />
      break
    case "/Contact":
      component = <Contact />
      break
    default:
      component = <ProjectCard />
      break
  }

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
            {component}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
