import React, { useEffect, useState } from "react";
import Heading from "../../components/shared/heading";
import {
  BookOpen,
  Code,
  Cog,
  Edit,
  File,
  Plus,
  Trash,
  AlertCircle,
} from "lucide-react";
import { createProblemSchema } from "../../lib/zod.schema";
import { useNavigate } from "react-router";
import { Editor } from "@monaco-editor/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { axiosInstance } from "../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

const CreateProblem = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyActiveTab, setCurrentlyActiveTab] = useState(0);
  const tabs = [
    "details",
    "examples",
    "testcases",
    "codeSnippets",
    "referenceSolution",
  ];
  const {
    register,
    control,
    reset,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createProblemSchema),
    defaultValues: {
      title: "",
      description: "",
      difficulty: "EASY",
      tags: [""],
      companies: [""],
      constraints: "",
      examples: [{ input: "", output: "", explanation: "" }],
      hints: [""],
      editorial: "",
      testCases: [{ input: "", output: "" }],
      codeSnippetsHeader: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
      codeSnippets: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
      codeSnippetsFooter: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
      referenceSolutionHeader: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
      referenceSolution: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
      referenceSolutionFooter: {
        JAVASCRIPT: "",
        PYTHON: "",
        CPP: "",
      },
    },
  });
  const {
    fields: hintFields,
    append: appendHint,
    remove: removeHint,
  } = useFieldArray({
    control,
    name: "hints",
  });

  const {
    fields: testCaseFields,
    append: appendTestCase,
    remove: removeTestCase,
  } = useFieldArray({
    control,
    name: "testCases",
  });

  const {
    fields: exampleFields,
    append: appendExample,
    remove: removeExample,
  } = useFieldArray({
    control,
    name: "examples",
  });

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "tags",
  });
  const {
    fields: companyFields,
    append: appendCompany,
    remove: removeCompany,
  } = useFieldArray({
    control,
    name: "companies",
  });

  useEffect(() => {
    console.log(tagFields);
    console.log(companyFields);
    console.log(exampleFields);
    console.log(testCaseFields);
  }, [tagFields, companyFields, exampleFields, testCaseFields]);
  // useEffect
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    const toastId =  toast.loading("creating!");

    try {
      setIsLoading(true);

      // Add your API call here
      const res = await axiosInstance.post("/problem/create-problem", data);
      if (res.data.success) {
        toast.success("Problem created successfully!", {
          id: toastId,
        });
        // reset();
        // navigate(`/problem/${res.data.data.problemId}`);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred", {
          id: toastId,
        });
        return;
      }
      toast.error("Failed to create problem", {
        id: toastId,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-4 flex flex-col items-start justify-start">
      <Heading title={"Create New Problem"} />
      <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex gap-4">
              <fieldset className="fieldset   w-full">
                <legend className="fieldset-legend">
                  Title ? <span className="text-red-500">*</span>
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  {...register("title")}
                />{" "}
                {errors.title?.message && (
                  <p className="text-error flex items-center gap-2">
                    <AlertCircle className="size-4" />
                    {errors.title?.message}
                  </p>
                )}
              </fieldset>
              <fieldset className="fieldset  w-full">
                <legend className="fieldset-legend">
                  Difficulty ? <span className="text-red-500">*</span>
                </legend>
                <select
                  defaultValue="EASY"
                  className="select w-full"
                  {...register("difficulty")}
                >
                  <option value={"EASY"}>Easy</option>
                  <option value={"MEDIUM"}>Medium</option>
                  <option value={"HARD"}>Hard</option>
                </select>
                {errors.difficulty?.message && (
                  <p className="text-error flex items-center gap-2">
                    <AlertCircle className="size-4" />
                    {errors.difficulty?.message}
                  </p>
                )}
              </fieldset>
            </div>
            <fieldset className="fieldset  w-full">
              <legend className="fieldset-legend">
                Description ? <span className="text-red-500">*</span>
              </legend>
              <textarea
                className="textarea w-full"
                rows="7"
                placeholder="Type here..."
                {...register("description")}
              ></textarea>{" "}
              {errors.description?.message && (
                <p className="text-error flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  {errors.description?.message}
                </p>
              )}
            </fieldset>

            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  Tags ? <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-2">
                  {tagFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <fieldset className="fieldset  w-full">
                        <span className="flex gap-4 items-center">
                          <input
                            {...register(`tags.${index}`)}
                            className="input w-full"
                            placeholder="Enter tag"
                            disabled={isSubmitting || isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (tagFields.length > 1) {
                                removeTag(index);
                              }
                            }}
                            className="text-red-500 hover:text-red-700"
                            disabled={tagFields.length <= 1}
                          >
                            <Trash className="size-4" />
                          </button>
                        </span>
                        {errors.tags?.message && (
                          <p className="text-error flex items-center gap-2">
                            <AlertCircle className="size-4" />
                            {errors.tags?.message}
                          </p>
                        )}
                      </fieldset>
                    </div>
                  ))}
                  <div
                    className="btn btn-primary flex items-center gap-1 w-full"
                    onClick={() => appendTag("")}
                  >
                    <Plus className="size-4" /> Add Tag
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  Companies ? <span className="text-red-500">*</span>
                </h3>
                <div className="space-y-2">
                  {companyFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <fieldset className="fieldset  w-full">
                        <span className="flex gap-4 items-center">
                          <input
                            {...register(`companies.${index}`)}
                            className="w-full input"
                            placeholder="Enter tag"
                            disabled={isSubmitting || isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (companyFields.length > 1) {
                                removeCompany(index);
                              }
                            }}
                            className="text-red-500 hover:text-red-700"
                            disabled={companyFields.length <= 1}
                          >
                            <Trash className="size-4" />
                          </button>
                        </span>
                        {errors.companies?.message && (
                          <p className="text-error flex items-center gap-2">
                            <AlertCircle className="size-4" />
                            {errors.companies?.message}
                          </p>
                        )}
                      </fieldset>
                    </div>
                  ))}
                  <div
                    className="btn btn-primary flex items-center gap-1 w-full"
                    onClick={() => appendCompany("")}
                  >
                    <Plus className="size-4" /> Add Company
                  </div>
                </div>
              </div>
            </div>

            <fieldset className="fieldset  w-full">
              <legend className="fieldset-legend">
                Constraints ? <span className="text-red-500">*</span>
              </legend>
              <textarea
                className="textarea w-full"
                rows="7"
                placeholder="Type here..."
                {...register("constraints")}
              ></textarea>
              {errors.constraints?.message && (
                <p className="text-error flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  {errors.constraints?.message}
                </p>
              )}
            </fieldset>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Hints ? <span className="text-red-500">*</span>
              </h3>
              <div className="space-y-2">
                {hintFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
                    <fieldset className="fieldset  w-full">
                      <span className="flex gap-4 items-center">
                        <input
                          {...register(`hints.${index}`)}
                          className="w-full input"
                          placeholder="Enter tag"
                          disabled={isSubmitting || isLoading}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (hintFields.length > 1) {
                              removeHint(index);
                            }
                          }}
                          className="text-red-500 hover:text-red-700"
                          disabled={hintFields.length <= 1}
                        >
                          <Trash className="size-4" />
                        </button>
                      </span>
                      {errors.hints?.message && (
                        <p className="text-error flex items-center gap-2">
                          <AlertCircle className="size-4" />
                          {errors.hints?.message}
                        </p>
                      )}
                    </fieldset>
                  </div>
                ))}
                <div
                  className="btn btn-primary flex items-center gap-1 w-full"
                  onClick={() => appendHint("")}
                >
                  <Plus className="size-4" /> Add Hints
                </div>
              </div>
            </div>
          </div>

          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "examples"}
              onChange={() => setCurrentlyActiveTab(1)}
            />
            <span className="flex items-center gap-2">
              <BookOpen className="size-4" />
              <span>Examples</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <div className="space-y-6 flex flex-col items-end">
              {exampleFields.map((example, index) => (
                <div
                  key={example.id}
                  className="p-6 rounded-lg border border-border bg-muted/20 relative w-full"
                >
                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (exampleFields.length > 1) {
                          removeExample(index);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full bg-background shadow-sm"
                      disabled={exampleFields.length <= 1}
                    >
                      <Trash className="size-4" />
                    </button>
                  </div>

                  <h3 className="font-medium mb-4">Example {index + 1}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Input ? <span className="text-red-500">*</span>
                      </legend>
                      <textarea
                        className="textarea w-full"
                        rows="7"
                        placeholder="Type here..."
                        {...register(`examples.${index}.input`)}
                      ></textarea>
                    </fieldset>
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Output ? <span className="text-red-500">*</span>
                      </legend>
                      <textarea
                        className="textarea w-full"
                        rows="7"
                        placeholder="Type here..."
                        {...register(`examples.${index}.output`)}
                      ></textarea>
                    </fieldset>
                  </div>
                  <fieldset className="fieldset  w-full">
                    <legend className="fieldset-legend">
                      Explanation ? <span className="text-red-500">*</span>
                    </legend>
                    <textarea
                      className="textarea w-full"
                      rows="7"
                      placeholder="Type here..."
                      {...register(`examples.${index}.explanation`)}
                    ></textarea>
                  </fieldset>
                  {errors.examples?.message && (
                    <p className="text-error flex items-center gap-2">
                      <AlertCircle className="size-4" />
                      {errors.examples?.message}
                    </p>
                  )}
                </div>
              ))}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  appendExample({ input: "", output: "", explanation: "" })
                }
              >
                <Plus className="size-4" /> Add Example
              </button>
            </div>
          </div>

          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "testcases"}
              onChange={() => setCurrentlyActiveTab(2)}
            />
            <span className="flex items-center gap-2">
              <Cog className="size-4" />
              <span>Testcases</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <div className="space-y-6 flex flex-col items-end">
              {testCaseFields.map((testCase, index) => (
                <div
                  key={testCase.id}
                  className="p-6 rounded-lg border border-border bg-muted/20 relative w-full"
                >
                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (testCaseFields.length > 1) {
                          removeTestCase(index);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full bg-background shadow-sm"
                      disabled={testCaseFields.length <= 1}
                    >
                      <Trash className="size-4" />
                    </button>
                  </div>

                  <h3 className="font-medium mb-4">Testcase {index + 1}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Input ? <span className="text-red-500">*</span>
                      </legend>
                      <textarea
                        className="textarea w-full"
                        rows="5"
                        placeholder="Type here..."
                        {...register(`testCases.${index}.input`)}
                      ></textarea>
                    </fieldset>
                    <fieldset className="fieldset  w-full">
                      <legend className="fieldset-legend">
                        Output ? <span className="text-red-500">*</span>
                      </legend>
                      <textarea
                        className="textarea w-full"
                        rows="5"
                        placeholder="Type here..."
                        {...register(`testCases.${index}.output`)}
                      ></textarea>
                    </fieldset>
                  </div>
                  {errors.testCases?.message && (
                    <p className="text-error flex items-center gap-2">
                      <AlertCircle className="size-4" />
                      {errors.testCases?.message}
                    </p>
                  )}
                </div>
              ))}
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => appendTestCase({ input: "", output: "" })}
              >
                <Plus className="size-4" /> Add Test Cases
              </button>
            </div>
          </div>
          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "codeSnippets"}
              onChange={() => setCurrentlyActiveTab(3)}
            />
            <span className="flex items-center gap-2">
              <Code className="size-4" />
              <span>Code Snippets</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100">
            <div className=" flex gap-2">
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> JavaScript
                </h3>
                <Controller
                  name="codeSnippets.JAVASCRIPT"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="javascript"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Python
                </h3>

                <Controller
                  name="codeSnippets.PYTHON"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="python"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>{" "}
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> CPP
                </h3>

                <Controller
                  name="codeSnippets.CPP"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="cpp"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <label className="tab">
            <input
              type="radio"
              name="admin_panel_create_problem_tabs"
              checked={tabs[currentlyActiveTab] === "referenceSolution"}
              onChange={() => setCurrentlyActiveTab(4)}
            />
            <span className="flex items-center gap-2">
              <File className="size-4" />
              <span>Reference Solution</span>
            </span>
          </label>
          <div className="tab-content border-base-300 bg-base-100 mt-4 ">
            <div className="flex gap-2">
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Javascript Header
                </h3>

                <Controller
                  name="referenceSolutionHeader.JAVASCRIPT"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="javascript"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Javascript Body
                </h3>

                <Controller
                  name="referenceSolution.JAVASCRIPT"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="javascript"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Javascript Footer
                </h3>

                <Controller
                  name="referenceSolutionFooter.JAVASCRIPT"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="javascript"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Python Header
                </h3>

                <Controller
                  name="referenceSolutionHeader.PYTHON"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="python"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Python Body
                </h3>

                <Controller
                  name="referenceSolution.PYTHON"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="python"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Python Footer
                </h3>

                <Controller
                  name="referenceSolutionFooter.PYTHON"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="python"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>{" "}
            <div className="flex gap-2 mt-2">
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> CPP Header
                </h3>

                <Controller
                  name="referenceSolutionHeader.CPP"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="cpp"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> CPP Body
                </h3>

                <Controller
                  name="referenceSolution.CPP"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="cpp"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="p-6 rounded-lg border border-border bg-muted/20 flex-1">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> Cpp Footer
                </h3>

                <Controller
                  name="referenceSolutionFooter.CPP"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Editor
                        height="300px"
                        language="cpp"
                        theme="vs-dark"
                        value={field.value}
                        onChange={field.onChange}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 14,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                      {errors.codeSnippets?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pl-10 mt-4">
          {currentlyActiveTab >= 0 && (
            <button
              type="button"
              className="btn btn-neutral"
              disabled={currentlyActiveTab === 0}
              onClick={() => {
                setCurrentlyActiveTab((prev) => Math.max(prev - 1, 0));
              }}
            >
              Prev
            </button>
          )}
          {currentlyActiveTab <= tabs.length - 2 ? (
            <button
              type="button"
              className="btn btn-neutral"
              onClick={async () => {
                // Validate current tab fields before moving

                setCurrentlyActiveTab((prev) =>
                  Math.min(prev + 1, tabs.length - 1)
                );
              }}
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

export default CreateProblem;
