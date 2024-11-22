import { MdOutlineWatchLater } from "react-icons/md";

/* eslint-disable react/prop-types */
const SideCardWithPrice = ({ data }) => {
  return (
    <>
      <div className="SideCardWithPrice card-container">
        <h5>{data?.name}</h5>
        <span>
          <MdOutlineWatchLater /> Course Duration: <b>{data?.duration}</b>
        </span>
        <p>
          <b>₹{data?.price}</b> First Year Fees
        </p>
      </div>
    </>
  );
};

export default SideCardWithPrice;
