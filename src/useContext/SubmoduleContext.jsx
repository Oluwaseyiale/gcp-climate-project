/** @format */

// SubmoduleContext.js
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const SubmoduleContext = createContext();

export const SubmoduleProvider = ({ children }) => {
	const [completedSubmodules, setCompletedSubmodules] = useState(() => {
		// Load from localStorage if available
		const saved = localStorage.getItem("completedSubmodules");
		return saved ? JSON.parse(saved) : {};
	});

	const markSubmoduleComplete = (moduleId, submoduleId) => {
		setCompletedSubmodules((prev) => {
			const newState = {
				...prev,
				[moduleId]: [...(prev[moduleId] || []), submoduleId],
			};
			// Save to localStorage
			localStorage.setItem("completedSubmodules", JSON.stringify(newState));
			return newState;
		});
	};

	const value = {
		completedSubmodules,
		markSubmoduleComplete,
	};

	return (
		<SubmoduleContext.Provider value={value}>
			{children}
		</SubmoduleContext.Provider>
	);
};

export const useSubmodules = () => {
	const context = useContext(SubmoduleContext);
	if (!context) {
		throw new Error("useSubmodules must be used within a SubmoduleProvider");
	}
	return context;
};

SubmoduleProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
