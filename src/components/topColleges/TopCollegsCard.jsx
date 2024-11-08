import { FiAward } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TopCollegsCard = ({ data }) => {
  return (
    <>
      <div
        className="TopCollegsCard"
        style={{ backgroundImage: `url(${data?.img})` }}
      >
        <span className="tag">University</span>
        <p className="add">{data?.add}</p>
        <h5 className="name">{data?.name}</h5>
        <div className="detail">
          <PiGraduationCapBold /> <b>{data?.fees}</b> {data?.duration}
        </div>
        <div className="detail">
          <FiAward /> <b>{data?.rankDigit}</b> {data?.rankOutOf}
        </div>
        <Link to={data?.link}>
          <button className="applyBtn">Apply Now</button>
        </Link>
      </div>
    </>
  );
};

export default TopCollegsCard;
