import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.DEV ? undefined : import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
	baseURL,
});

type RefreshSubscriber = (newToken: string) => void;
type RetriableRequestConfig = AxiosRequestConfig & { _retry?: boolean };

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
let refreshSubscribers: RefreshSubscriber[] = [];

const onTokenRefreshed = (newToken: string) => {
	refreshSubscribers.forEach((callback) => callback(newToken));
	refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: RefreshSubscriber) => {
	refreshSubscribers.push(callback);
};

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as RetriableRequestConfig | undefined;

		// Handle expired access token (401 error)
		if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
			originalRequest._retry = true;

			if (isRefreshing) {
				return new Promise((resolve) => {
					addRefreshSubscriber((newToken) => {
						originalRequest.headers = {
							...originalRequest.headers,
							Authorization: `Bearer ${newToken}`,
						};
						resolve(axiosInstance(originalRequest));
					});
				});
			}

			isRefreshing = true;

			try {
				const refreshToken = localStorage.getItem("refresh_token");

				if (!refreshToken) {
					sessionStorage.clear();
					return Promise.reject(error);
				}

				const { data } = await axiosInstance.post<{ access: string }>(
					"/api/v1/accounts/token/refresh/",
					{
						refresh: refreshToken,
					}
				);

				const newAccessToken = data.access;
				localStorage.setItem("access_token", newAccessToken);
				isRefreshing = false;
				onTokenRefreshed(newAccessToken);

				originalRequest.headers = {
					...originalRequest.headers,
					Authorization: `Bearer ${newAccessToken}`,
				};
				return axiosInstance(originalRequest);
			} catch (refreshError) {
				isRefreshing = false;
				sessionStorage.clear();
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;

export const _send_post_request = (url: string, data: unknown) => {
	return axiosInstance.post(url, data);
};
