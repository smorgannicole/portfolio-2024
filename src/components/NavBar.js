import React, { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"

const NavBar = ({ setIsGrid }) => {
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
          <NavLink to="/" onClick={() => setIsGrid(true)}>
            <span
              className="text-3xl first-name"
              style={{
                color: "black",
                fontSize: "3.75vh",
                display: "block",
              }}
            >
              Morgan
            </span>
            <span
              className="text-3xl"
              style={{ color: "black", fontSize: "3.75vh" }}
            >
              Smith
            </span>
          </NavLink>
        </div>
        <nav>
          <ul className="flex flex-col gap-1">
            <NavLink to="/">
              <span
                className={`navie color-hover color-transition ${
                  projectsActive ? "active" : ""
                }`}
                style={{ fontSize: "2vh" }}
              >
                Projects
                {projectsActive && (
                  <span>
                    {" "}
                    <AutoAwesomeIcon
                      style={{ paddingBottom: "0.25vh", fontSize: "2.5vh" }}
                    />
                  </span>
                )}
              </span>
            </NavLink>
            <NavLink to="/About">
              <span
                className={`navie color-hover color-transition  ${
                  aboutActive ? "active" : ""
                }`}
                style={{
                  color: location.pathname === "/About" ? "#AFA195" : "",
                  fontSize: "2vh",
                }}
              >
                About
                {aboutActive && (
                  <span>
                    {" "}
                    <AutoAwesomeIcon
                      style={{ paddingBottom: "0.25vh", fontSize: "2.5vh" }}
                    />
                  </span>
                )}
              </span>
            </NavLink>
            <NavLink to="/Contact">
              <span
                className={`navie color-hover color-transition  ${
                  contactActive ? "active" : ""
                }`}
                style={{ fontSize: "2vh" }}
              >
                Contact
                {contactActive && (
                  <span>
                    {" "}
                    <AutoAwesomeIcon
                      style={{ paddingBottom: "0.25vh", fontSize: "2.5vh" }}
                    />
                  </span>
                )}
              </span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar
