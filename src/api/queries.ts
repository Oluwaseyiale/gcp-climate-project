import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
	allCourses,
	courseId,
	enroll,
	enrolledCourses,
	getCourses,
	getQuiz,
	getSubModule,
	login,
	resendOtp,
	signup,
	submitQuiz,
	userProfile,
	verifyOtp,
} from "./api";

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

export const useAllCourses = (page = 1, pageSize = 10) => {
	return useQuery({
		queryKey: ["courses", page, pageSize],
		queryFn: () => allCourses(page, pageSize),
	});
};

export const useSubmitQuiz = () => {
	return useMutation({ mutationFn: submitQuiz });
};

export const useCourseId = (id) => {
	return useQuery({
		queryKey: ["courseId", id],
		queryFn: () => courseId(id),
		enabled: !!id,
	});
};

export const useEnroll = () => {
	const client = useQueryClient();

	return useMutation({
		mutationFn: enroll,
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ["enrolledCourses"] });
			client.invalidateQueries({ queryKey: ["courses"] });
		},
	});
};

export const useEnrolledCourses = () => {
	return useQuery({ queryKey: ["enrolledCourses"], queryFn: enrolledCourses });
};

export const useGetSubModules = (id) => {
	return useQuery({
		queryKey: ["subModules", id],
		queryFn: () => getSubModule(id),
	});
};

export const useGetCourses = (id) => {
	return useQuery({
		queryKey: ["courseDetails", id],
		queryFn: () => getCourses(id),
		enabled: !!id,
	});
};

export const useGetQuiz = (id) => {
	return useQuery({
		queryKey: ["Quiz", id],
		queryFn: () => getQuiz(id),
		enabled: !!id,
	});
};

export const useUserProfile = () => {
	return useQuery({ queryKey: ["userInfo"], queryFn: userProfile });
};
