/** @format */

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const OurPrograms = () => {
	const images = [image1, image2, image3, image4];
	return (
		<div className="mt-12 mx-10">
			<h1 className={`font-figtree font-medium text-2xl  mt-4 `}>
				Our Program
				<hr className="border border-black w-full " />
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center  mt-8">
				{images.map((image, index) => (
					<div key={index} className="mt-4 border">
						<img src={image} alt="" className=" w-screen h-64  md:h-[380px] " />
						{/* height={380} width={320} */}
					</div>
				))}
			</div>
		</div>
	);
};

export default OurPrograms;
