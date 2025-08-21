/** @format */


import { useEnrolledCourses, } from "../../../api/queries";
import {AllEnrolledCourses} from "./AllEnrolledCourses.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setCourseId} from "../../../slice/courseSlice.js";
// import imgA from "../../../assets/imgA.png";
const EnrolledCourses = () => {
	const { data, isLoading, isError, isSuccess,error } = useEnrolledCourses();
const dispatch = useDispatch();
	console.log("dataresults", data?.data?.results);

	const allenrolledcourses = data?.data?.results;

	useEffect(() => {
		if (isSuccess && data?.data?.results?.length > 0) {
			// ✅ Extract all course_data.id values
			const courseIds = data.data.results.map((course) => course.course_data.id);
			console.log('courseIds', courseIds)
			dispatch(setCourseId(courseIds));
		}
	}, [isSuccess, data, dispatch]);

	// Handle loading and error states
	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error: {error.message}</p>;

	return (
		<div className="p-16 w-full">
			{/* <h2>Total Courses Enrolled: {data?.count}</h2> */}

			{/* Pagination Links */}
			{data?.data?.previous && (
				<p>
					Previous: <a href={data.data.previous}>{data.data.previous}</a>
				</p>
			)}
			{data?.data?.next && (
				<p>
					Next: <a href={data.data.next}>{data.data.next}</a>
				</p>
			)}

			{data?.data?.results.map((courses, index) => (
				<AllEnrolledCourses key={index} enrolledcourses={courses}/>
			))}
		</div>
	);
};

// const CourseItem = ({ id }) => {
// 	const { data: courseDetails, isLoading, isError, error } = useGetCourses(id);
//
// 	// console.log("courseDescription", courseDetails.data.description);
// 	// console.log("courseDetails", courseDetails);
// 	console.log("courseDetails", courseDetails);
// 	// console.log("Image URL:", courseDetails?.data?.cover_image);
//
// 	// const courseDescription = courseDetails.data.description;
// 	// const title = courseDetails.data.title;
//
// 	// const courses = courseDetails.data;
//
// 	if (isLoading) return <p>Loading course details...</p>;
// 	if (isError) return <p>Error: {error.message}</p>;
// 	// const navigation = useNavigate;
// 	// const handleCourseClick = (course) => {
// 	// 	navigation(`/courses/${course.id}`);
// 	// };
//
// 	// const handleCourseClick = () => {
// 	// 	navigation(`/modules`);
// 	// };
//
// 	return (
// 		<div className="w-full grid grid-cols-1">
// 			{[courseDetails?.data].flat().map((course) => (
// 				<div
// 					key={course.id}
// 					className=" flex justify-between px-4 items-center  rounded-xl shadow py-6 my-4"
// 				>
// 					<div className="flex  w-[80%] gap-5 items-center">
// 						<img
// 							src={course.cover_image}
// 							alt="NO IMAGE"
// 							className="h-[104px] w-[146px]"
// 						/>
//
// 						<div className=" ">
// 							<h1 className="font-figtree text-2xl font-medium">
// 								{course.title}
// 							</h1>
// 							<p className="font-figtree text-base font-normal">
// 								{course.description}
// 							</p>
// 						</div>
// 					</div>
// 					<Link to={`modules/${course.id}`} state={{ modules: course.modules }}>
// 						<button
// 							className="border font-semibold text-base font-figtree bg-[#008056] text-[#FFFFFF] px-8 h-[43px] rounded-lg"
// 							// onClick={handleCourseClick}
// 						>
// 							Go to Course
// 						</button>
// 					</Link>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// CourseItem.propTypes = {
// 	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Validate courseId as a string or number
// };

export default EnrolledCourses;
