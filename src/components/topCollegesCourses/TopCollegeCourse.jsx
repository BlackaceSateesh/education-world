import { Nav, Tab } from "react-bootstrap";
import "../../styles/homePage/TopCollegeCourse.css";
import TopContent from "./TopContent";

const TopCollegeCourse = () => {
  return (
    <>
      <div className="TopCollegeCourse">
        <div className="SectionHeading">
          <h6>
            Top <b>10</b> <br /> Colleges
          </h6>
        </div>
        <div className="tab-wrapper">
          <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
            <div className="top-course-Tab">
              <div className="content-pannel">
                <h5 className="heading">
                  Select <br />
                  <b>Course</b>
                </h5>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="tab1">Computer Science</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab2">Mechanical Engineering</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab3">Chemical Engineering</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab4">Biotechnology</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab5">Agriculture Engineering</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="content-wrapper">
                <Tab.Content>
                  <Tab.Pane eventKey="tab1"><TopContent /></Tab.Pane>
                  <Tab.Pane eventKey="tab2"><TopContent /></Tab.Pane>
                  <Tab.Pane eventKey="tab3"><TopContent /></Tab.Pane>
                  <Tab.Pane eventKey="tab4"><TopContent /></Tab.Pane>
                  <Tab.Pane eventKey="tab5"><TopContent /></Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default TopCollegeCourse;
