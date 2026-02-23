const jobs = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000",
    description: "Build modern UI applications.",
    status: "all"
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Backend Developer",
    location: "USA",
    type: "Full-time",
    salary: "$130,000",
    description: "Develop scalable APIs.",
    status: "all"
  },
  {
    id: 3,
    company: "Amazon",
    position: "Cloud Engineer",
    location: "Canada",
    type: "Full-time",
    salary: "$125,000",
    description: "Work with AWS infrastructure.",
    status: "all"
  },
  {
    id: 4,
    company: "Meta",
    position: "React Developer",
    location: "UK",
    type: "Contract",
    salary: "$110,000",
    description: "Develop interactive UI components.",
    status: "all"
  },
  {
    id: 5,
    company: "Netflix",
    position: "UI Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$115,000",
    description: "Design streaming interfaces.",
    status: "all"
  },
  {
    id: 6,
    company: "Tesla",
    position: "Software Engineer",
    location: "USA",
    type: "Full-time",
    salary: "$140,000",
    description: "Build AI systems.",
    status: "all"
  },
  {
    id: 7,
    company: "Adobe",
    position: "UX Designer",
    location: "Germany",
    type: "Part-time",
    salary: "$90,000",
    description: "Create user-friendly designs.",
    status: "all"
  },
  {
    id: 8,
    company: "Spotify",
    position: "Mobile Developer",
    location: "Sweden",
    type: "Full-time",
    salary: "$100,000",
    description: "Develop music streaming app.",
    status: "all"
  }
];

const container = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCountText = document.getElementById("jobCountText");
const emptyState = document.getElementById("emptyState");
const tabs = document.querySelectorAll(".tab-btn");
