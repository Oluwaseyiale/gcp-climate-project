/** @format */

// import { useState } from "react";
import logo from "../../../assets/GCPlogo.png";

import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	// Button,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const MiniNavbar = () => {
	// const [isOpen, setIsOpen] = useState(false);
	// const openFile = () => {
	// 	setIsOpen(!isOpen);
	// };
	return (
		<div className="md:hidden py-2 flex justify-between items-center px-5 border">
			<div className="h-10 w-14 flex items-center">
				<img src={logo} alt="Logo" className="w-full h-full object-contain" />
			</div>
			<Menu>
				<MenuHandler>
					<span className="text-black  p-2 rounded-md shadow">
						<IoMenu />
					</span>
				</MenuHandler>
				<MenuList className="border w-full  grid gap-10">
					<MenuItem>
						<Link to="/">Home</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/about">About Us</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/courses">Courses</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/signup">
							<button className=" h-9 w-[106px] rounded-lg bg-green-800 text-white font-figtree">
								Sign up
							</button>
						</Link>
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default MiniNavbar;
