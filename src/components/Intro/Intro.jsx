import './Intro.css'
import gitHub from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import vector1 from '../../assets/Vector1.png'
import vector2 from '../../assets/Vector2.png'
import boy from '../../assets/boy.png'
import glassesImoji from '../../assets/glassesimoji.png'
import thumbpub from '../../assets/thumbup.png'
import crown from '../../assets/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
function Intro() {

  const transition = {duration:2,type:'spring'}

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode

  return (
    <div className="intro" id='Intro'>
        <div className="intro-left">
            <div className="intro-name">
                <span style={{color:darkMode?'white':''}}>Hi! I Am</span>
                <span>Mohamed Bouizloufa</span>
                <span>Full-Stack Web Developer, as a developer passionate about programming, my journey
focuses on the dynamic world of web development, backend
and frontend technologies, and the design of web applications.
</span>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button intro-button">
                Hire me
            </button>
            </Link>
           
            
            <div className="intro-icons">
                <img src={gitHub} alt="" />
                <img src={linkedIn} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className="intro-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesImoji} alt="" />
          <motion.div 
          initial={{top:'-4%',left:'74%'}}
          whileInView={{left:'68%'}}
          transition={transition}
          className='floatingDiv1'>
            <FloatingDiv img={crown} txt1={'MERN Stack'} txt2={'Developer'}/>
          </motion.div>
          <motion.div 
          initial={{left:'9rem',top:'18rem'}}
          whileInView={{left:'0rem'}}
          transition={transition}
          className='floatingDiv2'>
            <FloatingDiv img={thumbpub} txt1={'Web'} txt2={'Developer'}/>
          </motion.div>
          <div className="blur blur1"></div>
          <div className="blur blur2"></div>
        </div>
    </div>
  )
}

export default Intro