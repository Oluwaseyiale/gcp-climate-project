import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetSubModules } from "../../api/queries";
import { MdChevronRight } from "react-icons/md";
import { updateProgress } from "../../slice/courseSlice";
import { MdKeyboardArrowLeft } from "react-icons/md";
import YouTube from "react-youtube";
import { RootState } from "../../store/store";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

type SubmoduleItem = {
  id: string | number;
  title?: string;
};

const ModulesContent = () => {
  const { id: courseRouteId, subModuleId } = useParams();

  const dispatch = useDispatch();

  const courseId = useSelector((state: RootState) => state.courses.enrolledCourseIds);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    moduleId,
    submodules = [],
    currentIndex = 0,

  } = (location.state || {}) as {
    moduleId?: string | number;
    submodules?: SubmoduleItem[];
    currentIndex?: number;
  };

  const { data, isLoading, isError, error } = useGetSubModules(subModuleId);

  if (isLoading)
    return (
      <div className="px-4 py-10">
        <LoadingSpinner label="Loading lesson..." />
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
  const activeCourseId = courseId ?? courseRouteId;

  const formattedBody = submodule.body
      ? submodule.body.replace(/\r\n/g, "<br/>")
      : "";

  const handleNext = () => {
    const totalSubmodules = Math.max(submodules.length, 1);
    const progressPercent = Math.round(
      ((currentIndex + 1) / totalSubmodules) * 100
    );

    const progressKey = moduleId ?? submodules[currentIndex]?.id ?? subModuleId;
    if (progressKey) {
      dispatch(updateProgress({ progressKey, progress: progressPercent }));
    }

    if (isLast) {
      navigate(`/dashboard/modules/${activeCourseId}`);
    } else {
      navigate(
        `/dashboard/modules/${courseRouteId}/modulescontent/${
          submodules[currentIndex + 1].id
        }`,
        {
          state: { moduleId, submodules, currentIndex: currentIndex + 1 },
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
                `/dashboard/modules/${courseRouteId}/modulescontent/${
                  submodules[currentIndex - 1]?.id
                }`,
                {
                  state: { moduleId, submodules, currentIndex: currentIndex - 1 },
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
