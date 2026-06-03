import { Link } from "react-router-dom";
import logo from "../../assets/GCPlogo.png";
import MiniNavbar from "./mininavbar/MiniNavbar";

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
			<div className="hidden md:flex text-base justify-between px-12 py-4 items-center bg-white/95 shadow-sm">
				<img
					src={logo}
					alt="Good Climate Project"
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

						<Link
							to="/auth/sign-up"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 w-[106px] items-center justify-center rounded-lg bg-[#008056] text-white font-figtree hover:bg-[#006a48]"
						>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
