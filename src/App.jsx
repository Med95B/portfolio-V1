import { useContext } from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import NavBar from './components/NavBar/NavBar'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Works from './components/Works/Works'
import { ThemeContext } from './Context'

function App() {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode

  return (
    <div className='App' style={{background:darkMode?'black':'',color:darkMode?'white':''}}>
   <NavBar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Works/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App
