import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import HomePage from "../homePage/HomePage";
import MainLayout from "../MainLayout";
const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.HOME} element={<MainLayout innerPage={<HomePage />} />} />
      </Routes>
    </>
  );
};

export default Authenticate;
