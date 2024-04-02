import icon1 from "../assets/img/webCreator.svg"
import icon2 from "../assets/img/mobileCreator.svg"
import icon3 from "../assets/img/gameCreator.svg"
import icon4 from "../assets/img/security.svg"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>In my free times and work-project based, i have developed the following skills:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={icon1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={icon2} alt="Image" />
                                <h5>Mobile Development</h5>
                            </div>
                            <div className="item">
                                <img src={icon3} alt="Image" />
                                <h5>Game Development</h5>
                            </div>
                            <div className="item">
                                <img src={icon4} alt="Image" />
                                <h5>Cibersecurity</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
