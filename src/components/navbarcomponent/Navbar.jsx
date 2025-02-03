/** @format */

import { Link } from "react-router-dom";
import logo from "../../assets/GCPlogo.png";
import MiniNavbar from "./mininavbar/MiniNavbar";

// import React from 'react'

const Navbar = () => {
	const navbarcontent = [
		{
			routeName: "Home",
			routeDir: "/",
		},
		{
			routeName: "About Us",
			routeDir: "/about",
		},
		{
			routeName: "Courses",
			routeDir: "/courses",
		},
	];
	return (
		<div>
			<MiniNavbar />
			<div className="border  md:flex text-base justify-between px-12 py-4 items-center hidden">
				<img
					src={logo}
					alt="logo"
					// className="w-14 h-[106px]"
					height={56}
					width={106}
				/>
				<div>
					<div className="flex justify-end  p-2">
						<nav className="flex gap-14 text-customGray text-base font-normal font-figtree">
							<ul>
								<li>Volunteer</li>
							</ul>
							<ul>
								<li>Blog</li>
							</ul>
							<ul>
								<li>Donate</li>
							</ul>
						</nav>
					</div>
					<div className="flex gap-11 items-center font-figtree font-medium text-black">
						{navbarcontent.map((navigator, index) => (
							<nav key={index}>
								<ul>
									<li>
										<Link to={navigator.routeDir}>{navigator.routeName}</Link>
									</li>
								</ul>
							</nav>
						))}

						<Link to="/signup">
							<button className=" h-9 w-[106px] rounded-lg bg-green-800 text-white font-figtree">
								Sign up
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
