import { IoShareSocial } from "react-icons/io5";
import { MdOutlinePlayArrow } from "react-icons/md";

/* eslint-disable react/prop-types */
const BlogPostCard = ({ data }) => {
  return (
    <>
      <div className="BlogPostCard">
        <div className="top-img">
          <img src={data?.cardImg} alt="" />
          <div className="header">
            <div className="tags">
              <span>Aenean Eleifend</span> <span>Aliquam</span>
            </div>
            <div className="playBtn">
              <MdOutlinePlayArrow />
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="title">{data?.title}</h5>
          <div className="name-wrapper">
            <div className="left">
              <div className="pic">
                <img src={data?.userPic} alt="" />
              </div>
              <h5 className="name">{data?.name}</h5>
            </div>
            <div className="right"><span className="date">May 6, 2024</span> <span><IoShareSocial /> 1K shares</span></div>
          </div>
          <p className="para">{data?.para}</p>
          <button className="view">View Post</button>
        </div>
      </div>
    </>
  );
};

export default BlogPostCard;
