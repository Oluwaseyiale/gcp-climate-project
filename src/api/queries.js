/** @format */

import { useMutation } from "@tanstack/react-query";
import { login, resendOtp, signup, verifyOtp } from "./api";

export const useSignUp = () => {
	return useMutation({ mutationFn: signup });
};

export const useLogin = () => {
	return useMutation({ mutationFn: login });
};

export const useVerifyOtp = () => {
	return useMutation({ mutationFn: verifyOtp });
};

export const useResendOtp = () => {
	return useMutation({ mutationFn: resendOtp });
};
