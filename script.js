/* ================= DATA ================= */

const EXPERIENCE = [
  {
    org: "Torc Robotics",
    role: "Senior Machine Learning Engineer",
    date: "Apr 2025 — Present",
    open: true,
    bullets: [
      "Building generative AI models for scalable, closed-loop behavior simulation of autonomous driving systems.",
      "Developing reinforcement-learning approaches for driving behavior generation and policy evaluation at scale.",
      "Designing lightweight proxy models and inference pipelines to accelerate closed-loop training and evaluation.",
      "Supporting ML-based behavior planning for autonomous trucks, with a focus on safety and deployment readiness.",
      "Translating research prototypes into production-ready pipelines in a fast-paced, deadline-driven environment."
    ]
  },
  {
    org: "Honda Research Institute (HRI)",
    role: "Research Scientist",
    date: "Aug 2022 — Apr 2025",
    open: false,
    bullets: [
      "Developed cooperative motion planning for assistive highway lane changes using model predictive control.",
      "Built interaction-aware frameworks for autonomous highway merging under heavy traffic.",
      "Designed interaction-aware motion planners for single and multi-robot social navigation in dynamic crowds.",
      "Directed research on multi-robot task allocation and curriculum learning for generalizable MARL policies.",
      "Mentored 10+ interns and collaborated with academic partners on human-AI teaming research."
    ]
  },
  {
    org: "University of Delaware",
    role: "Ph.D., Mechanical Engineering (Control & Robotics)",
    date: "Aug 2017 — Aug 2022",
    open: false,
    bullets: [
      "Developed decentralized optimal-control frameworks for coordinating connected and automated vehicles.",
      "Built decentralized reinforcement-learning frameworks for signal-free intersections and highway merging.",
      "Designed and led a 50+ vehicle scaled smart city testbed for real-time validation of mobility algorithms.",
      "Best Dissertation Award, Mechanical Engineering Department, University of Delaware."
    ]
  }
];

const RESEARCH_AREAS = [
  {
    title: "Generative AI & Behavior Simulation",
    desc: "Controllable generative models for scalable, closed-loop simulation of driving behavior.",
    icon: "gen"
  },
  {
    title: "Reinforcement Learning & Multi-Agent Systems",
    desc: "RL and MARL for coordination, credit assignment, and generalizable policies across agents.",
    icon: "marl"
  },
  {
    title: "Motion Planning & Optimal Control",
    desc: "Model-based and learning-based planners for merging, lane changes, and CAV coordination.",
    icon: "planning"
  },
  {
    title: "Social & Multi-Robot Navigation",
    desc: "Interaction-aware planners for robots navigating dynamic crowds and multi-robot task allocation.",
    icon: "social"
  },
  {
    title: "Language-Grounded MARL",
    desc: "Using LLMs for credit assignment and interpretable communication in multi-agent teams.",
    icon: "llm"
  },
  {
    title: "Sim-to-Real Transfer",
    desc: "Zero-shot policy transfer from simulation to scaled and real-world robotic testbeds.",
    icon: "transfer"
  }
];

