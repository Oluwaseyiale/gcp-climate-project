import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

// TODO: swap these '#' placeholders for GCP's real social profile URLs.
const socialLinks = {
  instagram: "#",
  linkedin: "#",
  youtube: "#",
  twitter: "#",
  facebook: "#",
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // No backend endpoint exists yet for newsletter signups.
    // This confirms receipt to the user; wire up to a real subscribe
    // endpoint (e.g. Mailchimp/Buttondown) when one is available.
    toast.success("Thanks for subscribing! We'll keep you in the know.");
    setEmail("");
  };

  return (
    <div className=" mt-20 md:mt-40 bg-[#2A6F59] pt-8">
      <div className=" px-6  grid md:grid-cols-2 lg:grid-cols-3 place-content-between ">
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
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex relative rounded-xl bg-white w-full max-w-[315px] h-[37px] py-[0.625rem] px-[1.25rem]"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border-none outline-none focus:border-none focus:outline-none bg-transparent"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="cursor-pointer rounded-xl bg-teal-500 w-12 h-[37px] p-2 flex justify-center items-center absolute right-0 bottom-0 hover:bg-teal-600 active:scale-95"
              >
                <FaArrowRight className="text-white" />
              </button>
            </form>
            <h1 className={`font-figtree text-wrap text-white`}>
              By subscribing to our newsletter, you agree to our terms and
              provide consent to receive updates from our company.
            </h1>
          </div>
        </div>
        <div className=" mt-20 md:mt-0 grid    ">
          <nav className=" lg:place-items-center">
            <ul className="  ">
              <li className="listStyleA">
                <Link to="/about" className="text-white hover:text-[#D8F8FD]">
                  About us
                </Link>
              </li>
              <li className="listStyleB">
                <Link to="/about#team" className="text-white hover:text-[#D8F8FD]">
                  Team
                </Link>
              </li>
              <li className="listStyleB">
                <Link to="/our-solution" className="text-white hover:text-[#D8F8FD]">
                  Our solution
                </Link>
              </li>
              <li className="listStyleB">
                <Link to="/our-story" className="text-white hover:text-[#D8F8FD]">
                  Our story
                </Link>
              </li>
              <li className="listStyleB">
                <Link to="/blog" className="text-white hover:text-[#D8F8FD]">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-20 lg:mt-0  lg:place-items-center">
          <div>
            <div>
              <p className="text-white text-base font-normal">Contact us</p>
            </div>

            <div className="contactus ">
              <img
                alt="phone Icon"
                src={phone}
                width={20}
                height={20}
              />
              <h4 className="text-white listStyleB">+234 904 864 9287</h4>
            </div>

            <div className="contactus">
              <img
                alt="phone Icon"
                src={message}
                width={20}
                height={20}
              />
              <h4 className="text-white listStyleB">
                admin@goodclimateproject.org
              </h4>
            </div>

            <div className="contactus">
              <img
                alt="phone Icon"
                src={location}
                width={20}
                height={20}
              />

              <h4 className="text-white listStyleB">
                1A Hughes Avenue Yaba, Lagos
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-socialMedia ">
        <div className="footer-socialMediaContainer ">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <img alt="Instagram" src={instagram} width={40} height={40} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <img alt="LinkedIn" src={linkedin} width={40} height={40} />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <img alt="YouTube" src={youtube} width={40} height={40} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <img alt="X (Twitter)" src={twitter} width={40} height={40} />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <img alt="Facebook" src={facebook} width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
