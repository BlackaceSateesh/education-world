/* eslint-disable react/no-unescaped-entities */
import { FaAngleRight } from "react-icons/fa6";
import heroBanner from "../../assets/course-details/heroBanner.png";
import "../../styles/courseDetails/CourseDetails.css";
import SideCardWithImgPrice from "../../components/collegeInner/SideCardWithImgPrice";
import blankPlaceholder from "../../assets/collegeInner/blankPlaceholder.png";
import ButtonMain from "../../components/ui/ButtonMain";
import { AiOutlineRightCircle } from "react-icons/ai";
import { GrDownload } from "react-icons/gr";
import SideCardWithPrice from "../../components/collegeInner/SideCardWithPrice";
import SideCardWithImg from "../../components/collegeInner/SideCardWithImg";
import cardImg1 from "../../assets/collegeInner/cardImg1.png";
import cardImg2 from "../../assets/collegeInner/cardImg2.png";
import prizeBanner from "../../assets/collegeInner/prize-banner.png";
import BarChart from "../../components/ui/BarChart";

const CourseDetails = () => {
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

  return (
    <>
      <div className="CourseDetails CollegeInner">
        <div className="hero-section">
          <div className="details-wrapper">
            <div className="left">
              <span>JEE</span>
              <h1 className="main-heading">
                Joint Entrance <b>Examination</b>
              </h1>
            </div>
            <div className="right">
              <p className="para">
                The Joint Entrance Examination is an engineering entrance
                assessment conducted for admission to various engineering
                colleges in India. It comprises two different examinations: the
                JEE-Main and the JEE-Advanced.
              </p>{" "}
              <br />
              <p className="para">
                The Joint Seat Allocation Authority (JoSAA) conducts the joint
                admission process for a total of 23 Indian Institutes of
                Technology (IITs), 31 National Institutes of Technology (NITs),
                25 Indian Institutes of Information Technology (IIITs) campuses
                and other Government Funded Technical Institutes (GFTIs) based
                on the rank
              </p>
            </div>
          </div>
          <div className="img-banner">
            <div className="ani-btn">
              <button>
                explore lineup <FaAngleRight />
              </button>
            </div>
            <img src={heroBanner} alt="" />
          </div>
        </div>
        {/*  */}

        <div className="inner-container">
          <div className="section-inner">
            <div className="left-wrapper">
              <div className="detail-wrapper">
                <h6 className="heading2">B.Com Course Details</h6>
                <p className="para">
                  The table below shows the important highlights of Bcom Course:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <tbody>
                      <tr>
                        <td>BCom Full Form</td>
                        <td>Bachelor of Commerce</td>
                      </tr>
                      <tr>
                        <td>BCom Duration</td>
                        <td>3 Years</td>
                      </tr>
                      <tr>
                        <td>BCom Admission Process</td>
                        <td>Entrance exam or Direct Admission</td>
                      </tr>
                      <tr>
                        <td>B.Com Eligibility</td>
                        <td>Pass class 12 in any subject</td>
                      </tr>
                      <tr>
                        <td>Top BCom Colleges</td>
                        <td>
                          Delhi University, Calcutta University, Mumbai
                          University.
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Average Fees</td>
                        <td>INR 20,000 - INR 65,000</td>
                      </tr>
                      <tr>
                        <td>BCom Average Salary</td>
                        <td>INR 3 LPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper">
                <h6 className="heading2">
                  What is the BCom Admission Process?
                </h6>
                <p className="para">
                  B.Com admission takes place either directly on the basis marks
                  in 10+2 exams or on the basis of entrance exams conducted at
                  national or university level:
                </p>
                <ul>
                  <li className="para">
                    <b> Direct Admissions: </b>Direct admission to B.Com takes
                    place through entrance exams. Students are admitted based on
                    their marks in class 12 board exams. The list is prepared
                    after the board exams release their results.
                  </li>
                  <li className="para">
                    <b>Entrance Exams:</b> Some universities and colleges like
                    Delhi University admit students to the B.Com course based on
                    their marks in national or state-level entrance exams like
                    CUET, IPU CET and NPAT.
                  </li>
                </ul>
              </div>
              <div className="detail-wrapper">
                <h6 className="heading2">
                  What is the Eligibility Criteria to do a BCom Course?
                </h6>
                <p className="para">
                  As different colleges have different criteria, some common
                  eligibility criteria for B.Com admission 2024 are mentioned
                  below.
                </p>
                <ul>
                  <li className="para">
                    Candidates must have completed and passed class 12 or
                    equivalent from a recognized board.
                  </li>
                  <li className="para">
                    The minimum percentage for B.Com admission varies from
                    college to college. Delhi University's cutoff for BCom
                    admission ranges in the area of 99%, whereas, for some
                    colleges, it can be a minimum of 45%.
                  </li>
                  <li className="para">
                    Students from any stream can apply for B.Com admission but,
                    a candidate can get preference over candidates from other
                    streams if he/she/zee has completed 10+2 with Commerce.
                  </li>
                  <li className="para">
                    Some colleges conduct entrance examinations for admissions
                    to B.Com. Candidates qualifying in BCom Entrance Exams are
                    given admission based on marks secured in these
                    examinations.
                  </li>
                </ul>
              </div>
              {/* clubs */}
              <div className="detail-wrapper">
                <h6 className="heading2">
                  What are the Entrance Exams for B.Com in 2024?
                </h6>
                <p className="para">
                  BCom Entrance Exam and the respective registration and exam
                  dates are mentioned below:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Exam</th>
                        <th>Registration Dates</th>
                        <th>Exam Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>CUET</td>
                        <td>February 27 April 5, 2024 (Extended)</td>
                        <td>May 15 - May 31, 2024</td>
                      </tr>
                      <tr>
                        <td>CUET</td>
                        <td>February 27 April 5, 2024 (Extended)</td>
                        <td>May 15 - May 31, 2024</td>
                      </tr>
                      <tr>
                        <td>CUET</td>
                        <td>February 27 April 5, 2024 (Extended)</td>
                        <td>May 15 - May 31, 2024</td>
                      </tr>
                      <tr>
                        <td>CUET</td>
                        <td>February 27 April 5, 2024 (Extended)</td>
                        <td>May 15 - May 31, 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper mt-5">
                <h6 className="heading2">CUET 2023 Cut Off in Top Colleges</h6>
                <p className="para">
                  BCom Entrance Exam and the respective registration and exam
                  dates are mentioned below:
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Registration Dates</th>
                        <th>B.Com Cut Off (In Percentile)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                      <tr>
                        <td>Lady Sri Ram College for Women</td>
                        <td>99-100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper mt-5">
                <h6 className="heading2 mb-3 ">
                  What are the Top B.Com Colleges in India?
                </h6>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Region-wise Colleges</th>
                        <th>Average Fees (INR)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                      <tr>
                        <td>B.Com Colleges in Kolkata</td>
                        <td>45,000 - 2,35,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="graph-container">
                <BarChart />
              </div>

              <div className="detail-wrapper mt-5">
                <h6 className="heading2 mb-3 ">
                  What are the Top 10 Govt Colleges for BCom?
                </h6>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>College Name</th>
                        <th>Fees (INR)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                      <tr>
                        <td>Sivanath Sastri College, Kolkata</td>
                        <td>11,060</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper mt-5">
                <h6 className="heading2 mb-3 ">
                  What are the Top 10 Private Colleges for B.Com?
                </h6>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>College Name</th>
                        <th>Fees (INR)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                      <tr>
                        <td>St. Xavier's College Mumbai</td>
                        <td>5,537</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">What are the Core B.Com Subjects?</h6>
                <p className="para">
                  The B.Com Syllabus subjects help students understand the
                  basics of accounting, business, management, economics etc. The
                  semester-wise syllabus of the BCom course is mentioned below:
                </p>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">B.Com 1st Year Subjects</h6>
                <p className="para">
                  B.Com 1st Year Subjects are mentioned below:
                </p>
                <ul>
                  <li className="para">Environmental Studies</li>
                  <li className="para">Language</li>
                  <li className="para">Financial Accounting</li>
                  <li className="para">Business Laws</li>
                  <li className="para">Business Organization and Management</li>
                  <li className="para">Business Mathematics and Statistics</li>
                  <li className="para">English Language</li>
                  <li className="para">Hindi or Modern Indian Language</li>
                </ul>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">B.Com 2nd Year Subjects</h6>
                <p className="para">
                  B.Com 2nd Year Subjects are mentioned below:
                </p>
                <ul>
                  <li className="para">Company Law</li>
                  <li className="para">Business Communication</li>
                  <li className="para">Income tax laws</li>
                  <li className="para">Cost Accounting</li>
                  <li className="para">Hindi or Modern Indian Language</li>
                  <li className="para">Corporate Accounting</li>
                  <li className="para">Computer Applications in Business</li>
                  <li className="para">Cyber Crime & Laws</li>
                  <li className="para">E-Commerce</li>
                  <li className="para">Investing in Stock Markets</li>
                </ul>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">B.Com 3rd Year Subjects</h6>
                <p className="para">
                  B.Com 3rd Year Subjects are mentioned below:
                </p>
                <ul>
                  <li className="para">Banking and Insurance</li>
                  <li className="para">Management Accounting</li>
                  <li className="para">Computerized Accounting System</li>
                  <li className="para">Human Resource Management</li>
                  <li className="para">Auditing and Corporate Governance</li>
                </ul>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">B.Com Elective Subjects</h6>
                <ul>
                  <li className="para">International Business</li>
                  <li className="para">
                    Office Management and Secretarial Practice
                  </li>
                  <li className="para">Fundamentals of Investment</li>
                  <li className="para">Organizational Behaviour</li>
                </ul>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">Why Should You Study BCom?</h6>
                <ul>
                  <li className="para">
                    Students, after studying B.Com can explore opportunities in
                    Finance and Banking fields. Many students enter the sales
                    and marketing field after B.Com. With experience, there is
                    huge scope in the Sales department in all sectors. Students
                    who want to stick to the finance or commerce stream will
                    also find huge potential.{" "}
                  </li>
                  <li className="para">
                    The Fintech market in India will reach INR 6.2 trillion by
                    2025, providing various opportunities for those in the
                    Financial sector. Apart from the rising Fintech sector,
                    there are Mutual Funds and Insurance, which provide varied
                    opportunities within the Financial space.
                  </li>
                  <li className="para">
                    The banking sector has a tight grip on the financial sector
                    of India. The total assets held by banks is USD 2.4 Trillion
                    in India. All these assets will be given in credit by the
                    banks to the citizens of India. Banks need people from
                    commerce backgrounds to manage them efficiently. In FY21,
                    USD 1487 Billion was extended as credit and USD 2.06
                    Trillion was deposited in banks.
                  </li>
                </ul>
                <p className="para my-4">
                  Read More: Highest-paying Career Options After BCom
                </p>
              </div>

              <div className="detail-wrapper mt-5">
                <h6 className="heading2">
                  What are the Types of BCom Courses?
                </h6>
                <div className="table-wrapper mt-5">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Average Fees (INR)</th>
                        <th>Job Roles</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                      <tr>
                        <td>BCom Hons</td>
                        <td>3 Years</td>
                        <td>INR 42,000 - INR 87,000</td>
                        <td>
                          Accountant, Tax Consultant, Financial Consultant
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">BCom Specialization List</h6>
                <ul>
                  <li className="para">BCom Accounting and Finance</li>
                  <li className="para">B.Com Corporate Secretaryship</li>
                  <li className="para">BCom Banking Management</li>
                  <li className="para">B.Com Marketing</li>
                  <li className="para">BCom E-Commerce</li>
                  <li className="para">B.Com Tax Procedure and Practice</li>
                </ul>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">Distance BCom Courses</h6>
                <p className="para">
                  B.Com Distance Education is a 3-6 year correspondence course
                  in the subjects of commerce like accountancy, business,
                  Economics, Management etc. Documents required for Bachelor of
                  Commerce Admission in distance education include Class 12
                  Boards exam mark sheet, Certificate from the employer, class
                  12 Pass Certificate and SC/ST/OEC/OBC certificate. The average
                  course fee ranges between INR 15,000 - INR 25,000.
                </p>
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>College Name</th>
                        <th>Fees Structure</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                      <tr>
                        <td>Sikkim Manipal University</td>
                        <td>INR 57,700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2">BCom Course Comparison</h6>
                <p className="para">
                  BBA, BSc, BAF are also popular options for commerce students
                  after class 12th. The sections compare these courses with
                  Bachelor of Commerce.
                </p>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2 mb-4">BCom or BBA: Which is Better?</h6>
               
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>B.Com</th>
                        <th>BBA</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="detail-wrapper  mt-5">
                <h6 className="heading2 mb-4">BCom or BSc: Which is Better?</h6>
               
                <div className="table-wrapper">
                  <table className="bdr">
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>B.Com</th>
                        <th>BBA</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                      <tr>
                        <td>Full Form</td>
                        <td>Bachelor of Commerce</td>
                        <td>Bachelor of Business Administration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                    clsName="bg"
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
      </div>
    </>
  );
};

export default CourseDetails;
