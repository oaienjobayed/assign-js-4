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

let activeTab = "all";

function renderJobs() {
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    activeTab === "all" ? true : job.status === activeTab
  );

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "border rounded-lg p-5 bg-gray-50";

    card.innerHTML = `
      <h3 class="font-bold">${job.company}</h3>
      <p class="text-sm text-gray-600">${job.position}</p>
      <p class="text-sm text-gray-500 mt-1">
        ${job.location} . ${job.type} . ${job.salary}
      </p>

      <p class="text-sm text-gray-500 mt-3">
        ${job.description}
      </p>

      <div class="flex gap-3 mt-4">
        <button onclick="updateStatus(${job.id}, 'interview')" 
          class="px-3 py-1 text-sm border border-green-500 text-green-600 rounded">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')" 
          class="px-3 py-1 text-sm border border-red-500 text-red-600 rounded">
          Rejected
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, newStatus) {
  const job = jobs.find(j => j.id === id);

  if (job.status === newStatus) {
    job.status = "all";
  } else {
    job.status = newStatus;
  }

  renderJobs();
}

function updateDashboard() {
  totalCount.textContent = jobs.length;
  interviewCount.textContent = jobs.filter(j => j.status === "interview").length;
  rejectedCount.textContent = jobs.filter(j => j.status === "rejected").length;
  jobCountText.textContent = `${jobs.length} jobs`;
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;

    tabs.forEach(t => {
      t.classList.remove("bg-blue-600", "text-white");
      t.classList.add("bg-blue-600");
    });

    tab.classList.add("bg-blue-600", "text-white");
    renderJobs();
  });
});

renderJobs();
