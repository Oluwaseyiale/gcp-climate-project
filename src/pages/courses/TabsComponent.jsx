/** @format */

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OverViewContent from "./OverViewContent";
import SyllabusContent from "./SyllabusContent";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="flex justify-center mt-20">
			<Box sx={{ width: "70%", justifySelf: "center", alignSelf: "center" }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: "divider",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						TabIndicatorProps={{
							style: {
								backgroundColor: "#008056",
								height: "4px",
							},
						}}
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Tab
							label="Overview"
							{...a11yProps(0)}
							sx={{
								color: "#B7B7B7",
								fontWeight: "bold",
								fontFamily: "figtree",
								fontSize: "1.5rem",
								"&.Mui-selected": {
									color: "#008056",
								},
							}}
						/>
						<Tab
							label="Syllabus"
							{...a11yProps(1)}
							sx={{
								color: "#B7B7B7",
								fontWeight: "bold",
								fontFamily: "figtree",
								fontSize: "1.5rem",
								"&.Mui-selected": {
									color: "#008056",
								},
							}}
						/>
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<OverViewContent />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<SyllabusContent />
				</CustomTabPanel>
			</Box>
		</div>
	);
}
