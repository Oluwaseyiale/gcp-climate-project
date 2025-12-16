/** @format */

// import React from 'react'
import "../dashboard.css";
import books from "../../../../assets/books.png";
import EnrolledCourses from "../../../../components/dashboardcomponents/dashboardLandingPage/EnrolledCourses";
// import UserProfile from "../../../components/dashboardcomponents/userProfile/userProfile";
import {
  useUserProfile,
  useAllCourses,
  useEnroll,
} from "../../../../api/queries";
import { useState } from "react";
import desktopImg from "../../../../assets/imgA.png";
import { Slide, ToastContainer, toast } from "react-toastify";

const LandingPage = () => {
  const { data } = useUserProfile();
  const { data: courses, isLoading } = useAllCourses();
  const { data: user, isError, error } = useUserProfile();
  const { mutate } = useEnroll();

  const [loadingCourse, setLoadingCourse] = useState(null);

  const availableCourses = courses?.results;
  console.log("data", availableCourses);
  // console.log("1" - 1);
  // console.log("1" + 1);

  // const name = data?.data?.data.user

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

  const handleEnroll = (courseId) => {
    if (isLoading) {
      // alert("Checking authentication...");
      toast.warn("Checking authentication...");
      return;
    }

    if (!user) {
      // alert("Please log in to enroll in this course.");
      toast.warn("Please log in to enroll in this course.");
      return;
    }

    setLoadingCourse(courseId);

    mutate(
      { course: courseId },
      {
        onSuccess: (data) => {
          // alert("You have been enrolled successfully!");
          toast.success("You have been enrolled successfully!");
          console.log("Enroll success:", data);
          setLoadingCourse(null);
        },
        onError: (error) => {
          // alert(error?.response?.data?.message || "Enrollment failed.");
          toast.error(error?.response?.data?.message || "Enrollment failed.");
          console.error("Enroll error:", error);
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

                  {/* <UserProfile /> */}
              </div>
          </div>
      </div>

      {/* <div className="flex items-center justify-center w-full "> */}
      <EnrolledCourses />

      {/* available courses section*/}

      <h1 className="my-5 text-base lg:text-xl text-center font-figtree">
        See list of available courses to enroll for
      </h1>

      <div className="flex flex-wrap gap-6 px-10">
        {availableCourses.map((course) => (
          <div
            key={course.id}
            className="py-4 flex-1 px-5 bg-[#FFFFFF] h-[360px] w-[290px] border rounded-[10px] flex flex-col shadow-custom  mb-8"
          >
            <img
              src={course.cover_image || desktopImg}
              alt={course.title}
              className="object-cover w-full h-40 rounded-md"
            />
            <h1 className="mt-4 text-lg font-medium font-figtree">
              {course.title}
            </h1>
            <p className="text-base font-normal leading-6 truncate font-figtree">
              {course.description}
            </p>
            <div className="mt-4 button-container">
              <button
                onClick={() => handleEnroll(course.id)}
                disabled={loadingCourse === course.id}
                className="border button bg-[#008056] h-9 w-32 rounded-lg text-white font-figtree"
              >
                {loadingCourse === course.id ? "Enrolling..." : "Enroll Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>

      {/* </div> */}
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
