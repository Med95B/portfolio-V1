import './Experience.css'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'

function Experience() {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode

  return (
    <div className='experience' id='Experience'>
        <div className="achievement">
        <div className="circle" style={{border:darkMode?'6px solid orange':''}}>8+</div>
        <span style={{color:darkMode?'white':''}}>years</span>
        <span>Experience</span>
        </div>
        <div className="achievement">
        <div className="circle" style={{border:darkMode?'6px solid orange':''}}>20+</div>
        <span style={{color:darkMode?'white':''}}>completed</span>
        <span>Projects</span>
        </div>
        <div className="achievement">
        <div className="circle" style={{border:darkMode?'6px solid orange':''}}>5+</div>
        <span style={{color:darkMode?'white':''}}>companies</span>
        <span>work</span>
        </div>
    </div>
  )
}

export default Experience