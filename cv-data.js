/* ================= EMPLOYMENT (full) ================= */

const CV_EMPLOYMENT = [
  {
    org: "Torc Robotics", role: "Senior Machine Learning Engineer", date: "April 2025 — Present",
    groups: [
      { head: "Generative AI for scalable behavior simulation", items: [
        "Contributing to the development and integration of generative AI models for scalable behavior simulation, enabling closed-loop training and evaluation of autonomous driving systems.",
        "Developing reinforcement learning (RL)-based approaches for autonomous driving behavior generation and policy evaluation in large-scale simulation environments.",
        "Designing lightweight proxy models and inference pipelines to accelerate closed-loop simulation and improve the scalability of training and evaluation workflows."
      ]},
      { head: "ML-based behavior planning & collaboration", items: [
        "Supporting the development of ML-based behavior planning algorithms for autonomous trucks, with a focus on safety, scalability, and deployment readiness.",
        "Collaborating cross-functionally with stakeholders to deliver generative AI-powered solutions that enhance behavior modeling and accelerate development cycles."
      ]},
      { head: "Publications", items: [
        "Co-authored ScenarioControl, a vision-language controllable generative framework for driving scenario generation supporting scalable behavior simulation (2026)."
      ]}
    ]
  },
  {
    org: "Honda Research Institute (HRI)", role: "Research Scientist", date: "August 2022 — April 2025",
    groups: [
      { head: "Cooperative driving", items: [
        "Developed cooperative motion planning algorithms for assistive lane changes on highways, leveraging model predictive control (MPC) for robust and efficient solutions."
      ]},
      { head: "Autonomous driving", items: [
        "Conducted research on assistive merge features for autonomous vehicles, developing an interaction-aware framework to enable safe and efficient merges under heavy traffic.",
        "Contributed to software development in the autonomous driving stack for motion planning, enhancing various planners, including lattice-based, optimization-based, and sampling-based approaches.",
        "Supported research on prediction-module features for assistive merge, including new driver models and intent prediction for highway merging scenarios."
      ]},
      { head: "Social navigation", items: [
        "Conducted and directed research on interaction-aware motion planners for single and multiple robots navigating dynamic crowds, ensuring socially-conscious and efficient behavior.",
        "Designed and implemented motion planners including game-theoretic optimization-based planners with social-LSTM predictions, sampling-based approaches, and RL-based frameworks.",
        "Led research applying curriculum learning to enhance generalizability of RL-based navigation algorithms across diverse and unseen scenarios."
      ]},
      { head: "Multi-robot systems", items: [
        "Executed and directed research on task allocation frameworks for multi-robot systems using market-based and graph-based methodologies.",
        "Conducted and led research on knowledge transfer and curriculum learning to enhance generalizability of RL and MARL algorithms across diverse and unseen scenarios."
      ]},
      { head: "Publications and patents", items: [
        "Authored and published 13 papers in leading journals and conferences (Automatica, LCSS, CDC, HRI, NeurIPS, EMNLP, ICRA, IROS, IV, ITSC) advancing motion planning, navigation, and multi-robot systems.",
        "Filed 7 patents covering autonomous vehicles, human-AI teaming, motion planning, and socially-aware robotics."
      ]},
      { head: "Leadership & collaboration", items: [
        "Mentored and supervised 10+ interns on research and development projects in motion planning, decision-making frameworks, and multi-robot systems.",
        "Managed interdisciplinary research projects, coordinating efforts across teams and aligning with organizational objectives.",
        "Collaborated with academic partners on frameworks improving coordination, decision-making, adaptability, and interpretability in human-AI teamwork."
      ]}
    ]
  },
  {
    org: "University of Delaware", role: "Graduate Research Assistant", date: "August 2017 — July 2022",
    groups: [
      { head: "Decentralized optimal coordination for CAVs", items: [
        "Developed optimal control frameworks for coordinating connected and automated vehicles across intersections, merging roadways, and roundabouts to improve traffic flow and safety.",
        "Formulated vehicle motion planning as a scheduling problem, solved via mixed-integer linear programming with IBM CPLEX.",
        "Established receding horizon control frameworks generating safe, optimal vehicle trajectories across diverse traffic scenarios.",
        "Conducted simulations of traffic scenarios using VISSIM and PreScan."
      ]},
      { head: "Machine learning for transportation efficiency", items: [
        "Applied Q-learning to coordinate CAVs at signal-free intersections as a decentralized reinforcement learning problem.",
        "Used Gaussian processes to learn deviations from nominal trajectories in CAV motion planning.",
        "Designed a decentralized multi-agent RL framework (MADDPG) for CAV coordination in complex highway merging."
      ]},
      { head: "Experimental validation at scaled environment", items: [
        "Established a 50+ vehicle scaled smart city testbed for studying emerging mobility systems.",
        "Developed object-oriented C++/Python software for the scaled smart city, plus a Unity digital twin.",
        "Ran real-time experiments validating control frameworks, including last-mile delivery and mixed aerial/ground missions.",
        "Transferred diverse reinforcement learning policies to the physical testbed.",
        "Mentored 10+ high-school, 20+ undergraduate, and 10+ master's students; supervised senior design teams building 25 scaled vehicles."
      ]}
    ]
  },
  {
    org: "Zagross", role: "Intern, R&D Section", date: "June 2016 — May 2017",
    groups: [
      { head: null, items: [
        "Designed and implemented a data acquisition system for monitoring refrigerator temperature and power consumption.",
        "Developed Matlab optimization software to improve water dispenser performance.",
        "Modeled and developed a defrosting system for industrial freezers and refrigerators."
      ]}
    ]
  },
  {
    org: "Turbine Machine Middle-East", role: "Intern, R&D Section", date: "June 2014 — September 2014",
    groups: [
      { head: null, items: [
        "Created CAD models of gas turbine components in CATIA and bills of materials for turbine sub-systems.",
        "Operated a point-cloud scanner to create CAD models of complex components."
      ]}
    ]
  }
];

