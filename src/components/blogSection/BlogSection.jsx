import { useState } from "react";
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import bg1 from "../../assets/blog/bg1.png";
import relatedImg from "../../assets/blog/relatedImg.png";
import post1 from "../../assets/blog/post1.png";
import post2 from "../../assets/blog/post2.png";
import post3 from "../../assets/blog/post3.png";
import userPic from "../../assets/blog/userPic.png";
import "../../styles/homePage/BlogSection.css";
import { Carousel } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";

const BlogSection = () => {
  const logoData = [logo1, logo2, logo3, logo4, logo5, logo6];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
//   dummy
  const blogPost = [
    {
      title: "Integer Maecenas Eget Viverra",
      name: "Rajat Pradhan",
      userPic: userPic,
      cardImg: post1,
      para: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    },
    {
      title: "Integer Maecenas Eget Viverra",
      name: "Rajat Pradhan",
      userPic: userPic,
      cardImg: post2,
      para: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    },
    {
      title: "Integer Maecenas Eget Viverra",
      name: "Rajat Pradhan",
      userPic: userPic,
      cardImg: post3,
      para: "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    },
  ];
  return (
    <>
      <div className="BlogSection">
        <div className="top-container" style={{ backgroundImage: `url(${''})` }}>
          <div className="logos-wrapper">
            {logoData?.map((e, i) => {
              return (
                <div key={`logos${i}`} className="logo-img">
                  <img src={e} alt="logo" />
                </div>
              );
            })}
          </div>
          <div className="SectionHeading">
            <h6>
              Trusted by <br /> industry leaders
            </h6>
          </div>
        </div>

        <div className="blog-hero">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div
                style={{ backgroundImage: `url(${bg1})` }}
                className="carousel-inner"
              >
                <div className="top">
                  <span>
                    01 <span className="line"></span>
                  </span>
                  <span>BLOG</span>
                </div>
                <div className="center">
                  <h5 className="title">
                    Inspiration for travel by real people
                  </h5>
                  <p className="subTitle">Book smart, travel simple</p>
                  <button className="startBTN">Start planning your trip</button>
                </div>
                <div className="related">
                  <div className="tag">
                    <span>Related Blog</span>
                  </div>
                  <div className="content">
                    <h5>Hey Guys Welcome, Great Exploration Blogs </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <button>READ MORE...</button>
                  </div>
                  <div className="card-img">
                    <img src={relatedImg} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ backgroundImage: `url(${bg1})` }}
                className="carousel-inner"
              >
                <div className="top">
                  <span>
                    01 <span className="line"></span>
                  </span>
                  <span>BLOG</span>
                </div>
                <div className="center">
                  <h5 className="title">
                    Inspiration for travel by real people
                  </h5>
                  <p className="subTitle">Book smart, travel simple</p>
                  <button className="startBTN">Start planning your trip</button>
                </div>
                <div className="related">
                  <div className="tag">
                    <span>Related Blog</span>
                  </div>

                  <div className="content">
                    <h5>Hey Guys Welcome, Great Exploration Blogs </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <button>READ MORE...</button>
                  </div>
                  <div className="card-img">
                    <img src={relatedImg} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{ backgroundImage: `url(${bg1})` }}
                className="carousel-inner"
              >
                <div className="top">
                  <span>
                    01 <span className="line"></span>
                  </span>
                  <br />
                  <span>BLOG</span>
                </div>
                <div className="center">
                  <h5 className="title">
                    Inspiration for travel by real people
                  </h5>
                  <p className="subTitle">Book smart, travel simple</p>
                  <button className="startBTN">Start planning your trip</button>
                </div>
                <div className="related">
                  <div className="tag">
                    <span>Related Blog</span>
                  </div>

                  <div className="content">
                    <h5>Hey Guys Welcome, Great Exploration Blogs </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <button>READ MORE...</button>
                  </div>
                  <div className="card-img">
                    <img src={relatedImg} alt="" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="blog-posts">
            {blogPost?.map((e, i)=>{
                return <BlogPostCard data={e} key={`post${i}`} />
            })}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
