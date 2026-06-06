import { useState } from "react";
import { Link } from "react-router-dom";
import fallbackCourseImage from "../../assets/courses.jpg";

type CourseData = {
  id: string | number;
  cover_image?: string;
  title?: string;
  description?: string;
};

type EnrolledCourseCardProps = {
  course: CourseData;
  to: string;
  onOpenCourse?: () => void;
};

const getCourseImageUrl = (coverImage?: string) => {
  if (!coverImage) return fallbackCourseImage;
  if (coverImage.startsWith("http")) return coverImage;

  return `https://res.cloudinary.com/dxfq3iotg/${coverImage}`;
};

export const EnrolledCourseCard = ({
  course,
  to,
  onOpenCourse,
}: EnrolledCourseCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="animate-card-enter flex-col flex lg:flex-row lg:items-center lg:justify-between gap-5 px-4 py-6 my-4 shadow rounded-xl bg-white transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex w-full lg:w-[80%] gap-5 items-center">
        <div className="h-28 w-36 shrink-0 overflow-hidden rounded-md lg:h-[104px] lg:w-[180px]">
          <img
            src={imageError ? fallbackCourseImage : getCourseImageUrl(course.cover_image)}
            alt={course.title || "Course"}
            className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </div>

        <div>
          <h1 className="text-xl lg:text-2xl font-medium font-figtree">
            {course.title}
          </h1>
          <p className="text-base font-normal font-figtree line-clamp-2">
            {course.description}
          </p>
        </div>
      </div>
      <Link to={to} onClick={onOpenCourse}>
        <button
          type="button"
          className="border font-semibold text-base font-figtree bg-[#008056] text-[#FFFFFF] px-8 h-[43px] rounded-lg hover:-translate-y-0.5 hover:bg-[#006a48] active:scale-95 transition"
        >
          Go to Course
        </button>
      </Link>
    </div>
  );
};

export default EnrolledCourseCard;
