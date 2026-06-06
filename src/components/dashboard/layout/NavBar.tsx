/** @format */

import { Link } from "react-router-dom";
import logo from "../../../assets/GCPlogo.png";

export const NavBar = () => {
  return (
    <div className="animate-nav-enter flex justify-between p-4 shadow-md w-full items-center bg-white">
      <Link to="/dashboard">
        <img
          src={logo}
          alt="logo"
          width={80}
          className="transition-transform duration-200 hover:scale-105"
        />
      </Link>
      <div className=" flex gap-8 mr-10">
        {/* <Link className=" font-figtree text-base font-normal text-[#000000]">
					Notification
				</Link> */}

        <Link
          to="/dashboard"
          className="font-figtree text-base font-normal text-[#000000] hover:-translate-y-0.5 hover:text-[#008056]"
        >
          Courses
        </Link>
      </div>
    </div>
  );
};
