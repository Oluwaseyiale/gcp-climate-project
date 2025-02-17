/** @format */

// import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarButton = ({ label, route, icon }) => {
	const navigate = useNavigate();
	const match = useMatch(route);

	const handleNavigation = () => {
		navigate(route);
	};

	const active = match ? true : false;

	return (
		<div
			onClick={handleNavigation}
			className={`cursor-pointer p-4 mx-10 mt-6 hover:bg-gray-200 rounded-md flex items-center gap-2 ${
				active ? "bg-[#00986712] text-[#2A6F59]" : ""
			}`}
		>
			{icon}
			<h1 className=" font-figtree text-base font-normal ">{label}</h1>
		</div>
	);
};

SideBarButton.propTypes = {
	label: PropTypes.string, // Expecting 'icon1' to be a React element
	route: PropTypes.string,
	icon: PropTypes.object,
};

export default SideBarButton;
