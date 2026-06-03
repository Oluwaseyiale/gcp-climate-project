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
			<section className="min-h-[calc(100vh-88px)] items-center flex w-full homeimgbg px-6 md:px-12 lg:px-20">
				<div className="font-figtree text-black max-w-[640px]">
					<h1 className="text-3xl font-bold leading-tight text-white md:text-5xl md:text-black">
						Empowering Africa’s Youth for a Sustainable Future
					</h1>

					<p className="mt-4 text-base font-normal leading-7 text-white md:text-2xl md:text-black">
						Your journey to Sustainability and Climate Advocacy starts here
					</p>
				</div>
			</section>
			<OurPrograms />
			<OurCourses />
			<OurImpacts />
			<AboutUs />
			<Footer />
		</div>
	);
};

export default HomePage;
