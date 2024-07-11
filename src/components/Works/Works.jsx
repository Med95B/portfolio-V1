import './Works.css'
import upwork from '../../assets/Upwork.png'
import fiver from '../../assets/fiverr.png'
import amazon from '../../assets/amazon.png'
import shopify from '../../assets/Shopify.png'
import facebook from '../../assets/Facebook.png'


function Works() {
  return (
    <div className='works'>
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        commodi eveniet nemo corrupti reiciendis.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        commodi eveniet nemo corrupti reiciendis.
        </span>
      
        <button className='button services-button'>Hire me</button>
        <div className="blur services-blur1"></div>
        </div>
<div className="works-right">
    <div className="works-mainCircle">
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
    </div>
    <div className="works-backCircle blueCircle"></div>
    <div className="works-backCircle yellowCircle"></div>
</div>
        
    </div>
  )
}

export default Works