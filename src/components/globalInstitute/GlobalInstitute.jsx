import globalBG from "../../assets/globalBG.png";
import userImg from "../../assets/userImg.png";
import '../../styles/homePage/GlobalInstitute.css'
const GlobalInstitute = () => {
  return (
    <>
      <div className="GlobalInstitute">
        <div className="left-wrapper">
          <div className="bg-img">
            <img src={globalBG} alt="" />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="top">
            <span className="tag">Benefits</span>
            <div className="SectionHeading">
              <h6>Easy Access to Global Institutions</h6>
            </div>
            <p className="para">
              The Education World provides a vast database of colleges,
              universities, and schools worldwide, allowing students to explore
              options across countries and continents with ease. This helps
              students expand their choices and find the best fit for their
              academic and career goals.
            </p>
          </div>
          <div className="btm">
            <div className="review-card">
              <p className="para">
              &quot;The Education World made my college search so much easier! I
                could explore schools in different countries all in one place,
                which helped me consider options I hadn&apos;t even thought of. It&apos;s
                amazing to see so many global opportunities with just a few
                clicks.&quot;
              </p>
              <div className="details">
                <div className="pic"><img src={userImg} alt="" /></div>
                <div className="content">
                    <h5 className="name">Rajat S Pradhan</h5>
                    <p className="sub">Student at MIT Indore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalInstitute;
