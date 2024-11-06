/** @format */

import "./App.css";
// import Navbar from "./components/navbarcomponent/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	// useLocation,
} from "react-router-dom";
import HomePage from "./pages/homefolder/HomePage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import CoursesPage from "./pages/courses/CoursesPage";
import Login from "./pages/authenticationfolder/LoginPage";
import LandingPage from "./pages/Dashboard/dashboardComponents/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import SecondPage from "./pages/Dashboard/dashboardComponents/Tasks";
import Certificates from "./pages/Dashboard/dashboardComponents/Certificates";
import Payment from "./pages/Dashboard/dashboardComponents/Payment";
import Profile from "./pages/Dashboard/dashboardComponents/Profile";

// This component will have the routing logic
const AppContent = () => {
	return (
		<>
			{/* Conditionally render the Navbar */}
			{/* {location.pathname !== "/signin" &&
				location.pathname !== "/dashboard" && <Navbar />} */}

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUsPage />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/signin" element={<Login />} />{" "}
				{/* Ensure this login route exists */}
				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<LandingPage />}></Route>
					<Route path="tasks/*" element={<SecondPage />}></Route>
					<Route path="certificates/*" element={<Certificates />}></Route>
					<Route path="payment/*" element={<Payment />}></Route>
					<Route path="profile/*" element={<Profile />}></Route>
				</Route>
			</Routes>
		</>
	);
};

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

export default App;
