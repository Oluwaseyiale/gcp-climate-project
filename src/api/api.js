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
