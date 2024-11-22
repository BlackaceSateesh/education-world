/* eslint-disable react/prop-types */
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import testimonialBanner from "../../assets/testimonialBanner.png";
import "../../styles/collegeInner/Testimonials.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Testimonials = ({ id }) => {
  const [index, setIndex] = useState(0);
  const allActiveTestimonials = [
    {
      msg: "“It was really fun getting to know the team during the project. They were all helpful in answering my questions and made me feel at ease. The design ended up being better than I could have envisioned!”",
      userName: "Rajat Pradhan",
      designation: "Product Designer",
    },
    {
      msg: "“It was really fun getting to know the team during the project. They were all helpful in answering my questions and made me feel at ease. The design ended up being better than I could have envisioned!”",
      userName: "Rajat Pradhan",
      designation: "Product Designer",
    },
    {
      msg: "“It was really fun getting to know the team during the project. They were all helpful in answering my questions and made me feel at ease. The design ended up being better than I could have envisioned!”",
      userName: "Rajat Pradhan",
      designation: "Product Designer",
    },
  ];
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % allActiveTestimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + allActiveTestimonials.length) %
        allActiveTestimonials.length
    );
  };

  return (
    <>
      <div id={id ? id : ""} className="Testimonials">
        <div className="full-img">
          <img src={testimonialBanner} alt="" />
        </div>

        <div className="inner-card">
          <div className="header">
            <h4 className="card-heading">Testimonial</h4>
          </div>
          <div className="carousel-main">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {allActiveTestimonials?.map((testimonial, idx) => (
                <Carousel.Item key={idx}>
                  <div className="body-wrapper">
                    <h6 className="msg">{testimonial?.msg}</h6>
                    <div className="detail">
                      <h5 className="name">{testimonial?.userName}</h5>
                      <p className="designation">{testimonial?.designation}</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="carousel-ss-btns">
              <div className="left">
                <button className="carousel-control prev" onClick={prevSlide}>
                  <FaArrowLeftLong />
                </button>
                <span>01</span>
              </div>
              <div className="right">
                <span>0{allActiveTestimonials?.length}</span>
                <button className="carousel-control next" onClick={nextSlide}>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
