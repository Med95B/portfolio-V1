import './NavBar.css'

function NavBar() {
  return (
  <div className='nav-wrapper'>
    <div className='nav-left'>
        <div className='nav-name'>
            Mohamed
        </div>
        <span>Toggel</span>
    </div>
    <div className='nav-right'>
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonial</li>
            </ul>
        </div>
        <button className='button nav-button'>Contact</button>
    </div>
  </div>
  )
}

export default NavBar