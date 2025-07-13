/** @format */

// import React from 'react'
import "../dashboard.css";
import books from "../../../../assets/books.png";
import EnrolledCourses from "../../../../components/dashboardcomponents/dashboardLandingPage/EnrolledCourses";
// import UserProfile from "../../../components/dashboardcomponents/userProfile/userProfile";
import { useUserProfile } from "../../../../api/queries";

const LandingPage = () => {
	const { data } = useUserProfile();
	console.log("user", data);
	// console.log("1" - 1);
	// console.log("1" + 1);

	// const name = data?.data?.data.user

	return (
		<div>
			<div className="border h-40 rounded-b-full bg-[#E0EBE7]  flex  items-center justify-center">
				<img src={books} alt="" className=" h-40 w-40" />
				<div>
					<h1 className="font-figtree font-normal text-xl">Hi, Joshua</h1>
					<p className="font-figtree font-normal text-base">
						Please find below a list of the courses you are enrolled in.
					</p>

					{/* <UserProfile /> */}
				</div>
			</div>

			{/* <div className=" w-full flex justify-center items-center"> */}
			<EnrolledCourses />
			{/* </div> */}
		</div>
	);
};

export default LandingPage;
