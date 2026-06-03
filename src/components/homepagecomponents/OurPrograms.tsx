import "./homepagecomponents.css";

const programs = [
	{
		className: "image1",
		title: "Leaders for Sustainable Tomorrow",
		description:
			"A flagship program dedicated to cultivating visionary climate leaders through immersive mentorship, skill development, and impactful sustainability projects.",
	},
	{
		className: "image2",
		title: "Pathways to Climate Knowledge",
		description:
			"Cutting-edge online courses that explore the intersection of climate change and sustainable development, tailored to inspire learners and professionals alike to take action.",
	},
	{
		className: "image3",
		title: "Climate Scholars Academy",
		description:
			"Igniting young minds with innovative climate education and equipping students and educators to lead the charge through dynamic, interactive training.",
	},
];

const OurPrograms = () => {
	return (
		<section className="mt-12 mx-6 md:mx-10">
			<h1 className="font-figtree font-medium text-2xl mt-4">
				Our Program
				<hr className="border border-black w-full" />
			</h1>
			<div className="flex flex-wrap justify-center gap-5 mt-8">
				{programs.map((program) => (
					<article
						key={program.title}
						className={`${program.className} w-full lg:w-96 min-h-72 rounded-lg overflow-hidden flex items-end`}
					>
						<div className="w-full p-5 text-center bg-black/35">
							<h2 className="font-semibold font-figtree text-xl lg:text-2xl text-white">
								{program.title}
							</h2>
							<p className="mt-3 text-xs md:text-sm leading-6 text-gray-100">
								{program.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default OurPrograms;
