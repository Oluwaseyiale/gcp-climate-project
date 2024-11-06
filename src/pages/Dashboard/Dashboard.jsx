/** @format */

// Dashboard.js
import { Link, Outlet } from "react-router-dom";
import { data } from "./data";
import SideBarButton from "./SideBarButton";
import logo from "../../assets/GCPlogo.png";

const Dashboard = () => {
	return (
		<div className="h-screen flex flex-col">
			{/* Header with fixed height */}
			<div className="h-[10%] flex items-center justify-between border-b  shadow-md px-10">
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
			{/* Main content area */}
			<div className="flex flex-1">
				{/* Sidebar with fixed width */}
				<div className="w-80 border-r pt-10">
					{data.map((link) => (
						<div key={link.label}>
							<SideBarButton
								label={link.label}
								route={link.route}
								icon={link.icon}
							/>
						</div>
					))}
				</div>
				{/* Outlet fills the remaining space */}
				<div className="flex-1 overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
