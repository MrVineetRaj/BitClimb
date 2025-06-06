import React, { useState } from "react";
import Heading from "../../components/shared/heading";
import { Code, Edit, Plus, Trash } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContestSchema } from "../../lib/zod.schema";
import { AxiosError } from "axios";

const CreateContest = () => {
  const tabs = ["details", "problems"];
  const [currentlyActiveTab, setCurrentlyActiveTab] = useState(1);
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createContestSchema),
    defaultValues: {
      title: "",
      description: "",
      endTime: "",
      startTime: "",
      problems: [
        {
          problemIndex: "",
          problemId: "",
          problemPoints: "",
        },
      ],
    },
  });
  const {
    fields: problemFields,
    append: appendProblem,
    remove: removeProblem,
  } = useFieldArray({
    control,
    name: "problems",
  });
  const onSubmit = async (data) => {
    // console.log("Form data:", data);
    try {
      setIsLoading(true);
      console.log("Submitting data:", data);

      // Add your API call here
      // const res = await axiosInstance.post("/problem/create-problem", data);
      // if (res.data.success) {
      //   toast.success("Problem created successfully!");
      //   // reset();
      //   // navigate(`/problem/${res.data.data.problemId}`);
      // }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
        return;
      }
      toast.error("Failed to create problem");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-10 flex flex-col items-start">
      <Heading title={"Create "} highLightedText="Contests" />
      <form action="" onSubmit={onSubmit} className="w-full">
        <div className="tabs tabs-border w-full">
          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "details"}
              onChange={() => setCurrentlyActiveTab(0)}
            />
            <span className="flex items-center gap-2">
              <Edit className="size-4" />
              <span>Details</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <fieldset className="fieldset  w-full">
              <legend className="fieldset-legend">
                Title ? <span className="text-red-500">*</span>
              </legend>
              <input
                className="input w-full"
                rows="7"
                placeholder="Type here..."
                required
                {...register("title")}
              ></input>
            </fieldset>
            <fieldset className="fieldset  w-full">
              <legend className="fieldset-legend">
                Description ? <span className="text-red-500">*</span>
              </legend>
              <textarea
                className="textarea w-full"
                rows="7"
                placeholder="Type here..."
                required
                {...register("description")}
              ></textarea>
            </fieldset>

            <div className="flex gap-4">
              <div className="flex-1">
                <fieldset className="fieldset  w-full">
                  <legend className="fieldset-legend">
                    Start Time ? <span className="text-red-500">*</span>
                  </legend>
                  <input
                    type="datetime-local"
                    className="input w-full"
                    rows="7"
                    placeholder="Type here..."
                    required
                    {...register("startTime")}
                  ></input>
                </fieldset>
              </div>
              <div className="flex-1">
                <fieldset className="fieldset  w-full">
                  <legend className="fieldset-legend">
                    EndTime ? <span className="text-red-500">*</span>
                  </legend>
                  <input
                    type="datetime-local"
                    className="input w-full"
                    rows="7"
                    placeholder="Type here..."
                    required
                    {...register("endTime")}
                  ></input>
                </fieldset>
              </div>
            </div>
          </div>

          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "problems"}
              onChange={() => setCurrentlyActiveTab(1)}
            />
            <span className="flex items-center gap-2">
              <Code className="size-4" />
              <span>Problems</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <div className="space-y-6 flex flex-col items-end">
              {problemFields.map((problem, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-muted/20 relative w-full"
                >
                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (problemFields.length > 1) {
                          removeProblem(index);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full bg-background shadow-sm"
                      disabled={problemFields.length <= 1}
                    >
                      <Trash className="size-4" />
                    </button>
                  </div>

                  <h3 className="font-medium mb-4">Problem {index + 1}</h3>

                  <div className="flex 2 gap-4 mb-4">
                    {" "}
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Problem Id ? <span className="text-red-500">*</span>
                      </legend>
                      <input
                        className="input w-full"
                        rows="7"
                        placeholder="Type here..."
                        {...register(`problems.${index}.problemId`)}
                      ></input>
                    </fieldset>
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Problem Index ? <span className="text-red-500">*</span>
                      </legend>
                      <input
                        className="input w-full"
                        rows="7"
                        placeholder="A"
                        required
                        {...register(`problems.${index}.problemIndex`)}
                      ></input>
                    </fieldset>
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Problem Points ? <span className="text-red-500">*</span>
                      </legend>
                      <input
                        className="input w-full"
                        rows="7"
                        placeholder="5"
                        required
                        {...register(`problems.${index}.problemPoints`, {
                          valueAsNumber: true,
                        })}
                        type="number"
                      ></input>
                    </fieldset>
                  </div>
                </div>
              ))}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  appendProblem({
                    problemId: "",
                    problemIndex: "",
                    problemPoints: "",
                  })
                }
              >
                <Plus className="size-4" /> Add Problem
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pl-10 mt-4">
          {currentlyActiveTab >= 0 && (
            <button
              className="btn btn-neutral"
              disabled={currentlyActiveTab === 0}
              onClick={() => {
                setCurrentlyActiveTab((prev) => Math.max(prev - 1, 0));
              }}
              type="button"
            >
              Prev
            </button>
          )}
          {currentlyActiveTab <= tabs.length - 2 ? (
            <button
              className="btn btn-neutral"
              onClick={(e) => {
                e.preventDefault();
                setCurrentlyActiveTab((prev) =>
                  Math.min(prev + 1, tabs.length - 1)
                );
              }}
              type="button"
            >
              Next
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">
              Create Problem
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateContest;
