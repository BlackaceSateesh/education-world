import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const SideCardWithImgPrice = ({data}) => {
  return (
    <>
      <div className="SideCardWithImg SideCardWithImgPrice card-container">
        <div className="txt">
          <h5 className="ff-bold">{data?.university}</h5>
          <span>4.3 <FaStar className="iconPng" /> (575 Reviews)</span>
          <p>{data?.course}</p>
          <p>
          <b>₹{data?.price}</b> First Year Fees
        </p>
        </div>
        <div className="card-img"><img src={data?.cardImg} alt="cardImg" /></div>
      </div>
    </>
  );
};

export default SideCardWithImgPrice;
