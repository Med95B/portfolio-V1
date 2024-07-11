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

function Intro() {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-name">
                <span>Hi! I Am</span>
                <span>Mohamed Bouizloufa</span>
                <span>Full-Stack Web Developer, as a developer passionate about programming, my journey
focuses on the dynamic world of web development, backend
and frontend technologies, and the design of web applications.
</span>
            </div>
            <button className="button intro-button">
                Hire me
            </button>
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
            <img src={glassesImoji} alt="" />
          <div className='floatingDiv1'>
            <FloatingDiv img={crown} txt1={'MERN Stack'} txt2={'Developer'}/>
          </div>
          <div className='floatingDiv2'>
            <FloatingDiv img={thumbpub} txt1={'Web'} txt2={'Developer'}/>
          </div>
          <div className="blur blur1"></div>
          <div className="blur blur2"></div>
        </div>
    </div>
  )
}

export default Intro