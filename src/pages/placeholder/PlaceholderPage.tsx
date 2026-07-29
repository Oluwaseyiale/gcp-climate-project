/** @format */
import { Link } from "react-router-dom";
import Navbar from "../../components/navbarcomponent/Navbar";
import Footer from "../../components/footercomponent/Footer";

type PlaceholderPageProps = {
	title: string;
	description: string;
};

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
	return (
		<div className="animate-page-enter flex min-h-screen flex-col bg-[#F6FDFB]">
			<Navbar />
			<main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
				<h1 className="font-figtree text-3xl font-semibold text-slate-900">
					{title}
				</h1>
				<p className="mt-4 font-figtree text-base text-slate-600">
					{description}
				</p>
				<Link
					to="/"
					className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-[#008056] px-6 font-figtree text-white hover:-translate-y-0.5 hover:bg-[#006a48] active:scale-95"
				>
					Back to Home
				</Link>
			</main>
			<Footer />
		</div>
	);
};

export default PlaceholderPage;
