/** @format */

// import React from 'react'
import { data } from "./data";
import SideBarButton from "./SideBarButton";
export const SideBar = () => {
	const handleLogout = () => {
		localStorage.removeItem("access_token"); // Remove token from local storage
		window.location.href = "/login"; // Redirect to login page or any other page
	};
	return (
		<div className=" ">
			<div className=" h-screen border-r w-60 pt-10">
				{/* <div> */}
				{data.map((link) => (
					<div key={link.label}>
						<SideBarButton
							label={link.label}
							route={link.route}
							icon={link.icon}
						/>
					</div>
				))}
				{/* </div> */}
				<div className=" mx-10 mt-12">
					<button onClick={handleLogout}>Logout</button>
				</div>
			</div>
		</div>
	);
};
