/** @format */
import { Link } from "react-router-dom";
import programScholars from "../../assets/program-scholars.jpg";

const DonateCTA = () => {
	return (
		<section
			className="relative px-6 py-24 text-center text-white"
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.65)), url(${programScholars})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<h2 className="mx-auto max-w-xl font-figtree text-2xl font-semibold md:text-3xl">
				Let's build a sustainable future. Together.
			</h2>
			<p className="mx-auto mt-4 max-w-lg font-figtree text-white/85">
				Your donation helps fund workshops, mentorship, and materials for the
				next generation of climate leaders.
			</p>
			<Link
				to="/donate"
				className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 font-figtree font-semibold text-[#008056] hover:-translate-y-0.5 hover:bg-slate-100"
			>
				Donate
			</Link>
		</section>
	);
};

export default DonateCTA;
