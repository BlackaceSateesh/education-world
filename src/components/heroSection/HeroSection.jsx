import ButtonMain from "../ui/ButtonMain";
import "../../styles/homePage/HeroSection.css";
import { useState } from "react";

const HeroSection = () => {
  const [hoveredLine, setHoveredLine] = useState(null);
  const text = `The Education World is a dedicated search engine for
    exploring colleges, universities, and schools globally.
    Our platform simplifies the search process, offering
    detailed profiles, reviews, and resources to help
    students, parents, and educators make informed
    choices about education. We're committed to 
    providing a reliable, centralized resource to support 
    academic success at every level.`;
  const lines = text.split("\n");

  return (
    <>
      <div className="HeroSection">
        <div className="inner-section">
          <div className="top-inner">
            <div className="left-wrapper">
              <h6 className="subtitle">Find Over Colleges</h6>
              <h1 className="title">
                in <span>In</span>
                <span>di</span>
                <span>a</span>
              </h1>
              <ButtonMain name="Explore Colleges" />
            </div>
            <div className="right-wrapper">
              {lines.map((line, index) => (
                <p
                  className={`right-para ${hoveredLine === index ? "hoveredLine" : ""}`}
                  key={index}
                  onMouseEnter={() => setHoveredLine(index)}
                  onMouseLeave={() => setHoveredLine(null)}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="btm-inner">Search for colleges, courses & more</div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
