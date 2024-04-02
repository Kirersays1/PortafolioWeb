import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/gitlogo.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>© 2024 Ever. Casi todos los derechos reservados</p>
            <a href="https://storyset.com/online">Online illustrations by Storyset</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

            {/*Iconos de las redes sociales*/}
            <div className="social-icon">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/everessaurodriguezsandoval/"><img src={navIcon1} alt="" /></a>
                {/*Github*/}
                <a href="https://github.com/Kirersays1"><img src={navIcon2} alt="" /></a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
