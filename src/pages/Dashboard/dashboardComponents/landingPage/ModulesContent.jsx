import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetSubModules } from "../../../../api/queries.js";
const ModulesContent = () => {
  const { id: moduleId, id: subModuleId } = useParams();

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
  console.log("moduleId", moduleIdHere);

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
      <h1 className="text-2xl font-bold">{submodule.title}</h1>
      <p className="mt-4">{submodule.body}</p>

      <div className="mt-6 flex gap-4">
        {/* Previous button */}
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
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        {/* Next / Finish button */}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ModulesContent;
