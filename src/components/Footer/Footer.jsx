import './Footer.css'
import wave from '../../assets/wave.png'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';



function Footer() {
  return (
    <div className="footer">
    <img src={wave} alt="" />
    <div className="footer-content">
      <span>bouizloufa@gmail.com</span>
      <div className="footer-icons">
        <FaInstagram color="white" size={"3rem"} />
          <FaFacebook color="white" size={"3rem"} />
          <FaGithub color="white" size={"3rem"} />
      </div>
    </div>
  </div>
  )
}

export default Footer