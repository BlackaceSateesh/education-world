/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
import "../../styles/homePage/SearchSection.css";
import searchPng from "../../assets/searchPng.png";
import bannerPng from "../../assets/studentBookPng.png";
import birdGif from "../../assets/birdGIF.png";

const SearchSection = ({ clsName }) => {
  const searchTags = [
    "B.Tech",
    "M.Tech",
    "MBBS",
    "Bachelor of Physiotherapy",
    "B.Pharm",
    "Management",
    "Architecure",
    "BAMS",
    "Computer Applications",
    "B.Sc (Nursing)",
  ];
  return (
    <>
      <div className={`SearchSection ${clsName ? clsName : ""}`}>
        <div className="searchPng">
          <img src={searchPng} alt="searchPng" />
        </div>
        <div className="inner-section">
          <div className="search-wrapper">
            <div className="search-input">
              <input type="text" placeholder="Search Here" />
              <button className="searchBtn">
                <IoSearch />
              </button>
            </div>
            <div className="search-tags">
              {searchTags?.map((tag, i) => {
                return <span key={`tag${i}`}>{tag}</span>;
              })}
            </div>
          </div>
          <div className="research-banner">
            <div className="banner-png">
              <img src={bannerPng} alt="bannerPng" />
            </div>
            <div className="content">
              <h6>
                ENCHANT
                <div className="gifImg">
                  <img src={birdGif} alt="birdGif" />
                </div>
              </h6>
              <h6>YOUR</h6>
              <h6>RESEARCH</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
