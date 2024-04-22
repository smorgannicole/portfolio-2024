import React, { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const projectsActive = activeTab === "/" || activeTab === "/Projects"
  const aboutActive = activeTab === "/About"
  const contactActive = activeTab === "/Contact"

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])
  return (
    <>
      <div className="nav-elements bg-none">
        <div className="flex mb-5 mt-6">
          <NavLink to="/">
            <span className="text-3xl" style={{ color: "black" }}>
              Morgan
              <br />
              Smith
            </span>
          </NavLink>
        </div>
        <nav>
          <ul className="flex flex-col gap-1">
            <NavLink to="/">
              <span className={`nav-links ${projectsActive ? "active" : ""}`}>
                Projects
                {projectsActive && <span> ✤</span>}
              </span>
            </NavLink>
            <NavLink to="/About">
              <span className={`nav-links ${aboutActive ? "active" : ""}`}>
                About
                {aboutActive && <span> ✤</span>}
              </span>
            </NavLink>
            <NavLink to="/Contact">
              <span className={`nav-links ${contactActive ? "active" : ""}`}>
                Contact
                {contactActive && <span> ✤</span>}
              </span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar
