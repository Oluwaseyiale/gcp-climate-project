/** @format */

// src/components/CourseDetails.jsx

import PropTypes from "prop-types";
const CourseDetails = ({ course, onBackClick }) => {
	return (
		<div className="py-4 px-5  bg-[#FFFFFF] h-auto w-[600px] rounded-[10px] flex flex-col shadow-custom relative mb-8">
			<img src={course.img} alt={course.header} />
			<h1 className="font-figtree text-3xl font-medium mt-4">
				{course.header}
			</h1>
			<p className="font-normal text-lg font-figtree leading-6 mt-2">
				{course.text}
			</p>
			<button
				className="border mt-4 button bg-[#008056] h-9 w-36 rounded-lg text-white font-figtree"
				onClick={onBackClick}
			>
				Back to courses
			</button>
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
