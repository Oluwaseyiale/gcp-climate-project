/** @format */

import Footer from "../../components/footercomponent/Footer";
import AboutUs from "../../components/homepagecomponents/AboutUs";
import OurCourses from "../../components/homepagecomponents/OurCourses";
import OurImpacts from "../../components/homepagecomponents/OurImpacts";
import OurPrograms from "../../components/homepagecomponents/OurPrograms";
import Navbar from "../../components/navbarcomponent/Navbar";
import "./homePage.css";

const HomePage = () => {
	return (
		<div className="bg-[#F6FDFB]">
			<Navbar />
			<div
				className="relative h-screen items-center flex w-full homeimgbg"
				// style={{
				// 	backgroundImage:
				// 		"linear-gradient(to right, #FFFFFF, #00000072, #0000003B), url('../../assets/secondBgImage.png')",
				// 	backgroundSize: "cover",
				// 	backgroundPosition: "center",
				// 	height: "100vh",
				// 	width: "100%",
				// }}
			>
				<div
					className={` font-figtree relative z-10  p-4 text-black w-[618px] `}
				>
					<h1 className="font-bold text-5xl">
						Empowering Africa’s Youth for a Sustainable Future
					</h1>

					<p className="font-normal text-2xl leading-7">
						Your journey to Sustainability and Climate Advocacy starts here
					</p>

					{/* <CustomButton
						className="w-[130px] h-[42px] px-[10px] py-[22px] gap-3 items-center flex justify-center rounded-[9px] bg-[#008056] text-white"
						style={{}}
						text="Button"
						icon={""}
					/> */}
				</div>
			</div>
			<OurPrograms />
			<OurCourses />
			<OurImpacts />
			<AboutUs />
			<Footer />
		</div>
	);
};

export default HomePage;
