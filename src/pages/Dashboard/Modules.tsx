import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCourses } from "../../api/queries";
import MinimalProgressBar from "../../components/ProgressBar";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setCourseId } from "../../slice/courseSlice";
import { RootState } from "../../store/store";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";
import RichTextContent from "../../components/widgets/RichTextContent";

const Modules = () => {
  const progressState = useSelector((state: RootState) => state.courses.progress);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCourses(id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setCourseId(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div className="px-4 py-10">
        <LoadingSpinner label="Loading modules..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-600">
        <p>Error loading modules: {error?.message || "Something went wrong"}</p>
      </div>
    );
  }

  const modules = data?.data?.modules || [];

  return (
    <div className="mt-20 px-16">
      {modules.length === 0 ? (
        <p className="text-center text-gray-600">
          No modules found for this course.
        </p>
      ) : (
        modules.map((module, index) => {
          const moduleProgress = progressState[String(module.id)] || 0;

          return (
          <div className="border-b py-8" key={module.id}>
            <div className=" lg:flex justify-between items-center">
              <div className="lg:w-[40rem]">
                <h1 className="font-figtree font-medium text-xl">
                  {module.title}
                </h1>
                <RichTextContent value={module.objectives} className="mt-3" />
              </div>
              <button onClick={() => toggleOpen(index)} className="mt-4 lg:mt-0">
                {openIndex === index ? (
                  <RiArrowDropDownLine className="text-4xl" />
                ) : (
                  <span className="">
                    <p className="block lg:hidden text-xs">Click here</p>
                    <MinimalProgressBar progress={moduleProgress} />
                  </span>
                )}
              </button>
            </div>

            {openIndex === index && (
              <div className="mt-4 text-gray-600">
                {module.submodules?.length > 0
                  ? module.submodules.map((submodule) => {
                      return (
                        <p
                          key={submodule.id}
                          onClick={() => {
                            navigate(`modulescontent/${submodule.id}`, {
                              state: {
                                moduleId: module.id,
                                submodules: module.submodules,
                                currentIndex: module.submodules.findIndex(
                                  (s) => s.id === submodule.id
                                ),
                              },
                            });
                          }}
                          className="text-black text-lg font-figtree my-6 cursor-pointer hover:underline"
                        >
                          {submodule.title}
                        </p>
                      );
                    })
                  : "No additional details"}
              </div>
            )}
          </div>
        );
        })
      )}
    </div>
  );
};

export default Modules;
