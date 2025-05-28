import { Button } from "@/components/ui/button";
import { useProblemStore } from "@/store/useProblemStore";
import {
  BrainCircuit,
  BringToFront,
  Cloud,
  Copy,
  Lightbulb,
  Lock,
  Play,
  Upload,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Editor } from "@monaco-editor/react";
import { toast } from "sonner";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

const ProblemPage = () => {
  const { getProblemById, getUserSubmissionsPerProblem } = useProblemStore();
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("CPP");
  const [userSubmissions, setUserSubmissions] = useState([]);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await getProblemById(problemId);
        console.log("Problem fetched:", res);
        setProblem(res);
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchProblem();
  }, [getProblemById, problemId]);
  useEffect(() => {
    const fetchSubmissionsByProblem = async () => {
      try {
        const res = await getUserSubmissionsPerProblem(problemId);
        console.log("Problem fetched:", res);
        setUserSubmissions(res);
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchSubmissionsByProblem();
  }, [getUserSubmissionsPerProblem, problemId]);

  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full flex items-center justify-center gap-4">
        <Button variant={"outline"}>
          <Play className="size-4" />
          Run
        </Button>
        <Button className={"text-white"}>
          <Upload className="size-4" />
          Submit
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
        <div className="col-span-1 w-full min-h-[600px] ">
          <Tabs defaultValue="submissions" className=" h-full">
            <TabsList className="">
              <TabsTrigger value="description">Description</TabsTrigger>
              {problem && problem?.editorial && (
                <TabsTrigger value="editorial">Editorial</TabsTrigger>
              )}
              {problem && problem?.referenceSolution && (
                <TabsTrigger value="solution">Solution</TabsTrigger>
              )}

              {problem && (
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
              )}
            </TabsList>

            {
              <TabsContent value="description" className="h-full">
                <h2 className="text-2xl font-bold ">{problem?.title}</h2>
                <span className="flex gap-4 mb-4">
                  <Badge
                    className={`${
                      problem?.difficulty === "EASY"
                        ? "bg-green-500"
                        : problem?.difficulty === "MEDIUM"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    } text-white`}
                  >
                    {problem?.difficulty}
                  </Badge>
                  <HoverCard>
                    <HoverCardTrigger className="text-sm text-white">
                      <Badge className={""} variant={"outline"}>
                        Tags
                      </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-2">
                      <div className="flex flex-wrap gap-2">
                        {problem?.tags?.map((tag, index) => (
                          <Badge variant={"outline"} key={index}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </span>
                <p className="mb-8">
                  {problem ? problem.description : "Loading..."}
                </p>

                <hr />
                <div className="my-8">
                  {problem &&
                    problem?.examples &&
                    problem?.examples?.length > 0 &&
                    problem?.examples?.map(
                      ({ input, output, explanation }, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-semibold mb-2 mt-4">
                            Example {index + 1}
                          </h3>
                          <div className="mb-4 pl-4 border-l-2 border-gray-500">
                            <p className="mb-2">
                              <strong>Input:</strong> {input}
                            </p>
                            <p className="mb-2">
                              <strong>Output:</strong> {output}
                            </p>
                            {explanation && (
                              <p className="text-sm text-gray-500">
                                <strong>Explanation:</strong> {explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    )}
                </div>

                <hr />

                {problem && problem?.constraints && (
                  <div className="my-8">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 my-8">
                      <Lock className="size-4" /> Constraints
                    </h3>
                    <p>
                      {problem.constraints?.split("\\n")?.map((str, index) => (
                        <span className="block" key={index}>
                          {str}
                        </span>
                      ))}
                    </p>
                  </div>
                )}

                <hr />
                {problem && problem?.hints && (
                  <>
                    <h3 className="text-xl font-semibold flex items-center gap-2 mt-8">
                      <Lightbulb className="size-4" /> Hints
                    </h3>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full mb-8"
                    >
                      {problem.hints.map((hint, index) => (
                        <AccordionItem
                          key={index}
                          value={`hint-${index}`}
                          className="border-b"
                        >
                          <AccordionTrigger className="text-lg font-semibold">
                            Hint {index + 1}
                          </AccordionTrigger>
                          <AccordionContent className="pl-2 pt-2 bg-primary/20 rounded-md">
                            {hint}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </>
                )}
              </TabsContent>
            }
            {problem && problem?.editorial && (
              <TabsContent value="editorial" className="h-full">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Editorial</h2>
                  <p>{problem.editorial}</p>
                </div>
              </TabsContent>
            )}
            {problem && problem?.referenceSolution && (
              <TabsContent value="solution" className="h-full">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4 ">
                    Reference Solution
                  </h2>
                  {/* {Object?.entries(problem?.referenceSolution)?.map(
                    ([lang, solution], idx) => (
                      <div
                        className="relative bg-gray-800 mt-4 p-2 rounded-md"
                        key={lang}
                      >
                        <span className="flex items-center justify-between mb-2">
                          <h3>{lang}</h3>
                          <Copy
                            className="text-gray-400  size-4 cursor-pointer "
                            onClick={() => {
                              navigator.clipboard.writeText(text).then(() => {
                                toast.success("Code copied successfully!");
                              });
                            }}
                          />
                        </span>
                        <Editor
                          height="400px"
                          defaultLanguage={lang?.toLowerCase()}
                          defaultValue={solution}
                          theme="hc-black"
                          options={{
                            readOnly: true,
                            minimap: { enabled: false },
                            lineNumbers: "on",
                            scrollBeyondLastLine: false,
                            renderLineHighlight: "none",
                            contextmenu: false,
                            wordWrap: "on",
                            backgroundColor: "black",
                          }}
                        />
                      </div>
                    )
                  )} */}
                  <Tabs
                    defaultValue={Object.keys(problem?.referenceSolution)[0]}
                    className="w-full"
                  >
                    <TabsList className="">
                      {Object.keys(problem?.referenceSolution).map((lang) => (
                        <TabsTrigger key={lang} value={lang}>
                          {lang}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {Object.entries(problem?.referenceSolution).map(
                      ([lang, solution]) => (
                        <TabsContent key={lang} value={lang} className="h-full">
                          <div className="relative bg-gray-800 mt-4 p-2 rounded-md">
                            <span className="flex items-center justify-between mb-2">
                              <h3>{lang}</h3>
                              <Copy
                                className="text-gray-400 size-4 cursor-pointer"
                                onClick={() => {
                                  navigator.clipboard
                                    .writeText(solution)
                                    .then(() => {
                                      toast.success(
                                        "Code copied successfully!"
                                      );
                                    });
                                }}
                              />
                            </span>
                            <Editor
                              height="400px"
                              defaultLanguage={lang.toLowerCase()}
                              defaultValue={solution}
                              theme="hc-black"
                              options={{
                                readOnly: true,
                                minimap: { enabled: false },
                                lineNumbers: "on",
                                scrollBeyondLastLine: false,
                                renderLineHighlight: "none",
                                contextmenu: false,
                                wordWrap: "on",
                                backgroundColor: "black",
                              }}
                            />
                          </div>
                        </TabsContent>
                      )
                    )}
                  </Tabs>
                </div>
              </TabsContent>
            )}

            <TabsContent
              value="submissions"
              className=" bg-primary/10 rounded-xl"
            >
              <div className="p-4">
                <h2 className="text-2xl font-bold ">Submissions</h2>
              </div>
              <hr />

              {userSubmissions && userSubmissions.length > 0 ? (
                <></>
              ) : (
                <div className="flex flex-col items-center justify-center ">
                  <BringToFront className="text-gray-500/20 size-50 mt-8" />
                  <h1 className="text-2xl font-bold text-gray-600">Nothing To Display</h1>
                </div>
              )}
            </TabsContent>

            {/* {problem?.testCases && (
              <Tabs Content defaultValue="test-1" className="h-full">
                <TabsList className="">
                  {problem?.testCases?.map((_, idx) => (
                    <TabsTrigger
                      key={idx}
                      value={`test-${idx + 1}`}
                      // className={""}
                    >
                      Test Case {idx + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {problem?.testCases?.map(({ input, output }, idx) => (
                  <TabsContent key={idx} value={`test-${idx + 1}`} className={"bg-primary/10 p-4"}>
                    <span className="flex gap-2 ">
                      <p className="font-bold">Input :</p>
                      <span>{input?.split(" ").join("\t")}</span>
                    </span>
                    <span className="flex gap-2 mt-4">
                      <p className="font-bold">Output :</p>
                      <span>{output}</span>
                    </span>
                  </TabsContent>
                ))}
              </Tabs>
            )} */}
          </Tabs>
        </div>
        <div className="col-span-1 w-full min-h-[600px]">
          <Select
            defaultValue="CPP"
            className="w-full my-4"
            onValueChange={(value) => {
              setSelectedLanguage(value);
            }}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="CPP">C++</SelectItem>
                <SelectItem value="PYTHON">Python</SelectItem>
                <SelectItem value="JAVASCRIPT">JavaScript</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Editor
            key={selectedLanguage} // Add this to force re-rendering when language changes
            height="500px"
            language={selectedLanguage.toLowerCase()} // Use language instead of defaultLanguage
            theme="hc-black"
            options={{
              minimap: { enabled: false },
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              renderLineHighlight: "none",
              contextmenu: false,
              wordWrap: "on",
              backgroundColor: "black",
            }}
            value={problem?.codeSnippets?.[selectedLanguage] || ""} // Use value instead of defaultValue
            onChange={(value) => {
              // If you need to track changes to the editor content
              console.log("Editor content changed:", value);
            }}
          />

          <Tabs defaultValue="test-1" className="mt-4">
            <TabsList>
              {problem?.testCases?.map((_, idx) => (
                <TabsTrigger key={idx} value={`test-${idx + 1}`}>
                  Test Case {idx + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            {problem?.testCases?.map(({ input, output }, idx) => (
              <TabsContent
                key={idx}
                value={`test-${idx + 1}`}
                className="bg-primary/10 p-4"
              >
                <span className="flex gap-2 ">
                  <p className="font-bold">Input :</p>
                  <span>{input?.split(" ").join("\t")}</span>
                </span>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
