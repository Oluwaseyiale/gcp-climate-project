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
import PlaceholderPage from "./pages/placeholder/PlaceholderPage";
import ProgramsPage from "./pages/programs/ProgramsPage";
import ProgramDetailPage from "./pages/programs/ProgramDetailPage";

const AppContent = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUsPage />} />
				<Route path="/programs" element={<ProgramsPage />} />
				<Route path="/programs/:slug" element={<ProgramDetailPage />} />
				<Route path="/courses" element={<CoursesPage />} />
				<Route path="/courses/:id" element={<CourseDetails />} />

				<Route
					path="/volunteer"
					element={
						<PlaceholderPage
							title="Volunteer With Us"
							description="Our volunteer program is being finalized. Check back soon, or reach out to admin@goodclimateproject.org to get involved early."
						/>
					}
				/>
				<Route
					path="/blog"
					element={
						<PlaceholderPage
							title="Blog"
							description="We're building out our blog. In the meantime, follow our social channels for updates from the field."
						/>
					}
				/>
				<Route
					path="/donate"
					element={
						<PlaceholderPage
							title="Donate"
							description="Our online donation flow is coming soon. To support Good Climate Project today, please reach out to admin@goodclimateproject.org."
						/>
					}
				/>
				<Route
					path="/our-solution"
					element={
						<PlaceholderPage
							title="Our Solution"
							description="A dedicated page on our approach and solution is on the way."
						/>
					}
				/>
				<Route
					path="/our-story"
					element={
						<PlaceholderPage
							title="Our Story"
							description="The story of how Good Climate Project started is coming soon."
						/>
					}
				/>

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
