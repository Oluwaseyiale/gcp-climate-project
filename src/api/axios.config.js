/** @format */

import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseURL;

const axiosInstance = axios.create({
	baseURL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("access_token");
		if (token) {
			config.headers.token = `${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		console.log("err status", error.response?.data);
		if (error.response?.data?.message === "Missing or malformed JWT") {
			sessionStorage.clear();
			window.location.replace(`${window.location.origin}/login`);
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;

export const _send_post_request = (url, data) => {
	return axiosInstance.post(url, data);
};
