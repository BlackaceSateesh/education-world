import { Link } from "react-router-dom";
import InputText from "../ui/InputText";
import ButtonMain from "../ui/ButtonMain";
import { HiOutlineArrowRight } from "react-icons/hi";
import registerBg from "../../assets/registerBg.png";
import '../../styles/homePage/RegisterApply.css'

const RegisterApply = () => {
  return (
    <>
      <div className="RegisterApply">
        <div className="inner-section">
          <div className="SectionHeading">
            <h6>
              Register Now To <b>Apply</b>
            </h6>
          </div>
          <div className="inner-wrapper">
            <div className="left-wrapper">
              <div className="w50">
                <InputText labelName="Full Name" placeholder="Enter Name" />
                <InputText
                  labelName="Email Address"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w50">
                <InputText
                  labelName="Mobile Number"
                  placeholder="Enter Mobile Number"
                />
                <InputText
                  labelName="Enter Your City"
                  placeholder="Enter City"
                />
              </div>
              <InputText
                labelName="Select Your Interested Course"
                placeholder="Enter Course"
              />
              <InputText
                labelName="Select Your Alternative Interested Course"
                placeholder="Enter Alternative Course"
              />
              <div className="condition">
                <input type="checkbox" name="terms" id="" />
                <label htmlFor="terms">
                  I&apos;ve read and agree with
                  <Link to="/"> terms of service</Link> and our
                  <Link to="/"> privacy policy</Link>
                </label>
              </div>
              <ButtonMain
                clsName="submit"
                name="Submit"
                icon={<HiOutlineArrowRight />}
              />
            </div>
            <div className="right-wrapper">
              <div className="bgimg">
                <img src={registerBg} alt="" />
              </div>
            </div>
          </div>
          <p className="already">
            Already have an account ? <Link>Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterApply;
