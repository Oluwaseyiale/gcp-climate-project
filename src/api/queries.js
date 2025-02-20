/** @format */

import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
	allCourses,
	courseId,
	enroll,
	enrolledCourses,
	login,
	resendOtp,
	signup,
	// userinfo,
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

export const useEnroll = () => {
	return useMutation({ mutationFn: enroll });
};

export const useEnrolledCourses = (id) => {
	return useInfiniteQuery({
		queryKey: ["enrolledCourses", id], // Include id in the query key
		queryFn: ({ pageParam = 1 }) => enrolledCourses({ pageParam, id }),
		getNextPageParam: (lastPage) => lastPage?.nextPage ?? null, // Adjust based on your API
		enabled: !!id, // Only run query if id is provided
	});
};

// export const useUserInfo = () => {
// 	return useQuery({ queryKey: ["userInfo"], queryFn: userinfo });
// };
// export const useAllCourses = (page) => {
// 	return useQuery(["courses", page], () => allCourses(page), {
// 		keepPreviousData: true, // Retain previous data during fetch
// 	});
// };
