import { Crown, Target, User, Code } from "lucide-react";

const DSA_TAGS = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks",
  "Graphs",
  "Trees",
  "Binary Search",
  "Dynamic Programming",
  "Recursion",
  "Sorting",
  "Hashing",
  "Greedy Algorithms",
  "Backtracking",
  "Bit Manipulation",
  "Heaps",
  "Queues",
  "Maths",
];

const COMPANY_TAGS = ["Uber", "Morgan Stanley", "Zoho", "Reddit"];

const DUMMY_CONTESTS = [
  {
    title: "Array Power-up",
    startTime: "2023-10-01T10:00:00Z",
  },
  {
    title: "Set Power-up",
    startTime: "2023-10-01T10:00:00Z",
  },
  {
    title: "DSA is MATHing",
    startTime: "2023-10-01T10:00:00Z",
  },
];

const ADMIN_OPTIONS = [
  {
    title: "Problems",
    button: "Create Problem",
    icon: Code,
    count: 0,
    path: "/admin/panel/create-problem",
    isDisabled: false,
  },
  {
    title: "Contests",
    button: "Create Contest",
    icon: Target,
    count: 0,
    path: "/admin/panel/create-contest",
    isDisabled: false,
  },
  {
    title: "Users",
    button: "Manage User",
    icon: User,
    count: 0,
    path: "/admin/panel/manage-user",
    isDisabled: true,
  },
  {
    title: "Admin",
    button: "Manage Admin",
    icon: Crown,
    count: 0,
    path: "/admin/panel/manage-admin",
    isDisabled: true,
  },
];

export { DSA_TAGS, COMPANY_TAGS, DUMMY_CONTESTS, ADMIN_OPTIONS };
