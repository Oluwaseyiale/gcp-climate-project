import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { SideBar } from "../../components/dashboard/layout/SideBar";
import { NavBar } from "../../components/dashboard/layout/NavBar";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

const Dashboard = () => {
	const location = useLocation();
	const isFirstRender = useRef(true);
	const [isNavigating, setIsNavigating] = useState(false);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		setIsNavigating(true);
		const timer = window.setTimeout(() => setIsNavigating(false), 260);

		return () => window.clearTimeout(timer);
	}, [location.pathname]);

	return (
		<div className="h-screen overflow-hidden ">
			<NavBar />

			<div className=" flex h-[80%] ">
				<SideBar />

				<div className="relative flex-1 overflow-y-scroll">
					{isNavigating && (
						<div className="animate-fade-in absolute inset-0 z-20 flex items-center justify-center bg-white/75 backdrop-blur-[1px]">
							<LoadingSpinner label="Loading dashboard..." centered={false} />
						</div>
					)}
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
