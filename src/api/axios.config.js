/** @format */

import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseURL;

const axiosInstance = axios.create({
	baseURL,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("access_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

let isRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (newToken) => {
	refreshSubscribers.forEach((callback) => callback(newToken));
	refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
	refreshSubscribers.push(callback);
};

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// Handle expired access token (401 error)
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve) => {
					addRefreshSubscriber((newToken) => {
						originalRequest.headers.Authorization = `Bearer ${newToken}`;
						resolve(axios(originalRequest));
					});
				});
			}

			isRefreshing = true;

			try {
				const refreshToken = localStorage.getItem("refresh_token");

				if (!refreshToken) {
					console.error("No refresh token found, redirecting to login...");
					sessionStorage.clear();
					// window.location.replace(`${window.location.origin}/login`);
					return Promise.reject(error);
				}

				const { data } = await axios.post("/api/v1/accounts/token/refresh/", {
					refresh: refreshToken,
				});

				const newAccessToken = data.access;
				localStorage.setItem("access_token", newAccessToken);
				isRefreshing = false;
				onTokenRefreshed(newAccessToken);

				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
				return axios(originalRequest);
			} catch (refreshError) {
				console.error("Token refresh failed:", refreshError);
				sessionStorage.clear();
				// window.location.replace(`${window.location.origin}/login`);
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;

export const _send_post_request = (url, data) => {
	return axiosInstance.post(url, data);
};
