/* eslint-disable react/prop-types */
const SideCardWithImg = ({data}) => {
  return (
    <>
      <div className="SideCardWithImg card-container">
        <div className="txt">
          <h5>{data?.name}</h5>
          <p>{data?.para}</p>
        </div>
        <div className="card-img"><img src={data?.cardImg} alt="cardImg" /></div>
      </div>
    </>
  );
};

export default SideCardWithImg;
