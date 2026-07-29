/** @format */
import funaab from "../../assets/partners/funaab.png";
import fabe from "../../assets/partners/fabe.png";
import budgit from "../../assets/partners/budgit.png";
import jobred from "../../assets/partners/jobred.png";
import nest from "../../assets/partners/nest.png";
import civichive from "../../assets/partners/civichive.png";

const partners = [
	{ name: "Federal University of Agriculture, Abeokuta", logo: funaab },
	{ name: "F.A.B.E International Foundation", logo: fabe },
	{ name: "BudgIT", logo: budgit },
	{ name: "Jobred", logo: jobred },
	{ name: "The Nest Innovation Park", logo: nest },
	{ name: "Civichive", logo: civichive },
];

const PartnerLogos = () => {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
			<h2 className="text-center font-figtree text-2xl font-semibold md:text-3xl">
				Our allies towards a better future
			</h2>
			<p className="mx-auto mt-3 max-w-xl text-center font-figtree text-slate-600">
				Working alongside schools, universities, and organizations to reach
				more young climate leaders.
			</p>
			<div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
				{partners.map((partner) => (
					<div key={partner.name} className="flex h-16 items-center justify-center">
						<img
							src={partner.logo}
							alt={partner.name}
							className="max-h-full max-w-full object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default PartnerLogos;
