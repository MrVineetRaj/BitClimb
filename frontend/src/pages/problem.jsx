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
import ProblemPageDetailContainer from "@/components/problem/problem-page-detail-container";
import ProblemPageCodeContainer from "@/components/problem/problem-page-code-container";

const ProblemPage = () => {
  const { getProblemById, getUserSubmissionsPerProblem } = useProblemStore();
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
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
          <ProblemPageDetailContainer
            problem={problem}
            userSubmissions={userSubmissions}
          />
        </div>
        <div className="col-span-1 w-full min-h-[600px]">
          <ProblemPageCodeContainer problem={problem} />
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
