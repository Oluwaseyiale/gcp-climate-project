import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCourseId } from "../../../slice/courseSlice";
import courses from "../../../assets/courses.jpg"; // Default image
import { useState } from "react";
import {useAllCourses} from "../../../api/queries.js";

export const AllEnrolledCourses = ({ enrolledcourses }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);
  
  const id = enrolledcourses.course_data?.id;
  
  // Construct the full image URL if needed
  const getImageUrl = () => {
    if (!enrolledcourses.course_data.cover_image) {
      return courses;
    }
    
    // If the image is already a full URL, use it directly
    if (enrolledcourses.course_data.cover_image.startsWith('http')) {
      return enrolledcourses.course_data.cover_image;
    }
    
    // If it's a relative path, construct the full URL
    // Adjust this based on your API response structure
    return `https://res.cloudinary.com/dxfq3iotg/${enrolledcourses.course_data.cover_image}`;
  };

  const handleGoToCourse = () => {
    dispatch(setCourseId(id));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // available course section
  const availableCourses = useAllCourses();
  console.log("availableCourses", availableCourses?.data?.results);

  

 



  return (
    <div>
      <div className="flex items-center justify-between px-4 py-6 my-4 shadow rounded-xl">
        <div className="flex w-[80%] gap-5 items-center">
          <div className="h-[104px] w-[446px] ">
            <img
              src={imageError ? courses : getImageUrl()}
              alt="course-img"
              className="object-cover w-full h-full"
              onError={handleImageError}
              loading="lazy"
            />
          </div>

          <div>
            <h1 className="text-2xl font-medium font-figtree">
              {enrolledcourses.course_data.title}
            </h1>
            <p className="text-base font-normal font-figtree line-clamp-2">
              {enrolledcourses.course_data.description}
            </p>
          </div>
        </div>
        <Link to={`modules/${id}`} onClick={handleGoToCourse}>
          <button className="border font-semibold text-base font-figtree bg-[#008056] text-[#FFFFFF] px-8 h-[43px] rounded-lg hover:bg-[#006a48] transition-colors">
            Go to Course
          </button>
        </Link>
      </div>

      <div className='mt-20'>


      {/*available courses section*/}
      
      </div>

    </div>
  );
};

AllEnrolledCourses.propTypes = {
  enrolledcourses: PropTypes.shape({
    course_data: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cover_image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
};