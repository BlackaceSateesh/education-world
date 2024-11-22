/* eslint-disable react/prop-types */
import chandigarhImg from "../../assets/top-college-university/chandigarh.png";
import chennaiImg from "../../assets/top-college-university/chennai.png";
import gujratImg from "../../assets/top-college-university/gujrat.png";
import maharastraImg from "../../assets/top-college-university/maharastra.png";
import punjabImg from "../../assets/top-college-university/punjab.png";
import roorkeeImg from "../../assets/top-college-university/roorkee.png";
import TopCollegsCard from "./TopCollegsCard";
import "../../styles/homePage/TopColleges.css";

const TopColleges = ({ id }) => {
  const data = [
    {
      add: "Chennai, Tamil Nadu | AICTE",
      name: "Indian Institute of Technology Madras",
      fees: "2.42 Lacs",
      duration: "First Year Fees",
      rankDigit: "227",
      rankOutOf: "Ranked out of 1400 QS",
      link: "/",
      img: chennaiImg,
    },
    {
      add: "Ahmedabad, Gujarat | UGC",
      name: "Indian Institute of Management",
      fees: "25.00 Lacs",
      duration: "First Year Fees",
      rankDigit: "421",
      rankOutOf: "Ranked out of 2000 CWUR",
      link: "/",
      img: gujratImg,
    },
    {
      add: "Chandigarh, Chandigarh | NCTE, AICTE",
      name: "Chandigarh University [CU]",
      fees: "2.10 Lacs",
      duration: "First Year Fees",
      rankDigit: "691",
      rankOutOf: "Ranked out of 1400 QS",
      link: "/",
      img: chandigarhImg,
    },
    {
      add: "Pune, Maharashtra | AICTE",
      name: "Management Institute of Leadership and Excellence Lexicon MILE",
      fees: "9.50 Lacs",
      duration: "Total Fees",
      rankDigit: "11",
      rankOutOf: "Ranked out of 80 TOI",
      link: "/",
      img: maharastraImg,
    },
    {
      add: "Roorkee, Uttarakhand | AICTE, UGC",
      name: "Indian Institute of Technology IIT Roorkee",
      fees: "2.30 Lacs",
      duration: "First Year Fees",
      rankDigit: "335",
      rankOutOf: "Ranked out of 1400 QS",
      link: "/",
      img: roorkeeImg,
    },
    {
      add: "Jalandhar, Punjab | NCTE, COA",
      name: "Lovely Professional University - [LPU]",
      fees: "2.80 Lacs",
      duration: "First Year Fees",
      rankDigit: "601",
      rankOutOf: "Ranked out of 1501 THE",
      link: "/",
      img: punjabImg,
    },
  ];
  return (
    <>
      <div id={id ? id : ""} className="TopColleges">
        <div className="inner-section">
          <div className="SectionHeading">
            <h6>
              Top <br /> Universities <b>&</b> Colleges
            </h6>
          </div>

          <div className="card-wrapper">
            {data?.map((e, i) => {
              return <TopCollegsCard key={`top${i}`} data={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopColleges;
