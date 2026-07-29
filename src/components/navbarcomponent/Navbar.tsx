import { Link } from "react-router-dom";
import logo from "../../assets/GCPlogo.png";
import MiniNavbar from "./mininavbar/MiniNavbar";
import NavDropdown from "./NavDropdown";
import { programs } from "../../data/programs";

const Navbar = () => {
	const whoWeAreItems = [
		{ label: "About Us", to: "/about" },
		{ label: "Team", to: "/about#team" },
		{ label: "Volunteer", to: "/volunteer" },
	];

	const programItems = [
		{ label: "All Programs", to: "/programs" },
		...programs.map((program) => ({
			label: program.title,
			to: `/programs/${program.slug}`,
		})),
	];

	return (
		<div className="animate-nav-enter">
			<MiniNavbar />
			<div className="hidden md:flex text-base justify-between px-12 py-4 items-center bg-white/95 shadow-sm">
				<Link to="/">
					<img
						src={logo}
						alt="Good Climate Project"
						height={56}
						width={106}
						className="transition-transform duration-200 hover:scale-105"
					/>
				</Link>
				<div className="flex items-center gap-11 font-figtree font-medium text-black">
					<Link
						to="/"
						className="inline-block hover:-translate-y-0.5 hover:text-[#008056]"
					>
						Home
					</Link>
					<NavDropdown label="Who We Are" items={whoWeAreItems} />
					<NavDropdown label="Programs" items={programItems} />
					<Link
						to="/courses"
						className="inline-block hover:-translate-y-0.5 hover:text-[#008056]"
					>
						Courses
					</Link>
					<Link
						to="/blog"
						className="inline-block hover:-translate-y-0.5 hover:text-[#008056]"
					>
						Blog
					</Link>

					<div className="flex items-center gap-3">
						<Link
							to="/auth/sign-up"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 items-center justify-center rounded-lg border border-[#008056] px-4 text-[#008056] hover:-translate-y-0.5 hover:bg-[#F2FCF9] active:scale-95"
						>
							Sign up
						</Link>
						<Link
							to="/donate"
							className="inline-flex h-9 items-center justify-center rounded-lg bg-[#008056] px-4 text-white hover:-translate-y-0.5 hover:bg-[#006a48] active:scale-95"
						>
							Donate
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
