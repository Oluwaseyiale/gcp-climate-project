/** @format */

const pillars = [
	{
		number: "01",
		title: "Climate education",
		description:
			"Practical, classroom-ready curriculum for schools across Lagos and Ogun State.",
	},
	{
		number: "02",
		title: "Youth leadership",
		description:
			"Immersive mentorship that turns students into climate advocates and organizers.",
	},
	{
		number: "03",
		title: "Community engagement",
		description:
			"Campaigns and cleanups that put learning into action, on the ground.",
	},
	{
		number: "04",
		title: "Measurable impact",
		description:
			"Thousands of youth reached and growing, tracked across every program we run.",
	},
];

const ApproachPillars = () => {
	return (
		<section className="mx-auto mt-16 max-w-6xl px-6 py-14 md:mt-24 md:px-10">
			<h2 className="font-figtree text-2xl font-semibold md:text-3xl">
				Lead climate action, the GCP way
			</h2>
			<p className="mt-3 max-w-2xl font-figtree text-slate-600">
				We equip young people and schools with the knowledge, mentorship, and
				community to become climate leaders, not just learners.
			</p>
			<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{pillars.map((pillar) => (
					<div key={pillar.number} className="animate-card-enter">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1F5EE] font-figtree font-semibold text-[#008056]">
							{pillar.number}
						</div>
						<h3 className="mt-4 font-figtree font-semibold">{pillar.title}</h3>
						<p className="mt-2 font-figtree text-sm leading-6 text-slate-600">
							{pillar.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ApproachPillars;
