import { useParams, useNavigate } from "react-router-dom";
import { useGetCourses } from "../../../../api/queries.js";
import MinimalProgressBar from "../../../../components/ProgressBar.jsx";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useDispatch} from "react-redux";
import {setCourseId} from "../../../../slice/courseSlice.js";

const Modules = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { id } = useParams(); // courseId
    console.log('id', id);
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
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center mt-10 text-red-600">
                <p>
                    Error loading modules: {error?.message || "Something went wrong"}
                </p>
            </div>
        );
    }

    const modules = data?.data?.modules || [];
    console.log("modules", modules.map((module) => module.length));


    return (
        <div className="mt-20 px-16">
            {modules.length === 0 ? (
                <p className="text-center text-gray-600">No modules found for this course.</p>
            ) : (
                modules.map((module, index) => (
                    <div className="border-b py-8" key={module.id}>
                        {/* Module header */}
                        <div className="flex justify-between items-center">
                            <div className="w-[40rem]">
                                <h1 className="font-figtree font-medium text-xl">{module.title}</h1>
                                <p className="font-normal text-sm font-figtree">
                                    {module.objectives}
                                </p>
                            </div>
                            <button onClick={() => toggleOpen(index)}>
                                {openIndex === index ? (
                                    <RiArrowDropDownLine className="text-4xl" />
                                ) : (
                                    <MinimalProgressBar progress={10} />
                                )}
                            </button>
                        </div>

                        {/* Submodules */}
                        {openIndex === index && (
                            <div className="mt-4 text-gray-600">
                                {module.submodules?.length > 0 ? (
                                    module.submodules.map((submodule) => {
                                        return(
                                            <p
                                                key={submodule.id}
                                                onClick={() => {
                                                    console.log("Navigating with:", {
                                                        submoduleId: submodule.id,
                                                        submodules: module.submodules,
                                                        currentIndex: module.submodules.findIndex(s => s.id === submodule.id),
                                                        moduleIdHere: module
                                                    });

                                                    navigate(`modulescontent/${submodule.id}`, {
                                                        state: {
                                                            submodules: module.submodules,
                                                            currentIndex: module.submodules.findIndex(s => s.id === submodule.id),
                                                        },
                                                    });
                                                }}
                                                className="text-black text-lg font-figtree my-6 cursor-pointer hover:underline"
                                            >
                                                {submodule.title}
                                            </p>
                                        )
                                        }

                                    )
                                ) : (
                                    "No additional details"
                                )}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default Modules;
