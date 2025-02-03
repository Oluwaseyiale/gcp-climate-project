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
		<div className="bg-[#F6FDFB] border">
			<Navbar />
			<div className=" h-screen items-center flex w-full homeimgbg">
				<div className={` font-figtree   p-4 text-black w-[618px] `}>
					<h1 className="text-2xl text-white font-bold md:text-5xl md:text-black">
						Empowering Africa’s Youth for a Sustainable Future
					</h1>

					<p className=" text-white font-normal md:text-2xl md:text-black leading-7">
						Your journey to Sustainability and Climate Advocacy starts here
					</p>
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
