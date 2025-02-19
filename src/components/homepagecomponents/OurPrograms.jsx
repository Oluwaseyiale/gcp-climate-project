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

				<div className="image1 w-screen lg:w-96 h-64 md:h-[280px] relative flex justify-center">
					<p className=" font-semibold font-figtree text-xl text-[#e4e2e2]  absolute bottom-10">
						Leaders for Sustainable tomorrow
					</p>
				</div>

				<div className="image2 w-screen lg:w-96 h-64 md:h-[280px] relative flex justify-center">
					<p className=" font-semibold font-figtree text-xl text-[#e4e2e2]  absolute bottom-10">
						Pathways to Climate Knowledge
					</p>
				</div>
				<div className="image3 w-screen lg:w-96 h-64 md:h-[280px] relative flex justify-center">
					<p className=" font-semibold font-figtree text-xl text-[#e4e2e2]  absolute bottom-10">
						Climate Scholers Academy
					</p>
				</div>
			</div>
		</div>
	);
};

export default OurPrograms;
