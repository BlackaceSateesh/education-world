import "../../styles/collegeInner/CollegeInner.css";
import flowerPng from "../../assets/flowerPng.png";
import studentPng from "../../assets/topColleges/studentPng.png";
import ButtonMain from "../../components/ui/ButtonMain";
import { AiOutlineDownload, AiOutlineRightCircle } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiBuildingsBold } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import cardImg1 from "../../assets/collegeInner/cardImg1.png";
import cardImg2 from "../../assets/collegeInner/cardImg2.png";
import blankPlaceholder from "../../assets/collegeInner/blankPlaceholder.png";
import prizeBanner from "../../assets/collegeInner/prize-banner.png";
import { GrDownload } from "react-icons/gr";
import SideCardWithPrice from "../../components/collegeInner/SideCardWithPrice";
import SideCardWithImg from "../../components/collegeInner/SideCardWithImg";
import SideCardWithImgPrice from "../../components/collegeInner/SideCardWithImgPrice";
import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";
import img4 from "../../assets/gallery/img4.png";
import img5 from "../../assets/gallery/img5.png";
import img7 from "../../assets/gallery/img7.png";
import img8 from "../../assets/gallery/img8.png";
import img9 from "../../assets/gallery/img9.png";
import RegisterApply from "../../components/registerApply/RegisterApply";
import TopColleges from "../../components/topColleges/TopColleges";
import Testimonials from "../../components/testimonials/Testimonials";
import { topCoursesData } from "../../constants/dummyContent";
import TopCourseCard from "../../components/topCourseSlider/TopCourseCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SearchSection from "../../components/searchSection/SearchSection";

