import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetSubModules } from "../../../../api/queries";
import { MdChevronRight } from "react-icons/md";
import { updateProgress } from "../../../../slice/courseSlice";
import { MdKeyboardArrowLeft } from "react-icons/md";
import YouTube from "react-youtube";
import { RootState } from "../../../../store/store";

type SubmoduleItem = {
  id: string | number;
  title?: string;
};

const ModulesContent = () => {
  const { id: moduleId, id: subModuleId } = useParams();

  const dispatch = useDispatch();

  const courseId = useSelector((state: RootState) => state.courses.enrolledCourseIds);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    submodules = [],
    currentIndex = 0,

  } = (location.state || {}) as {
    submodules?: SubmoduleItem[];
    currentIndex?: number;
  };

  const { data, isLoading, isError, error } = useGetSubModules(subModuleId);

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
    const progressPercent = Math.round(
      ((currentIndex + 1) / submodules.length) * 100
    );

    dispatch(updateProgress({ courseId: courseId ?? "", progress: progressPercent }));

    if (isLast) {
      navigate(`/dashboard/modules/${courseId}`);
    } else {
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

  const getYouTubeId = (url?: string) => {
    if (!url) return null;

    try {
      if (url.includes("youtu.be")) {
        return url.split("youtu.be/")[1].split("?")[0];
      }

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
          ) :
              submodule.image ? (
                  <img
                      src={submodule.image}
                      alt={submodule.title}
                      className="w-full rounded-lg"
                  />
          ):(
              <div className="p-8 text-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">Invalid or missing video</p>
              </div>
          )}

        </div>
      }
      <div
          className="mt-4 prose max-w-full"
          dangerouslySetInnerHTML={{ __html: formattedBody }}
      />

      <div className="flex items-end justify-end gap-4 mt-6">
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
            className="flex items-center disabled:opacity-50"
          >
            <MdKeyboardArrowLeft />
            <p>Previous</p>
          </button>
        )}

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
