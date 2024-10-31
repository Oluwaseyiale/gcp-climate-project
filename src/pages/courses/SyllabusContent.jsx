/** @format */

const SyllabusContent = () => {
	return (
		<div className="p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Week 1 */}
				<div>
					<h3 className="font-semibold text-lg">
						Week 1: Understanding Climate Change
					</h3>
					<ul className="list-disc pl-5 space-y-2 mt-2">
						<li>Introduction to Climate Science</li>
						<li>Human Activities and Climate Change</li>
						<li>Evidence of Climate Change</li>
					</ul>
				</div>

				{/* Week 2 */}
				<div>
					<h3 className="font-semibold text-lg">
						Week 2: Impacts of Climate Change
					</h3>
					<ul className="list-disc pl-5 space-y-2 mt-2">
						<li>Environmental Impacts</li>
						<li>Economic Impacts</li>
						<li>Social Impacts</li>
					</ul>
				</div>

				{/* Week 3 */}
				<div>
					<h3 className="font-semibold text-lg">
						Week 3: Mitigation and Adaptation Strategies
					</h3>
					<ul className="list-disc pl-5 space-y-2 mt-2">
						<li>Mitigation Strategies</li>
						<li>Adaptation Strategies</li>
						<li>Case Studies of Mitigation and Adaptation</li>
					</ul>
				</div>

				{/* Week 4 */}
				<div>
					<h3 className="font-semibold text-lg">Week 4: Climate Action</h3>
					<ul className="list-disc pl-5 space-y-2 mt-2">
						<li>Global Climate Action</li>
						<li>National and Local Climate Action</li>
						<li>Individual Climate Action</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SyllabusContent;
