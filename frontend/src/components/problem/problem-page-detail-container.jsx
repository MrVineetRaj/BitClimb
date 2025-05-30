import {
  BringToFront,
  Calendar,
  Clock,
  Copy,
  Lightbulb,
  Lock,
  MemoryStick,
  SquareArrowOutUpRight,
  Stars,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Editor } from "@monaco-editor/react";
import { toast } from "sonner";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import SubmissionAnalysis from "./submission-analysis";
import ProblemSubmissionContainer from "./problem-submission-container";

const ProblemPageDetailContainer = ({
  problem,
  userSubmissions,
  submitCodeResult,
  fetchSubmissionsByProblem,
}) => {
  const [activeTab, setActiveTab] = useState("submissions");

  useEffect(() => {
    if (submitCodeResult) {
      console.log("Submit Code Result:", submitCodeResult);
      setActiveTab("submissions");
    }
  }, [submitCodeResult]);

  return (
    <Tabs value={activeTab} className=" h-full">
      <TabsList className="">
        <TabsTrigger
          value="description"
          onClick={() => {
            setActiveTab("description");
          }}
        >
          Description
        </TabsTrigger>
        {problem && problem?.editorial && (
          <TabsTrigger
            value="editorial"
            onClick={() => {
              setActiveTab("editorial");
            }}
          >
            Editorial
          </TabsTrigger>
        )}
        {problem && problem?.referenceSolution && (
          <TabsTrigger
            value="solution"
            onClick={() => {
              setActiveTab("solution");
            }}
          >
            Solution
          </TabsTrigger>
        )}

        {problem && (
          <TabsTrigger
            value="submissions"
            onClick={() => {
              setActiveTab("submissions");
            }}
          >
            Submissions
          </TabsTrigger>
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
          <p className="mb-8">{problem ? problem.description : "Loading..."}</p>

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
              <Accordion type="single" collapsible className="w-full mb-8">
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
            <h2 className="text-2xl font-bold mb-4 ">Reference Solution</h2>
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
                            navigator.clipboard.writeText(solution).then(() => {
                              toast.success("Code copied successfully!");
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
        className=" bg-primary/10 rounded-xl p-4 pr-2 max-h-[700px] "
      >
        <ProblemSubmissionContainer
          userSubmissions={userSubmissions}
          problemDescription={problem?.description}
          fetchSubmissionsByProblem={fetchSubmissionsByProblem}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProblemPageDetailContainer;
