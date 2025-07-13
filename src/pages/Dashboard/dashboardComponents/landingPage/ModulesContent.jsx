/** @format */
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
// import { useSubmodules } from "../../../../useContext/SubmoduleContext";

const ModulesContent = () => {
	const location = useLocation();
	const {
		submodule,
		moduleIndex,
		submoduleIndex,
		totalSubmodules,
		// markComplete,
		moduleId,
		submoduleId,
	} = location.state;

	console.log("location", location.state.submodule.submodule_index);

	const navigate = useNavigate();
	const { markSubmoduleComplete } = useSubmodules();
	const [isCompleted, setIsCompleted] = useState(false);

	// Mark as completed when component mounts if not already
	// useEffect(() => {
	// 	if (markComplete && !isCompleted) {
	// 		markComplete();
	// 		setIsCompleted(true);
	// 	}
	// }, [markComplete, isCompleted]);

	const handleNext = () => {
		// In a real app, you would navigate to the next submodule
		// For now, we'll just go back to the modules list
		navigate(location.state.submodule.submodule_index + 1);
	};

	const handleMarkComplete = () => {
		if (moduleId && submoduleId) {
			markSubmoduleComplete(moduleId, submoduleId);
			setIsCompleted(true);
		}
	};

	const handlePrevious = () => {
		// In a real app, you would navigate to the previous submodule
		// For now, we'll just go back to the modules list
		navigate(-1);
	};

	return (
		<div className="flex justify-center p-4">
			<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-figtree font-semibold">
						Module {moduleIndex}.{submoduleIndex}: {submodule.title}
					</h2>
					<span className="text-sm text-gray-500">
						Submodule {submoduleIndex} of {totalSubmodules}
					</span>
				</div>

				{/* Media Content */}
				<div className="mb-8">
					{submodule.video_link ? (
						<div className="relative pt-[56.25%]">
							{" "}
							{/* 16:9 aspect ratio */}
							<ReactPlayer
								url={submodule.video_link}
								controls
								width="100%"
								height="100%"
								className="absolute top-0 left-0"
							/>
						</div>
					) : submodule.image ? (
						<img
							src={submodule.image}
							alt={submodule.title}
							className="w-full rounded-lg"
						/>
					) : (
						<div className="bg-gray-100 p-8 text-center rounded-lg">
							<p className="text-gray-500">No media content available</p>
						</div>
					)}
				</div>

				{/* Text Content */}
				<div className="prose max-w-none mb-8">
					{submodule.body ? (
						<div dangerouslySetInnerHTML={{ __html: submodule.body }} />
					) : (
						<p className="text-gray-500">
							No content available for this submodule.
						</p>
					)}
				</div>

				{/* Navigation Controls */}
				<div className="flex justify-between mt-8 border-t pt-4">
					<button
						onClick={handlePrevious}
						className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
					>
						Previous
					</button>

					<div className="flex items-center space-x-4">
						{!isCompleted && (
							<button
								onClick={handleMarkComplete}
								className="px-6 py-2 bg-[#009867] text-white rounded hover:bg-[#00805a] transition"
							>
								Mark Complete
							</button>
						)}
						{isCompleted && (
							<span className="flex items-center text-[#009867]">
								Completed
							</span>
						)}
					</div>

					<button
						onClick={handleNext}
						className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModulesContent;
