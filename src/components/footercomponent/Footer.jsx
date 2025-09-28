/** @format */
import instagram from "../../assets/instagramicon.png";
import linkedin from "../../assets/linkedinicon.png";
import youtube from "../../assets/youtubeicon.png";
import twitter from "../../assets/twittericon.png";
import facebook from "../../assets/facebookicon.png";
import phone from "../../assets/phoneicon.png";
import message from "../../assets/messageicon.png";
import location from "../../assets/locationicon.png";
import logo from "../../assets/GCPlogo.png";
import { FaArrowRight } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className=" mt-20 md:mt-40 bg-[#2A6F59] pt-8">
      <dibv className=" px-6  grid md:grid-cols-2 lg:grid-cols-3 place-content-between ">
        <div className="">
          <div className="imgcontainer ">
            <img src={logo} width={165.62} height={87.89} alt="Logo" />
            <div className="imgtextcontainer">
              <h4 className={`font-figtree imgtext`}>Good Climate Project</h4>
            </div>
          </div>
          <div className="mt-20 gap-2 md:gap-4 grid  ">
            <h1 className={` font-figtree text-white font-normal text-sm`}>
              Sign in to our newsletter today and be in the know
            </h1>
            <div className="flex relative rounded-xl bg-white w-[315px] h-[37px]  py-[0.625rem] px-[1.25rem]">
              <input
                type="text"
                className="border-none outline-none focus:border-none focus:outline-none bg-transparent"
                placeholder="Enter your email "
              />
              <div className="cursor-pointer rounded-xl bg-teal-500 w-12 h-[37px] p-2 flex justify-center items-center absolute right-0 bottom-0">
                <FaArrowRight className="text-white" />
              </div>
            </div>
            <h1 className={`font-figtree text-wrap text-white`}>
              By subscriibing to our newsletter, you agree to our terms and
              provides rovide consent to receive updates from our company.
            </h1>
          </div>
        </div>
        <div className=" mt-20 md:mt-0 grid    ">
          <nav className=" lg:place-items-center">
            <ul className="  ">
              <li className="text-white listStyleA">About us</li>
              <li className="text-white listStyleB">Team</li>
              <li className="text-white listStyleB">Our solution</li>
              <li className="text-white listStyleB">Our story</li>
              <li className="text-white listStyleB">Blog</li>
            </ul>
          </nav>
        </div>
        {/* <nav> */}
        <div className="mt-20 lg:mt-0  lg:place-items-center">
          <div>
            <div>
              <p className="text-white text-base font-normal">Contact us</p>
            </div>

            <div className="contactus ">
              <img
                alt="phone Icon"
                src={phone}
                width={20} // Desired width
                height={20} // Desired height
                // quality={75}
              />
              <h4 className="text-white listStyleB">+234 904 864 9287</h4>
            </div>

            <div className="contactus">
              <img
                alt="phone Icon"
                src={message}
                width={20} // Desired width
                height={20} // Desired height
                // quality={75}
              />
              <h4 className="text-white listStyleB">
                admin@goodclimateproject.org
              </h4>
            </div>

            <div className="contactus">
              <img
                alt="phone Icon"
                src={location}
                width={20} // Desired width
                height={20} // Desired height
                // quality={75}
              />

              <h4 className="text-white listStyleB">
                1A Hughes Avenue Yaba, Lagos
              </h4>
            </div>
          </div>
        </div>
        {/* </nav> */}
      </dibv>
      <div className="footer-socialMedia ">
        {/* <hr className="border w-full hr" /> */}
        <div className="footer-socialMediaContainer ">
          <img
            alt="phone Icon"
            src={instagram}
            width={40} // Desired width
            height={40} // Desired height
            // quality={75}
          />
          <img
            alt="phone Icon"
            src={linkedin}
            width={40} // Desired width
            height={40} // Desired height
            // quality={75}
          />
          <img
            alt="phone Icon"
            src={youtube}
            width={40} // Desired width
            height={40} // Desired height
            // quality={75}
          />
          <img
            alt="phone Icon"
            src={twitter}
            width={40} // Desired width
            height={40} // Desired height
            // quality={75}
          />
          <img
            alt="phone Icon"
            src={facebook}
            width={40} // Desired width
            height={40} // Desired height
            // quality={75}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
