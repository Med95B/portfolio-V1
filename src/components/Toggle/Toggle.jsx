import './Toggle.css'
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

function Toggle() {
const theme=useContext(ThemeContext)
const darkMode=theme.state.darkMode
const handleClick=()=>{
  theme.dispatch({type:'toggle'})
}
  return (
    <div className="toggle" onClick={handleClick}>
          <FaMoon/>
        <FaSun/>
        <div className="toggle-button"
        style={darkMode?{left:'2px'}:{right:'2px'}}
        ></div>
    </div>
  )
}

export default Toggle