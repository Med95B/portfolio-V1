import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import sidebar from '../../assets/sidebar.png'
import ecommerce from '../../assets/ecommerce.png'
import hoc from '../../assets/hoc.png'
import musicApp from '../../assets/musicapp.png'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'

function Portfolio() {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
  return (
    <div className='portfolio' id='Portfolio'>
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio