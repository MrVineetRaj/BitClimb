import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Bookmark, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { createProblemListSchema } from "../../lib/zod.schema";
import { useProblemListStore } from "../../store/useProblemListStore";
const CreateNewProblemList = ({ problemId = "problem_list_page" }) => {
  const { isCreatingProblemList, createProblemList, getAllProblemLists } =
    useProblemListStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createProblemListSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await createProblemList(data.title, data.description);
    if (res.success) {
      getAllProblemLists();
      reset();
      // Close the modal after successful creation
      document
        .getElementById(`create_new_problem_list_model_at_${problemId}`)
        .close();
    }
  };
  return (
    <>
      <button
        className="btn btn-secondary btn-outline absolute right-2 top-2"
        onClick={() =>
          document
            .getElementById(`create_new_problem_list_model_at_${problemId}`)
            .showModal()
        }
      >
        Create new list
      </button>
      <dialog
        id={`create_new_problem_list_model_at_${problemId}`}
        className="modal"
      >
        <div className="modal-box w-full max-w-84 relative">
          <h3 className="font-bold text-lg">Create New List</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Title?</legend>
              <input
                type="text"
                className="input"
                placeholder="Title of the list"
                {...register("title", {
                  required: "Title is required",
                })}
                disabled={isSubmitting || isCreatingProblemList}
              />
              {errors.title?.message && (
                <p className="text-error flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  {errors.title?.message}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Description?</legend>
              <textarea
                type="text"
                className="textarea"
                placeholder="description of the list"
                {...register("description", {
                  required: false,
                })}
                rows={7}
                disabled={isSubmitting || isCreatingProblemList}
              ></textarea>
              {errors.description?.message ? (
                <p className="text-error flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  {errors.description?.message}
                </p>
              ) : (
                <p className="label">Optional</p>
              )}
              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting || isCreatingProblemList}
              >
                Create List
              </button>
            </fieldset>
          </form>

          <div className="modal-action absolute top-2 right-2">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-ghost">
                <X />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CreateNewProblemList;
