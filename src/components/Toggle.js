import gridPath from '../images/grid.png'
import rowPath from '../images/column.png'

const Toggle = ({ handleToRow, handleToGrid, isGrid  }) => { 
  return (
    <>
      <button className={`toggle-button ${isGrid ? 'toggle-true' : null}`} onClick={() => handleToGrid()}><img className='toggle-img' src={gridPath} alt="" /></button>
      
      <button className={`toggle-button ${isGrid ? null : 'toggle-true'}`} onClick={() => handleToRow()}><img className='toggle-img' src={rowPath} alt="" /></button>
    </>
  )
}

export default Toggle