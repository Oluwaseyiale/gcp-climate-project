import { Link } from "react-router-dom";
import { programs } from "../../data/programs";
import "./homepagecomponents.css";

const OurPrograms = () => {
	return (
		<section className="mt-12 mx-6 md:mx-10">
			<h1 className="font-figtree font-medium text-2xl mt-4">
				Our Program
				<hr className="border border-black w-full" />
			</h1>
			<div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
				{programs.map((program) => (
					<Link
						key={program.slug}
						to={`/programs/${program.slug}`}
						className={`${program.className} group w-full min-h-72 rounded-lg overflow-hidden flex items-end transition-transform duration-300 hover:-translate-y-1`}
					>
						<div className="w-full p-5 text-center bg-black/35 transition-colors group-hover:bg-black/45">
							<h2 className="font-semibold font-figtree text-xl lg:text-2xl text-white">
								{program.title}
							</h2>
							<p className="mt-3 text-xs md:text-sm leading-6 text-gray-100">
								{program.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default OurPrograms;
