/** @format */

import { Link } from "react-router-dom";
import logo from "../../assets/GCPlogo.png";

export const NavBar = () => {
  return (
    <div className="flex  justify-between p-4   shadow-md w-full  items-center">
      <Link to>
        <img src={logo} alt="logo" width={80} />
      </Link>
      <div className=" flex gap-8 mr-10">
        {/* <Link className=" font-figtree text-base font-normal text-[#000000]">
					Notification
				</Link> */}

        <Link
          to="/dashboard"
          className=" font-figtree text-base font-normal text-[#000000]"
        >
          Courses
        </Link>
      </div>
    </div>
  );
};
