/** @format */

import { useEffect, useRef } from "react";
import { useEnrolledCourses } from "../../../api/queries";
// import { useParams } from "react-router-dom";

const EnrolledCourses = () => {
	// const { id } = useParams();
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useEnrolledCourses();

	const loadMoreRef = useRef(null);

	useEffect(() => {
		if (!loadMoreRef.current || !hasNextPage) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					fetchNextPage();
				}
			},
			{ threshold: 1.0 }
		);

		observer.observe(loadMoreRef.current);

		return () => observer.disconnect();
	}, [fetchNextPage, hasNextPage]);

	if (status === "loading") return <p>Loading items...</p>;
	if (status === "error") return <p>Failed to load items.</p>;

	// Check if there are any courses available
	const courses = data?.pages.flatMap((page) => page.results) || [];
	console.log("courses", courses);
	console.log("course", data?.pages);

	const noCoursesAvailable = courses.length === 0;

	return (
		<div className="p-4">
			{noCoursesAvailable ? (
				<p className="text-center text-gray-500">No courses available.</p>
			) : (
				<>
					<ul>
						{courses.map((course) => (
							<li key={course.id} className="border p-2 mb-2">
								{course.title} - {course.description}
							</li>
						))}
						hello
					</ul>

					{/* Infinite Scroll Trigger */}
					<div ref={loadMoreRef} className="text-center my-4">
						{isFetchingNextPage ? (
							<p>Loading more items...</p>
						) : (
							<p>Scroll down to load more...</p>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default EnrolledCourses;
