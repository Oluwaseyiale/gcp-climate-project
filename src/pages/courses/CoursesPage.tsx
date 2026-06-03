import { useState } from "react";
import courseimg from "../../assets/coursesbg.png";
import Footer from "../../components/footercomponent/Footer";
import ReactPaginate from "react-paginate";
import Navbar from "../../components/navbarcomponent/Navbar";
import { useAllCourses } from "../../api/queries";
import desktopImg from "../../assets/imgA.png";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const navigation = useNavigate();

	const { data, isLoading, isError } = useAllCourses(currentPage);

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	const handleCourseClick = (courseId) => {
		navigation(`/courses/${courseId}`);
	};

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading data</p>;

	const filteredItems = data?.results?.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
	);

	return (
		<div className="bg-[#F6FDFB]">
			<Navbar />
			<img
				src={courseimg}
				alt="Courses"
				className="w-full max-h-[360px] object-cover"
			/>

			<main className="relative px-4 sm:px-6 md:px-10">
				<div className="lg:w-[626px] flex items-center px-4 py-2 mb-8 rounded-lg md:mx-auto mt-6 bg-[#FBFEFD] shadow-[#00986740] shadow-sm">
					<input
						type="search"
						placeholder="Search courses"
						value={searchQuery}
						onChange={handleInputChange}
						className="w-full placeholder:font-figtree focus:outline-none placeholder:text-[#575858] bg-[#FBFEFD]"
					/>
				</div>

				<div className="mx-auto grid w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-6">
					{filteredItems?.length === 0 ? (
						<p className="col-span-full text-center">
							No courses found. Please adjust your search or try again later.
						</p>
					) : (
						filteredItems?.map((item) => (
							<article
								key={item.id}
								className="course-card min-h-[420px]"
							>
								<img
									src={item.cover_image || desktopImg}
									alt={item.title}
									className="course-card-image"
								/>
								<h2 className="course-card-title mt-4 text-xl font-medium leading-snug text-slate-950 font-figtree sm:text-2xl">
									{item.title}
								</h2>
								<p className="course-card-description mt-2 text-base font-normal leading-6 text-slate-800 font-figtree">
									{item.description}
								</p>
								<button
									onClick={() => handleCourseClick(item.id)}
									className="course-card-action mt-6 self-start font-figtree"
								>
									See more
								</button>
							</article>
						))
					)}
				</div>
			</main>

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
			<Footer />
		</div>
	);
};

export default CoursesPage;
