import { Col } from "react-bootstrap";
import { Download, Info, Link } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  role,
  link,
  tool,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>Role: {role} </p>
          <p>
            Tools: <img alt="Static Badge" className="shield" src={tool} />
          </p>
          <br /> <br />
          <a href={link}>
            <button type="button" className="btn btn-info btn-sm">
              Preview <Link size={25} />
            </button>
            </a>


          
        </div>
      </div>
    </Col>
  );
};
