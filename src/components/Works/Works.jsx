import './Works.css'
import upwork from '../../assets/Upwork.png'
import fiver from '../../assets/fiverr.png'
import amazon from '../../assets/amazon.png'
import shopify from '../../assets/Shopify.png'
import facebook from '../../assets/Facebook.png'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

function Works() {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className='works' id='Works'>
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        commodi eveniet nemo corrupti reiciendis.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        commodi eveniet nemo corrupti reiciendis.
        </span>
        <Link to="contact" spy={true} smooth={true}>
        <button className='button services-button'>Hire me</button>
        </Link>
        <div className="blur services-blur1"></div>
        </div>
<div className="works-right">
    <motion.div 
     initial={{ rotate: 45 }}
     whileInView={{ rotate: 0 }}
     viewport={{ margin: "-40px" }}
     transition={{ duration: 3.5, type: "spring" }}
    className="works-mainCircle">
        <div className="works-secondCircle">
            <img src={upwork} alt="" />
        </div>
        <div className="works-secondCircle">
            <img src={fiver} alt="" />
        </div>
        <div className="works-secondCircle">
            <img src={amazon} alt="" />
        </div>
        <div className="works-secondCircle">
            <img src={shopify} alt="" />
        </div>
        <div className="works-secondCircle">
            <img src={facebook} alt="" />
        </div>
    </motion.div>
    <div className="works-backCircle blueCircle"></div>
    <div className="works-backCircle yellowCircle"></div>
</div>
        
    </div>
  )
}

export default Works