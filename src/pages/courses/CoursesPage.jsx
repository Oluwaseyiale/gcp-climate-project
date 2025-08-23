/** @format */

import { useState } from "react";
import courseimg from "../../assets/coursesbg.png";
import Footer from "../../components/footercomponent/Footer";
import ReactPaginate from "react-paginate";
import CourseDetails from "./CourseDetails";
import TabsComponent from "./TabsComponent";
import Navbar from "../../components/navbarcomponent/Navbar";
import { useAllCourses } from "../../api/queries";
// import imgA from "../../assets/imgA.png";
import desktopImg from "../../assets/imgA.png";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const navigation = useNavigate();

	const { data, isLoading, isError } = useAllCourses(currentPage);
	console.log("error data", data);

	// Handle input change for search
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
		setSelectedCourse(null);
	};

	// Handle pagination click
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected + 1);
		setSelectedCourse(null);
	};

	// Handle course selection
	const handleCourseClick = (courseId) => {
		navigation(`/courses/${courseId}`);
	};

	// Handle back button click
	const handleBackClick = () => {
		setSelectedCourse(null);
	};

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading data</p>;

	// const filteredItems = data?.results?.filter((item) =>
	// 	item.title.toLowerCase().includes(searchQuery.toLowerCase())
	// );

	const filteredItems = data?.results?.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
	);

	console.log("mycourses", filteredItems);

	return (
		<div className="bg-[#FFFFF]">
			<Navbar />
			{!selectedCourse && <img src={courseimg} alt="Courses Background" />}

			<div
				className={!selectedCourse ? `relative` : `bg-[#F6FDFB] pt-10 pb-28`}
			>
				<nav className="px-20 mb-20 text-sm text-gray-500">
					{selectedCourse && (
						<>
							<span>Courses</span> &gt;{" "}
							<span
								className="text-[#008056] cursor-pointer"
								onClick={handleBackClick}
							>
								{selectedCourse.title}
							</span>
						</>
					)}
				</nav>

				{!selectedCourse && (
					<div className=" mx-10  lg:w-[626px] flex items-center px-4 py-2 mb-8 rounded-lg md:mx-auto mt-6 bg-[#FBFEFD] shadow-[#00986740] shadow-sm">
						<input
							type="text"
							placeholder="Search Course"
							value={searchQuery}
							onChange={handleInputChange}
							className="placeholder:font-figtree focus:outline-none placeholder:text-[#575858] bg-[#FBFEFD]"
						/>
					</div>
				)}

				<div className="flex flex-wrap justify-center gap-6">
					{selectedCourse ? (
						<CourseDetails
							// course={selectedCourse}
							filteredItems={filteredItems}
						/>
					) : filteredItems?.length === 0 ? (
						<p>
							No courses found. Please adjust your search or try again later.
						</p>
					) : (
						filteredItems?.map((item) => (
							<div
								key={item.id}
								className="py-4 px-5 bg-[#FFFFFF] h-[367px] w-[300px] rounded-[10px] flex flex-col shadow-custom relative mb-8"
							>
								{/* Display image or fallback */}
								<img
									src={item.cover_image || desktopImg}
									alt={item.title}
									className="object-cover w-full h-40 rounded-md"
								/>
								<h1 className="mt-4 text-2xl font-medium font-figtree">
									{item.title}
								</h1>
								<p className="text-base font-normal leading-6 truncate font-figtree">
									{item.description}
								</p>
								<div className="absolute mx-4 button-container bottom-4">
									<button 
								onClick={() => handleCourseClick(item.id)}
									 className="border button bg-[#008056] h-9 w-36 rounded-lg text-white font-figtree">
										See more
									</button>
								</div>
							</div>
						))
					)}
				</div>
			</div>

			{selectedCourse && <TabsComponent />}
			{!selectedCourse && (
				<ReactPaginate
					previousLabel={"<"}
					nextLabel={">"}
					breakLabel={"..."}
					pageCount={data?.totalPages || 1}
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
