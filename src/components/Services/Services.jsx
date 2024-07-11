import './Services.css'
import heartemoji from '../../assets/heartemoji.png'
import glasses from '../../assets/glasses.png'
import humble from '../../assets/humble.png'
import Card from '../Card/Card'
import CV from './CV.eng Mohamed Bouizloufa.pdf'

function Services() {
  return (
    <div className='services'>
        <div className="awesome">
            <span>My Awesome</span>
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
                <div className='card1'>
                    <Card
                    emoji={heartemoji}
                    heading={'Design'}
                    detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>
                <div className='card2'>
                    <Card
                    emoji={glasses}
                    heading={'Developer'}
                    detail={'Html, Css, JavaScript, React, Express'}
                    />
                </div>
                <div className='card3'>
                    
                    <Card
                    emoji={humble}
                    heading={'UI/UX'}
                    detail={'Lorem ipsum dolor sit amet.'}
                    />
                </div>
                <div className="blur services-blur2"></div>

        </div>
    </div>
  )
}

export default Services