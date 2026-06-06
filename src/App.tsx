import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import HomePage from "./pages/homefolder/HomePage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import CoursesPage from "./pages/courses/CoursesPage";
import LandingPage from "./pages/Dashboard/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import TasksPage from "./pages/Dashboard/TasksPage";
import CertificatesPage from "./pages/Dashboard/CertificatesPage";
import PaymentPage from "./pages/Dashboard/PaymentPage";
import ProfilePage from "./pages/Dashboard/ProfilePage";
import Signup from "./pages/authenticationfolder/SignUpPage";
import LoginPage from "./pages/authenticationfolder/LoginPage";
import OtpPage from "./pages/authenticationfolder/otp/OtpVerification";
import CourseDetails from "./pages/courses/CourseDetails";
import Modules from "./pages/Dashboard/Modules";
import ModulesContent from "./pages/Dashboard/ModulesContent";
import { Provider } from "react-redux";
import store from "./store/store";
import SubtasksPage from "./pages/Dashboard/SubtasksPage";

const AppContent = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUsPage />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/courses/:id" element={<CourseDetails />} />

				<Route path="/auth">
					<Route index element={<Navigate to="/auth/login" replace />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="sign-up" element={<Signup />} />
					<Route path="otp" element={<OtpPage />} />
				</Route>
				<Route path="/login" element={<Navigate to="/auth/login" replace />} />
				<Route path="/sign-up" element={<Navigate to="/auth/sign-up" replace />} />
				<Route path="/signup" element={<Navigate to="/auth/sign-up" replace />} />
				<Route path="/otp" element={<Navigate to="/auth/otp" replace />} />

				<Route path="/dashboard" element={<Dashboard />}>
					<Route index element={<LandingPage />}></Route>
					<Route path="modules/:id/*">
						<Route index element={<Modules />}></Route>
						<Route
							path="modulescontent/:subModuleId/*"
							element={<ModulesContent />}
						></Route>
					</Route>
					<Route path="tasks/*" element={<TasksPage />}>
					</Route>
					<Route path="subtasks/:id" element={<SubtasksPage />} />

					<Route path="certificates/*" element={<CertificatesPage />}></Route>
					<Route path="payment/*" element={<PaymentPage />}></Route>
					<Route path="profile/*" element={<ProfilePage />}></Route>
				</Route>
			</Routes>
		</>
	);
};

function App() {
	return (
		<Provider store={store}>
			<Router>
				<AppContent />
			</Router>
		</Provider>
	);
}

export default App;
