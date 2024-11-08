/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const MainLayout = ({innerPage}) => {
  return (
    <>
      <div className="main-layout">
        <Header/>
        {innerPage}
        <Footer/>
      </div>
    </>
  )
}

export default MainLayout
