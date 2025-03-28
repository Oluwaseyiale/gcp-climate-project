/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import {
	allCourses,
	courseId,
	enroll,
	enrolledCourses,
	getCourses,
	getModules,
	login,
	// modules,
	resendOtp,
	signup,
	userProfile,
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

export const useEnrolledCourses = () => {
	return useQuery({ queryKey: ["enrolledCourses"], queryFn: enrolledCourses });
};

export const useGetCourses = (id) => {
	return useQuery({
		queryKey: ["courseDetails", id],
		queryFn: () => getCourses(id),
		enabled: !!id,
	});
};

export const useUserProfile = () => {
	return useQuery({ queryKey: ["userInfo"], queryFn: userProfile });
};

export const useGetModules = (id) => {
	return useQuery({
		queryKey: ["modules", id],
		queryFn: () => getModules(id),
		enabled: !!id,
	});
};

// export const useModules = () => {
// 	return useQuery({ queryKey: ["modules"], queryFn: modules });
// };
// export const useAllCourses = (page) => {
// 	return useQuery(["courses", page], () => allCourses(page), {
// 		keepPreviousData: true, // Retain previous data during fetch
// 	});
// };
