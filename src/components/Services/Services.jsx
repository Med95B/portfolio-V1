import './Services.css'
import heartemoji from '../../assets/heartemoji.png'
import glasses from '../../assets/glasses.png'
import humble from '../../assets/humble.png'
import Card from '../Card/Card'
import CV from './CV.eng Mohamed Bouizloufa.pdf'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

function Services() {

 const transition={duration:1,type:'spring'}
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode

  return (
    <div className='services' id='Services'>
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>services</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        commodi eveniet nemo corrupti reiciendis.
        </span>
        <a href={CV} download>
        <button className='button services-button'>Download CV</button>
        </a>
        <div className="blur services-blur1"></div>
        </div>
        <div className="cards">
                <motion.div
                initial={{left:'25rem'}}
                whileInView={{left:'14rem'}}
                transition={transition}
                className='card1'>
                    <Card
                    emoji={heartemoji}
                    heading={'Design'}
                    detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </motion.div>
                <motion.div 
                 initial={{ left: "-11rem", top: "12rem" }}
                 whileInView={{ left: "-4rem" }}
                 transition={transition}
                className='card2'>
                    <Card
                    emoji={glasses}
                    heading={'Developer'}
                    detail={'Html, Css, JavaScript, React, Express, Laravel'}
                    />
                </motion.div>
                <motion.div 
                 initial={{ top: "19rem", left: "25rem" }}
                 whileInView={{ left: "12rem" }}
                 transition={transition}
                className='card3'>
                    <Card
                    emoji={humble}
                    heading={'UI/UX'}
                    detail={'Lorem ipsum dolor sit amet sit amet sit amet.'}
                    />
                </motion.div>
                <div className="blur services-blur2"></div>

        </div>
    </div>
  )
}

export default Services