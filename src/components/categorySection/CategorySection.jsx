import CategoryCard from "./CategoryCard";
import '../../styles/homePage/CategorySection.css'
import engineerImg from '../../assets/category/engineering.png'
import managementImg from '../../assets/category/management.png'
import commerceImg from '../../assets/category/commerce.png'
import artsImg from '../../assets/category/arts.png'
import medicalImg from '../../assets/category/medical.png'
import designImg from '../../assets/category/design.png'
const CategorySection = () => {
  // dummy data
  const data = [
    {
      name: "Engineering",
      cardImg: engineerImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
    {
      name: "Management",
      cardImg: managementImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
    {
      name: "Commerce",
      cardImg: commerceImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
    {
      name: "Arts",
      cardImg: artsImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
    {
      name: "Medical",
      cardImg: medicalImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
    {
      name: "Design",
      cardImg: designImg,
      description: "INDIA TOP COLLEGE",
      topCollege: "10",
      totalCollege: "6000+",
    },
  ];
  return (
    <>
      <div className="CategorySection">
        <div className="inner-section">
          <div className="SectionHeading">
            <h6>
              Select <b>Your</b> <br /> Study Category
            </h6>
          </div>

          <div className="card-wrapper">
            {data?.map((e, i) => {
              return <CategoryCard key={`category${i}`} data={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySection;
