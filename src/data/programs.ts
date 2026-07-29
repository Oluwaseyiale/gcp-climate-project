/** @format */
import image2 from "../assets/image2.jpg";
import programLeaders from "../assets/program-leaders.jpg";
import programScholars from "../assets/program-scholars.jpg";

export type Program = {
	slug: string;
	className: string;
	image: string;
	title: string;
	description: string;
};

export const programs: Program[] = [
	{
		slug: "leaders-for-sustainable-tomorrow",
		className: "image1",
		image: programLeaders,
		title: "Leaders for Sustainable Tomorrow",
		description:
			"A flagship program dedicated to cultivating visionary climate leaders through immersive mentorship, skill development, and impactful sustainability projects.",
	},
	{
		slug: "pathways-to-climate-knowledge",
		className: "image2",
		image: image2,
		title: "Pathways to Climate Knowledge",
		description:
			"Cutting-edge online courses that explore the intersection of climate change and sustainable development, tailored to inspire learners and professionals alike to take action.",
	},
	{
		slug: "climate-scholars-academy",
		className: "image3",
		image: programScholars,
		title: "Climate Scholars Academy",
		description:
			"Igniting young minds with innovative climate education and equipping students and educators to lead the charge through dynamic, interactive training.",
	},
];

export const getProgramBySlug = (slug: string) =>
	programs.find((program) => program.slug === slug);
