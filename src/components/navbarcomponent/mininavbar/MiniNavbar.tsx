import type { ElementType } from "react";
import logo from "../../../assets/GCPlogo.png";

import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const TypedMenuList = MenuList as ElementType;
const TypedMenuItem = MenuItem as ElementType;

const MiniNavbar = () => {
	return (
		<div className="md:hidden py-2 flex justify-between items-center px-5 bg-white shadow-sm">
			<div className="h-10 w-14 flex items-center">
				<img src={logo} alt="Good Climate Project" className="w-full h-full object-contain" />
			</div>
			<Menu>
				<MenuHandler>
					<button className="text-black p-2 rounded-md shadow-sm" aria-label="Open menu">
						<IoMenu size={22} />
					</button>
				</MenuHandler>
				<TypedMenuList className="w-full grid gap-4 border border-gray-100 shadow-lg">
					<TypedMenuItem>
						<Link to="/">Home</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/about">About Us</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/courses">Courses</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link
							to="/auth/sign-up"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 w-[106px] items-center justify-center rounded-lg bg-[#008056] text-white font-figtree"
						>
							Sign up
						</Link>
					</TypedMenuItem>
				</TypedMenuList>
			</Menu>
		</div>
	);
};

export default MiniNavbar;
