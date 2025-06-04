import { Clipboard } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({ codeString, language }) {
  useEffect(() => {
    console.log("Code String:", codeString);
    console.log("Language:", language);
  }, [codeString, language]);
  return (
    <div className="w-full relative">
      <Clipboard
        className="size-4 text-gray-500 absolute  top-2 right-2 cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(codeString);
          toast.success("Code copied to clipboard!");
        }}
      />
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers
        customStyle={{ borderRadius: "8px", fontSize: "14px" }}
        codeTagProps={{
          style: {
            fontFamily: "'Roboto Mono', 'Fira Mono', 'Menlo', 'monospace'",
            fontWeight: 300, // Thin font
          },
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
