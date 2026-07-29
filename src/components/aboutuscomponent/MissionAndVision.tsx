/** @format */
import missionimg from "../../assets/mission-img.jpg";

const MissionAndVision = () => {
	return (
		<div className=" px-8">
			<h1 className={`font-figtree font-medium text-2xl  mt-20 `}>
				Mission & Vision
				<hr className="border border-black w-full" />
			</h1>

			<div className=" grid lg:grid-cols-2 place-items-center gap-20 items-center mt-8">
				<div className="hidden md:block rounded-tl-[121px] h-[308px] md:w-[500px] rounded-br-[4px]  bg-[#E8F5F7] relative">
					<div className="w-[25rem] h-80 mt-[66px] left-[48px] rounded-tl-[40px] rounded-tr-[4px] rounded-bl-[4px] md:h-[308px] md:w-[500px] rounded-br-[121px] overflow-hidden  absolute">
						<img src={missionimg} alt="image" />
					</div>
					{/* <img src="/path-to-image" alt="image" /> */}
				</div>

				<div className="block md:hidden w-80">
					<img src={missionimg} alt="image" />
				</div>

				<div className=" md:w-[590px]">
					<p className="font-figtree font-normal md:text-xl">
						<span className=" font-figtree font-medium text-xl md:text-2xl">
							Our Mission
						</span>
						: To make climate change education accessible to African youths,
						empowering them with the knowledge and tools to become leaders and
						advocates for a sustainable environment. We aim to tackle the root
						causes of climate change through education, empowerment, and
						community engagement.
					</p>

					<p className="font-figtree font-normal md:text-xl mt-8">
						<span className=" font-figtree font-medium text-xl md:text-2xl">
							Our Vision
						</span>
						: To foster a new generation of African leaders who are empowered to
						advocate for and implement sustainable solutions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MissionAndVision;
