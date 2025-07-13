import {Link} from "react-router-dom";

export const AllEnrolledCourses = (enrolledcourses) => {
    console.log('enrolled here', enrolledcourses)
    return(
        <div>

            <div className=" flex justify-between px-4 items-center  rounded-xl shadow py-6 my-4">
                <div className="flex  w-[80%] gap-5 items-center">
                    <img
                        src={enrolledcourses.enrolledcourses.course_data.cover_image}
                        alt="NO IMAGE"
                        className="h-[104px] w-[146px] border-blue-300 border-2"
                    />

                    <div className=" ">
                        <h1 className="font-figtree text-2xl font-medium">
                            {enrolledcourses.enrolledcourses.course_data.title}
                        </h1>
                        <p className="font-figtree text-base text-wrap font-normal">
                            {enrolledcourses.enrolledcourses.course_data.description}
                        </p>
                    </div>
                </div>
                <Link to=''>
                    <button
                        className="border font-semibold text-base font-figtree bg-[#008056] text-[#FFFFFF] px-8 h-[43px] rounded-lg"
                    >
                        Go to Course
                    </button>
                </Link>
            </div>

        </div>
    )
}
