/** @format */

import { Link } from "react-router-dom";
import logo from "../../assets/GCPlogo.png";

export const NavBar = () => {
	return (
		<div className="flex  justify-between p-4   shadow-md w-full  items-center">
			<img src={logo} alt="logo" width={80} />
			<div className=" flex gap-8 ">
				<Link className=" font-figtree text-base font-normal text-[#000000]">
					Notification
				</Link>
				<Link className=" font-figtree text-base font-normal text-[#000000]">
					Support
				</Link>
				<Link className=" font-figtree text-base font-normal text-[#000000]">
					Courses
				</Link>
				<Link className=" font-figtree text-base font-normal text-[#000000]">
					Donate
				</Link>
			</div>
		</div>
	);
};
