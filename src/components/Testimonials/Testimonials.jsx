import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import profile4 from '../../assets/profile4.jpg'
import profile5 from '../../assets/profile5.jpg'
import profile6 from '../../assets/profile6.jpg'


function Testimonials() {
  
    const clients=[
        {
            img:profile1,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img:profile2,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img:profile3,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img:profile4,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img:profile5,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            img:profile6,
            review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
    ]
    return (
    <div className='testimonial-wrapper'>
        <div className='testimonial-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='blur testimonial-blur1'></div>
            <div className='blur testimonial-blur2'></div>
        </div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable:true}}
>
        {clients.map((client,i)=><SwiperSlide key={i}>
            <div className='testimonial'>
            <img src={client.img} alt="" />
            <span>{client.review}</span>
            </div>
        </SwiperSlide>)}
</Swiper>
    </div>
  )
}

export default Testimonials