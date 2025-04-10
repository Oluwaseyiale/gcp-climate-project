/** @format */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { useSubmodules } from "../../../../useContext/SubmoduleContext";

export const Modules = () => {
	const location = useLocation();
	const modules = location.state?.modules;
	const [openModule, setOpenModule] = useState(null);
	const { completedSubmodules } = useSubmodules();

	const toggleModule = (moduleId) => {
		setOpenModule(openModule === moduleId ? null : moduleId);
	};

	//  const markSubmoduleComplete = (moduleId, submoduleId) => {
	//  	setCompletedSubmodules((prev) => ({
	//  		...prev,
	//  		[moduleId]: [...(prev[moduleId] || []), submoduleId],
	//  	}));
	//  };

	return (
		<div className="flex justify-center h-full pt-10">
			<div className="w-11/12">
				{modules?.length > 0 ? (
					<ul className="">
						{modules.map((module) => (
							<li key={module.id} className="border-b p-4 my-2">
								<button
									onClick={() => toggleModule(module.id)}
									className="w-full text-left"
								>
									<div className="flex justify-between items-center">
										<div>
											<h3 className="text-2xl font-medium font-figtree">
												Module {module.module_index}: {module.title}
											</h3>
											<p className="font-figtree text-[#3F4040] text-base">
												{module.objectives}
											</p>
										</div>
										<span className="text-sm text-gray-500">
											{completedSubmodules[module.id]?.length || 0}/
											{module.submodules.length} completed
										</span>
									</div>
								</button>

								{openModule === module.id && (
									<div className="mt-8 space-y-4">
										{module.submodules.map((submodule, subIndex) => (
											<Link
												to={`modulescontent/${submodule.id}`}
												state={{
													submodule,
													moduleIndex: module.module_index,
													submoduleIndex:
														submodule.submodule_index || subIndex + 1,
													totalSubmodules: module.submodules.length,
													moduleId: module.id,
													submoduleId: submodule.id,
												}}
												key={submodule.id}
												className="flex gap-4 items-center p-2 hover:bg-gray-50 rounded"
											>
												<div
													className={`flex items-center justify-center w-6 h-6 rounded-full 
                          ${
														completedSubmodules[module.id]?.includes(
															submodule.id
														)
															? "bg-[#009867] text-white"
															: "border border-gray-300"
													}`}
												>
													{completedSubmodules[module.id]?.includes(
														submodule.id
													) ? (
														<FaCheck className="text-xs" />
													) : (
														<span className="text-xs">
															{submodule.submodule_index || subIndex + 1}
														</span>
													)}
												</div>
												<div>
													<h1 className="font-medium">
														{module.module_index}.
														{submodule.submodule_index || subIndex + 1}{" "}
														{submodule.title}
													</h1>
													<p className="text-sm text-gray-500">
														{submodule.description ||
															"No description available"}
													</p>
												</div>
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
