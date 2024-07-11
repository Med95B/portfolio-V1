/* eslint-disable react/prop-types */
import './Card.css'

function Card({emoji,heading,detail}) {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='card-button'>LEARN MORE</button>
    </div>
  )
}

export default Card