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
			<div className="flex justify-center gap-4 mt-8">
				{images.map((image, index) => (
					<div key={index}>
						<img src={image} alt="" height={380} width={320} />
					</div>
				))}
			</div>
		</div>
	);
};

export default OurPrograms;
