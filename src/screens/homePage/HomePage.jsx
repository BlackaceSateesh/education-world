import BlogSection from "../../components/blogSection/BlogSection";
import CategorySection from "../../components/categorySection/CategorySection";
import FaqSection from "../../components/faqSection/FaqSection";
import GlobalInstitute from "../../components/globalInstitute/GlobalInstitute";
import HeroSection from "../../components/heroSection/HeroSection";
import RegisterApply from "../../components/registerApply/RegisterApply";
import SearchSection from "../../components/searchSection/SearchSection";
import TopColleges from "../../components/topColleges/TopColleges";
import TopCollegeCourse from "../../components/topCollegesCourses/TopCollegeCourse";
import TopCoursesSlider from "../../components/topCourseSlider/TopCoursesSlider";
import { topCoursesData, topExamsData } from "../../constants/dummyContent";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <HeroSection />
        <SearchSection />
        <GlobalInstitute />
        <CategorySection />
        <TopColleges />
        <TopCollegeCourse />
        <RegisterApply />
        <TopCoursesSlider
          leftHeading="Top"
          centerHeading="BE/B.Tech"
          rightHeading="Exams"
          para={topExamsData?.para}
          sliderData={topExamsData?.sliderData}
        />
        <TopCoursesSlider
          clsName="even"
          leftHeading="Top"
          centerHeading="Engineering"
          rightHeading="Courses"
          para={topCoursesData?.para}
          sliderData={topCoursesData?.sliderData}
        />
        <BlogSection />
        <FaqSection />

      </div>
    </>
  );
};

export default HomePage;
