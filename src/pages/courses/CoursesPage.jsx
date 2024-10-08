/** @format */

import { useState } from "react";
import { courses } from "./courses"; // Import the courses array
import courseimg from "../../assets/coursesbg.png"
import Footer from "../../components/footercomponent/Footer";

const CoursesPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	// Handle input change to update the search query state
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	// Filter items based on search query, comparing the course header or text
	const filteredItems = courses.filter(
		(item) =>
			item.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.text.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className=" bg-[#FFFFF]">
			<img src={courseimg} alt="" />
			<div className=" w-[626px] flex items-center px-4 py-2 mb-8 rounded-lg mx-auto  mt-6 bg-[#FBFEFD] shadow-[#00986740] shadow-sm">
				<input
					type="text"
					placeholder="Search Course"
					value={searchQuery}
					onChange={handleInputChange}
					className=" placeholder:font-figtree focus:outline-none placeholder:text-[#575858] bg-[#FBFEFD]"
				/>
			</div>

			{/* Input field for search */}

			{/* Display the filtered list */}
			<div className="flex-wrap flex justify-center gap-6">
				{filteredItems.length > 0 ? (
					filteredItems.map((item, index) => (
						<div
							key={index}
							className="py-4 px-5  bg-[#FFFFFF]  h-[367px] w-[300px] rounded-[10px] flex flex-col shadow-custom relative mb-8"
						>
							<img src={item.img} alt="" />
							<h1 className="font-figtree text-2xl font-medium mt-4">
								{item.header}
							</h1>
							<p className="font-normal text-base font-figtree leading-6">
								{item.text}
							</p>
							<div className="button-container mx-4 absolute bottom-4">
								<button className="border  button  bg-[#008056] h-9 w-36 rounded-lg ">
									<p
										className={`text-base font-normal text-white font-figtree`}
									>
										See more
									</p>
								</button>
							</div>
						</div>
					))
				) : (
					<li>No items found</li>
				)}
			</div>

            <Footer/>
		</div>
	);
};

export default CoursesPage;