/* ================= JOURNAL ARTICLES (full) ================= */

const CV_JOURNALS = [
  { authors: "Knaup, J., D'sa, J., <strong>Chalaki, B.</strong>, Mahjoub, H.N., Moradi-Pari, E., Tsiotras, P.", title: "Dual Control for Interactive Autonomous Merging with Model Predictive Diffusion", venue: "In review", year: "2025", link: null, cat: ["control", "av"] },
  { authors: "Le, V. A., <strong>Chalaki, B.</strong>, Tzortzoglou, F. N., Malikopoulos, A. A.", title: "Stochastic time-optimal trajectory planning for CAVs in mixed-traffic merging scenarios", venue: "IEEE Transactions on Control Systems Technology", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10621701", cat: ["control"] },
  { authors: "Armijos, A.S.C., Li, A., Cassandras, C.G., Al-Nadawi, Y.K., Araki, H., <strong>Chalaki, B.</strong>, Moradi-Pari, E., Mahjoub, H.N., Tadiparthi, V.", title: "Cooperative Energy and Time-Optimal Lane Change Maneuvers with Minimal Highway Traffic Disruption", venue: "Automatica, vol. 165, p. 111651", year: "2024", link: "https://www.sciencedirect.com/science/article/abs/pii/S0005109824001444", cat: ["control"] },
  { authors: "<strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., D'sa, J., Moradi-Pari, E., Armijos, A.S.C., Li, A., Cassandras, C.G.", title: "Minimally Disruptive Cooperative Lane-change Maneuvers", venue: "IEEE Control Systems Letters, vol. 7, pp. 1766–1771", year: "2023", link: "https://ieeexplore.ieee.org/document/10131960", cat: ["control"] },
  { authors: "Mahbub, A.M., <strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Constrained Optimal Control Framework for Vehicle Platoons with Delayed Communication", venue: "Networks and Heterogeneous Media, 18(3), pp. 982–1005", year: "2023", link: "https://www.researchgate.net/publication/356281833", cat: ["control"] },
  { authors: "<strong>Chalaki, B.</strong>, Beaver, L. E., Mahbub, A. M., Bang, H., Malikopoulos, A. A.", title: "A Research and Educational Robotic Testbed for Real-time Control of Emerging Mobility Systems: From Theory to Scaled Experiments", venue: "IEEE Control Systems Magazine, 42(6), pp. 20–34", year: "2022", link: "https://ieeexplore.ieee.org/abstract/document/9956778", cat: ["control", "robotics"] },
  { authors: "Bang, H., <strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "Combined Optimal Routing and Coordination of Connected and Automated Vehicles", venue: "IEEE Control Systems Letters, vol. 6, pp. 2749–2754", year: "2022", link: "https://www.researchgate.net/publication/359411336", cat: ["control"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "Time-Optimal Coordination for Connected and Automated Vehicles at Adjacent Intersections", venue: "IEEE Trans. on Intelligent Transportation Systems, vol. 23, no. 8, pp. 13330–13345", year: "2022", link: "https://ieeexplore.ieee.org/document/9611165", cat: ["av"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "Optimal Control of Connected and Automated Vehicles at Multiple Adjacent Intersections", venue: "IEEE Transactions on Control Systems Technology, vol. 30, no. 3, pp. 972–984", year: "2022", link: "https://ieeexplore.ieee.org/document/9444611", cat: ["control"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Priority-Aware Replanning and Resequencing Framework for Coordination of Connected and Automated Vehicles", venue: "IEEE Control Systems Letters, vol. 6, pp. 1772–1777", year: "2022", link: "https://www.researchgate.net/publication/354574331", cat: ["control"] },
  { authors: "Beaver, L. E., <strong>Chalaki, B.</strong>, Mahbub, A. M., Zhao, L., Zayas, R., Malikopoulos, A. A.", title: "Demonstration of a Time-Efficient Mobility System Using a Scaled Smart City", venue: "Vehicle System Dynamics, 58(5), pp. 787–804", year: "2020", link: "https://www.tandfonline.com/doi/abs/10.1080/00423114.2020.1730412", cat: ["av"] }
];

/* ================= CONFERENCE PUBLICATIONS (full) ================= */

const CV_CONFERENCES = [
  { authors: "Gao, L., Xu, Y., Koch, W., Ruffino, S., Rowe, L., <strong>Chalaki, B.</strong>, Rivkin, D., Ost, J., Girgis, R., Bijelic, M., Heide, F.", title: "ScenarioControl: Vision-Language Controllable Vectorized Latent Scenario Generation", venue: "arXiv preprint arXiv:2604.17147", year: "2026", link: "https://arxiv.org/abs/2604.17147", cat: ["ai"] },
  { authors: "Omama, M., Li, P., Goel, H., Choi, M., <strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., Moradi-Pari, E., Chinchali, S.", title: "SSR: A Generic Framework for Text-Aided Map Compression for Localization", venue: "arXiv preprint arXiv:2603.04272", year: "2026", link: "https://arxiv.org/abs/2603.04272", cat: ["ai", "robotics"] },
  { authors: "Goel, H., Omama, M., <strong>Chalaki, B.</strong>, Tadiparthi, V., Moradi-Pari, E., Chinchali, S.", title: "R3DM: Enabling Role Discovery and Diversity Through Dynamics Models in Multi-agent Reinforcement Learning", venue: "ICML (PMLR vol. 267), pp. 19600–19620", year: "2025", link: "https://proceedings.mlr.press/v267/goel25a.html", badge: "ICML", cat: ["ai"] },
  { authors: "Lin, M., Shi, S., Guo, Y., Tadiparthi, V., <strong>Chalaki, B.</strong>, Moradi-Pari, E., Stepputtis, S., Kim, W., Campbell, J., Sycara, K.", title: "Speaking the Language of Teamwork: LLM-Guided Credit Assignment in Multi-Agent Reinforcement Learning", venue: "2nd Workshop on Aligning RL Experimentalists and Theorists (ARLET), NeurIPS", year: "2025", link: null, cat: ["ai"] },
  { authors: "Wen, L., D'sa, J., <strong>Chalaki, B.</strong>, Mahjoub, H. N., Moradi-Pari, E.", title: "DI3: Dynamic Insertable Intention Interval-Based Future Motion Prediction for Autonomous Driving", venue: "IEEE Intelligent Vehicles Symposium (IV), pp. 671–677", year: "2025", link: null, cat: ["av"] },
  { authors: "Baddam, V. R., Tadiparthi, V., <strong>Chalaki, B.</strong>, D'sa, J., Mahjoub, H. N., Moradi-Pari, E., Eldardiry, H., Boker, A.", title: "Step-by-Step to Success: Scalable and Generalizable Multi-Robot Social Navigation", venue: "In review", year: "2025", link: null, cat: ["robotics"] },
  { authors: "Mohammadnejad, T., D'sa, J., <strong>Chalaki, B.</strong>, Mahjoub, H.N., Moradi-Pari, E.", title: "SMART-Merge Planner: A Safe Merging and Real-Time Motion Planner for Autonomous Highway On-Ramp Merge", venue: "28th IEEE Intl. Conf. on Intelligent Transportation Systems (ITSC)", year: "2025", link: "https://arxiv.org/abs/2507.10968", cat: ["av"] },
  { authors: "Baddam, V. R., <strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H. N., Moradi-Pari, E., Eldardiry, H., Boker, A.", title: "In Search of a Lost Metric: Human Empowerment as a Pillar of Socially Conscious Navigation", venue: "ACM/IEEE Intl. Conf. on Human-Robot Interaction (HRI), to appear", year: "2025", link: "https://www.researchgate.net/publication/387745621", cat: ["robotics"] },
  { authors: "Li, H., Mahjoub, H.N., <strong>Chalaki, B.</strong>, Tadiparthi, V., Lee, K., Moradi-Pari, E.M., Lewis, C.M., Sycara, K.P.", title: "Language grounded multi-agent reinforcement learning with human-interpretable communication", venue: "NeurIPS, to appear", year: "2025", link: "https://openreview.net/forum?id=DUHX779C5q", cat: ["ai"] },
  { authors: "Lin, M., Shi, S., Guo, Y., <strong>Chalaki, B.</strong>, Tadiparthi, V., Moradi-Pari, E., Stepputtis, S., Campbell, J., Sycara, K.", title: "Navigating Noisy Feedback: Enhancing Reinforcement Learning with Error-Prone Language Models", venue: "Findings of ACL: EMNLP, pp. 16002–16014", year: "2024", link: "https://aclanthology.org/2024.findings-emnlp.939.pdf", cat: ["ai"] },
  { authors: "Lin, M., Shi, S., Guo, Y., <strong>Chalaki, B.</strong>, Tadiparthi, V., Stepputtis, S., Campbell, J., Sycara, K.", title: "A Reward Analysis of Reinforcement Learning from Large Language Model Feedback", venue: "Workshop on RL Beyond Rewards (RLBRew), RLC", year: "2024", link: null, cat: ["ai"] },
  { authors: "Le, V.-A., <strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., D'sa, J., Moradi-Pari, E.", title: "Social Navigation in Crowded Environments with Model Predictive Control and Deep Learning-Based Human Trajectory Prediction", venue: "IEEE/RSJ Intl. Conf. on Intelligent Robots and Systems (IROS), pp. 4793–4799", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10802371", cat: ["robotics"] },
  { authors: "Knaup, J., D'sa, J., <strong>Chalaki, B.</strong>, Naes, T., Mahjoub, H.N., Moradi-Pari, E., Tsiotras, P.", title: "Active Learning with Dual Model Predictive Path-Integral Control for Interaction-Aware Autonomous Highway On-ramp Merging", venue: "IEEE Intl. Conf. on Robotics and Automation (ICRA), pp. 14191–14197", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10610405", cat: ["robotics"] },
  { authors: "Le, V.-A., Tadiparthi, V., <strong>Chalaki, B.</strong>, Mahjoub, H.N., D'sa, J., Moradi-Pari, E., Malikopoulos, A. A.", title: "Multi-Robot Cooperative Navigation in Crowds: A Game-Theoretic Learning-Based Model Predictive Control Approach", venue: "IEEE Intl. Conf. on Robotics and Automation (ICRA), pp. 4834–4840", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10611204", cat: ["robotics"] },
  { authors: "Holley, D., D'sa, J., Mahjoub, H. N., Ali, G., <strong>Chalaki, B.</strong>, Moradi-Pari, E.", title: "MR-IDM — Merge Reactive Intelligent Driver Model: Towards Enhancing Laterally Aware Car-following Models", venue: "26th IEEE Intl. Conf. on Intelligent Transportation Systems, pp. 1460–1467", year: "2023", link: "https://ieeexplore.ieee.org/abstract/document/10422017", cat: ["av"] },
  { authors: "<strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., D'sa, J., Moradi-Pari, E., Armijos, A.S.C., Li, A., Cassandras, C.G.", title: "Minimally Disruptive Cooperative Lane-change Maneuvers", venue: "62nd IEEE Conf. on Decision and Control (CDC)", year: "2023", link: "https://ieeexplore.ieee.org/document/10131960", cat: ["control"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Barrier-Certified Optimal Coordination Framework for Connected and Automated Vehicles", venue: "61st IEEE Conf. on Decision and Control (CDC), pp. 2264–2269", year: "2022", link: "https://www.researchgate.net/publication/359608018", cat: ["control"] },
  { authors: "Zayas, R., Beaver, L. E., <strong>Chalaki, B.</strong>, Bang, H., Malikopoulos, A. A.", title: "A Digital Smart City for Emerging Mobility Systems", venue: "IEEE Conf. on Digital Twins and Parallel Intelligence, pp. 1–6", year: "2022", link: "https://www.researchgate.net/publication/354596132", badge: "Best Paper", cat: ["av", "robotics"] },
  { authors: "Ratnagiri, M., O'Dwyer C., Beaver, L. E., Bang, H., <strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Scalable Last-Mile Delivery Service: From Simulation to Scaled Experiment", venue: "25th IEEE Intl. Conf. on Intelligent Transportation Systems, pp. 4163–4168", year: "2022", link: "https://ieeexplore.ieee.org/abstract/document/9921797", cat: ["av"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "Robust Learning-Based Trajectory Planning for Emerging Mobility Systems", venue: "American Control Conference (ACC), pp. 2154–2159", year: "2022", link: "https://ieeexplore.ieee.org/abstract/document/9867265", cat: ["control"] },
  { authors: "Nakka, S. K. S., <strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Multi-Agent Deep Reinforcement Learning Coordination Framework for Connected and Automated Vehicles at Merging Roadways", venue: "American Control Conference (ACC), pp. 3297–3302", year: "2022", link: "https://ieeexplore.ieee.org/abstract/document/9867314", cat: ["control", "ai"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "A Hysteretic Q-learning Coordination Framework for Emerging Mobility Systems in Smart Cities", venue: "European Control Conference (ECC), pp. 17–22", year: "2021", link: "https://www.researchgate.net/publication/354603878", cat: ["control", "ai"] },
  { authors: "<strong>Chalaki, B.</strong>, Beaver, L. E., Malikopoulos, A. A.", title: "Experimental Validation of a Real-Time Optimal Controller for Coordination of CAVs in a Multi-Lane Roundabout", venue: "31st IEEE Intelligent Vehicles Symposium (IV), pp. 504–509", year: "2020", link: "https://ieeexplore.ieee.org/document/9304531", cat: ["av"] },
  { authors: "<strong>Chalaki, B.</strong>, Beaver, L. E., Remer, B., Jang, K., Vinitsky, E., Bayen, A., Malikopoulos, A. A.", title: "Zero-Shot Autonomous Vehicle Policy Transfer: From Simulation to Real-World via Adversarial Learning", venue: "IEEE 16th Intl. Conf. on Control and Automation (ICCA), pp. 35–40", year: "2020", link: "https://ieeexplore.ieee.org/document/9264552", badge: "Best Student Paper", cat: ["control", "ai"] },
  { authors: "<strong>Chalaki, B.</strong>, Malikopoulos, A. A.", title: "An Optimal Coordination Framework for Connected and Automated Vehicles in Two Interconnected Intersections", venue: "IEEE Conf. on Control Technology and Applications (CCTA), pp. 888–893", year: "2019", link: "https://ieeexplore.ieee.org/document/8920448", cat: ["control"] },
  { authors: "Jang, K., Vinitsky, E., <strong>Chalaki, B.</strong>, Remer, B., Beaver, L. E., Malikopoulos, A. A., Bayen, A.", title: "Simulation to scaled city: zero-shot policy transfer for traffic control via autonomous vehicles", venue: "10th ACM/IEEE Intl. Conf. on Cyber-Physical Systems, pp. 291–300", year: "2019", link: "https://dl.acm.org/doi/10.1145/3302509.3313784", cat: ["av", "robotics"] }
];

/* ================= PATENTS (full) ================= */

const CV_PATENTS = [
  { authors: "<strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., Moradi-Pari, E., D'sa, J.J.", title: "Systems and Methods for Swarm Invitation Based on Social Values", venue: "U.S. Patent No. 12,494,130", year: "2025", link: null, badge: "Granted" },
  { authors: "Tadiparthi, V., <strong>Chalaki, B.</strong>, Mahjoub, H.N., D'sa, J.J., Moradi-Pari, E.", title: "Systems and Methods for Robot Navigation", venue: "U.S. Patent Application No. 18/907,188", year: "", link: null },
  { authors: "<strong>Chalaki, B.</strong>, Tadiparthi, V., Mahjoub, H.N., Moradi-Pari, E., D'sa, J.J.", title: "Systems and Methods for Swarm Adaptation Based on Social Value Orientations", venue: "U.S. Patent Application No. 18/477,897", year: "", link: null }
];

/* ================= HONORS & AWARDS (full) ================= */

const CV_AWARDS = [
  { title: "Best Dissertation Award — Winner, University of Delaware", year: "2023", desc: "Tsu-Wei & Mei-Shen Lo Chou Best Dissertation Award, Mechanical Engineering Department." },
  { title: "Best Paper Award — Winner, IEEE", year: "2022", desc: "\u201CA Digital Smart City for Emerging Mobility Systems,\u201D IEEE Digital Twins and Parallel Intelligence." },
  { title: "Graduate Student Travel Award, UD Graduate College", year: "2022", desc: "Supported participation in the American Control Conference (ACC)." },
  { title: "IAAP Scholarship Award, Iranian American Academics & Professionals", year: "2022", desc: "Based on academic achievement and community service." },
  { title: "Shabahang Scholarship Award, Iranian Cultural Society of America", year: "2021", desc: "Second prize recipient." },
  { title: "COE Award for Excellence in Research — Nominee, University of Delaware", year: "2021", desc: "Nominated for originality, innovation, and significance of research." },
  { title: "Graduate Achievement Award, University of Delaware", year: "2021", desc: "Recognized for excellent scholarship and creativity in engineering." },
  { title: "University Doctoral Fellowship Award — Nominee, University of Delaware", year: "2021", desc: "" },
  { title: "IEEEXtreme Programming Competition — 84th percentile, IEEE", year: "2020", desc: "329/2157 worldwide, 14/77 in the USA, 24-hour programming competition." },
  { title: "Best Student Paper Award — Finalist, IEEE", year: "2020", desc: "\u201CZero-Shot Autonomous Vehicle Policy Transfer,\u201D ICCA 2020." },
  { title: "Student Travel Award, IEEE", year: "2020 – 2021", desc: "ACC 2020–2022, CDC 2020." },
  { title: "Travel Grant, East Coast Optimization Meeting, George Mason University", year: "2019 – 2020", desc: "" },
  { title: "Best Poster Presentation Award, University of Delaware", year: "2019", desc: "Mechanical engineering graduate research showcase." },
  { title: "Exempted from Entrance Exam for Graduate Study, University of Tehran", year: "2016", desc: "Top 10% of graduating class." },
  { title: "Second Place, Final Project Competition, University of Tehran Science & Technology Park", year: "2016", desc: "Arduino-based pressure/temperature calibration chamber." },
  { title: "Third Place, National Solar Water Cooler Competition, Iran", year: "2016", desc: "$2,500 prize among 15 teams." },
  { title: "First Place, Conceptual Design of a Solar Water Cooler, Iran", year: "2015", desc: "Ranked first among 24 teams." },
  { title: "Full Scholarship, University of Tehran, Iran", year: "2012", desc: "Top 0.15% among 300,000+ national entrance exam participants." }
];

/* ================= PROFESSIONAL SERVICE ================= */

const CV_REVIEWER = [
  "IEEE Conference on Decision and Control (CDC)", "IEEE American Control Conference (ACC)",
  "IFAC Symposium on Control in Transportation Systems", "European Control Conference (ECC)",
  "IEEE Conference on Control Technology and Applications (CCTA)",
  "IEEE Intl. Conf. on Automation Science and Engineering", "IEEE Intelligent Vehicles Symposium (IV)",
  "Automatica", "IEEE Transactions on Intelligent Transportation Systems",
  "IEEE Transactions on Automatic Control", "IEEE Transactions on Intelligent Vehicles",
  "IEEE Control Systems Letters", "SAE Intl. Journal of Connected and Automated Vehicles",
  "IEEE Transactions on Vehicular Technology", "Vehicle System Dynamics",
  "Transportation Research Part C: Emerging Technologies", "IEEE Intl. Conf. on Robotics and Automation (ICRA)"
];

const CV_AFFILIATION = [
  "Student Member, American Association for the Advancement of Science (2021–present)",
  "Student Member, American Society of Mechanical Engineers (2021–present)",
  "Member, IEEE CSS Technical Committee on Smart Cities (2020–present)",
  "Student Member, Society for Industrial and Applied Mathematics (2018–present)",
  "Student Member, IEEE Control Systems Society (2018–present)",
  "Student Member, IEEE Young Professionals (2018–present)"
];

/* ================= CERTIFICATIONS ================= */

const CV_CERTS = [
  { title: "State Estimation and Localization for Self-Driving Cars", year: "Feb 2022", desc: "Self-Driving Cars Specialization, University of Toronto" },
  { title: "Introduction to Self-Driving Cars", year: "Jan 2022", desc: "Self-Driving Cars Specialization, University of Toronto" },
  { title: "Applied Machine Learning in Python", year: "Feb 2022", desc: "Applied Data Science with Python Specialization, University of Michigan" },
  { title: "Applied Plotting, Charting & Data Representation in Python", year: "Dec 2021", desc: "Applied Data Science with Python Specialization, University of Michigan" },
  { title: "Introduction to Data Science in Python", year: "Nov 2021", desc: "Applied Data Science with Python Specialization, University of Michigan" }
];

/* ================= SKILLS ================= */

const CV_SKILLS = [
  { group: "Research", items: ["Generative AI", "Reinforcement learning", "Multi-agent systems", "Behavior simulation", "Optimal control"] },
  { group: "Programming", items: ["Python", "C++", "MATLAB/Simulink", "C#"] },
  { group: "ML & Optimization", items: ["PyTorch", "Ray", "Anyscale", "Scikit-learn", "Ollama", "GPML", "OpenAI Gym", "CasADi"] },
  { group: "Data Analytics", items: ["Pandas", "Matplotlib", "Seaborn"] },
  { group: "Control & Robotics", items: ["ROS", "Arduino"] },
  { group: "Traffic Simulation", items: ["PreScan", "PTV VISSIM"] },
  { group: "General", items: ["Git", "Unity", "Linux", "Windows"] }
];

/* ================= CATEGORY MAP ================= */

const CAT_LABELS = {
  control: "Control",
  robotics: "Robotics",
  ai: "AI / ML",
  av: "Autonomous vehicles"
};

/* ================= RENDER ================= */

function renderEmployment() {
  const c = document.getElementById("cv-employment-list");
  CV_EMPLOYMENT.forEach((job) => {
    const div = document.createElement("div");
    div.className = "doc-job";
    let groupsHtml = "";
    job.groups.forEach((g) => {
      if (g.head) groupsHtml += `<h3 class="doc-subhead">${g.head}</h3>`;
      groupsHtml += `<ul class="doc-list-items">${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
    });
    div.innerHTML = `
      <div class="doc-job-head"><span class="doc-org">${job.org}</span><span class="doc-date">${job.date}</span></div>
      <p class="doc-role">${job.role}</p>
      ${groupsHtml}
    `;
    c.appendChild(div);
  });
}

function renderPubList(containerId, data) {
  const c = document.getElementById(containerId);
  data.forEach((p) => {
    const li = document.createElement("li");
    const cats = p.cat || [];
    li.setAttribute("data-cat", cats.join(" "));
    const badge = p.badge ? `<span class="pub-badge">${p.badge}</span>` : "";
    const venueLink = p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.venue}</a>` : p.venue;
    const catTags = cats.map((c) => `<span class="cat-tag cat-${c}">${CAT_LABELS[c] || c}</span>`).join("");
    li.innerHTML = `
      <span class="pub-authors">${p.authors}, "${p.title}."${badge}</span>
      <span class="pub-venue-line">${venueLink}${p.year ? ", " + p.year : ""}</span>
      <span class="cat-tags">${catTags}</span>
    `;
    c.appendChild(li);
  });
}

function initFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".pub-list li");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      items.forEach((li) => {
        if (filter === "all") {
          li.style.display = "";
        } else {
          const cats = (li.getAttribute("data-cat") || "").split(" ");
          li.style.display = cats.includes(filter) ? "" : "none";
        }
      });
    });
  });
}

function renderDocList(containerId, data) {
  const c = document.getElementById(containerId);
  data.forEach((a) => {
    const div = document.createElement("div");
    div.className = "doc-list-item";
    div.innerHTML = `
      <div class="doc-list-head"><span class="doc-list-title">${a.title}</span><span class="doc-list-year">${a.year}</span></div>
      ${a.desc ? `<p class="doc-list-desc">${a.desc}</p>` : ""}
    `;
    c.appendChild(div);
  });
}

function renderPlainList(containerId, items) {
  const c = document.getElementById(containerId);
  items.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    c.appendChild(li);
  });
}

function renderSkills() {
  const c = document.getElementById("cv-skills-grid");
  CV_SKILLS.forEach((group) => {
    const div = document.createElement("div");
    div.className = "skill-group";
    div.innerHTML = `
      <h3>${group.group}</h3>
      <div class="skill-tags">${group.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}</div>
    `;
    c.appendChild(div);
  });
}

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
  }, { threshold: 0.08 });
  els.forEach((el) => obs.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderEmployment();
  renderPubList("journal-list", CV_JOURNALS);
  renderPubList("conference-list", CV_CONFERENCES);
  renderPubList("patents-full-list", CV_PATENTS);
  renderDocList("awards-list", CV_AWARDS);
  renderPlainList("reviewer-list", CV_REVIEWER);
  renderPlainList("affiliation-list", CV_AFFILIATION);
  renderDocList("cert-list", CV_CERTS);
  renderSkills();
  initFilter();
  initReveal();
});
