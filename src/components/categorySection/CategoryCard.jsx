import { TiArrowRight } from "react-icons/ti"

/* eslint-disable react/prop-types */
const CategoryCard = ({data}) => {
  return (
    <>
      <div className="CategoryCard">
        <div className="card-img"><img src={data?.cardImg} alt="card-img" />
        <div className="highlight-wrapper">
            <div className="card1">
                Top <br /> <span>{data?.topCollege} <b>{data?.name}</b></span> <br /> Colleges
                <div className="icon"><TiArrowRight /></div>
            </div>
            <div className="card1">
                Total <br /> <span>{data?.totalCollege}</span> <br /> Colleges
                <div className="icon"><TiArrowRight /></div>
            </div>
        </div>
        </div>
        <div className="content">
            <h5>{data?.name}</h5>
            <p>{data?.description}</p>
        </div>
      </div>
    </>
  )
}

export default CategoryCard
