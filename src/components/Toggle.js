import React from "react"
import gridPath from "../images/grid.png"
import rowPath from "../images/column.png"
import { Link } from "react-router-dom"

const Toggle = ({ isGrid, setIsGrid }) => {
  return (
    <>
      <Link to="/">
        <button
          className={`toggle-button ${isGrid ? "toggle-true" : null}`}
          onClick={() => setIsGrid(true)}
          style={{
            borderTopLeftRadius: "999dvh",
            borderBottomLeftRadius: "999dvh",
          }}
        >
          <img className="toggle-img" src={gridPath} alt="" />
        </button>
      </Link>
      <Link to="/Projects">
        <button
          className={`toggle-button ${isGrid ? null : "toggle-true"}`}
          onClick={() => setIsGrid(false)}
          style={{
            borderTopRightRadius: "999dvh",
            borderBottomRightRadius: "999dvh",
          }}
        >
          <img className="toggle-img" src={rowPath} alt="" />
        </button>
      </Link>
    </>
  )
}

export default Toggle
