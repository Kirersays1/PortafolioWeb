import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/yo.png"
import { Save } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ["IT Engineer", "Game Developer", "Mobile Developer"]
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={7}>
              <div>
                <h1>{`Hey , I'm Ever a`} <span className="txt-rotate" dataPeriod="1"><span className="wrap">{text}</span></span></h1>
                  <p>IT Engineer with experience in web and mobile development  from Jalisco, México.</p>
                  <a href ="/public/docs/AlldatumCV.pdf" download><button>Download Resume<Save size={25} /></button></a>
              </div>

          </Col>
          <Col xs={15} md={6} xl={5}>
                <div >
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
