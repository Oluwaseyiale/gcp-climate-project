/** @format */
import { Link } from "react-router-dom";
import programLeaders from "../../assets/program-leaders.jpg";
import programScholars from "../../assets/program-scholars.jpg";
import image2 from "../../assets/image2.jpg";

const segments = [
	{
		image: programScholars,
		title: "Schools & educators",
		description:
			"Bring climate literacy into your classroom with the Climate Scholars Academy — ready-made sessions for students and teachers alike.",
		actionLabel: "Learn more",
		to: "/programs/climate-scholars-academy",
	},
	{
		image: programLeaders,
		title: "Youth & students",
		description:
			"Join Leaders for Sustainable Tomorrow or take a self-paced course through Pathways to Climate Knowledge.",
		actionLabel: "Explore programs",
		to: "/programs",
	},
	{
		image: image2,
		title: "Partners & funders",
		description:
			"Support climate education at scale. Partner with GCP to reach more schools and young leaders across Nigeria.",
		actionLabel: "Partner with us",
		to: "mailto:admin@goodclimateproject.org",
	},
];

const AudienceSegments = () => {
	return (
		<section className="bg-white py-16">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2 className="font-figtree text-2xl font-semibold md:text-3xl">
					Find your path with GCP
				</h2>

				<div className="mt-10 grid gap-8 md:grid-cols-3">
					{segments.map((segment) => (
						<div key={segment.title} className="animate-card-enter">
							<div
								className="h-44 rounded-xl bg-cover bg-center"
								style={{ backgroundImage: `url(${segment.image})` }}
							/>
							<h3 className="mt-4 font-figtree text-lg font-semibold">
								{segment.title}
							</h3>
							<p className="mt-2 font-figtree text-sm leading-6 text-slate-600">
								{segment.description}
							</p>
							{segment.to.startsWith("mailto:") ? (
								<a
									href={segment.to}
									className="mt-3 inline-block font-figtree text-sm font-medium text-[#008056] hover:-translate-y-0.5"
								>
									{segment.actionLabel} &rarr;
								</a>
							) : (
								<Link
									to={segment.to}
									className="mt-3 inline-block font-figtree text-sm font-medium text-[#008056] hover:-translate-y-0.5"
								>
									{segment.actionLabel} &rarr;
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AudienceSegments;