const CollegeInner = () => {
  // dummy
  const topCourses = [
    {
      name: "BSC Data Science and Applications",
      duration: "4 Years",
      price: "226250",
    },
    {
      name: "B.Tech Computer Science Engineering",
      duration: "4 Years",
      price: "226250",
    },
    {
      name: "B.Tech Aerospace Engineering",
      duration: "4 Years",
      price: "226250",
    },
  ];
  const otherCourses = [
    {
      name: "Department of Management Studies, IIT Madras -[DoMS IIT Madras]",
      para: "Chennai, Tamil Nadu",
      cardImg: blankPlaceholder,
    },
    {
      name: "IIT Madras Online Degree",
      para: "Chennai, Tamil Nadu",
      cardImg: blankPlaceholder,
    },
  ];
  const departmentData = [
    {
      name: "DeDepartment of Management Studies, IIT Madras -[DoMS IIT Madras]",
      para: "Chennai, Tamil Nadu",
      cardImg: blankPlaceholder,
    },
  ];
  const newsData = [
    {
      name: "Bachelor of Science (BS) Degree in Electronic Systems Applications Started in IIT Madras, Check Details",
      para: "4 weeks Ago",
      cardImg: blankPlaceholder,
    },
    {
      name: "IIT Madras Organises Training for Karnataka Police on Advanced Road Safety Using RCA Method",
      para: "Aug 8, 2024",
      cardImg: blankPlaceholder,
    },
    {
      name: "Nine IITs to Discontinue Branch Change Option for First-Year Students; Check List Here",
      para: "Aug 1, 2024",
      cardImg: blankPlaceholder,
    },
    {
      name: "Ratti Chhatr Scholarship Program by Panasonic Opens Applications, Get Direct Link Here",
      para: "Jul 28, 2024",
      cardImg: blankPlaceholder,
    },
    {
      name: "Weightage of Academics and Work Experience in CAT 2024",
      para: "Jul 28, 2024",
      cardImg: blankPlaceholder,
    },
    {
      name: "Ratti Chhatr Scholarship Program by Panasonic Opens Applications, Get Direct Link Here",
      para: "Jul 28, 2024",
      cardImg: blankPlaceholder,
    },
    {
      name: "Weightage of Academics and Work Experience in CAT 2024",
      para: "Jul 28, 2024",
      cardImg: blankPlaceholder,
    },
  ];
  const facultyData = [
    {
      name: "Prof. Muruganandam TM",
      designation: "Professor, Department of Aerospace Engineering",
    },
    {
      name: "Mr. Amit Kumar",
      designation: "Faculty Member, Department of Aerospace Engineering",
    },
    {
      name: "Mr. Abhijit P Deshpande",
      designation: "Faculty Member, Department of Chemical Engineering",
    },
  ];
  const aboutCourses = [
    { name: "B.Tech Computer Science Engineering" },
    { name: "B.Tech Aerospace Engineering" },
    { name: "B.Tech Naval architecture & Ocean Engineering" },
    { name: "M.Tech Computer Science and Engineering" },
    { name: "B.Tech Mechanical Engineering" },
  ];
  const studentView = [
    {
      university: "IIT Delhi - Indian Institute of Technology [IITD]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Kharagpur - Indian Institute of Technolog",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Bombay - Indian Institute of Technology",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "SSN College of Engineering - [SSNCE]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Delhi - Indian Institute of Technology [IITD]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Kharagpur - Indian Institute of Technolog",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Bombay - Indian Institute of Technology",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "SSN College of Engineering - [SSNCE]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Delhi - Indian Institute of Technology [IITD]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Kharagpur - Indian Institute of Technolog",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "IIT Bombay - Indian Institute of Technology",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
    {
      university: "SSN College of Engineering - [SSNCE]",
      course: "BE/B.Tech - Bachelor of Technology",
      price: "228650",
      cardImg: blankPlaceholder,
    },
  ];
  const galleryData = [img1, img2, img3, img4, img5, img7, img8, img9];
  return (
    <>
      <div className="CollegeInner" id="home">
        <div className="section-inner">
          <div className="tag-header">
            <div className="icon">
              <img src={flowerPng} alt="" />
              <span>#3</span>
            </div>
            <span className="txt">out of 275 by The Week</span>
          </div>
          <div className="details-wrapper">
            <h1 className="main-heading">
              Indian Institute of Technology -<b>Madras</b>
            </h1>
            <p className="sub">
              (Admission 2025, Cutoff, Courses, Fees,Placement, Ranking)
            </p>
          </div>
          {/* eligibility */}
          <div id="fees-eligibility" className="eligibility">
            <div className="left">
              <div className="card1">
                <p>Eligibility:</p>
                <h6>10+2 with 75% + JEE Advanced</h6>
              </div>
              <div className="card1">
                <p>Application Date:</p>
                <h6 className="highlight">27 Apr - 18 Jun 2024</h6>
              </div>
            </div>
            <div className="right">
              <ButtonMain name="Brochure" icon={<AiOutlineDownload />} />
              <ButtonMain name="Apply Now" icon={<IoIosArrowDropright />} />
            </div>
          </div>
          {/* insight */}
          <div className="insight-wrapper">
            <h6 className="insight-heading">
              Insights Based on NIRF Ranking 2024
            </h6>
            <div className="card-wrapper">
              <div className="card1">
                <div className="icon">
                  <img src={studentPng} alt="" />
                </div>
                <div className="content">
                  <div className="top">
                    <span>
                      Male: <b>2739</b>
                    </span>
                    <span>
                      Female: <b>701</b>
                    </span>
                  </div>
                  <p>Student Intake (3440)</p>
                </div>
              </div>
              <div className="card1">
                <div className="icon">
                  <img src={studentPng} alt="" />
                </div>
                <div className="content">
                  <div className="top">
                    <b>₹1663440</b>
                  </div>
                  <p>Median Salary</p>
                </div>
              </div>
              <div className="card1">
                <div className="icon">
                  <img src={studentPng} alt="" />
                </div>
                <div className="content">
                  <div className="top">
                    <b>79%</b>
                  </div>
                  <p>Passing %</p>
                </div>
              </div>
              <div className="card1">
                <div className="icon">
                  <img src={studentPng} alt="" />
                </div>
                <div className="content">
                  <div className="top">
                    <b>62%</b>
                  </div>
                  <p>Placement %</p>
                </div>
              </div>
            </div>
            <div className="btm-wrapper">
              <span>
                <HiOutlineLocationMarker /> Chennai, Tamil Nadu
              </span>
              <span>
                <PiBuildingsBold /> Autonomous University
              </span>
              <span>
                <FaRegCalendarAlt /> Estd 1959
              </span>
            </div>
          </div>
        </div>
        {/* about */}
        <div className="about-wrapper" id="about">
          <div className="sectionHeading">
            <h6>About Indian Institute of Technology - Madras </h6>
          </div>
          <div className="inner">
            <p className="para">
              Indian Institute of Technology Madras (IIT Madras) is a
              prestigious educational institution located in Chennai, India.
              Established in 1959, IIT Madras has performed exceptionally well
              in NIRF rankings. It has secured the 1st rank in Engineering and
              Overall categories for several consecutive years.
            </p>
            <p className="para">
              IIT Madras offers a wide range of programs. Among these, B.Tech. ,
              M.Tech and B.Tech-M.Tech courses are the most popular. Admission
              to the B.Tech & B.Tech-M.Tech programs are based on the JEE
              Advanced exam rank, followed by JoSAA counselling.
              <Link> IIT Madras B.Tech CSE </Link> program has a competitive
              cutoff ranging from 144 to 148 (Closing Ranks) for various
              counselling rounds for the general category students.
            </p>
            <p className="para">
              IIT Madras Placements 2024 is ongoing and the final report will be
              released at the end of July 2024. However, IITM MBA Placements
              2024 has been concluded and the highest and average package closed
              at INR 29.65 LPA and INR 16.93 LPA respectively. IIT Madras has
              achieved 100% placements for MBA Batch 2024. The notable
              recruiters of IIT Madras who participated in 2024 placements
              include P&G, Hexaware, McKinsey & Company, Accenture, Morgan
              Stanley, etc.
            </p>
            <p className="para">
              IIT Madras campus is spread across 617 acres. IITM has an Open Air
              Theatre, 3 Temples, 2 Schools, 2 Guest Houses, and 20 Hostels.
              Apart from these amenities, the Indian Institute of Technology
              Madras also has various Sangam Clubs and Sabhas & Samitis for
              student development. IITM is known for its vibrant fests like
              Saarang (5-day festival) and Shaastra (Annual Technical Fest of
              IITM).
            </p>
          </div>
        </div>
        {/* inner details */}
        <div className="inner-container">
          <div className="section-inner">
            <div className="left-wrapper">
              {/* highlight */}
              <div id="highlight" className="detail-wrapper m-0">
                <h6 className="heading2">IIT Madras Highlights</h6>
                <p className="para">
                  The table below shows the important highlights of IIT Madras:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>IIT Madras Highlights</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Established Year | Type</td>
                        <td>1959 | Public</td>
                      </tr>
                      <tr>
                        <td>Location</td>
                        <td>Madras, Chennai</td>
                      </tr>
                      <tr>
                        <td>Campus Area</td>
                        <td>617 Acres</td>
                      </tr>
                      <tr>
                        <td>Total Departments</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>NIRF Ranking 2023</td>
                        <td>
                          Overall: 1 <br />
                          Engineering: 1 <br />
                          Management: 15
                        </td>
                      </tr>
                      <tr>
                        <td>Admission Criteria</td>
                        <td>Entrance Based</td>
                      </tr>
                      <tr>
                        <td>Top Courses</td>
                        <td>B.Tech, M.Tech, B.Tech-M.Tech</td>
                      </tr>
                      <tr>
                        <td>Official Website</td>
                        <td>
                          <Link to={"https://www.iitm.ac.in/"}>
                            https://www.iitm.ac.in/
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* course fee */}
              <div id="courses-fees" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Courses & Fees</h6>
                <p className="para">
                  IIT Madras offers more than <Link> 100 courses </Link> through
                  undergraduate, postgraduate, and research degrees. The courses
                  are streams of Engineering, Sciences, Humanities, and
                  Management. Admission to these courses is based on
                  national-level exam such as JEE Advanced, GATE, and IIT JAM.
                  Below is a brief overview of IIT Madras courses along with
                  their eligibility criteria, selection and tuition fees:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Eligibility</th>
                        <th>Selection Criteria</th>
                        <th>Fees (First Year)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* admission */}
              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras Admission 2024</h6>
                <p className="para">
                  B.Tech and M.Tech programs are the top courses that IIT Madras
                  offers. For IITM Madras B.Tech admissions, the institute
                  considers the JEE Advanced score, and for M.Tech admissions,
                  the GATE scores are accepted by the institute.{" "}
                  <Link> JoSAA counselling </Link> is used to assign seats for
                  B.Tech admissions at IITM. The JoSAA portal releases the
                  cutoff scores for each of the six rounds of admission to
                  B.Tech programs.
                </p>
                <br />
                <br />
                <p className="para">
                  The table below shows the entrance exam scores accepted by IIT
                  Madras or various course admission:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Entrance exam accepted</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>B.Tech/ B.Tech-M.Tech</td>
                        <td>JEE Advanced</td>
                      </tr>
                      <tr>
                        <td>M.Tech</td>
                        <td>GATE</td>
                      </tr>
                      <tr>
                        <td>M.Sc</td>
                        <td>IIT JAM</td>
                      </tr>
                      <tr>
                        <td>MBA</td>
                        <td>CAT</td>
                      </tr>
                      <tr>
                        <td>Ph.D.</td>
                        <td>GATE/ UGC-NET/ CSIR-NET/ ICAR or ICMR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* seat */}
              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras B.Tech Seat Intake 2024</h6>
                <p className="para">
                  Candidates can check the table below to know the IITM seat
                  intake for various B.Tech branches based on JoSAA counselling:
                </p>

                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Branch</th>
                        <th>Seat Intake</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Aerospace Engineering</td>
                        <td>62</td>
                      </tr>
                      <tr>
                        <td>Chemical Engineering</td>
                        <td>114</td>
                      </tr>
                      <tr>
                        <td>Civil Engineering</td>
                        <td>121</td>
                      </tr>
                      <tr>
                        <td>Computer Science and Engineering</td>
                        <td>81</td>
                      </tr>
                      <tr>
                        <td>Electrical Engineering</td>
                        <td>148</td>
                      </tr>
                      <tr>
                        <td>Engineering Physics</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <td>Biological Engineering</td>
                        <td>42</td>
                      </tr>
                      <tr>
                        <td>Mechanical Engineering</td>
                        <td>183</td>
                      </tr>
                      <tr>
                        <td>Metallurgical and Materials Engineering</td>
                        <td>62</td>
                      </tr>
                      <tr>
                        <td>Naval Architecture and Ocean Engineering</td>
                        <td>69</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* cutoff */}
              <div id="cutoff" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Cutoff 2024</h6>
                <p className="para">
                  IIT Madras JEE Advanced Cutoff 2024 is out. The table given
                  below shows Round 1 Opening Rank & Round 5 Closing Rank.
                </p>

                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Academic Program Name</th>
                        <th>Round 1 Opening Rank</th>
                        <th>Round 5 Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Aerospace Engineering</td>
                        <td>1469</td>
                        <td>2815</td>
                      </tr>
                      <tr>
                        <td>Aerospace Engineering (B.Tech + M.Tech)</td>
                        <td>2199</td>
                        <td>2984</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* placement */}
              <div id="placements" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Placements 2024</h6>
                <p className="para">
                  IIT Madras Placements 2024 is ongoing and the final placement
                  report will be made available at the end of July 2024.
                  However, the IIT Chennai MBA placements 2024 are concluded and
                  100% of MBA students have been placed. The highest package of
                  IIT Madras 29.65 LPA and the average package is INR 16.93 LPA
                  for the MBA (2024) batch.
                </p>
                <br />
                <p className="para">
                  According to the NIRF 2024 report, IIT Madras&apos;s median
                  package for B.Tech is INR 16.63 Lakhs per annum and the median
                  salary for M.Tech is INR 15 LPA. The median package for
                  B.Tech-M.Tech dual degree was INR 17 LPA during the placements
                  in 2023.
                </p>
              </div>

              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras MBA Placements 2024</h6>
                <p className="para">
                  Students can check the table below to know IIT Madras MBA
                  placements 2024:
                </p>

                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>IIT Madras MBA Placement 2024 Statistics</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Highest Package</td>
                        <td>INR 29.65 LPA</td>
                      </tr>
                      <tr>
                        <td>Average Package</td>
                        <td>INR 16.93 LPA</td>
                      </tr>
                      <tr>
                        <td>Top 25% Average CTC</td>
                        <td>INR 21.89 LPA</td>
                      </tr>
                      <tr>
                        <td>Median Package</td>
                        <td>INR 16.39 LPA</td>
                      </tr>
                      <tr>
                        <td>Placement Percentage</td>
                        <td>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="para mt-5">
                  The below table highlights the{" "}
                  <Link> IIT Madras placement </Link> statistics based on the
                  NIRF Report 2024:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Courses</th>
                        <th>Students Placed</th>
                        <th>Median Package</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>B.Tech</td>
                        <td>496</td>
                        <td>INR 16.63 LPA</td>
                      </tr>
                      <tr>
                        <td>M.Tech</td>
                        <td>390</td>
                        <td>INR 15 LPA</td>
                      </tr>
                      <tr>
                        <td>B.Tech + M.Tech</td>
                        <td>325</td>
                        <td>INR 17 LPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ranking */}
              <div id="ranking" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Ranking 2024</h6>
                <p className="para">
                  Indian Institute of Technology Madras has been ranked by
                  various prominent organizations for its excellence in
                  engineering and other domains. IIT Madras is recognized as an
                  “Institute of Eminence” and has been holding the 1st position
                  under the “Engineering” category in NIRF ranking since 2016.
                  For the year 2023 as well, IIT Madras has been ranked at 1st
                  position in both Overall and Engineering category by NIRF. The
                  table below shows the <Link> ranking of IIT Madras </Link>
                </p>

                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Ranking Body</th>
                        <th>Year</th>
                        <th>Rank</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>NIRF (Overall)</td>
                        <td>2023</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>NIRF (Engineering)</td>
                        <td>2023</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>NIRF (Management)</td>
                        <td>2023</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>NIRF (Research)</td>
                        <td>2023</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>NIRF Innovation (Overall)</td>
                        <td>2023</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>IIRF (B.Tech)</td>
                        <td>2023</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>QS World University Rankings</td>
                        <td>2024</td>
                        <td>227</td>
                      </tr>
                      <tr>
                        <td>QS Asia University Rankings</td>
                        <td>2024</td>
                        <td>53</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Scholarships */}
              <div id="scholarships" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Scholarships 2024</h6>
                <p className="para">
                  IIT Madras scholarships are available for needy and deserving
                  students. Special scholarships promote diversity by assisting
                  students from marginalised backgrounds, including the SC/ST
                  category and female students. Some of the{" "}
                  <Link>scholarships at IIT Madras</Link> are as follows:
                </p>
                <ul>
                  <li>
                    SC/ST Scholarship:IITM offers renewable SC/ST scholarships
                    for students whose annual parental income doesn&apos;t
                    exceed INR 4,50,000.Students under this scheme are offered
                    tuition fee exemption along with free meals and a monthly
                    pocket allowance of INR 250.
                  </li>
                  <li>
                    Institute Merit-cum-Means Scholarships:Only 25% of admitted
                    students are eligible for this 67% tuition fee waiver from
                    IITM. Students whose annual parental income is less than INR
                    4.5 lakh are eligible to apply for merit-cum-means
                    scholarships. Also, a minimum GPA of 5.0 from the previous
                    semester is a requirement for the scholarship to be renewed.
                  </li>
                  <li>
                    Institute Notional Prize:Based on the JEE rank and annual
                    parental income not exceeding INR 4,50,000, IITM offers a
                    one-time grant of INR 1000 to the 7% of the students
                    admitted.
                  </li>
                  <li>
                    Institute Free Studentship:IIT Madras offers a free
                    studentship for students whose annual parental income is
                    less than INR 4,50,000 lakhs. Students are exempted from
                    paying 67% of the tuition fee under this scheme. However,
                    the scholarship is only offered to 25% of the UG students.
                  </li>
                  <li>
                    Dr K Vasanth Rau Scholarship:This scholarship is given based
                    on JEE rank to students having a parental income up to INR
                    5.50 lakhs. The scholarship is renewed based on a GPA of 6.5
                    and above.
                  </li>
                  <li>
                    M. Sankaraiah and M Saradha (Mithigiri) Scholarship:This
                    scholarship is awarded to the students of B.Tech / Dual
                    Degree Electrical Engineering based on the highest CGPA at
                    the end of the 4th semester.
                  </li>
                  <li>
                    Ministry of Minority Affairs, GoI Meritcum-Means
                    Scholarship:Students belonging to minority communities such
                    as Muslims, Christians, Sikhs, Buddhists and Parsis and
                    whose parental income does not exceed INR 2.5 lakhs per
                    annum are eligible.
                  </li>
                </ul>
              </div>
              {/* campus */}
              <div id="campus" className="detail-wrapper">
                <h6 className="heading2">IIT Madras Scholarships 2024</h6>
                <p className="para">
                  IIT Madras campus spans 617 acres in Chennai, Tamil Nadu. The
                  campus is divided into three distinct zones: Academic, Hostel,
                  and Residential. IIT Madras offers state-of-the-art
                  infrastructure and amenities to its students and faculty
                  members. The academic zone well-equipped laboratories,
                  libraries, and classrooms. Here are some of the facilities
                  offered by IIT Madras:
                </p>
                <ul>
                  <li>
                    Transport Services: The institute offers transportation
                    services within the campus and to nearby areas.
                  </li>
                  <li>
                    Library: The Central Library at IIT Madras has an extensive
                    collection of books, journals, and digital resources to
                    support academic research needs.
                  </li>
                  <li>
                    Medical Facilities: The campus has a health centre that
                    provides medical services to students, including
                    consultations, first aid, and emergency care.
                  </li>
                  <li>
                    Wi-Fi: High-speed internet connectivity is available across
                    the campus.
                  </li>
                  <li>
                    Cafeteria: There are several cafeterias and food outlets
                    where students can grab meals and snacks.
                  </li>
                  <li>
                    Auditorium: IIT Madras has an auditorium facility for events
                    and seminars. An open theatre is also available in a large
                    space near the hostel, where every weekend movies are
                    screened by the film club.
                  </li>
                  <li>
                    Guest Rooms: For visiting faculty, parents, and guests, IIT
                    Madras has two guest rooms.
                  </li>
                  <li>
                    Sports Facilities: IIT Madras has stadiums for cricket,
                    football, hockey, and badminton.
                  </li>
                  <li>
                    Banks/ATMs: IIT Madras has two banks, State Bank of India
                    and Canara Bank. These two banks operate as regular
                    branches, and provide services to students, faculty, and
                    staff, along with ATM services.
                  </li>
                  <li>
                    Gym: A well-equipped gymnasium is accessible to students.
                  </li>
                  <li>
                    Shopping Centers: On-campus shopping centres cater to daily
                    needs of IITM students.
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-wrapper">
              <div className="card-bg-wrapper">
                <div className="card-img">
                  <img src={cardImg1} alt="" />
                </div>
                <div className="inner">
                  <h5 className="card-heading">
                    Are You Interested in this College?
                  </h5>
                  <ButtonMain
                    clsName="bg-yellow"
                    name="Apply Now"
                    icon={<AiOutlineRightCircle />}
                  />
                  <ButtonMain
                    clsName="bg-blue"
                    name="Download Brochure"
                    icon={<GrDownload />}
                  />
                </div>
              </div>
              <div className="card-bg-wrapper">
                <div className="inner">
                  <h5 className="card-heading">Videos</h5>
                  <div className="card-img">
                    <img src={cardImg2} alt="" />
                  </div>
                  <div className="card-img">
                    <img src={cardImg2} alt="" />
                  </div>
                  <ButtonMain clsName="fs-sm" name="View All Videos" />
                </div>
              </div>

              <div className="banner-img">
                <img src={prizeBanner} alt="" />
              </div>
              {/* top course */}
              <div className="card-body-wrapper">
                <div className="header">Top Courses</div>
                <div className="inner-wrapper">
                  {topCourses?.map((e, i) => {
                    return <SideCardWithPrice key={`course${i}`} data={e} />;
                  })}
                </div>
                <ButtonMain name="View All Courses" clsName="fs-sm" />
              </div>

              {/* other courses */}
              <div className="card-body-wrapper">
                <div className="header">Other Colleges in the Same Group</div>
                <div className="inner-wrapper">
                  {otherCourses?.map((e, i) => {
                    return <SideCardWithImg key={`other${i}`} data={e} />;
                  })}
                </div>
              </div>
              {/* News */}
              <div className="card-body-wrapper">
                <div className="header">News</div>
                <div className="inner-wrapper">
                  {newsData?.map((e, i) => {
                    return <SideCardWithImg key={`News${i}`} data={e} />;
                  })}
                </div>
              </div>
              {/* Department */}
              <div id="departments" className="card-body-wrapper">
                <div className="header">Department</div>
                <div className="inner-wrapper">
                  {departmentData?.map((e, i) => {
                    return <SideCardWithImg key={`Department${i}`} data={e} />;
                  })}
                </div>
              </div>
              {/* Faculties */}
              <div id="faculty" className="card-body-wrapper">
                <div className="header">Faculties</div>
                <div className="inner-wrapper">
                  {facultyData?.map((e, i) => {
                    return (
                      <>
                        <div
                          key={`deparment${i}`}
                          className="faculty-card card-container"
                        >
                          <h5 className="ff-bold">{e?.name}</h5>
                          <p>{e?.designation}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <ButtonMain name="View All Faculties" clsName="fs-sm" />
              </div>
              {/* about course */}
              <div className="card-body-wrapper">
                <div className="header">Learn More About Courses</div>
                <div className="inner-wrapper ">
                  {aboutCourses?.map((e, i) => {
                    return (
                      <>
                        <div key={`about${i}`} className="card-container">
                          <h5>{e?.name}</h5>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* also view */}
              <div className="card-body-wrapper">
                <div className="header">Student Also Visited</div>
                <div className="inner-wrapper full">
                  {studentView?.map((e, i) => {
                    return <SideCardWithImgPrice key={`visit${i}`} data={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-inner">
          {/* gallery */}
          <div className="gallery-wrapper">
            <h6 className="heading2">IIT Madras Gallary</h6>
            <div className="inner">
              <div className="fullVideo">
                <iframe
                  src="https://www.youtube.com/embed/3z8hYf59T80?si=WsSf64Y-iP2y6jhd"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="image-container">
                {galleryData?.map((e, i) => {
                  return (
                    <>
                      <div key={`gallery${i}`} className="galleryImg">
                        <img src={e} alt="image" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <div className="section-inner">
            <div className="left-wrapper">
              {/* hostel */}
              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras Hostels</h6>
                <p className="para">
                  IIT Madras has 15 hostels for boys and 5 hostels for girls.
                  These hostels are equipped with modern amenities to ensure a
                  comfortable stay. The hostel mess serves hygienic and
                  nutritious food to students.
                </p>
              </div>
              {/* Residential */}
              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras Residential Zone</h6>
                <p className="para">
                  Beyond academics, the IIT Madras campus provides recreational
                  spaces, sports facilities, and green areas for relaxation.
                  Students in extracurricular activities, participate in clubs,
                  and enjoy the vibrant campus life. IIT Madras campus has
                  various eateries, shops, and a gymkhana, ensuring a holistic
                  experience for all.
                </p>
              </div>
              {/* clubs */}
              <div className="detail-wrapper">
                <h6 className="heading2">IIT Madras Clubs</h6>
                <p className="para">
                  Beyond academics, the IIT Madras campus provides recreational
                  spaces, sports facilities, and green areas for relaxation.
                  Students in extracurricular activities, participate in clubs,
                  and enjoy the vibrant campus life. IIT Madras campus has
                  various eateries, shops, and a gymkhana, ensuring a holistic
                  experience for all.
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Eligibility</th>
                        <th>Selection Criteria</th>
                        <th>Fees (First Year)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                      <tr>
                        <td>B. Tech</td>
                        <td>
                          Passed 10+2 (PCM) from a recognised board with a
                          minimum of 75 % marks
                        </td>
                        <td>JEE Main + JoSAA Counseling</td>
                        <td>INR 2.15 lakhs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="right-wrapper">
              {/* also view */}
              <div className="card-body-wrapper">
                <div className="header">Student Also Visited</div>
                <div className="inner-wrapper full">
                  {studentView?.map((e, i) => {
                    return <SideCardWithImgPrice key={`visit${i}`} data={e} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* course offered */}
        <div className="section-inner">
          <div className="course-offered">
            <h6 className="heading2">Courses Offered By IIT Madras</h6>
            <p className="para">
              Select Degree and Streams to See Course Fees and Admission
              Details.
            </p>
            <SearchSection clsName="full" />
          </div>
        </div>

        <div id="all-courses" className="course-slider">
          <div className="slider-main">
            <div className="slider-wrapper">
              {topCoursesData?.sliderData?.map((e, i) => {
                return <TopCourseCard key={`courseCard${i}`} data={e} />;
              })}
            </div>
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
        <div className="section-inner">
          <RegisterApply />
          <TopColleges />
          <Testimonials id={"alumni"} />
        </div>
      </div>
    </>
  );
};

export default CollegeInner;
