/** @format */
import BeliefsAndObjectives from "../../components/aboutuscomponent/BeliefsAndObjectives";
import MissionAndVision from "../../components/aboutuscomponent/MissionAndVision";
import Team from "../../components/aboutuscomponent/Team";
import Footer from "../../components/footercomponent/Footer";
import OurPrograms from "../../components/homepagecomponents/OurPrograms";
import "./about.css"
const AboutUsPage = () => {
	return (
		<div className="bg-[#F6FDFB]">
			<div className="imgbackground h-[20rem] px-52">
				<div className="imgContainer">
					<h1 className="aboutheader">About Us</h1>
					<p className={`font-figtree aboutText`}>
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
            <MissionAndVision />
            <Team/>
            <BeliefsAndObjectives/>
            <OurPrograms/>
            <Footer/>
		</div>
	);
};

export default AboutUsPage;
