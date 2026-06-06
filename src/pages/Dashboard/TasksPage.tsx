import { useNavigate } from "react-router-dom";

import books from "../../assets/books.png";
import { useEnrolledCourses, useUserProfile } from "../../api/queries";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

const TasksPage = () => {
  const {
    data,
    isLoading: isProfileLoading,
    isError: isProfileError,
    error: profileError,
  } = useUserProfile();
  const {
    data: courses,
    isLoading: isCoursesLoading,
    isError: isCoursesError,
    error: coursesError,
  } = useEnrolledCourses();
  const enrolledCourses = courses?.data?.results;

  const navigate = useNavigate();

  const routeTo = (id: string | number) => {
    navigate(`/dashboard/subtasks/${id}`);
  };

  return (
    <section className="">
      <div className="border h-40 rounded-b-full bg-[#E0EBE7] flex items-center justify-center">
        <img src={books} alt="" className="w-24 h-24 lg:h-40 lg:w-40" />
        <div>
          <h1 className="font-figtree font-normal text-base">
            Hi, {isProfileLoading ? "..." : data?.data?.user?.firstname}
          </h1>
          <p className="font-figtree font-semibold text-xl">Your Tasks</p>
        </div>
      </div>

      <div className="text-center mt-12 lg:mt-16 lg:w-9/12 lg:mx-auto p-3">
        {isProfileError ? (
          <p className="text-red-600">
            {profileError?.message || "Unable to load your profile."}
          </p>
        ) : isCoursesLoading ? (
          <LoadingSpinner label="Loading your tasks..." />
        ) : isCoursesError ? (
          <p className="text-red-600">
            {coursesError?.message || "Unable to load your tasks."}
          </p>
        ) : enrolledCourses?.length === 0 ? (
          <p>No tasks available yet.</p>
        ) : (
          enrolledCourses?.map((course) => (
          <div
            key={course?.course_data.id}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mt-4"
          >
            <div className="flex items-center gap-3 ">
              <h1 className="font-normal font-figtree text-base xl:text-lg">
                Task:
              </h1>
              <p className="font-semibold font-figtree text-base xl:text-lg">
                {course?.course_data?.title}
              </p>
            </div>
            <button
              // to={`subtasks/${course?.course_data.id}`}
              onClick={() => routeTo(course?.course_data?.id)}
              className="bg-[#008056] py-2 px-6 rounded-lg text-white font-figtree font-semibold text-sm lg:text-lg"
            >
              Take Quiz
            </button>
          </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TasksPage;
