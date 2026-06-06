import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCourses, useSubmitQuiz, useUserProfile } from "../../api/queries";
import LoadingSpinner from "../../components/widgets/LoadingSpinner";

const SubtasksPage = () => {
  const { id } = useParams();
  const { data: retrievedCourses, isLoading, isError } = useGetCourses(id);
  const { data: profile } = useUserProfile();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { mutate, isPending } = useSubmitQuiz();

  const handleSelect = (questionId: string | number, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = async () => {
    setSubmitError(null);

    try {
      const submissionData = {
        user: profile?.data?.user?.id,
        quiz: retrievedCourses?.data?.quiz?.id,
        answers: Object.entries(answers).map(([questionId, optionIndex]) => {
          const question = retrievedCourses?.data?.quiz?.questions.find(
            (q) => String(q.id) === questionId
          );
          const selectedOption = question?.options[optionIndex];

          return {
            question: questionId,
            option: selectedOption?.id,
          };
        }),
      };
      mutate(submissionData);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit quiz");
    }
  };

  if (isLoading) return <LoadingSpinner label="Loading quiz..." className="min-h-screen" />;
  if (isError)
    return <div className="p-4 text-red-600">Failed to load quiz.</div>;

  const questions = retrievedCourses?.data?.quiz?.questions || [];

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-center">
          {retrievedCourses?.data?.title}
        </h2>
        <p className="text-lg font-medium text-center mb-10">Quiz</p>
        {submitError && <div className="mt-4 text-red-600">{submitError}</div>}
        {submitSuccess && (
          <div className="mt-4 text-green-600">Quiz submitted successfully!</div>
        )}

        {questions?.map((q, index) => (
          <div key={q.id} className="mb-8">
            <p className="mb-3 text-base font-semibold">
              {index + 1}. {q?.question}
            </p>
            <div className="space-y-2">
              {q?.options?.length > 0 ? (
                q.options.map((option, i) => (
                  <label
                    key={i}
                    className={`block border px-4 py-2 rounded-lg cursor-pointer transition ${
                      answers[q.id] === i
                        ? "bg-green-100 border-green-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={i}
                      className="mr-2"
                      onChange={() => handleSelect(q.id, i)}
                      checked={answers[q.id] === i}
                    />
                    {option?.option}
                  </label>
                ))
              ) : (
                <textarea
                  className="rounded-lg border border-gray-400 focus:outline-none "
                  cols={35}
                />
              )}
            </div>
          </div>
        ))}
        {questions.length > 0 && (
          <button
            onClick={handleSubmit}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg block ml-auto"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
};
export default SubtasksPage;
