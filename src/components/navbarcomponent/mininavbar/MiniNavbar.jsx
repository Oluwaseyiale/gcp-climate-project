/** @format */

import { useState } from "react";

const MiniNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openFile = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className=" md:hidden py-4">
			<h1 onClick={openFile}>MiniNavbar</h1>
			{isOpen && <div>Content</div>}
		</div>
	);
};

export default MiniNavbar;
