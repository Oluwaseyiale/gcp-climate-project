/** @format */
// import { useGetModules } from "../../../../api/queries";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useGetModules } from "../../../../api/queries";
import { FaCheck } from "react-icons/fa6";

export const Modules = () => {
	const location = useLocation();
	const modules = location.state?.modules;
	console.log("modules:", modules);
	const [openModule, setOpenModule] = useState(null);
	const toggleModule = (moduleId) => {
		setOpenModule(openModule === moduleId ? null : moduleId);
	};
	// const { id } = useParams();
	// console.log("Course ID:", id);
	// const { data } = useGetModules(id);
	// console.log("modules", data);
	return (
		<div className=" flex justify-center h-full pt-10">
			<div className="w-11/12">
				{/* <h1 className="text-2xl font-bold">Course Modules</h1> */}

				{modules.length > 0 ? (
					<ul className=" ">
						{modules.map((module) => (
							<li key={module.id} className="border-b p-4 my-2 ">
								<button onClick={() => toggleModule(module.id)} className="">
									{/* <div className="grid items-start"> */}
									<h3 className="text-2xl font-medium font-figtree text-left ">
										{module.title}
									</h3>
									{/* <p>{module.description}</p> */}
									<p className=" font-figtree text-[#3F4040] text-left text-base">
										{module.objectives}
									</p>
									{/* </div> */}
								</button>
								{openModule === module.id && (
									<div className="mt-8">
										{module.submodules.map((submodule) => (
											<Link
												to={`modulescontent/${submodule.id} `}
												state={{ modules: submodule }}
												key={submodule.id}
												className="flex gap-4 items-center"
											>
												<FaCheck className="text-[#009867]" />
												<h1>{submodule.title}</h1>
											</Link>
										))}
									</div>
								)}
							</li>
						))}
					</ul>
				) : (
					<p>No modules available.</p>
				)}
			</div>
		</div>
	);
};
