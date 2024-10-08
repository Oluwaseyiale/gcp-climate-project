/** @format */
import aboutusimg from "../../assets/aboutusimg.png";

const AboutUs = () => {
	return (
		<div className=" mx-8 mt-40">
			<h1 className={`font-figtree font-medium text-2xl  mt-4 `}>
				About Us
				<hr className="border border-gray-400 w-full " />
			</h1>
			<div className="mt-6 flex justify-center gap-20 items-center">
				<div className=" rounded-tl-[121px] h-[308px] w-[480px] rounded-br-[4px]  bg-[#E8F5F7] relative">
					<div className=" mt-[66px] left-[58px] rounded-tl-[40px] rounded-tr-[4px] rounded-bl-[4px] h-[308px] w-[480px] rounded-br-[121px] overflow-hidden bg-[#E8F5F7] absolute">
						<img src={aboutusimg} alt="image" />
					</div>
					{/* <img src="/path-to-image" alt="image" /> */}
				</div>

				<div className="w-[590px]">
					<p className="font-figtree font-normal text-xl">
						At the heart of the Good Climate Project is our unwavering
						commitment to addressing the root causes of climate change. We focus
						on raising a new generation of sustainable and climate-conscious
						leaders, dedicated to advocating for a sustainable environment and a
						healthier climate. Through education and empowerment, we inspire and
						equip youth to become champions of environmental sustainability and
						climate action.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
