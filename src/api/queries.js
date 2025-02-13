/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import {
	allCourses,
	courseId,
	login,
	resendOtp,
	signup,
	verifyOtp,
} from "./api";
// import { courses } from "../pages/courses/courses";

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

export const useAllCourses = () => {
	return useQuery({ queryKey: ["courses"], queryFn: allCourses });
};

export const useCourseId = (id) => {
	return useQuery({
		queryKey: ["courseId", id],
		queryFn: () => courseId(id),
		enabled: !!id,
	});
};

// export const useAllCourses = (page) => {
// 	return useQuery(["courses", page], () => allCourses(page), {
// 		keepPreviousData: true, // Retain previous data during fetch
// 	});
// };
