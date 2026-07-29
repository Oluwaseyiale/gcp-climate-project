/** @format */
import { Link } from "react-router-dom";
import programLeaders from "../../assets/program-leaders.jpg";
import programScholars from "../../assets/program-scholars.jpg";

const previewPosts = [
	{ image: programLeaders },
	{ image: programScholars },
];

const StoriesPreview = () => {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
			<div className="flex items-end justify-between">
				<h2 className="font-figtree text-2xl font-semibold md:text-3xl">
					Stories from the field
				</h2>
				<Link
					to="/blog"
					className="font-figtree text-sm font-medium text-[#008056] hover:-translate-y-0.5"
				>
					More stories &rarr;
				</Link>
			</div>
			<div className="mt-8 grid gap-6 md:grid-cols-2">
				{previewPosts.map((post, index) => (
					<Link
						to="/blog"
						key={index}
						className="animate-card-enter overflow-hidden rounded-xl border border-slate-200 transition-transform hover:-translate-y-1"
					>
						<div
							className="h-48 bg-cover bg-center"
							style={{ backgroundImage: `url(${post.image})` }}
						/>
						<div className="p-5">
							<span className="font-figtree text-xs text-slate-400">
								Coming soon
							</span>
							<h3 className="mt-1 font-figtree font-semibold">
								Post title goes here
							</h3>
							<p className="mt-2 font-figtree text-sm text-slate-600">
								One or two lines summarizing the story.
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default StoriesPreview;
