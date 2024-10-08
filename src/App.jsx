/** @format */

import "./App.css";
import Navbar from "./components/navbarcomponent/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./pages/homefolder/HomePage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import CoursesPage from "./pages/courses/CoursesPage";
import Login from "./pages/authenticationfolder/LoginPage";

// This component will have the routing logic
const AppContent = () => {
  const location = useLocation(); // Get the current route path

  return (
    <>
      {/* Conditionally render the Navbar */}
      {location.pathname !== "/signin" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/signin" element={<Login />} />  {/* Ensure this login route exists */}
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
