import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import HomePage from "../homePage/HomePage";
import MainLayout from "../MainLayout";
import MainLayoutInner from "../MainLayoutInner";
import CollegeInner from "../collegeInner/CollegeInner";
import CourseDetails from "../courseDetails/CourseDetails";
const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.HOME} element={<MainLayout innerPage={<HomePage />} />} />
        <Route path={AuthenticatedRoutes.DETAIL_PAGE} element={<MainLayoutInner innerPage={<CollegeInner />} />} />
        <Route path={AuthenticatedRoutes.COURSE_DETAILS} element={<MainLayoutInner innerPage={<CourseDetails />} />} />
      </Routes>
    </>
  );
};

export default Authenticate;
