import { useEnrolledCourses } from "../../../api/queries";
import { AllEnrolledCourses } from "./AllEnrolledCourses";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourseId } from "../../../slice/courseSlice";

const EnrolledCourses = () => {
  const { data, isLoading, isError, isSuccess, error } = useEnrolledCourses();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && data?.data?.results?.length > 0) {
      const courseIds = data.data.results.map(
        (course) => course.course_data.id
      );
      dispatch(setCourseId(courseIds));
    }
  }, [isSuccess, data, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full p-16">
      {data?.data?.previous && (
        <p>
          Previous: <a href={data.data.previous}>{data.data.previous}</a>
        </p>
      )}
      {data?.data?.next && (
        <p>
          Next: <a href={data.data.next}>{data.data.next}</a>
        </p>
      )}

      {data?.data?.results.map((courses, index) => (
        <AllEnrolledCourses key={index} enrolledcourses={courses} />
      ))}
    </div>
  );
};

export default EnrolledCourses;
