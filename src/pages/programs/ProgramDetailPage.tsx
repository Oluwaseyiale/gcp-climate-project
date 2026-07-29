/** @format */
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbarcomponent/Navbar";
import Footer from "../../components/footercomponent/Footer";
import { getProgramBySlug, programs } from "../../data/programs";

const ProgramDetailPage = () => {
	const { slug } = useParams<{ slug: string }>();
	const program = slug ? getProgramBySlug(slug) : undefined;

	if (!program) {
		return <Navigate to="/programs" replace />;
	}

	const otherPrograms = programs.filter((p) => p.slug !== program.slug);

	return (
		<div className="animate-page-enter bg-[#F6FDFB]">
			<Navbar />

			<div
				className="relative flex min-h-[320px] items-end"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${program.image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="w-full px-6 py-10 md:px-16">
					<Link
						to="/programs"
						className="font-figtree text-sm text-white/80 hover:text-white"
					>
						&larr; All Programs
					</Link>
					<h1 className="mt-2 max-w-3xl font-figtree text-3xl font-semibold text-white md:text-4xl">
						{program.title}
					</h1>
				</div>
			</div>

			<section className="mx-auto max-w-3xl px-6 py-14 md:px-0">
				<p className="font-figtree text-lg leading-8 text-slate-700">
					{program.description}
				</p>

				<div className="mt-10 flex flex-wrap gap-4">
					<Link
						to="/volunteer"
						className="inline-flex h-11 items-center justify-center rounded-lg bg-[#008056] px-6 font-figtree text-white hover:-translate-y-0.5 hover:bg-[#006a48] active:scale-95"
					>
						Get Involved
					</Link>
					<Link
						to="/courses"
						className="inline-flex h-11 items-center justify-center rounded-lg border border-[#008056] px-6 font-figtree text-[#008056] hover:-translate-y-0.5 hover:bg-[#F2FCF9] active:scale-95"
					>
						Explore Related Courses
					</Link>
				</div>
			</section>

			<section className="mx-6 mb-20 md:mx-10">
				<h2 className="font-figtree text-xl font-medium text-slate-900">
					Other Programs
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
					{otherPrograms.map((other) => (
						<Link
							key={other.slug}
							to={`/programs/${other.slug}`}
							className={`${other.className} group flex min-h-56 w-full items-end overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1`}
						>
							<div className="w-full bg-black/35 p-5 transition-colors group-hover:bg-black/45">
								<h3 className="font-figtree text-lg font-semibold text-white">
									{other.title}
								</h3>
							</div>
						</Link>
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ProgramDetailPage;
