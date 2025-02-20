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

export const enrolledCourses = async ({ pageParam = 1 }) => {
	const response = await axios.get(`/api/v1/courses/enrolled-courses`, {
		params: { page: pageParam, limit: 10 },
	});
	return response.data;
};

export const enroll = (payload) => {
	return axios.post("/api/v1/courses/enroll/", payload);
};

// export const userinfo = (payload) => {
// 	return axios.get("/api/v1/accounts/user-profile", payload);
// };

// export const useActiveServices = () => {
// 	return useQuery({ queryKey: ["services"], queryFn: activeServices });
//   };