const PUBLICATIONS = [
  {
    tag: "Generative AI",
    title: "ScenarioControl: Vision-Language Controllable Vectorized Latent Scenario Generation",
    venue: "arXiv preprint, 2026 (Torc Robotics)",
    tldr: "A vision-language controllable generative framework for creating driving scenarios, supporting scalable behavior simulation for autonomous trucks.",
    link: "https://arxiv.org/abs/2604.17147",
    icon: "gen"
  },
  {
    tag: "Multi-Agent RL",
    title: "R3DM: Role Discovery and Diversity Through Dynamics Models in MARL",
    venue: "ICML (PMLR vol. 267), 2025",
    tldr: "Uses learned dynamics models to discover and encourage diverse agent roles, improving coordination in multi-agent reinforcement learning.",
    link: "https://proceedings.mlr.press/v267/goel25a.html",
    icon: "marl"
  },
  {
    tag: "Motion Planning",
    title: "SMART-Merge Planner: A Safe, Real-Time Highway On-Ramp Merge Planner",
    venue: "IEEE ITSC, 2025",
    tldr: "A real-time motion planner for safe autonomous highway on-ramp merging under realistic traffic interaction.",
    link: "https://arxiv.org/abs/2507.10968",
    icon: "planning"
  },
  {
    tag: "Motion Prediction",
    title: "DI3: Dynamic Insertable Intention Interval-Based Future Motion Prediction",
    venue: "IEEE Intelligent Vehicles Symposium (IV), 2025",
    tldr: "Predicts future vehicle motion using dynamically insertable intention intervals, improving prediction for autonomous driving.",
    link: "#",
    icon: "prediction"
  },
  {
    tag: "Language-Grounded MARL",
    title: "Speaking the Language of Teamwork: LLM-Guided Credit Assignment in MARL",
    venue: "NeurIPS ARLET Workshop, 2025",
    tldr: "Uses large language models to guide credit assignment across agents, improving learning efficiency in multi-agent reinforcement learning.",
    link: "https://arxiv.org/abs/2502.03723",
    icon: "llm"
  },
  {
    tag: "Social Navigation",
    title: "Multi-Robot Cooperative Navigation in Crowds: A Game-Theoretic MPC Approach",
    venue: "IEEE ICRA, 2024",
    tldr: "Combines game theory with model predictive control and learned human trajectory prediction for multi-robot navigation through crowds.",
    link: "https://ieeexplore.ieee.org/abstract/document/10611204",
    icon: "social"
  },
  {
    tag: "Cooperative Control",
    title: "Minimally Disruptive Cooperative Lane-Change Maneuvers",
    venue: "IEEE Control Systems Letters, 2023",
    tldr: "An optimization framework for cooperative lane changes that minimizes disruption to surrounding highway traffic.",
    link: "https://ieeexplore.ieee.org/document/10131960",
    icon: "planning"
  },
  {
    tag: "Optimal Control",
    title: "Time-Optimal Coordination for CAVs at Adjacent Intersections",
    venue: "IEEE Trans. on Intelligent Transportation Systems, 2022",
    tldr: "A decentralized optimal control framework coordinating connected vehicles across adjacent signal-free intersections.",
    link: "https://ieeexplore.ieee.org/document/9611165",
    icon: "control"
  },
  {
    tag: "Systems & Testbeds",
    title: "A Digital Smart City for Emerging Mobility Systems",
    venue: "IEEE Digital Twins & Parallel Intelligence, 2022 — Best Paper Award",
    tldr: "Describes a digital-twin smart city testbed used to validate mobility algorithms alongside a physical scaled deployment.",
    link: "https://www.researchgate.net/publication/354596132_A_Digital_Smart_City_for_Emerging_Mobility_Systems",
    icon: "systems"
  },
  {
    tag: "Sim-to-Real",
    title: "Zero-Shot Autonomous Vehicle Policy Transfer: Simulation to Real-World via Adversarial Learning",
    venue: "IEEE ICCA, 2020 — Best Student Paper (Finalist)",
    tldr: "Demonstrates zero-shot transfer of RL driving policies from simulation to a real scaled vehicle testbed using adversarial learning.",
    link: "https://ieeexplore.ieee.org/document/9264552",
    icon: "transfer"
  }
];

const PATENTS = [
  { title: "Systems and Methods for Swarm Invitation Based on Social Values", num: "US Patent 12,494,130 · Granted 2025" },
  { title: "Systems and Methods for Robot Navigation", num: "US App. 18/907,188" },
  { title: "Systems and Methods for Swarm Adaptation Based on Social Value Orientations", num: "US App. 18/477,897" }
];

const SKILLS = [
  { group: "Research", items: ["Generative AI", "Reinforcement learning", "Multi-agent systems", "Behavior simulation", "Optimal control"] },
  { group: "Programming", items: ["Python", "C++", "MATLAB/Simulink", "C#"] },
  { group: "ML & Optimization", items: ["PyTorch", "Ray", "Anyscale", "Scikit-learn", "Ollama", "CasADi"] },
  { group: "Robotics & Simulation", items: ["ROS", "Unity", "PreScan", "PTV VISSIM"] }
];

/* ================= ICONS ================= */

