import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
import { useProblemStore } from "@/store/useProblemStore";

const ProblemPageCodeContainer = ({
  problem,
  setSourceCodeEnteredByUser,
  sourceCodeEnteredByUser,
  selectedLanguage,
  setSelectedLanguage,
  codeRunResult,
}) => {
  return (
    <div>
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
        height="550px"
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
        value={sourceCodeEnteredByUser[selectedLanguage] || ""} // Use value instead of defaultValue
        onChange={(value) => {
          setSourceCodeEnteredByUser((prev) => ({
            ...prev,
            [selectedLanguage]: value,
          }));
        }}
      />

      <Tabs defaultValue="test-1" className="mt-4">
        <TabsList className={"flex gap-4"}>
          {problem?.testCases?.map((_, idx) => (
            <TabsTrigger
              key={idx}
              value={`test-${idx + 1}`}
              className={"relative"}
            >
              Test Case {idx + 1}
              {codeRunResult && codeRunResult.length > 0 && (
                <span
                  className={`absolute size-4 -top-2 -right-2 ${
                    codeRunResult[idx].status === "Accepted"
                      ? "bg-green-500"
                      : "bg-red-500"
                  } rounded-full`}
                ></span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        {problem?.testCases?.map(({ input, output }, idx) => (
          <TabsContent
            key={idx}
            value={`test-${idx + 1}`}
            className="bg-primary/10 p-4"
          >
            {codeRunResult &&
              codeRunResult.length > 0 &&
              codeRunResult[idx].status && (
                <span
                  className={`text-xl font-bold ${
                    codeRunResult[idx].status === "Accepted"
                      ? "text-green-400"
                      : "text-red-500"
                  }`}
                >
                  {codeRunResult[idx].status}
                </span>
              )}
            <span className="flex gap-2 ">
              <p className="font-bold">Input :</p>
              <span>{input?.split(" ").join("\t")}</span>
            </span>
            {codeRunResult &&
              codeRunResult.length > 0 &&
              codeRunResult[idx].compile_output && (
                <span className="flex flex-col my-4">
                  <span className="text-lg font-semibold text-gray">Execution description</span>
                  <span>{codeRunResult[idx].compile_output}</span>
                </span>
              )}

            {codeRunResult && codeRunResult.length > 0 && (
              <span className="grid grid-cols-2 gap-4">
                <span className="flex flex-col bg-black/30  p-4">
                  <span className="text-xl font-semibold ">Your Output</span>
                  <span className="block mt-4">
                    {codeRunResult[idx].output}
                  </span>
                </span>
                <span className="flex flex-col bg-black/30  p-4">
                  <span className="text-xl font-semibold">Expected Output</span>
                  <span className="block mt-4">
                    {codeRunResult[idx].expected_output}
                  </span>
                </span>
              </span>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProblemPageCodeContainer;
