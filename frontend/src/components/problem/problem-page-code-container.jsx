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

const ProblemPageCodeContainer = ({ problem }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("CPP");
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
  );
};

export default ProblemPageCodeContainer;
