import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/siga.png";
import projImg2 from "../assets/img/piggy.png";
import projImg3 from "../assets/img/blockrunner.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "SIGAMEX",
      description:
        "App that allows the management of the association's agro-packaging for treatment",
      imgUrl: projImg1,
      role: "Mobile developer",
      link: "https://play.google.com/store/apps/details?id=com.SIGA.loginapp&pcampaignid=web_share",
      tool: "https://img.shields.io/badge/Java-Android_Studio-blue",
    },
    {
      title: "Piggy Bank",
      description:
        "DEMO designed to track expenses and income through a web form built with Streamlit",
      imgUrl: projImg2,
      role: "Fullstack",
      link: "https://github.com/Kirersays1/PiggyBank",
      tool: "https://img.shields.io/badge/Python-Streamlit-red",
    },
    {
      title: "Block Runners",
      description: "Endless 3D Runner made in Unity",
      imgUrl: projImg3,
      role: "Fullstack",
      link: "https://play.google.com/store/apps/details?id=com.Kirer.Blockrunners&pcampaignid=web_share",
      tool: "https://img.shields.io/badge/C%23-Unity-white",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="second">Mobile</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="third">Web</Nav.Link>
                  </Nav.Item>
                </Nav>

                {/*Contenido del primer banner : All*/}
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>

                  {/*Contenido del segundo banner: Mobile*/}
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index[0]} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>

                  {/*Contenido del tercer banner: Web*/}
                  <Tab.Pane eventKey="third">
                    <p>Tercer banner</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
