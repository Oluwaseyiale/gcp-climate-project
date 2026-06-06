/** @format */
import { PiBookBookmarkLight } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { PiCertificateLight } from "react-icons/pi";
// import { MdOutlinePayments } from "react-icons/md";
// import { GrUserSettings } from "react-icons/gr";
const routeBaseUrl = "/dashboard";

export const data = [
	{
		label: "Dashboard",
		route: routeBaseUrl,
		matchRoute: routeBaseUrl,
		icon: <PiBookBookmarkLight />,
	},
	{
		label: "Tasks",
		route: routeBaseUrl + "/tasks",
		matchRoute: routeBaseUrl + "/tasks/*",
		icon: <LuClipboardList />,
	},
	{
		label: "Certificates",
		route: routeBaseUrl + "/certificates",
		matchRoute: routeBaseUrl + "/certificates/*",
		icon: <PiCertificateLight />,
	},
	// {
	// 	label: "Payment",
	// 	route: routeBaseUrl + "/payment/*",
	// 	icon: <MdOutlinePayments />,
	// },
	// {
	// 	label: "Profile",
	// 	route: routeBaseUrl + "/profile/*",
	// 	icon: <GrUserSettings />,
	// },
];
