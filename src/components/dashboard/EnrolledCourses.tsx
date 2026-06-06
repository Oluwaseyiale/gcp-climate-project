import { useEnrolledCourses } from "../../api/queries";
import { useDispatch } from "react-redux";
import { setCourseId } from "../../slice/courseSlice";
import EnrolledCourseCard from "../widgets/EnrolledCourseCard";
import LoadingSpinner from "../widgets/LoadingSpinner";

const EnrolledCourses = () => {
  const { data, isLoading, isError, error } = useEnrolledCourses();
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <section className="w-full px-4 py-10 sm:px-10 lg:px-16">
        <LoadingSpinner label="Loading your enrolled courses..." />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="w-full px-4 py-10 text-center text-red-600 sm:px-10 lg:px-16">
        Error: {error.message}
      </section>
    );
  }

  return (
    <div className="w-full px-4 py-10 sm:px-10 lg:px-16">
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

      {data?.data?.results.map((enrolledCourse) => (
        <EnrolledCourseCard
          key={enrolledCourse.course_data.id}
          course={enrolledCourse.course_data}
          to={`modules/${enrolledCourse.course_data.id}`}
          onOpenCourse={() => dispatch(setCourseId(enrolledCourse.course_data.id))}
        />
      ))}
    </div>
  );
};

export default EnrolledCourses;
