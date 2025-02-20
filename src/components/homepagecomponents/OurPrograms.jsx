/** @format */

import "./homepagecomponents.css";
// import image4 from "../../assets/image4.png";

const OurPrograms = () => {
	// const images = [image1, image2, image3];
	return (
		<div className="mt-12 mx-10">
			<h1 className={`font-figtree font-medium text-2xl  mt-4 `}>
				Our Program
				<hr className="border border-black w-full " />
			</h1>
			<div className="flex flex-wrap justify-center gap-4 mt-8 ">
				{/* {images.map((image, index) => (
					<div key={index} className="mt-4 border">
						<img src={image} alt="" className=" w-screen h-64  md:h-[280px] " />
						
					</div>
				))} */}

				<div className="image1 w-screen lg:w-96 h-64 md:h-[280px]  grid place-items-center  relative">
					{/* <div className="mt-4  border"> */}
					<h1 className=" font-semibold font-figtree text-xl lg:text-2xl mb-4 text-gray-200 text-center absolute bottom-24">
						Leaders for Sustainable tomorrow
					</h1>
					<p className=" bottom-10 text-center text-xs md:text-sm text-gray-300 absolute">
						A flagship program dedicated to cultivating visionary climate
						leaders through immersive mentorship, skill development and
						imapctful sustainability projects.
					</p>
					{/* </div> */}
				</div>

				<div className="image2 w-screen lg:w-96 h-64 md:h-[280px] grid place-items-center items-center relative">
					{/* <div className="mt-4"> */}
					<h1 className=" font-semibold font-figtree text-xl lg:text-2xl text-gray-200 text-center mb-4 absolute bottom-24">
						Pathways to Climate Knowledge
					</h1>
					<p className=" bottom-5 text-center text-xs md:text-sm text-gray-300 absolute">
						Cutting-edge online courses that explore the intersection of climate
						change and sustainable development, tailored to inspire learners and
						professionals alike to take action for a greener pasture.
					</p>
					{/* </div> */}
				</div>

				<div className="image3 w-screen lg:w-96 h-64 md:h-[280px] grid place-items-center items-center relative">
					{/* <div className="mt-4"> */}
					<h1 className=" font-semibold font-figtree text-xl lg:text-2xl text-gray-200 text-center mb-4 absolute bottom-24">
						Climate Scholars Academy
					</h1>
					<p className=" bottom-10 text-center text-xs md:text-sm text-gray-300 absolute">
						Igniting young minds with Innovative climate education and equipping
						students and educators to lead the charge against climate through
						dynamic and interactive training
					</p>
					{/* </div> */}
				</div>
				{/* <div className="image3 w-screen lg:w-96 h-64 md:h-[280px] relative ">
					<h1 className=" font-semibold font-figtree text-xl lg:text-2xl text-[#e4e2e2]   bottom-28">
						Climate Scholars Academy
					</h1>
				</div> */}
			</div>
		</div>
	);
};

export default OurPrograms;
