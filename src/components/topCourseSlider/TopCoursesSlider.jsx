import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TopCourseCard from "./TopCourseCard";
import "../../styles/homePage/TopCoursesSlider.css";

/* eslint-disable react/prop-types */
const TopCoursesSlider = ({
  leftHeading,
  clsName,
  centerHeading,
  rightHeading,
  para,
  sliderData,
}) => {
  return (
    <>
      <div className={`TopCoursesSlider ${clsName ? clsName : ""}`}>
        <div className="left-wrapper">
          <div className="SectionHeading">
            <h6>
              {leftHeading} <b> {centerHeading} </b> {rightHeading}
            </h6>
          </div>
          <p className="para">{para}</p>
          <button className="learnMore">Learn More</button>
        </div>
        <div className="right-wrapper">
          <div className="slider-wrapper">
            {sliderData?.map((e, i) => {
              return <TopCourseCard key={`courseCard${i}`} data={e} />;
            })}
          </div>
          <div className="slider-navigation">
            <button className="left">
              <FaArrowLeftLong />
            </button>
            <button className="right">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCoursesSlider;
