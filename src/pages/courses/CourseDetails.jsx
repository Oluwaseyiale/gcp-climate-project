/** @format */

// src/components/CourseDetails.jsx
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import desktopImg from "../../assets/imgA.png";

import { Link, useParams } from "react-router-dom";
import { useCourseId } from "../../api/queries";
import Navbar from "../../components/navbarcomponent/Navbar";
import Footer from "../../components/footercomponent/Footer";
const CourseDetails = () => {
	const { id } = useParams();

	const { data } = useCourseId(id);
	console.log("img", id);
	console.log("filtered", data);
	console.log("filtered", data?.data.intro_video);

	const price = data?.data.price;
	const experienceLevel = data?.data.experience_level;
	const schedule = data?.data.schedule;

	const desc = [
		{
			title: "Duration: 16hrs a week",
			description: "4 Weeks",
		},

		{
			title: "Cost",
			description: price,
		},
		{
			title: "Experience level",
			description: experienceLevel,
		},
		{
			title: "Schedule ",
			description: schedule,
		},
		{
			title: "Ratings",
			description: "5",
		},
	];

	return (
		<div className="relative">
			<Navbar />
			<div className="py-4 px-5  pb-40 lg:pt-20 grid place-items-center  h-auto  rounded-[10px]   relative mb-8 bg-[#F6FDFB]">
				<div className="flex justify-center gap-8 ">
					<div className="mt-20 lg:w-[660px]  w-full pr-10">
						<h1 className="font-figtree text-3xl lg:text-5xl font-semibold mt-4">
							{data?.data?.title}
						</h1>
						<p className="font-normal text-wrap  text-lg font-figtree leading-6 mt-2 ">
							{data?.data?.description}
						</p>

						<Link to="/signup">
							<div className="border mt-4  bg-[#008056] h-9 w-36 rounded-lg flex items-center justify-center gap-4 font-figtree">
								<h1 className="text-white">Enroll Now</h1>
								<FaArrowRightLong color="white" />
							</div>
						</Link>
					</div>
					<div className="rounded-full md:h-[270px] md:w-[270px] lg:h-[270px] lg:w-[270px] bg-[#008056] relative ">
						<img
							// src={data?.data?.intro_video || desktopImg}
							src={desktopImg}
							alt={data?.data?.title}
							className="rounded-full md:h-[270px] md:w-[270px] lg:h-[270px] lg:w-[270px] absolute top-10 right-10"
						/>
					</div>
				</div>
				<div className=" h-10 lg:w-[80%] absolute bottom-[-2.5rem] bg-white flex items-center py-10  shadow-[0_4px_6px_rgba(0,0,0,0.15)] rounded-md">
					{desc.map((items, index) => (
						<div
							key={index}
							className="border-x w-full grid place-items-center"
						>
							<h1 className="text-[#575858] text-xs md:text-sm font-normal leading-4 font-figtree">
								{items.title}
							</h1>
							<p className="text-[#000000] font-medium text-base lg:text-xl font-figtree">
								{items.description}
							</p>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

CourseDetails.propTypes = {
	// course: PropTypes.shape({
	// 	header: PropTypes.string.isRequired,
	// 	text: PropTypes.string.isRequired,
	// 	img: PropTypes.string.isRequired,
	// }).isRequired,
	// onBackClick: PropTypes.func.isRequired,
	filteredItems: PropTypes.array,
};

export default CourseDetails;
