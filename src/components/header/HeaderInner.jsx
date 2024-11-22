import { Link } from "react-router-dom";
import ButtonMain from "../ui/ButtonMain";
import "../../styles/global/Header.css";
import { FiKey } from "react-icons/fi";

const HeaderInner = () => {
  return (
    <>
      <div className="Header">
        <div className="inner-section">
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
    </>
  );
};

export default HeaderInner;
