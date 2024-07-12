import Toggel from '../Toggle/Toggle'
import './NavBar.css'
import {Link} from 'react-scroll'

function NavBar() {
  return (
  <div className='nav-wrapper' id='NavBar'>
    <div className='nav-left'>
        <div className='nav-name'>Mohamed</div>
        <Toggel/>
    </div>
    <div className='nav-right'>
        <div className='nav-list'>
            <ul>
            <li>
                <Link spy={true} to='NavBar' smooth={true} activeClass='active'>                
                Home
                </Link>
                </li>
                <li>
                <Link spy={true} to='Services' smooth={true}>                
                Services
                </Link>
                </li>
                <li>
                <Link spy={true} to='Experience' smooth={true}>                
                Experience
                </Link>
                </li>
                <li>
                <Link spy={true} to='Portfolio' smooth={true}>                
                Portfolio
                </Link>
                </li>
                <li>
                <Link spy={true} to='Testimonials' smooth={true}>                
                Testimonials
                </Link>
                </li>
            </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className='button nav-button'>Contact</button>
    </Link>
    </div>
  </div>
  )
}

export default NavBar