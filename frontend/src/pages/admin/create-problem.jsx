import FormField from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { axiosInstance } from "@/lib/axios";
import { createProblemSchema } from "@/lib/zod.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@monaco-editor/react";
import { AxiosError } from "axios";
import {
  BookOpen,
  Code,
  Cog,
  Edit,
  FileCode,
  Lightbulb,
  Plus,
  Tag,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const CreateProblem = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    reset,
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

  const onSubmit = async (data) => {
    // console.log("Form data:", data);
    try {
      setIsLoading(true);

      // Add your API call here
      const res = await axiosInstance.post("/problem/create-problem", data);
      if (res.data.success) {
        toast.success("Problem created successfully!");
        // reset();
        // navigate(`/problem/${res.data.data.problemId}`);
      }
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
    <div className="w-full max-w-6xl mx-auto bg-card p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Plus className="size-6" /> Create New Problem
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Edit className="size-4" /> Details
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <BookOpen className="size-4" /> Examples
            </TabsTrigger>
            <TabsTrigger value="testcases" className="flex items-center gap-2">
              <Cog className="size-4" /> Test Cases
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="size-4" /> Code Snippets
            </TabsTrigger>
            <TabsTrigger value="solutions" className="flex items-center gap-2">
              <FileCode className="size-4" /> Solutions
            </TabsTrigger>
          </TabsList>

          {/* Details Tab */}
          <TabsContent value="details" className="space-y-4">
            <FormField
              label="Title"
              {...register("title")}
              error={errors.title?.message}
              required
              disabled={isSubmitting || isLoading}
            />

            <FormField
              type="textarea"
              label="Description"
              {...register("description")}
              error={errors.description?.message}
              required
              disabled={isSubmitting || isLoading}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Difficulty *
                </label>
                <select
                  {...register("difficulty")}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                  disabled={isSubmitting || isLoading}
                >
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>
                {errors.difficulty && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.difficulty.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Tags <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {tagFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        {...register(`tags.${index}`)}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
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
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendTag("")}
                    className="flex items-center gap-1"
                  >
                    <Plus className="size-4" /> Add Tag
                  </Button>
                </div>
                {errors.tags && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.tags.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Companies <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {companyFields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                      <input
                        {...register(`companies.${index}`)}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
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
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendCompany("")}
                    className="flex items-center gap-1"
                  >
                    <Plus className="size-4" /> Add Tag
                  </Button>
                </div>
                {errors.tags && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.tags.message}
                  </p>
                )}
              </div>
            </div>

            <FormField
              type="textarea"
              label="Constraints"
              {...register("constraints")}
              error={errors.constraints?.message}
              required
              disabled={isSubmitting || isLoading}
              placeholder="e.g., 1 <= n <= 10^5"
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium mb-1">Hints</label>
              <div className="space-y-2">
                {hintFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2">
                    <input
                      {...register(`hints.${index}`)}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-background"
                      placeholder={`Hint ${index + 1}`}
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
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => appendHint("")}
                  className="flex items-center gap-1"
                >
                  <Plus className="size-4" /> Add Hint
                </Button>
              </div>
              {errors.hints && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hints.message}
                </p>
              )}
              <FormField
                type="textarea"
                label="Editorial (Optional)"
                {...register("editorial")}
                error={errors.editorial?.message}
                disabled={isSubmitting || isLoading}
                placeholder="Provide an editorial explaining the solution approach (optional)"
              />
            </div>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-4">
            <div className="space-y-6">
              {exampleFields.map((example, index) => (
                <div
                  key={example.id}
                  className="p-6 rounded-lg border border-border bg-muted/20 relative"
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
                    <FormField
                      type="textarea"
                      label="Input"
                      {...register(`examples.${index}.input`)}
                      error={errors.examples?.[index]?.input?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />

                    <FormField
                      type="textarea"
                      label="Output"
                      {...register(`examples.${index}.output`)}
                      error={errors.examples?.[index]?.output?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />
                  </div>

                  <FormField
                    type="textarea"
                    label="Explanation (Optional)"
                    {...register(`examples.${index}.explanation`)}
                    error={errors.examples?.[index]?.explanation?.message}
                    disabled={isSubmitting || isLoading}
                  />
                </div>
              ))}

              <Button
                type="button"
                onClick={() =>
                  appendExample({ input: "", output: "", explanation: "" })
                }
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Plus className="size-4" /> Add Example
              </Button>
            </div>
          </TabsContent>

          {/* Test Cases Tab */}
          <TabsContent value="testcases" className="space-y-4">
            <div className="space-y-6">
              {testCaseFields.map((testCase, index) => (
                <div
                  key={testCase.id}
                  className="p-6 rounded-lg border border-border bg-muted/20 relative"
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

                  <h3 className="font-medium mb-4">Test Case {index + 1}</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      type="textarea"
                      label="Input"
                      {...register(`testCases.${index}.input`)}
                      error={errors.testCases?.[index]?.input?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />

                    <FormField
                      type="textarea"
                      label="Expected Output"
                      {...register(`testCases.${index}.output`)}
                      error={errors.testCases?.[index]?.output?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />
                  </div>
                </div>
              ))}

              <Button
                type="button"
                onClick={() => appendTestCase({ input: "", output: "" })}
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <Plus className="size-4" /> Add Test Case
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-4">
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-muted/20">
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

              <div className="p-6 rounded-lg border border-border bg-muted/20">
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
                      {errors.codeSnippets?.PYTHON?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.PYTHON.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="p-6 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <Code className="size-5" /> C++
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
                      {errors.codeSnippets?.CPP?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.codeSnippets.CPP.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </TabsContent>
          {/* Solutions Tab */}
          <TabsContent value="solutions" className="space-y-4">
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FileCode className="size-5" /> JavaScript Solution
                </h3>
                <p className="mt-4"> Reference solution Header</p>
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
                      {errors.referenceSolution?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution</p>
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
                      {errors.referenceSolution?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution Footer</p>
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
                      {errors.referenceSolution?.JAVASCRIPT?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.JAVASCRIPT.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="p-6 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FileCode className="size-5" /> Python Solution
                </h3>
                <p className="mt-4"> Reference solution Header</p>
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
                      {errors.referenceSolution?.PYTHON?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.PYTHON.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution</p>
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
                      {errors.referenceSolution?.PYTHON?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.PYTHON.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution Footer</p>
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
                      {errors.referenceSolution?.PYTHON?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.PYTHON.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="p-6 rounded-lg border border-border bg-muted/20">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <FileCode className="size-5" /> C++ Solution
                </h3>
                <p className="mt-4"> Reference solution Header</p>
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
                      {errors.referenceSolution?.CPP?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.CPP.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution</p>
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
                      {errors.referenceSolution?.CPP?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.CPP.message}
                        </p>
                      )}
                    </div>
                  )}
                />
                <p className="mt-4"> Reference solution Footer</p>
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
                      {errors.referenceSolution?.CPP?.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.referenceSolution.CPP.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between gap-4 pt-4 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              const tabs = [
                "details",
                "examples",
                "testcases",
                "code",
                "solutions",
              ];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1]);
              }
            }}
            disabled={activeTab === "details" || isSubmitting || isLoading}
          >
            Previous
          </Button>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const tabs = [
                  "details",
                  "examples",
                  "testcases",
                  "code",
                  "solutions",
                ];
                const currentIndex = tabs.indexOf(activeTab);
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1]);
                }
              }}
              disabled={activeTab === "solutions" || isSubmitting || isLoading}
            >
              Next
            </Button>
            {activeTab === "solutions" && (
              <Button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="min-w-28"
              >
                {isSubmitting || isLoading ? "Saving..." : "Create Problem"}
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProblem;
