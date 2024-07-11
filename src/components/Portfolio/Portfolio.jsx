import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import sidebar from '../../assets/sidebar.png'
import ecommerce from '../../assets/ecommerce.png'
import hoc from '../../assets/hoc.png'
import musicApp from '../../assets/musicapp.png'


function Portfolio() {
  return (
    <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        
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