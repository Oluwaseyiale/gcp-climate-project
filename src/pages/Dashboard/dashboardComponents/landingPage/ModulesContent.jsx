import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetSubModules } from "../../../../api/queries.js";
import ReactPlayer from "react-player";
import { MdChevronRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ModulesContent = () => {
  const { id: moduleId, id: subModuleId } = useParams(); // ✅ moduleId + submoduleId

  const courseId = useSelector((state) => state.courses.enrolledCourseIds);
  console.log("courseId", courseId);

  const navigate = useNavigate();
  const location = useLocation();

  // 👇 these come from navigate(..., { state: { submodules, currentIndex } })
  const {
    submodules = [],
    currentIndex = 0,
    moduleIdHere,
  } = location.state || {};

  // fetch submodule content by id
  const { data, isLoading, isError, error } = useGetSubModules(subModuleId);
  console.log("datas", data);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );

  if (isError)
    return (
      <p className="text-red-500">
        Error loading submodule: {error?.message || "Something went wrong"}
      </p>
    );

  const submodule = data?.data;
  console.log("submodule", submodule);

  if (!submodule) return <p>No submodule found</p>;

  const isLast = currentIndex === submodules.length - 1;

  const handleNext = () => {
    if (isLast) {
      // ✅ Finished last submodule → back to modules list
      navigate(`/dashboard/modules/${courseId}`);
    } else {
      // ✅ Go to next submodule
      navigate(
        `/dashboard/modules/${moduleId}/modulescontent/${
          submodules[currentIndex + 1].id
        }`,
        {
          state: { submodules, currentIndex: currentIndex + 1 },
        }
      );
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center font-figtree">{submodule.title}</h1>
      {
        <div className="mb-8">
          {submodule.video_link ? (
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <ReactPlayer
                    url={submodule.video_link}
                    controls
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                />
              </div>
          ) : submodule.image ? (
              <img
                  src={submodule.image}
                  alt={submodule.title}
                  className="w-full rounded-lg"
              />
          ) : (
              <div className="bg-gray-100 p-8 text-center rounded-lg">
                <p className="text-gray-500">No media content available</p>
              </div>
          )}
        </div>
      }
      <p className="mt-4">{submodule.body}</p>

      <div className="mt-6 flex items-end justify-end gap-4">
        {/* Previous button */}
        {currentIndex > 0 && (
            <button
                onClick={() =>
                    navigate(
                        `/dashboard/modules/${moduleId}/modulescontent/${
                            submodules[currentIndex - 1]?.id
                        }`,
                        {
                          state: { submodules, currentIndex: currentIndex - 1 },
                        }
                    )
                }
                // disabled={currentIndex === 0}
                className="disabled:opacity-50 flex items-center"
            >
              <MdKeyboardArrowLeft />
              <p>Previous</p>
            </button>
        )}

        {/* Next / Finish button */}
        {
          currentIndex === 0 ? (<button
              onClick={handleNext}
              className="px-4 py-1 rounded-lg border border-[#008056] font-figtree black text-sm "
          >
            {isLast ? "Finish" : "Next"}
          </button>) : (<button
              onClick={handleNext}
              className=" font-figtree text-black text-md "
          >
            {isLast ? (<span className='flex items-center '><p>Finish</p> <MdChevronRight className='text-lg'/></span>): (<span className='flex items-center '><p>Next</p> <MdChevronRight className='text-lg'/></span>)}
          </button>)
        }
      </div>
    </div>
  );
};

export default ModulesContent;
