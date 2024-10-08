/** @format */
import instagram from "../../assets/instagramicon.png"
import linkedin from "../../assets/linkedinicon.png"
import youtube from "../../assets/youtubeicon.png"
import twitter from "../../assets/twittericon.png"
import facebook from  "../../assets/facebookicon.png"
import phone from "../../assets/phoneicon.png"
import message from "../../assets/messageicon.png"
import location from "../../assets/locationicon.png"
import logo from "../../assets/GCPlogo.png"
import "./footer.css"


const Footer = () => {
	return (
		<div className="border mt-40 bg-[#2A6F59] pt-8">
			<div className="flex mainContainerB">
				<div className="">
					<div className="imgcontainer">
						<img src={logo} width={165.62} height={87.89} alt="Logo" />
						<div className="imgtextcontainer">
							<h4 className={`font-figtree imgtext`}>
								Good Climate Project
							</h4>
						</div>
					</div>
					<div className="imgcontainerB">
						<h1 className={` font-figtree imgcontainerBtextA`}>
							Sign in to our newsletter today and be in the know
						</h1>
						<input
							type="text"
							className="emailInput"
							placeholder="Enter your email"
						/>
						<h1 className={`font-figtreeimgcontainerBtextB text-white`}>
							By subscriibing to our newsletter, you agree to our terms and
							provides rovide consent to receive updates from our company.
						</h1>
					</div>
				</div>
				<div className="navcontent">
					<nav>
						<ul className="liststyleContainer">
							<li className="text-white listStyleA">About us</li>
							<li className="text-white listStyleB">Team</li>
							<li className="text-white listStyleB">Our solution</li>
							<li className="text-white listStyleB">Our story</li>
							<li className="text-white listStyleB">Blog</li>
						</ul>
					</nav>

					<nav>
						<ul className="liststyleContainer ">
							<li className="text-white listStyleA">Lorem Ipsum</li>
							<li className="text-white listStyleB">Lorem Ipsum</li>
							<li className="text-white listStyleB">Lorem Ipsum</li>
							<li className="text-white listStyleB">Lorem Ipsum</li>
							<li className="text-white listStyleB">Lorem Ipsum</li>
						</ul>
					</nav>
				</div>
				{/* <nav> */}
				<div className="liststyleContainerD">
					<div>
						<p className="text-white listStyleA">Contact us</p>
					</div>

					<div className="contactus">
						<img
							alt="phone Icon"
							src={phone}
							width={20} // Desired width
							height={20} // Desired height
							// quality={75}
						/>
						<h4 className="text-white listStyleB">+234 701 2342567</h4>
					</div>

					<div className="contactus">
						<img
							alt="phone Icon"
							src={message}
							width={20} // Desired width
							height={20} // Desired height
							// quality={75}
						/>
						<h4 className="text-white listStyleB">
							goodclimateproject@gmail.com
						</h4>
					</div>

					<div className="contactus">
						<img
							alt="phone Icon"
							src={location}
							width={20} // Desired width
							height={20} // Desired height
							// quality={75}
						/>

						<h4 className="text-white listStyleB">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium nesciunt quos autem!
						</h4>
					</div>
				</div>
				{/* </nav> */}
			</div>
			<div className="footer-socialMedia">
				{/* <hr className="border w-full hr" /> */}
				<div className="footer-socialMediaContainer">
					<img
						alt="phone Icon"
						src={instagram}
						width={40} // Desired width
						height={40} // Desired height
						// quality={75}
					/>
					<img
						alt="phone Icon"
						src={linkedin}
						width={40} // Desired width
						height={40} // Desired height
						// quality={75}
					/>
					<img
						alt="phone Icon"
						src={youtube}
						width={40} // Desired width
						height={40} // Desired height
						// quality={75}
					/>
					<img
						alt="phone Icon"
						src={twitter}
						width={40} // Desired width
						height={40} // Desired height
						// quality={75}
					/>
					<img
						alt="phone Icon"
						src={facebook}
						width={40} // Desired width
						height={40} // Desired height
						// quality={75}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
