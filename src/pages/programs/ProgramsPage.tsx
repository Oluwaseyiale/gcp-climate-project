/** @format */
import { Link } from "react-router-dom";
import Navbar from "../../components/navbarcomponent/Navbar";
import Footer from "../../components/footercomponent/Footer";
import { programs } from "../../data/programs";
import "../../components/homepagecomponents/homepagecomponents.css";

const ProgramsPage = () => {
	return (
		<div className="animate-page-enter bg-[#F6FDFB]">
			<Navbar />
			<div className="px-6 pt-14 text-center md:px-10">
				<h1 className="font-figtree text-3xl font-semibold text-slate-900 md:text-4xl">
					Our Programs
				</h1>
				<p className="mx-auto mt-4 max-w-2xl font-figtree text-base text-slate-600">
					Good Climate Project runs three core programs that meet young
					people, learners, and schools where they are — from immersive
					leadership training to classroom-ready climate education.
				</p>
			</div>

			<section className="mx-6 mb-20 mt-12 md:mx-10">
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{programs.map((program) => (
						<Link
							key={program.slug}
							to={`/programs/${program.slug}`}
							className={`${program.className} group flex min-h-72 w-full items-end overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1`}
						>
							<div className="w-full bg-black/35 p-5 text-center transition-colors group-hover:bg-black/45">
								<h2 className="font-figtree text-xl font-semibold text-white lg:text-2xl">
									{program.title}
								</h2>
								<p className="mt-3 text-xs leading-6 text-gray-100 md:text-sm">
									{program.description}
								</p>
								<span className="mt-4 inline-block font-figtree text-sm font-medium text-white underline underline-offset-4">
									Learn more
								</span>
							</div>
						</Link>
					))}
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default ProgramsPage;
