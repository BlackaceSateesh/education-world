import { FaStar } from "react-icons/fa6";
import studentPng from "../../assets/topColleges/studentPng.png";
import madras from "../../assets/topColleges/madras.png";
import flowerPng from "../../assets/flowerPng.png";
import ButtonMain from "../ui/ButtonMain";
import { AiOutlineDownload } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowDropright,
  IoIosArrowUp,
} from "react-icons/io";
import { Accordion, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const TopContent = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleSelect = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };
  return (
    <>
      <div className="TopContent">
        <h6 className="heading">Top Colleges List</h6>
        <div className="inner-body">
          <div className="content-card">
            {/* top */}
            <div className="top-header">
              <div className="left">
                <div className="name">
                  <h6>IIT Madras - Indian Institute of Technology - [IITM]</h6>
                  <div className="icon">
                    <img src={flowerPng} alt="" />
                    <span>#3</span>
                  </div>
                  <span className="outOF">out of 275 by The Week</span>
                </div>
                <div className="review">
                  <span>
                    4.3 <FaStar /> (237 Reviews)
                  </span>
                  <span>11 Courses</span>
                  <span>4 Years</span>
                  <span>Full Time</span>
                </div>
              </div>
              <button className="viewBtn">View College</button>
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
            </div>
            {/* eligibility */}
            <div className="eligibility">
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
            {/* view details */}
            <div className="view-details">
              <Accordion activeKey={activeKey} onSelect={handleSelect}>
                <Accordion.Item
                  className={activeKey === "0" ? "show" : ""}
                  eventKey="0"
                >
                  <Accordion.Header>
                    {activeKey === "0" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    {activeKey === "0" ? "Close Details" : "View Details"}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="detail-card">
                      <div className="card-img">
                        <img src={madras} alt="" />
                      </div>
                      <div className="content">
                        <h5 className="title">
                          IIT Madras - Indian Institute of Technology - [IITM]
                        </h5>

                        <div className="details-tab">
                          <Tab.Container
                            id="left-tabs-example2"
                            defaultActiveKey="tabDetail1"
                          >
                            <div className="detail-Tab">
                              <div className="content-wrapper">
                                <Tab.Content>
                                  <Tab.Pane eventKey="tabDetail1">
                                    <p className="para">
                                      Indian Institute of Technology Madras (IIT
                                      Madras) is a prestigious educational
                                      institution located in Chennai, India.
                                      Established in 1959, IIT Madras has
                                      performed exceptionally well in NIRF
                                      rankings. It has secured the 1st rank in
                                      Engineering and Overall categories for
                                      several consecutive years. <br /> <br />
                                      IIT Madras offers a wide range of
                                      programs. Among these, B.Tech. , M.Tech
                                      and B.Tech-M.Tech courses are the most
                                      Colleges. <button>Read More...</button>
                                    </p>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="tabDetail2">
                                    <div className="table-wrapper">
                                      <table>
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
                                              Passed 10+2 (PCM) from a
                                              recognised board with a minimum of
                                              75 % marks
                                            </td>
                                            <td>JEE Main + JoSAA Counseling</td>
                                            <td>INR 2.15 lakhs</td>
                                          </tr>
                                          <tr>
                                            <td>B. Tech</td>
                                            <td>
                                              Passed 10+2 (PCM) from a
                                              recognised board with a minimum of
                                              75 % marks
                                            </td>
                                            <td>JEE Main + JoSAA Counseling</td>
                                            <td>INR 2.15 lakhs</td>
                                          </tr>
                                          <tr>
                                            <td>B. Tech</td>
                                            <td>
                                              Passed 10+2 (PCM) from a
                                              recognised board with a minimum of
                                              75 % marks
                                            </td>
                                            <td>JEE Main + JoSAA Counseling</td>
                                            <td>INR 2.15 lakhs</td>
                                          </tr>
                                          <tr>
                                            <td>B. Tech</td>
                                            <td>
                                              Passed 10+2 (PCM) from a
                                              recognised board with a minimum of
                                              75 % marks
                                            </td>
                                            <td>JEE Main + JoSAA Counseling</td>
                                            <td>INR 2.15 lakhs</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="tabDetail3">
                                    <div className="table-wrapper">
                                      <table className="w50 bdr">
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
                                        </tbody>
                                      </table>
                                      <table className="w50 bdr">
                                        <thead>
                                          <tr>
                                            <th>Category</th>
                                            <th>IIT Madras Highlights</th>
                                          </tr>
                                        </thead>
                                        <tbody>
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
                                            <td>
                                              B.Tech, M.Tech, B.Tech-M.Tech
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Official Website</td>
                                            <td>
                                              <Link
                                                to={"https://www.iitm.ac.in/"}
                                              >
                                                https://www.iitm.ac.in/
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="tabDetail4">
                                    <h6 className="subHeading">
                                      Placements 2024
                                    </h6>
                                    <p className="para">
                                      IIT Madras Placements 2024 is ongoing and
                                      the final placement report will be made
                                      available at the end of July 2024.
                                      However, the IIT Chennai MBA placements
                                      2024 are concluded and 100% of MBA
                                      students have been placed. The highest
                                      package of IIT Madras is INR 29.65 LPA and
                                      the average package is INR 16.93 LPA for
                                      the MBA (2024) batch.
                                    </p>
                                    <p className="para">
                                      According to the NIRF 2024 report, IIT
                                      Madras median package for B.Tech is INR
                                      16.63 Lakhs per annum and the median
                                      salary for M.Tech is INR 15 LPA. The
                                      median package for B.Tech-M.Tech dual
                                      degree was INR 17 LPA during the
                                      placements in 2023.
                                    </p>
                                    <h6 className="subHeading">
                                      MBA Placements 2024
                                    </h6>
                                    <p className="para">
                                      Students can check the table below to know
                                      IIT Madras MBA placements 2024:
                                    </p>
                                    <div className="table-wrapper mt-5">
                                      <table className="w50 bdr">
                                        <thead>
                                          <tr>
                                            <th>Particulars</th>
                                            <th>MBA Placement 2024</th>
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
                                      <div className="w50">
                                        <table className="bdr">
                                          <thead>
                                            <tr>
                                              <th>Coures</th>
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
                                        <p className="para text-center mt-5">
                                          The above table highlights the{" "}
                                          <Link>IIT Madras placement</Link>{" "}
                                          <br />
                                          statistics based on the NIRF Report
                                          2024:
                                        </p>
                                      </div>
                                    </div>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="tabDetail5">
                                    <h6 className="subHeading">Ranking 2024</h6>
                                    <p className="para">
                                      Indian Institute of Technology Madras has
                                      been ranked by various prominent
                                      organizations for its excellence in
                                      engineering and other domains. IIT Madras
                                      is recognized as an “Institute of
                                      Eminence” and has been holding the 1st
                                      position under the “Engineering” category
                                      in the NIRF ranking since 2016. For the
                                      year 2023 as well, IIT Madras has been
                                      ranked at 1st position in both Overall and
                                      Engineering category by NIRF. The table
                                      below shows the{" "}
                                      <Link>ranking of IIT Madras</Link>
                                    </p>
                                    <div className="table-wrapper">
                                      <table>
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
                                            <td>
                                              QS World University Rankings
                                            </td>
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
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="tabDetail6">
                                    <h6 className="subHeading">
                                      IIT Madras Scholarships 2024
                                    </h6>
                                    <p className="para">
                                      IIT Madras scholarships are available for
                                      needy and deserving students. Special
                                      scholarships promote diversity by
                                      assisting students from marginalised
                                      backgrounds, including the SC/ST category
                                      and female students. Some of the{" "}
                                      <Link>scholarships at IIT Madras</Link>{" "}
                                      are as follows:
                                    </p>
                                    <ul>
                                      <li>
                                        SC/ST Scholarship:IITM offers renewable
                                        SC/ST scholarships for students whose
                                        annual parental income doesn&apos;t
                                        exceed INR 4,50,000.Students under this
                                        scheme are offered tuition fee exemption
                                        along with free meals and a monthly
                                        pocket allowance of INR 250.
                                      </li>
                                      <li>
                                        Institute Merit-cum-Means
                                        Scholarships:Only 25% of admitted
                                        students are eligible for this 67%
                                        tuition fee waiver from IITM. Students
                                        whose annual parental income is less
                                        than INR 4.5 lakh are eligible to apply
                                        for merit-cum-means scholarships. Also,
                                        a minimum GPA of 5.0 from the previous
                                        semester is a requirement for the
                                        scholarship to be renewed.
                                      </li>
                                      <li>
                                        Institute Notional Prize:Based on the
                                        JEE rank and annual parental income not
                                        exceeding INR 4,50,000, IITM offers a
                                        one-time grant of INR 1000 to the 7% of
                                        the students admitted.
                                      </li>
                                      <li>
                                        Institute Free Studentship:IIT Madras
                                        offers a free studentship for students
                                        whose annual parental income is less
                                        than INR 4,50,000 lakhs. Students are
                                        exempted from paying 67% of the tuition
                                        fee under this scheme. However, the
                                        scholarship is only offered to 25% of
                                        the UG students.
                                      </li>
                                      <li>
                                        Dr K Vasanth Rau Scholarship:This
                                        scholarship is given based on JEE rank
                                        to students having a parental income up
                                        to INR 5.50 lakhs. The scholarship is
                                        renewed based on a GPA of 6.5 and above.
                                      </li>
                                      <li>
                                        M. Sankaraiah and M Saradha (Mithigiri)
                                        Scholarship:This scholarship is awarded
                                        to the students of B.Tech / Dual Degree
                                        Electrical Engineering based on the
                                        highest CGPA at the end of the 4th
                                        semester.
                                      </li>
                                      <li>
                                        Ministry of Minority Affairs, GoI
                                        Meritcum-Means Scholarship:Students
                                        belonging to minority communities such
                                        as Muslims, Christians, Sikhs, Buddhists
                                        and Parsis and whose parental income
                                        does not exceed INR 2.5 lakhs per annum
                                        are eligible.
                                      </li>
                                    </ul>
                                  </Tab.Pane>
                                </Tab.Content>
                              </div>
                              <div className="detail-pannel">
                                <Nav variant="pills" className="flex-column">
                                  <Nav.Item>
                                    <Nav.Link eventKey="tabDetail1">
                                      About College
                                    </Nav.Link>
                                    <Nav.Link eventKey="tabDetail2">
                                      Courses & Fees
                                    </Nav.Link>
                                    <Nav.Link eventKey="tabDetail3">
                                      Highlights
                                    </Nav.Link>
                                    <Nav.Link eventKey="tabDetail4">
                                      Placements
                                    </Nav.Link>
                                    <Nav.Link eventKey="tabDetail5">
                                      Ranking
                                    </Nav.Link>
                                    <Nav.Link eventKey="tabDetail6">
                                      Scholarships
                                    </Nav.Link>
                                  </Nav.Item>
                                </Nav>
                                <ButtonMain
                                  name="View College"
                                  icon={<IoArrowForwardOutline />}
                                />
                              </div>
                            </div>
                          </Tab.Container>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopContent;
