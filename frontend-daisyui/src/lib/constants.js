import { Crown, Target, User, Code } from "lucide-react";

const DSA_TAGS = [
  "Math",
  "String",
  "Two Pointers",
  "Dynamic Programming",
  "Recursion",
  "Array",
  "Sorting",
  "Linear Search",
  "Search",
  "Bit Manipulation",
];

const COMPANY_TAGS = [
  "Google",
  "Microsoft",
  "Facebook",
  "Amazon",
  "Apple",
  "Netflix",
  "TechCorp",
  "Flipkart",
  "Paytm",
  "IBM",
  "Oracle",
  "Salesforce",
  "Capgemini",
  "Tesla",
  "Spotify",
  "Uber",
  "Adobe",
  "Twitter",
  "Wipro",
  "Intel",
  "Qualcomm",
  "TCS",
];


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
    isDisabled: true,
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
