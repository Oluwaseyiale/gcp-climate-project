/** @format */

import axios from "./axios.config";

export const signup = (payload) => {
	return axios.post("/api/v1/accounts/signup/", payload);
};

export const login = (payload) => {
	return axios.post("/api/v1/accounts/token/", payload);
};

console.log("login", login);

export const verifyOtp = (payload) => {
	return axios.post("/api/v1/accounts/verify-email/", payload);
};

export const resendOtp = (payload) => {
	return axios.post("/api/v1/accounts/resend-otp/", payload);
};

// export const allCourses = (payload) => {
// 	return axios.get("/api/v1/courses/?page=1", payload);
// };

export const allCourses = async (page = 1, pageSize = 10) => {
	const response = await axios.get("/api/v1/courses", {
		params: { page, pageSize },
	});
	return response.data; // Assuming the API response includes pagination info
};

export const courseId = (id) => {
	return axios.get(`/api/v1/courses/course-description/${id}`);
};

export const enrolledCourses = () => {
	return axios.get(`/api/v1/courses/enrolled-courses/`);
};

export const getCourses = (id) => {
	return axios.get(`/api/v1/courses/${id}`);
};

// ✅ Helper function to get the auth token safely
const getAuthHeader = () => {
	const token = localStorage.getItem("access_token");
	return token ? { Authorization: `Bearer ${token}` } : {};
};

// ✅ Function to enroll in a course
export const enroll = async (payload) => {
	try {
		const response = await axios.post("/api/v1/courses/enroll", payload, {
			headers: getAuthHeader(),
		});
		return response.data;
	} catch (error) {
		console.error("Enrollment failed:", error.response?.data || error.message);
		throw error;
	}
};

// ✅ Function to get the user profile
export const userProfile = async () => {
	try {
		const response = await axios.get("/api/v1/accounts/user-profile/", {
			headers: getAuthHeader(),
		});
		return response.data;
	} catch (error) {
		console.error(
			"Failed to fetch user profile:",
			error.response?.data || error.message
		);
		throw error;
	}
};

// export const useActiveServices = () => {
// 	return useQuery({ queryKey: ["services"], queryFn: activeServices });
//   };
