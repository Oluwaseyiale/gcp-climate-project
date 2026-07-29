import books from "../../assets/books-opt.png";
import EnrolledCourses from "../../components/dashboard/EnrolledCourses";
import {
  useUserProfile,
  useAllCourses,
  useEnroll,
} from "../../api/queries";
import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import CourseCard from "../../components/widgets/CourseCard";
import { getApiErrorMessage } from "../../utils/apiError";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

const LandingPage = () => {
  const {
    data: user,
    isLoading: isProfileLoading,
    isError: isProfileError,
    error: profileError,
  } = useUserProfile();
  const {
    data: courses,
    isLoading: isCoursesLoading,
    isError: isCoursesError,
    error: coursesError,
  } = useAllCourses();
  const { mutate } = useEnroll();

  const [loadingCourse, setLoadingCourse] = useState<string | number | null>(null);

  const availableCourses = courses?.results || [];

  if (isProfileError) {
    return (
      <div className="mt-10 text-center text-red-600">
        <p>Error loading profile: {profileError?.message || "Something went wrong"}</p>
      </div>
    );
  }

  const handleEnroll = (courseId: string | number) => {
    if (isCoursesLoading) {
      toast.warn("Checking authentication...");
      return;
    }

    if (!user) {
      toast.warn("Please log in to enroll in this course.");
      return;
    }

    setLoadingCourse(courseId);

    mutate(
      { course: courseId },
      {
        onSuccess: (data) => {
          toast.success("You have been enrolled successfully!");
          setLoadingCourse(null);
        },
        onError: (error) => {
          toast.error(getApiErrorMessage(error, "Enrollment failed."));
          setLoadingCourse(null);
        },
      }
    );
  };

  return (
		<div className="animate-page-enter">
			<div className="animate-section-enter border h-44 lg:h-40 rounded-b-full bg-[#E0EBE7] flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className=" lg:flex items-center">
              <img
                  src={books}
                  alt=""
                  className="w-24 h-24 lg:w-40  lg:h-40 mx-auto lg:mx-0"
              />
              <div className="max-w-xs  mx-auto lg:max-w-none text-center lg:text-left">
                  <h1 className="text-xl font-normal font-figtree">
                      Hi, {isProfileLoading ? "..." : user?.data?.user?.firstname}
                  </h1>
                  <p className="text-sm lg:text-base font-normal font-figtree">
                      Please find below a list of the courses you are enrolled in.
                  </p>
              </div>
          </div>
      </div>

      <EnrolledCourses />

      <h1 className="my-5 text-base lg:text-xl text-center font-figtree">
        See list of available courses to enroll for
      </h1>

      <div className="grid min-h-[320px] grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-6 px-4 sm:px-6 lg:px-10">
        {isCoursesLoading ? (
          <div className="col-span-full">
            <LoadingSpinner label="Loading available courses..." />
          </div>
        ) : isCoursesError ? (
          <p className="col-span-full text-center text-red-600">
            {coursesError?.message || "Error loading available courses."}
          </p>
        ) : (
          availableCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageSrc={course.cover_image}
              actionLabel="Enroll Now"
              loadingLabel="Enrolling..."
              disabled={loadingCourse === course.id}
              onAction={() => handleEnroll(course.id)}
              className="min-h-[380px] mb-8"
            />
          ))
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </div>
  );
};

export default LandingPage;
