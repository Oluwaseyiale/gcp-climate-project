/** @format */

const OverViewContent = () => {
	return (
		<div className="p-6">
			<h1 className="text-xl font-figtree font-medium mb-4">
				What you will learn
			</h1>
			<ol className="list-disc list-inside  grid grid-cols-2   gap-4">
				<li>
					<span className="font-semibold ">The Science of Climate Change:</span>{" "}
					Understand the basic scientific principles behind climate change,
					including the greenhouse effect, global warming, and the role of human
					activities.
				</li>
				<li>
					<span className="font-semibold ">
						Climate Change Mitigation and Adaptation:
					</span>{" "}
					Learn about strategies to reduce greenhouse gas emissions (mitigation)
					and methods to cope with the effects of climate change (adaptation).
				</li>
				<li>
					<span className="font-semibold">Impacts of Climate Change:</span>{" "}
					Explore the environmental, economic, and social impacts of climate
					change, such as extreme weather events, sea-level rise, and
					biodiversity loss.
				</li>
				<li>
					<span className="font-semibold">Climate Action:</span> Study various
					climate action initiatives at global, national, and local levels,
					including community projects, policy measures, and individual actions
					to combat climate change.
				</li>
			</ol>
		</div>
	);
};

export default OverViewContent;