const ICONS = {
  gen: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="24" r="4"/><circle cx="24" cy="12" r="4"/><circle cx="24" cy="36" r="4"/><circle cx="38" cy="24" r="4"/><path d="M16 24h4M27 15l5 6M27 33l5-6M20 15l0 0"/></svg>`,
  marl: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="14" cy="16" r="4"/><circle cx="34" cy="16" r="4"/><circle cx="14" cy="34" r="4"/><circle cx="34" cy="34" r="4"/><path d="M17 17l14 14M31 17l-14 14M14 20v10M34 20v10M18 16h12M18 34h12"/></svg>`,
  planning: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 40C14 40 12 22 20 20C28 18 24 8 40 8" stroke-dasharray="3 3"/><circle cx="6" cy="40" r="2.5" fill="currentColor" stroke="none"/><circle cx="40" cy="8" r="2.5" fill="currentColor" stroke="none"/></svg>`,
  social: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="10" r="4"/><path d="M16 30c0-6 4-10 8-10s8 4 8 10"/><circle cx="8" cy="34" r="3"/><circle cx="40" cy="34" r="3"/><path d="M8 34v6M40 34v6M14 38h20"/></svg>`,
  llm: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="10" width="20" height="14" rx="3"/><path d="M12 24l-2 6 8-6"/><circle cx="34" cy="30" r="3"/><circle cx="42" cy="24" r="3"/><circle cx="42" cy="36" r="3"/><path d="M31 29l8-4M31 31l8 4"/></svg>`,
  transfer: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="16" width="14" height="14" rx="2" stroke-dasharray="2 2"/><rect x="30" y="16" width="14" height="14" rx="2"/><path d="M20 23h8M25 20l3 3-3 3"/></svg>`,
  prediction: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 30C14 30 14 14 22 14"/><path d="M22 14L40 6M22 14L42 18M22 14L38 30" stroke-dasharray="2 2"/></svg>`,
  control: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 16h40M4 32h40M16 4v40M32 4v40"/><rect x="10" y="20" width="6" height="6" fill="currentColor" stroke="none"/><rect x="32" y="10" width="6" height="6" fill="currentColor" stroke="none"/></svg>`,
  systems: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="26" width="8" height="14"/><rect x="20" y="18" width="8" height="22"/><rect x="34" y="10" width="8" height="30"/></svg>`
};

/* ================= TYPEWRITER ================= */

const PHRASES = [
  "Generative AI for autonomous driving.",
  "Research shipped into production.",
  "Reinforcement learning at scale."
];

function typewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = PHRASES[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 42);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 22);
    }
  }
  tick();
}

/* ================= HERO TRAJECTORY DOT ================= */

function animateTrajectory() {
  const path = document.getElementById("traj-path");
  const dot = document.getElementById("traj-dot");
  if (!path || !dot) return;
  const len = path.getTotalLength();
  let t = 0;
  function step() {
    t += 0.0025;
    if (t > 1) t = 0;
    const pt = path.getPointAtLength(t * len);
    dot.setAttribute("cx", pt.x);
    dot.setAttribute("cy", pt.y);
    requestAnimationFrame(step);
  }
  step();
}

/* ================= SCROLL REVEAL ================= */

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => obs.observe(el));
}

/* ================= RENDER: TIMELINE ================= */

function renderTimeline() {
  const container = document.getElementById("timeline");
  EXPERIENCE.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "tl-item" + (item.open ? " open" : "");
    div.innerHTML = `
      <div class="tl-head" data-index="${i}">
        <div class="tl-org-block">
          <span class="tl-org">${item.org}</span>
          <span class="tl-role">${item.role}</span>
        </div>
        <div style="display:flex; align-items:center; gap:16px;">
          <span class="tl-date">${item.date}</span>
          <span class="tl-chevron">&#9662;</span>
        </div>
      </div>
      <div class="tl-body">
        <div class="tl-body-inner">
          <ul>${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  container.querySelectorAll(".tl-head").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.parentElement;
      const body = item.querySelector(".tl-body");
      const isOpen = item.classList.contains("open");
      if (isOpen) {
        body.style.maxHeight = null;
        item.classList.remove("open");
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
    if (head.parentElement.classList.contains("open")) {
      const body = head.parentElement.querySelector(".tl-body");
      requestAnimationFrame(() => { body.style.maxHeight = body.scrollHeight + "px"; });
    }
  });
}

/* ================= RENDER: RESEARCH GRID ================= */

function renderResearch() {
  const container = document.getElementById("research-grid");
  RESEARCH_AREAS.forEach((area) => {
    const div = document.createElement("div");
    div.className = "research-card";
    div.innerHTML = `
      <div class="research-icon">${ICONS[area.icon] || ""}</div>
      <h3>${area.title}</h3>
      <p>${area.desc}</p>
    `;
    container.appendChild(div);
  });
}

/* ================= RENDER: PUBLICATIONS ================= */

function renderPublications() {
  const container = document.getElementById("pub-scroll");
  PUBLICATIONS.forEach((pub) => {
    const div = document.createElement("div");
    div.className = "pub-card";
    div.innerHTML = `
      <div class="pub-thumb">${ICONS[pub.icon] || ""}</div>
      <div class="pub-body">
        <p class="pub-tag">${pub.tag}</p>
        <h3 class="pub-title">${pub.title}</h3>
        <p class="pub-venue">${pub.venue}</p>
        <p class="pub-tldr">${pub.tldr}</p>
        <a class="pub-link" href="${pub.link}" target="_blank" rel="noopener">Read paper &rarr;</a>
      </div>
    `;
    container.appendChild(div);
  });
}

/* ================= RENDER: PATENTS ================= */

function renderPatents() {
  const container = document.getElementById("patent-list");
  PATENTS.forEach((p) => {
    const div = document.createElement("div");
    div.className = "patent-item";
    div.innerHTML = `
      <span class="patent-title">${p.title}</span>
      <span class="patent-num">${p.num}</span>
    `;
    container.appendChild(div);
  });
}

/* ================= RENDER: SKILLS ================= */

function renderSkills() {
  const container = document.getElementById("skills-grid");
  SKILLS.forEach((group) => {
    const div = document.createElement("div");
    div.className = "skill-group";
    div.innerHTML = `
      <h3>${group.group}</h3>
      <div class="skill-tags">
        ${group.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}
      </div>
    `;
    container.appendChild(div);
  });
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderResearch();
  renderPublications();
  renderPatents();
  renderSkills();
  typewriter();
  animateTrajectory();
  initReveal();
});
