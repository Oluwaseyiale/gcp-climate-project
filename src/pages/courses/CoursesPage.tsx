import { useState, type ChangeEvent } from "react";
import courseimg from "../../assets/coursesbg.png";
import Footer from "../../components/footercomponent/Footer";
import ReactPaginate from "react-paginate";
import Navbar from "../../components/navbarcomponent/Navbar";
import { useAllCourses } from "../../api/queries";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/forms/SearchInput";
import CourseCard from "../../components/widgets/CourseCard";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

const CoursesPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const navigation = useNavigate();

	const { data, isLoading, isError } = useAllCourses(currentPage);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handlePageClick = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};

	const handleCourseClick = (courseId: string | number) => {
		navigation(`/courses/${courseId}`);
	};

	const filteredItems = data?.results?.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
	);

	return (
		<div className="animate-page-enter bg-[#F6FDFB]">
			<Navbar />
			<img
				src={courseimg}
				alt="Courses"
				className="animate-section-enter w-full max-h-[360px] object-cover"
			/>

			<main className="relative px-4 sm:px-6 md:px-10">
				<SearchInput
					value={searchQuery}
					onChange={handleInputChange}
					placeholder="Search courses"
					className="mb-8 mt-6 lg:w-[626px] md:mx-auto"
				/>

				<div className="mx-auto grid min-h-[420px] w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-6">
					{isLoading ? (
						<div className="col-span-full">
							<LoadingSpinner label="Loading courses..." />
						</div>
					) : isError ? (
						<p className="col-span-full text-center text-red-600">
							Error loading courses. Please try again.
						</p>
					) : filteredItems?.length === 0 ? (
						<p className="col-span-full text-center">
							No courses found. Please adjust your search or try again later.
						</p>
					) : (
						filteredItems?.map((item) => (
							<CourseCard
								key={item.id}
								title={item.title}
								description={item.description}
								imageSrc={item.cover_image}
								actionLabel="See more"
								onAction={() => handleCourseClick(item.id)}
								className="min-h-[420px]"
							/>
						))
					)}
				</div>
			</main>

			{!isLoading && !isError && (
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
