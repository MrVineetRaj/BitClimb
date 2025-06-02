import FormField from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createContestSchema } from "@/lib/zod.schema";
import { useContestStore } from "@/store/useContestStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cog, Edit, Plus, Trash } from "lucide-react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateContextPage = () => {
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
      startTime: "",
      endTime: "",
      problems: [""],
      problemIndex: [""],
      problemPoints: [""],
    },
  });

  const { isLoading, createContest } = useContestStore();

  const {
    fields: problemFields,
    append: appendProblem,
    remove: removeProblem,
  } = useFieldArray({
    control,
    name: "problems",
  });

  const {
    fields: problemIndexFields,
    append: appendProblemIndex,
    remove: removeProblemIndex,
  } = useFieldArray({
    control,
    name: "problemIndex",
  });
  const {
    fields: problemPointFields,
    append: appendProblemPoint,
    remove: removeProblemPoint,
  } = useFieldArray({
    control,
    name: "problemPoints",
  });

  const [activeTab, setActiveTab] = React.useState("problems");
  const onSubmit = async (data) => {
    try {
      // Handle form submission logic here
      // console.log("Form submitted:", data);
      await createContest(data);
      // reset();
    } catch (error) {
      toast.error("Failed to create contest. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-[100%] md:w-[80%] xl:w-[60%] ">
        <h1 className="text-2xl font-bold mb-4">Create Contest</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="details" className="flex items-center gap-2">
                <Edit className="size-4" /> Details
              </TabsTrigger>
              <TabsTrigger value="problems" className="flex items-center gap-2">
                <Cog className="size-4" /> Problems
              </TabsTrigger>
            </TabsList>

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
              <span className="flex items-center gap-4">
                <FormField
                  type="datetime-local"
                  label="Start Time"
                  {...register("startTime")}
                  error={errors.startTime?.message}
                  required
                  disabled={isSubmitting || isLoading}
                />

                <FormField
                  type="datetime-local"
                  label="End Time"
                  {...register("endTime")}
                  error={errors.endTime?.message}
                  required
                  disabled={isSubmitting || isLoading}
                />
              </span>
            </TabsContent>

            <TabsContent value="problems" className="space-y-4">
              <div className="space-y-6">
                {problemFields.map((problem, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-muted/20 relative"
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
                    <div className=" gap-4">
                      <FormField
                        type="text"
                        label={"ProblemID" + ` ${index + 1}`}
                        {...register(`problems.${index}`)}
                        error={errors.problems?.[index]?.input?.message}
                        required
                        disabled={isSubmitting || isLoading}
                      />
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() => appendProblem("")}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus className="size-4" /> Add problem Id
                </Button>
              </div>
              <div className="space-y-6">
                {problemIndexFields.map((problemIndex, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-muted/20 relative"
                  >
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (problemIndexFields.length > 1) {
                            removeProblemIndex(index);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full bg-background shadow-sm"
                        disabled={problemIndexFields.length <= 1}
                      >
                        <Trash className="size-4" />
                      </button>
                    </div>

                    <FormField
                      type="text"
                      label={"Problem Index" + ` ${index + 1}`}
                      {...register(`problemIndex.${index}`)}
                      error={errors.problemIndex?.[index]?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() => appendProblemIndex("")}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus className="size-4" /> Add Problem Index
                </Button>
              </div>
              <div className="space-y-6">
                {problemPointFields.map((problemPoint, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-muted/20 relative"
                  >
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (problemPointFields.length > 1) {
                            removeProblemPoint(index);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full bg-background shadow-sm"
                        disabled={problemPointFields.length <= 1}
                      >
                        <Trash className="size-4" />
                      </button>
                    </div>
                    <FormField
                      type="number"
                      label={"Problem Points" + ` ${index + 1}`}
                      {...register(`problemPoints.${index}`)}
                      error={errors.problemPoints?.[index]?.message}
                      required
                      disabled={isSubmitting || isLoading}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() => appendProblemPoint("")}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Plus className="size-4" /> Add Problem Points
                </Button>
              </div>
            </TabsContent>
          </Tabs>{" "}
          <div className="flex justify-between gap-4 pt-4 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const tabs = ["details", "problems"];
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
                  const tabs = ["details", "problems"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1]);
                  }
                }}
                disabled={activeTab === "problems" || isSubmitting || isLoading}
              >
                Next
              </Button>
              {activeTab === "problems" && (
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
    </div>
  );
};

export default CreateContextPage;

/*{
  "title": "String (required)",
  "description": "String (optional)",
  "startTime": "ISO8601 date string (required)",
  "endTime": "ISO8601 date string (required)",
  "problems": ["array of problem IDs (required, min 1)"],
  "problemIndex": ["array of integers (required)"],
  "problemPoints": ["array of integers (required)"]
}*/
