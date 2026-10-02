export const profile = {
  name: "Rafeek Alas",
  title: "Technical Product Lead",
  tagline: "Natural Language Processing · Conversation AI · Generative AI",
  location: "Bangalore, India",
  email: "rafeekalas.official@gmail.com",
  phone: "+91 7019308921",
  summary:
    "Technical Product Lead and Manager with 10+ years designing and executing customer-centric initiatives. I drive AI programs from NLP and deep learning through conversation and generative AI—grounded in customer research, product lifecycle ownership, and teams that ship.",
  highlights: [
    "End-to-end ML products from architecture to production",
    "Conversation AI & triaging systems at enterprise scale",
    "Cross-functional leadership across research and engineering",
  ],
  skills: [
    {
      category: "AI & ML",
      items: [
        "NLP (NLU / NLG)",
        "Deep Learning",
        "Conversation AI",
        "Generative AI",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
    },
    {
      category: "Languages & Data",
      items: ["Python", "C++", "PostgreSQL", "MySQL", "MongoDB", "Pandas"],
    },
    {
      category: "Cloud & Delivery",
      items: ["Azure", "AWS", "Git", "CI/CD", "Azure ML Studio", "Power Automate"],
    },
    {
      category: "Engineering",
      items: [
        "System design",
        "Web scraping (Selenium, Scrapy)",
        "Linux device drivers",
        "OpenCV",
      ],
    },
  ],
  experience: [
    {
      role: "Technical Lead",
      company: "Wipro",
      period: "Aug 2022 — Present",
      domain: "NLP, Conversation AI, Generative AI",
      highlights: [
        "Built end-to-end ML product from scratch to improve triaging workflows.",
        "Led engineers from idea through architecture, delivery, and full product lifecycle.",
        "Orchestrated Conversation AI capabilities integrated into triaging processes.",
      ],
    },
    {
      role: "Lead Software Engineer",
      company: "Cignex Datamatics",
      period: "Sep 2021 — Aug 2022",
      domain: "Azure ML, MS Teams integration",
      highlights: [
        "Delivered ML chatbot integration in Microsoft Teams for Wipro using Azure.",
        "Implemented solutions in Azure ML Studio, web scraping, and Power Automate.",
        "Topic modelling and text classification for production use cases.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "BTrees Technologies",
      period: "Jul 2018 — Sep 2021",
      domain: "System design, ML, data science",
      highlights: [
        "Owned system design, software development, and applied machine learning.",
      ],
    },
    {
      role: "ML & Data Science Consultant",
      company: "Independent",
      period: "Sep 2015 — Jul 2018",
      domain: "NLP, Conversation AI, product ownership",
      highlights: [
        "End-to-end product cycles: model development, deployment, and client impact.",
        "Deep learning, Linux drivers, and physical / system design where needed.",
      ],
    },
    {
      role: "RF IC Intern",
      company: "NXP Semiconductors",
      period: "Jun 2014 — Jan 2015",
      domain: "RFID characterization",
      highlights: ["Characterization and validation of RFID systems."],
    },
    {
      role: "Teaching Assistant",
      company: "BMS College of Engineering",
      period: "Jan 2015 — Jul 2015",
      domain: "Mentorship",
      highlights: ["Mentored final-year projects on Gate-All-Around MOSFET design."],
    },
    {
      role: "Software Engineer",
      company: "Vayavya Labs",
      period: "Jul 2011 — Jun 2012",
      domain: "Embedded / Linux",
      highlights: [
        "Linux device drivers for UART and SPI peripherals.",
        "Supported DDGen (Device Drive Generation Tool).",
      ],
    },
  ],
  education: [
    {
      degree: "M.Tech, Electronics",
      school: "BMS College of Engineering, Bangalore",
      period: "2013 — 2015",
      detail: "First Class with Distinction (78.63%). Dissertation: design space exploration of 14nm Gate-All-Around MOSFET.",
    },
    {
      degree: "B.E, Electronics & Communication",
      school: "SDM College of Engineering and Technology, Dharwad",
      period: "2007 — 2011",
      detail: "CGPA 7.26/10.",
    },
  ],
  certifications: [
    "Machine Learning A-Z — Udemy",
    "FDP: Mathematics behind Machine Learning — VTU Muddenahalli",
    "FDP: AI for Hardware Prototyping — VTU Belgaum",
  ],
  publications: [
    {
      title: "Design Space Exploration of 14nm Gate All Around MOSFET",
      venue: "IEEE ICACC 2015",
      link: "https://ieeexplore.ieee.org/document/7433906",
    },
    {
      title: "Implementation, Simulation and Synthesis of RSA Crypto-systems",
      venue: "International Journal of Science and Research (IJSR), 2015",
    },
    {
      title: "Biometric Systems — 1st Best Paper",
      venue: "National symposium, Sir CRR Engineering College, Eluru, 2010",
    },
    {
      title: "Multimodal Biometric Systems — 1st Best Paper",
      venue: "National symposium, JVIT Bangalore, 2010",
    },
    {
      title: "Artificial Intelligence to detect breast cancer — 3rd Best Paper",
      venue: "IEEE symposium, SJCE Mysore, 2015",
    },
  ],
} as const;
