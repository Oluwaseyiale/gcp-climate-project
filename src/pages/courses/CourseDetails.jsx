/** @format */

// src/components/CourseDetails.jsx
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CourseDetails = ({ course }) => {
	return (
		<div className="relative">
			<div className="py-4 px-5    h-auto  rounded-[10px] flex gap-20  relative mb-8">
				<div className="mt-20 w-[660px] pr-10">
					<h1 className="font-figtree text-5xl font-semibold mt-4">
						{course.header}
					</h1>
					<p className="font-normal text-lg font-figtree leading-6 mt-2 ">
						{course.text}
					</p>
					{/* <button
					className="border mt-4 button bg-[#008056] h-9 w-36 rounded-lg text-white font-figtree"
					onClick={onBackClick}
				>
					Back to courses
				</button> */}

					<Link to="/signin">
						<div className="border mt-4  bg-[#008056] h-9 w-36 rounded-lg flex items-center justify-center gap-4 font-figtree">
							<h1 className="text-white">Enroll Now</h1>
							<FaArrowRightLong color="white" />
						</div>
					</Link>
				</div>
				<div className="rounded-full md:h-[270px] md:w-[270px] lg:h-[470px] lg:w-[470px] bg-[#008056] relative ">
					<img
						src={course.img}
						alt={course.header}
						className="rounded-full md:h-[270px] md:w-[270px] lg:h-[470px] lg:w-[470px] absolute top-20 right-20"
					/>
				</div>
			</div>
		</div>
	);
};

CourseDetails.propTypes = {
	course: PropTypes.shape({
		header: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	}).isRequired,
	onBackClick: PropTypes.func.isRequired,
};

export default CourseDetails;
