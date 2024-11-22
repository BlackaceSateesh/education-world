import { Link } from "react-router-dom";
import ButtonMain from "../ui/ButtonMain";
import { MainContent } from "../../constants/mainContent";
import "../../styles/global/Header.css";
import { FiKey } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuToggle, setToggle] = useState(false);
  return (
    <>
      <div className="Header">
        <div className="inner-section">
          <div className="app-logo">
            <img src={MainContent?.appLogo} alt="appLogo" />
          </div>
          <button onClick={() => setToggle(!menuToggle)} className="menuTgl">
            <HiDotsVertical />
          </button>
          <div className={` menu-wrapper ${menuToggle ? "show" : "hide"}`}>
            <button onClick={() => setToggle(false)} className="menuTglClose">
              <IoCloseSharp />
            </button>
            <div className="left-wrapper">
              <ul>
                <li>
                  <Link>All Courses</Link>
                </li>
                <li>
                  <Link>B.Tech</Link>
                </li>
                <li>
                  <Link>MBA</Link>
                </li>
                <li>
                  <Link>B.Sc(Nursing)</Link>
                </li>
                <li>
                  <Link>BBA</Link>
                </li>
                <li>
                  <Link>BCA</Link>
                </li>
                <li>
                  <Link>MBBS</Link>
                </li>
                <li>
                  <Link>M.Tech</Link>
                </li>
              </ul>
            </div>
            <div className="right-wrapper">
              <ButtonMain clsName="noBor" name="Sign In" />
              <ButtonMain name="Sign Up" icon={<FiKey />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
