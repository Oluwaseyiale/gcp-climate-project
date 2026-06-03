import "../dashboard.css";
import books from "../../../../assets/books.png";
import EnrolledCourses from "../../../../components/dashboardcomponents/dashboardLandingPage/EnrolledCourses";
import {
  useUserProfile,
  useAllCourses,
  useEnroll,
} from "../../../../api/queries";
import { useState } from "react";
import desktopImg from "../../../../assets/imgA.png";
import { Slide, ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

const LandingPage = () => {
  const { data } = useUserProfile();
  const { data: courses, isLoading } = useAllCourses();
  const { data: user, isError, error } = useUserProfile();
  const { mutate } = useEnroll();

  const [loadingCourse, setLoadingCourse] = useState<string | number | null>(null);

  const availableCourses = courses?.results || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-10 text-center text-red-600">
        <p>Error loading modules: {error?.message || "Something went wrong"}</p>
      </div>
    );
  }

  const handleEnroll = (courseId: string | number) => {
    if (isLoading) {
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
          const enrollError = error as AxiosError<{ message?: string }>;
          toast.error(enrollError.response?.data?.message || "Enrollment failed.");
          setLoadingCourse(null);
        },
      }
    );
  };

  return (
    <div>
      <div className="border h-44 lg:h-40 rounded-b-full bg-[#E0EBE7] flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div className=" lg:flex items-center">
              <img
                  src={books}
                  alt=""
                  className="w-24 h-24 lg:w-40  lg:h-40 mx-auto lg:mx-0"
              />
              <div className="max-w-xs  mx-auto lg:max-w-none text-center lg:text-left">
                  <h1 className="text-xl font-normal font-figtree">
                      Hi, {data?.data?.user?.firstname}
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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-6 px-4 sm:px-6 lg:px-10">
        {availableCourses.map((course) => (
          <article
            key={course.id}
            className="course-card min-h-[380px] mb-8"
          >
            <img
              src={course.cover_image || desktopImg}
              alt={course.title}
              className="course-card-image"
            />
            <h2 className="course-card-title mt-4 text-lg font-medium leading-snug font-figtree">
              {course.title}
            </h2>
            <p className="course-card-description mt-2 text-base font-normal leading-6 font-figtree">
              {course.description}
            </p>
            <button
              onClick={() => handleEnroll(course.id)}
              disabled={loadingCourse === course.id}
              className="course-card-action mt-6 self-start font-figtree"
            >
              {loadingCourse === course.id ? "Enrolling..." : "Enroll Now"}
            </button>
          </article>
        ))}
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
