import { MainContent } from "../../constants/mainContent";
import userPic from "../../assets/userImg.png";
import "../../styles/global/sidemenu.css";
import { Nav } from "react-bootstrap";
const SidemenuInner = () => {
  return (
    <>
      <div className="SidemenuInner">
        <div className="header-wrapper">
          <div className="app-logo">
            <img src={MainContent?.appLogo} alt="appLogo" />
          </div>
          <div className="nav-lists">
            <Nav defaultActiveKey="#home">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#highlight">Highlights</Nav.Link>
              <Nav.Link href="#courses-fees">Courses & Fees</Nav.Link>
              <Nav.Link href="#cutoff">Cutoff</Nav.Link>
              <Nav.Link href="#placements">Placements</Nav.Link>
              <Nav.Link href="#ranking">Ranking</Nav.Link>
              <Nav.Link href="#scholarships">Scholarships</Nav.Link>
              <Nav.Link href="#campus">Campus</Nav.Link>
              <Nav.Link href="#departments">Departments</Nav.Link>
              <Nav.Link href="#faculty">Faculty</Nav.Link>
              <Nav.Link href="#alumni">Alumni</Nav.Link>
              {/* <Nav.Link href="#how-to-reach-IIT-Madras">How to Reach IIT Madras?</Nav.Link> */}
              <Nav.Link href="#fees-eligibility">Fees & Eligibility</Nav.Link>
              <Nav.Link href="#all-courses">All Courses</Nav.Link>
            </Nav>
          </div>
        </div>
        <div className="footer-wrapper">
          {/* <div className="social-lists">
            <ul>
              <li>
                <Link>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link>
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="user-wrapper">
            <div className="userPic">
              <img src={userPic} alt="userPic" />
            </div>
            <div className="txt">
              <h5 className="name">Rajat Pradhan</h5>
              <p className="cnt">prajat917@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidemenuInner;
