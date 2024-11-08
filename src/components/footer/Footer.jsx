import { Link } from "react-router-dom";
import { MainContent } from "../../constants/mainContent";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { PiFigmaLogo, PiYoutubeLogo } from "react-icons/pi";
import { SiInstagram } from "react-icons/si";
import '../../styles/homePage/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="inner-section">
          <div className="footer-links">
            <div className="card-wrapper details">
              <div className="logo">
                <img src={MainContent.appLogo} alt="appLogo" />
              </div>
              <p className="para">{MainContent.appDesc}</p>
              <div className="social-links">
                <Link className="card1">
                  <LuFacebook />
                </Link>
                <Link className="card1">
                  <FiTwitter />
                </Link>
                <Link className="card1">
                  <PiYoutubeLogo />
                </Link>
                <Link className="card1">
                  <SiInstagram />
                </Link>
                <Link className="card1">
                  <PiFigmaLogo />
                </Link>
              </div>
            </div>
            <div className="card-wrapper">
              <h5 className="heading">Product</h5>
              <ul>
                <li>
                  <Link>Landing Page</Link>
                </li>
                <li>
                  <Link>Popup Builder</Link>
                </li>
                <li>
                  <Link>Web-design</Link>
                </li>
                <li>
                  <Link>Content</Link>
                </li>
                <li>
                  <Link>Integrations</Link>
                </li>
              </ul>
            </div>
            <div className="card-wrapper">
              <h5 className="heading">Use Cases</h5>
              <ul>
                <li>
                  <Link>Web-designers</Link>
                </li>
                <li>
                  <Link>Marketers</Link>
                </li>
                <li>
                  <Link>Small Business</Link>
                </li>
                <li>
                  <Link>Website Builder</Link>
                </li>
              </ul>
            </div>
            <div className="card-wrapper">
              <h5 className="heading">Resources</h5>
              <ul>
                <li>
                  <Link>Academy</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Themes</Link>
                </li>
                <li>
                  <Link>Hosting</Link>
                </li>
                <li>
                  <Link>Developers</Link>
                </li>
                <li>
                  <Link>Support</Link>
                </li>
              </ul>
            </div>
            <div className="card-wrapper">
              <h5 className="heading">Company</h5>
              <ul>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
                <li>
                  <Link>Teams</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscription">
            <h5>Subscribe</h5>
            <p>
              Subscribe to stay tuned for new web design and latest updates.
              Let&apos;s do it!
            </p>
            <div className="msg-wrapper">
              <input type="text" placeholder="Enter your email Address" />
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="left">© 2024 All Rights Reserved</p>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Sales and Refunds</Link>
            </li>
            <li>
              <Link>Legal</Link>
            </li>
            <li>
              <Link>Site Map</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
