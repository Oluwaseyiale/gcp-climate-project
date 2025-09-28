import { useNavigate } from "react-router-dom";

import books from "../../../../assets/books.png";
import { useEnrolledCourses, useUserProfile } from "../../../../api/queries";

const SecondPage = () => {
  const { data } = useUserProfile();
  const { data: courses } = useEnrolledCourses();
  const enrolledCourses = courses?.data?.results;

  const navigate = useNavigate();

  const routeTo = (id) => {
    navigate(`/dashboard/subtasks/${id}`); 
  };

  return (
    <section className="">
      <div className="border h-40 rounded-b-full bg-[#E0EBE7] flex items-center justify-center">
        <img src={books} alt="" className="h-40 w-40" />
        <div>
          <h1 className="font-figtree font-normal text-base">
            Hi, {data?.data?.user?.firstname}
          </h1>
          <p className="font-figtree font-semibold text-xl">Your Tasks</p>
        </div>
      </div>

      <div className="text-center mt-12 lg:mt-16 lg:w-9/12 lg:mx-auto p-3">
        {enrolledCourses?.map((course) => (
          <div
            key={course?.course_data.id}
            className="flex items-center justify-between gap-3 mt-4"
          >
            <div className="flex items-center gap-3 ">
              <h1 className="font-normal font-figtree text-base xl:text-lg">Task:</h1>
              <p className="font-semibold font-figtree text-base xl:text-lg">
                {course?.course_data?.title}
              </p>
            </div>
            <button 
            // to={`subtasks/${course?.course_data.id}`}
              onClick={() => routeTo(course?.course_data?.id)}
              className="bg-[#008056] py-2 px-6 rounded-lg text-white font-figtree font-semibold text-lg"
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondPage;