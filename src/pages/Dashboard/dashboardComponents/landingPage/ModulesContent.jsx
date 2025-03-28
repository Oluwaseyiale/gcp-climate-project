/** @format */

import { useLocation } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";

const ModulesContent = () => {
	const location = useLocation();
	const submodules = location.state;
	const submodulesB = [submodules.modules];

	return (
		<div className="flex justify-center flex-wrap gap-6  p-4">
			{submodulesB.map((module) => (
				<div key={module.id} className=" bg-white p-4 w-full  max-w-[70%]">
					<h2 className="text-center mb-5 font-figtree font-medium text-2xl ">
						{module.title}
					</h2>

					{/* Media Rendering */}
					<div className=" mt-4">
						{module.image ? (
							<img
								src={module.image}
								alt="Module"
								className="w-full rounded-md"
							/>
						) : module.video_link ? (
							<VideoPlayer videoUrl={module.video_link} />
						) : (
							<p className="text-gray-500">No media available</p>
						)}
					</div>
					<p className="text-[#000000] font-figtree font-normal mt-6 text-base">
						{module.body}
					</p>

					<small className="text-gray-400 block mt-4">
						Updated at: {new Date(module.updated_at).toLocaleString()}
					</small>
				</div>
			))}
		</div>
	);
};

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ videoUrl }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div className="relative w-full h-96 bg-black rounded-md overflow-hidden">
			{isPlaying ? (
				<ReactPlayer
					url={videoUrl}
					playing={true}
					controls
					width="100%"
					height="100%"
				/>
			) : (
				<div
					className="absolute inset-0 flex items-center justify-center cursor-pointer"
					onClick={() => setIsPlaying(true)}
				>
					<button className="play-button bg-white text-black text-3xl p-4 rounded-full shadow-lg">
						▶
					</button>
				</div>
			)}
		</div>
	);
};

export default ModulesContent;
