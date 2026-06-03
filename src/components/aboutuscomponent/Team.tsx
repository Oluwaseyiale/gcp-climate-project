/** @format */

import teamA from "../../assets/teamA.png";
import teamB from "../../assets/teamB.png";
import teamC from "../../assets/teamC.png";

const Team = () => {
	const team = [
		{
			img: teamA,
			name: "Oluwaseyi Ale",
			role: "Founder",
		},
		{
			img: teamB,
			name: "Joshua Daniel",
			role: "Developer",
		},
		{
			img: teamC,
			name: "Priscilla omole",
			role: "Product Designer",
		},
	];
	return (
		<div className="mt-20 lg:mt-40 px-8">
			<h1
				className={`font-figtree font-medium text-2xl text-center lg:text-start mt-4 `}
			>
				Meet The Team
				<hr className="border border-gray-400 w-full " />
			</h1>
			<div className="grid lg:grid-cols-3 gap-10 justify-center lg:gap-3 mt-8">
				{team.map((teammembers, index) => (
					<div key={index}>
						<img src={teammembers.img} alt="" width={433} height={307} />
						<h1 className="font-medium text-2xl font-figtree mt-2">
							{teammembers.name}
						</h1>
						<p className="font-figtree text-base font-normal">
							{teammembers.role}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
