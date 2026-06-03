/** @format */

// Dashboard.js
import { Outlet } from "react-router-dom";

import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";

const Dashboard = () => {
	return (
		<div className="h-screen overflow-hidden ">
			{/* Header with fixed height */}
			{/* <div className="border"> */}
			<NavBar />

			{/* Main content area */}
			<div className=" flex h-[80%] ">
				<SideBar />
				{/* Sidebar with fixed width */}

				{/* Outlet fills the remaining space */}
				<div className="flex-1 overflow-y-scroll">
					<Outlet />
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default Dashboard;
