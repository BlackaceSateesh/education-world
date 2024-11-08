import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TopCourseCard = ({ data }) => {
  return (
    <>
      <div className="TopCourseCard">
        <div className="top">
          {data?.logo && (
            <div className="logo">
              <img src={data?.logo} alt="" />
            </div>
          )}
          <h5 className="name">{data?.title}</h5>
        </div>
        <div className="center">
          {data?.detailArr?.map((e, i) => {
            return (
              <div key={`values${i}`} className="keyValues">
                <h6 className="key">{e?.prefix}</h6>
                <h6 className="value">{e?.suffix}</h6>
              </div>
            );
          })}
        </div>
        <div className="btm">
          {data?.processArr?.map((e, i) => {
            return (
              <Link key={`process${i}`} className="keyValues">
                {e.name} <FaArrowRight />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopCourseCard;
