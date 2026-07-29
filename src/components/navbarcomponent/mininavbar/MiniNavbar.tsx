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
import { programs } from "../../../data/programs";

const TypedMenuList = MenuList as ElementType;
const TypedMenuItem = MenuItem as ElementType;

const MiniNavbar = () => {
	return (
		<div className="md:hidden py-2 flex justify-between items-center px-5 bg-white shadow-sm">
			<div className="h-10 w-14 flex items-center">
				<Link to="/">
					<img
						src={logo}
						alt="Good Climate Project"
						className="w-full h-full object-contain transition-transform duration-200 hover:scale-105"
					/>
				</Link>
			</div>
			<Menu>
				<MenuHandler>
					<button
						className="text-black p-2 rounded-md shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F2FCF9] active:scale-95"
						aria-label="Open menu"
					>
						<IoMenu size={22} />
					</button>
				</MenuHandler>
				<TypedMenuList className="w-full grid gap-1 border border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
					<TypedMenuItem>
						<Link to="/">Home</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/about">About Us</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/about#team">Team</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/volunteer">Volunteer</Link>
					</TypedMenuItem>
					<TypedMenuItem className="pt-2 text-xs font-semibold uppercase text-slate-400">
						Programs
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/programs">All Programs</Link>
					</TypedMenuItem>
					{programs.map((program) => (
						<TypedMenuItem key={program.slug}>
							<Link to={`/programs/${program.slug}`}>{program.title}</Link>
						</TypedMenuItem>
					))}
					<TypedMenuItem>
						<Link to="/courses">Courses</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/blog">Blog</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link to="/donate">Donate</Link>
					</TypedMenuItem>
					<TypedMenuItem>
						<Link
							to="/auth/sign-up"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-[#008056] text-white font-figtree"
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
