import axios from "./axios.config";

export type AuthTokens = {
	access: string;
	refresh: string;
};

export type GoogleAuthPayload = {
	code: string;
};

export type GoogleAuthResponse = {
	id: string;
	email: string;
	firstname: string;
	lastname: string;
	created: boolean;
	tokens: AuthTokens;
};

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

export const googleAuth = (payload: GoogleAuthPayload) => {
	return axios.post<GoogleAuthResponse>(
		"/api/v1/accounts/google-auth/",
		payload
	);
};

export const allCourses = async (page = 1, pageSize = 10) => {
	const response = await axios.get("/api/v1/courses", {
		params: { page, pageSize },
	});
	return response.data;
};

export const courseId = (id) => {
	return axios.get(`/api/v1/courses/${id}`);
};

export const enrolledCourses = () => {
	return axios.get(`/api/v1/courses/enrolled-courses/`);
};

export const getCourses = (id) => {
	return axios.get(`/api/v1/courses/${id}`);
};

export const submitQuiz = (quizData) => {
	return axios.post(`/api/v1/courses/quiz-submissions/`, quizData);
};

export const getQuiz = (id) => {
	return axios.get(`/api/v1/courses/quizzes/${id}`);
};

export const getSubModule = (id) => {
	return axios.get(`/api/v1/courses/submodules/${id}`);
};

const getAuthHeader = () => {
	const token = localStorage.getItem("access_token");
	return token ? { Authorization: `Bearer ${token}` } : {};
};

export const enroll = async (payload) => {
	const response = await axios.post("/api/v1/courses/enroll/", payload, {
		headers: {
			...getAuthHeader(),
			"Content-Type": "application/json",
		},
	});
	return response.data;
};

export const userProfile = async () => {
	const response = await axios.get("/api/v1/accounts/user-profile/", {
		headers: getAuthHeader(),
	});
	return response.data;
};
