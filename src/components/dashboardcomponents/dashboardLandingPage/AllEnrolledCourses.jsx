/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCourseId } from "../../../slice/courseSlice";

export const AllEnrolledCourses = ({ enrolledcourses }) => {
  const dispatch = useDispatch();
  console.log("enrolled here", enrolledcourses);
  const id = enrolledcourses.course_data?.id;
  // console.log("ID here",<img src={enrolledcourses.course_data.cover_image} alt=""/> );
  console.log("ID here",enrolledcourses.course_data.cover_image );
  // const fullUrl = `https://res.cloudinary.com/dxfq3iotg/image/upload/v1637915500/courses/${enrolledcourses.course_data.cover_image.src}`;
  // const fullUrl = `https://res.cloudinary.com/dxfq3iotg/${enrolledcourses.course_data.cover_image}`;

  const handleGoToCourse = () => {
    // Store the course ID in Redux
    dispatch(setCourseId(id));
  };

  return (
    <div>
      <div className="flex justify-between px-4 items-center rounded-xl shadow py-6 my-4">
        <div className="flex w-[80%] gap-5 items-center">
         <div className='h-[104px] w-[246px] border-blue-300 border-2'>
           <img
               src={enrolledcourses && enrolledcourses.course_data.cover_image}
               alt="course-img"
               className="object-cover"
           />
         </div>

          <div>
            <h1 className="font-figtree text-2xl font-medium">
              {enrolledcourses.course_data.title}
            </h1>
            <p className="font-figtree text-base font-normal">
              {enrolledcourses.course_data.description}
            </p>
          </div>
        </div>
        <Link to={`modules/${id}`} onClick={handleGoToCourse}>
          <button className="border font-semibold text-base font-figtree bg-[#008056] text-[#FFFFFF] px-8 h-[43px] rounded-lg">
            Go to Course
          </button>
        </Link>
      </div>
    </div>
  );
};

AllEnrolledCourses.propTypes = {
  // enrolledcourses: PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  enrolledcourses: PropTypes.shape({
    course_data: PropTypes.shape({
      cover_image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
  // }).isRequired,
};
