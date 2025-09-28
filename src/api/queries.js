/** @format */

import { useMutation,useQueryClient, useQuery } from "@tanstack/react-query";
import {
	allCourses,
	courseId,
	enroll,

	enrolledCourses,
	getCourses,
	// getModules,
	getQuiz,

	 getSubModule,

	login,
	// modules,
	resendOtp,
	signup,
	submitQuiz,
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

export const useSubmitQuiz = () => {
	return useMutation({ mutationFn: submitQuiz });
}

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
			// invalidate queries so data refreshes automatically
			client.invalidateQueries({ queryKey: ["enrolledCourses"] });
			client.invalidateQueries({ queryKey: ["courses"] });
			// optionally invalidate course details if needed
			// client.invalidateQueries({ queryKey: ["courseDetails"] });
		},
	});
};

export const useEnrolledCourses = () => {
	return useQuery({ queryKey: ["enrolledCourses"], queryFn: enrolledCourses });
};

export const useGetSubModules = (id) => {
	return useQuery({ queryKey: ["subModules", id], queryFn:() => getSubModule(id) });
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
		queryKey: ['Quiz', id],
		queryFn: () => getQuiz(id),
		enabled: !!id
	})
}

// export const useCourseModules = (id) => {
// 	return useQuery({
// 		queryKey: ['courseModules', id],
// 		queryFn: ({ queryKey }) => courseModules(queryKey[1]),
// 		enabled: true,
// 	});
// };



export const useUserProfile = () => {
	return useQuery({ queryKey: ["userInfo"], queryFn: userProfile });
};

export const useGetModules = () => {
	return useQuery({
		queryKey: ["modules"],
		// queryFn: getModules,

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
