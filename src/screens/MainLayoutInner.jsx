/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer";
import HeaderInner from "../components/header/HeaderInner";
import SidemenuInner from "../components/sidemenu/SidemenuInner";

const MainLayoutInner = ({ innerPage }) => {
  return (
    <>
      <div className="main-layout-inner">
        <SidemenuInner />
        <div className="main-inner">
          <HeaderInner />
          {innerPage}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayoutInner;
