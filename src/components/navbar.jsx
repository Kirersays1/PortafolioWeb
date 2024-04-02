import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/gitlogo.svg'
import {
  BrowserRouter as Router
} from "react-router-dom"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          {/*Espacio para el logo*/}
          
          {/* <Navbar.Brand href="/">
            <img src={''} alt="Logo" />
          </Navbar.Brand> */}

          {/*Controles del navBar*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          {/*Botones navBar*/}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#works" className={activeLink === 'works' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('works')}>Work</Nav.Link>
            </Nav>
            
            <span className="navbar-text">
              <div className="social-icon">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/everessaurodriguezsandoval/"><img src={navIcon1} alt="" /></a>
                {/*Github*/}
                <a href="https://github.com/Kirersays1"><img src={navIcon2} alt="" /></a>
              </div>
               < a href = "mailto:uselessmexicano@gmail.com"> <button className="vvd"><span>Let’s Connect</span></button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
