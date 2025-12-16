import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetSubModules } from "../../../../api/queries.js";
// import ReactPlayer from "react-player";

import { MdChevronRight } from "react-icons/md";
import { updateProgress } from "../../../../slice/courseSlice.js";
import { MdKeyboardArrowLeft } from "react-icons/md";
import YouTube from "react-youtube";

const ModulesContent = () => {
  const { id: moduleId, id: subModuleId } = useParams();

  const dispatch = useDispatch();

  const courseId = useSelector((state) => state.courses.enrolledCourseIds);
  console.log("courseId", courseId);

  const navigate = useNavigate();
  const location = useLocation();

  // 👇 these come from navigate(..., { state: { submodules, currentIndex } })
  const {
    submodules = [],
    currentIndex = 0,

  } = location.state || {};

  // const formatted = text.replace(/\r\n/g, "<br/>");

  // fetch submodule content by id
  const { data, isLoading, isError, error } = useGetSubModules(subModuleId);
  // console.log("datas", data);
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );

  if (isError)
    return (
      <p className="text-red-500">
        Error loading submodule: {error?.message || "Something went wrong"}
      </p>
    );

  const submodule = data?.data;


  if (!submodule) return <p>No submodule found</p>;

  const isLast = currentIndex === submodules.length - 1;

  const formattedBody = submodule.body
      ? submodule.body.replace(/\r\n/g, "<br/>")
      : "";

  const handleNext = () => {
    // ✅ calculate progress as percentage
    const progressPercent = Math.round(
      ((currentIndex + 1) / submodules.length) * 100
    );

    // ✅ save progress in redux
    dispatch(updateProgress({ courseId, progress: progressPercent }));

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

  const getYouTubeId = (url) => {
    if (!url) return null;

    try {
      // Handle youtu.be links
      if (url.includes("youtu.be")) {
        return url.split("youtu.be/")[1].split("?")[0];
      }

      // Handle youtube.com/watch?v=
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch {
      return null;
    }
  };

          const videoId = getYouTubeId(submodule.video_link);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center font-figtree">
        {submodule.title}
      </h1>
      {
        <div className="mb-8">

          {submodule.video_link && videoId ? (
              <div className="relative w-full pt-[56.25%] mb-8">
                <YouTube
                    videoId={videoId}
                    className="absolute top-0 left-0 w-full h-full"
                    iframeClassName="w-full h-full"
                    opts={{
                      playerVars: {
                        autoplay: 0,
                        controls: 1,
                        rel: 0,
                        modestbranding: 1,
                      },
                    }}
                />
              </div>
          ) : (
              <div className="p-8 text-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">Invalid or missing video</p>
              </div>
          )}

        </div>
      }
      {/*<p className="mt-4">{submodule.body}</p>*/}

      <div
          className="mt-4 prose max-w-full"
          dangerouslySetInnerHTML={{ __html: formattedBody }}
      />

      <div className="flex items-end justify-end gap-4 mt-6">
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
            className="flex items-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
            <p>Previous</p>
          </button>
        )}

        {/* Next / Finish button */}
        {currentIndex === 0 ? (
          <button
            onClick={handleNext}
            className="px-4 py-1 rounded-lg border border-[#008056] font-figtree black text-sm "
          >
            {isLast ? "Finish" : "Next"}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="text-black font-figtree text-md"
          >
            {isLast ? (
              <span className="flex items-center">
                <p>Finish</p> <MdChevronRight className="text-lg" />
              </span>
            ) : (
              <span className="flex items-center">
                <p>Next</p> <MdChevronRight className="text-lg" />
              </span>
            )}
          </button>
        )}
      </div>
    </div>

  );
};

export default ModulesContent;
