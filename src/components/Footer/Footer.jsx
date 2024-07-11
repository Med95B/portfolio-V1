import './Footer.css'
import wave from '../../assets/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";



function Footer() {
  return (
    <div className="footer">
    <img src={wave} alt="" />
    <div className="footer-content">
      <span>bouizloufa@gmail.com</span>
      <div className="footer-icons">
        <Insta color="white" size={"3rem"} />
        <Facebook color="white" size={"3rem"} />
        <Gitub color="white" size={"3rem"} />
      </div>
    </div>
  </div>
  )
}

export default Footer