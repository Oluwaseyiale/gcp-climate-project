/** @format */
// "use client";
import CountUp from "react-countup";
// import "./ourcourses.css";
// import { figtree } from "../font/CustomFont";

const OurImpacts = () => {
	const impacts = [
		{ number: 6000, label: "Youth Reached" },
		{ number: 200, label: "Climate Leaders Empowered" },

		{ number: 50, label: "Schools Engaged in Climate Education Programs" },
		{ number: 100, label: "Climate Advocacy Campaigns Launched" },
		{ number: 10, label: "Online Courses" },
	];

	return (
		<div className=" main-container ">
			<h1 className={`font-figtree font-medium text-2xl  mt-4 px-8`}>
				Our Impacts
				<hr className="border border-black w-full" />
			</h1>
			{/* <div className="our-impacts-container "> */}
			<div className="flex justify-center mt-5 bg-[#DCEFE9] py-4">
				{impacts.map((impact, index) => (
					<div key={index} className=" w-[240px] flex-col">
						<h2 className={` font-figtree text-5xl font-semibold flex justify-center`}>
							<CountUp start={0} end={impact.number} duration={2.5} />+
						</h2>
						<p className={` font-figtree font-normal text-xl text-center text-[#3F4040]`}>{impact.label}</p>
					</div>
				))}
			</div>
			{/* </div> */}
		</div>
	);
};

export default OurImpacts;
