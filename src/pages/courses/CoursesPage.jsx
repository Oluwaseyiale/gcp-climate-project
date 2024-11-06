/** @format */

import { useState } from "react";
import { courses } from "./courses";
import courseimg from "../../assets/coursesbg.png";
import Footer from "../../components/footercomponent/Footer";
import ReactPaginate from "react-paginate";
import CourseDetails from "./CourseDetails";
import TabsComponent from "./TabsComponent";
import Navbar from "../../components/navbarcomponent/Navbar";

const CoursesPage = () => {
	const courseInformation = [
		{
			header1: "Duration: 16hrs a week",
			header2: "4 Weeks",
		},
		{
			header1: "Cost",
			header2: " #50,000",
		},
		{
			header1: "Experience level",
			header2: " Beginner",
		},
		{
			header1: "Schedule",
			header2: " Flexible schedule",
		},
		{
			header1: "Ratings",
			header2: (
				<span>
					4 <span style={{ color: "#FFD700", fontSize: "1.2em" }}>★</span>
				</span>
			),
		},
	];
	const [searchQuery, setSearchQuery] = useState("");
	const itemsPerPage = 12;
	const [currentPage, setCurrentPage] = useState(0);
	const pageCount = Math.ceil(courses.length / itemsPerPage);

	const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course

	// Handle input change to update the search query state
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
		setSelectedCourse(null); // Reset selected course when searching
	};

	// Handle page click for pagination
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
		setSelectedCourse(null); // Reset selected course when changing page
	};

	// Slice the filtered items array to display only items for the current page
	const filteredItems = courses
		.filter(
			(item) =>
				item.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.text.toLowerCase().includes(searchQuery.toLowerCase())
		)
		.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

	// Handle clicking on a course to show its content
	const handleCourseClick = (item) => {
		setSelectedCourse(item);
	};

	const handleBackClick = () => {
		setSelectedCourse(null);
	};

	return (
		<div className=" bg-[#FFFFF]">
			<Navbar />
			{!selectedCourse && <img src={courseimg} alt="" />}

			<div
				className={!selectedCourse ? ` relative ` : `bg-[#F6FDFB] pt-10 pb-28`}
			>
				{/* Breadcrumb Navigation */}
				<nav className="text-gray-500 text-sm  px-20 mb-20">
					{selectedCourse && (
						<>
							{<span>Courses</span>} &gt;{" "}
							<span
								className="text-[#008056] cursor-pointer"
								onClick={handleBackClick}
							>
								{selectedCourse.header}
							</span>
						</>
					)}
				</nav>

				{!selectedCourse && (
					<div className=" w-[626px] flex items-center px-4 py-2 mb-8 rounded-lg mx-auto  mt-6 bg-[#FBFEFD] shadow-[#00986740] shadow-sm">
						<input
							type="text"
							placeholder="Search Course"
							value={searchQuery}
							onChange={handleInputChange}
							className=" placeholder:font-figtree focus:outline-none placeholder:text-[#575858] bg-[#FBFEFD]"
						/>
					</div>
				)}

				<div className="flex-wrap flex justify-center gap-6 ">
					{selectedCourse ? (
						// Show selected course details
						<CourseDetails
							course={selectedCourse}
							// onBackClick={handleBackClick}
						/>
					) : // List the courses when no course is selected
					filteredItems.length > 0 ? (
						filteredItems.map((item, index) => (
							<div
								key={index}
								className="py-4 px-5  bg-[#FFFFFF]  h-[367px] w-[300px] rounded-[10px] flex flex-col shadow-custom relative mb-8"
								onClick={() => handleCourseClick(item)} // Set selected course on click
							>
								<img src={item.img} alt="" />
								<h1 className="font-figtree text-2xl font-medium mt-4">
									{item.header}
								</h1>
								<p className="font-normal text-base font-figtree leading-6">
									{item.text}
								</p>
								<div className="button-container mx-4 absolute bottom-4">
									<button className="border  button  bg-[#008056] h-9 w-36 rounded-lg text-white font-figtree">
										See more
									</button>
								</div>
							</div>
						))
					) : (
						<li>No items found</li>
					)}
				</div>
			</div>
			{selectedCourse && (
				<div className="flex  justify-between mt-[-46px] px-20 items-center h-24 shadow-custom bg-white mx-20 rounded-lg">
					{courseInformation.map((informations, index) => (
						<div key={index}>
							<h1 className="font-figtree font-normal text-center text-sm">
								{informations.header1}
							</h1>
							<h1 className=" font-figtree font-bold text-xl text-[#000000] text-center ">
								{informations.header2}
							</h1>
						</div>
					))}
				</div>
			)}
			{selectedCourse && <TabsComponent />}

			{/* Show pagination only if no course is selected */}
			{!selectedCourse && (
				<ReactPaginate
					previousLabel={"<"}
					nextLabel={">"}
					breakLabel={"..."}
					pageCount={pageCount}
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					onPageChange={handlePageClick}
					containerClassName={"flex justify-center items-center space-x-4 mt-8"}
					pageClassName={"rounded-full border border-gray-300 px-3 py-1"}
					activeClassName={"bg-[#008056] text-white"}
					previousClassName={"rounded-full border border-gray-300 px-3 py-1"}
					nextClassName={"rounded-full border border-gray-300 px-3 py-1"}
					breakClassName={"text-gray-500"}
					disabledClassName={"opacity-50 cursor-not-allowed"}
				/>
			)}

			<Footer />
		</div>
	);
};

export default CoursesPage;
