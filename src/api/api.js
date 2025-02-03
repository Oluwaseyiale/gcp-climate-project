/** @format */

import axios from "./axios.config";

export const signup = (payload) => {
	return axios.post("/api/v1/accounts/signup/", payload);
};

export const login = (payload) => {
	return axios.post("/api/v1/accounts/token/", payload);
};

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

// export const useActiveServices = () => {
// 	return useQuery({ queryKey: ["services"], queryFn: activeServices });
//   };
