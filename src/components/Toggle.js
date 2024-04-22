import gridPath from "../images/grid.png"
import rowPath from "../images/column.png"
import { Link } from "react-router-dom"

const Toggle = ({ handleToRow, handleToGrid, isGrid }) => {
  return (
    <>
      <Link to="/">
        <button
          className={`toggle-button ${isGrid ? "toggle-true" : null}`}
          onClick={() => handleToGrid()}
        >
          <img className="toggle-img" src={gridPath} alt="" />
        </button>
      </Link>
      <Link to="/Projects">
        <button
          className={`toggle-button ${isGrid ? null : "toggle-true"}`}
          onClick={() => handleToRow()}
        >
          <img className="toggle-img" src={rowPath} alt="" />
        </button>
      </Link>
    </>
  )
}

export default Toggle
