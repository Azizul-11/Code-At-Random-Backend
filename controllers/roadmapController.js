exports.roadmap = (req, res) => {
  const role = req.body.targetRole?.toLowerCase();

  if (!role) {
    return res.status(400).json({ error: "Missing role" });
  }

  const mockRoadmaps = {
    "backend developer": [
      "Phase 1 (1–2 months): Java basics, OOP, Git",
      "Phase 2 (2 months): Spring Boot, SQL, APIs",
      "Phase 3 (1–2 months): Deployment, projects, system design basics"
    ],
    "frontend developer": [
      "Phase 1 (1–2 months): HTML, CSS, JS",
      "Phase 2 (2 months): React, Git, APIs",
      "Phase 3 (1–2 months): Deployment, projects, UI patterns"
    ],
    "data analyst": [
      "Phase 1: Excel, SQL",
      "Phase 2: Python, Statistics",
      "Phase 3: Dashboards, case studies"
    ]
  };

  const roadmap = mockRoadmaps[role];

  if (!roadmap) {
    return res.status(404).json({ error: "Role not found" });
  }

  res.json({ roadmap });
};
