import { Link } from "react-router-dom";
import Footer from "../../components/footercomponent/Footer";
import OurImpacts from "../../components/homepagecomponents/OurImpacts";
import ApproachPillars from "../../components/homepagecomponents/ApproachPillars";
import AudienceSegments from "../../components/homepagecomponents/AudienceSegments";
import PartnerLogos from "../../components/homepagecomponents/PartnerLogos";
import StoriesPreview from "../../components/homepagecomponents/StoriesPreview";
import DonateCTA from "../../components/homepagecomponents/DonateCTA";
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

					<Link
						to="/programs"
						className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#008056] px-7 font-figtree font-medium text-white hover:-translate-y-0.5 hover:bg-[#006a48] active:scale-95"
					>
						Explore our programs
					</Link>
				</div>
			</section>
			<ApproachPillars />
			<AudienceSegments />
			<PartnerLogos />
			<OurImpacts />
			<StoriesPreview />
			<DonateCTA />
			<Footer />
		</div>
	);
};

export default HomePage;
