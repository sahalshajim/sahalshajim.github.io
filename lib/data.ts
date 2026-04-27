import type {
  Award,
  EducationItem,
  ExperienceItem,
  FeaturedPost,
  Highlight,
  ImpactStat,
  Patent,
  Project,
  Publication,
} from "./types";

export const profile = {
  name: "Sahal Shaji Mullappilly",
  title: "PhD in Computer Vision · MBZUAI",
  tagline:
    "Advancing multilingual multimodal medical foundation models for accessible, clinically grounded, and generalizable healthcare AI.",
  location: "Abu Dhabi, UAE",
  emails: ["sahal.mullappilly@mbzuai.ac.ae", "sahalshajim@gmail.com"],
  phones: ["+971 56 914 9169", "+91 8606 350 169"],
  scholar:
    "https://scholar.google.com/citations?user=LJWxVpUAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/sahalshajim/",
  github: "https://github.com/sahalshajim",
  resumePdf: "/Sahal_Shaji_Resume.pdf",
  headshot: "/sahal_headshot.jpeg",
};

export const researchInterests = [
  "Multilingual Multimodal Medical Foundation Models",
  "Open-Ended Medical Reasoning and Reinforcement Learning",
  "Medical Image and Volumetric Reasoning",
  "Object Detection and Visual Grounding",
  "AI for Embedded and Edge Devices",
  "Clinically Grounded and Interpretable AI for Healthcare",
];

export const impactStats: ImpactStat[] = [
  { value: "1,000+", label: "Citations" },
  { value: "2,000+", label: "GitHub stars" },
  { value: "~1M", label: "Model & dataset downloads" },
  { value: "1 + 2", label: "US patents granted / pending" },
];

export const researchHighlights: Highlight[] = [
  [
    {
      text: "First / joint first-author publications at leading AI venues including ",
    },
    { text: "EMNLP", bold: true },
    { text: ", " },
    { text: "ACL", bold: true },
    { text: ", " },
    { text: "AAAI", bold: true },
    { text: ", " },
    { text: "CVPR", bold: true },
    { text: ", and " },
    { text: "NeurIPS", bold: true },
    {
      text: ", with contributions across multilingual medical LLMs, multimodal medical AI, open-ended reasoning, visual grounding, and general-purpose multimodal systems.",
    },
  ],
  [
    {
      text: "Meta Llama Impact Innovation Award",
      url: "https://ai.meta.com/blog/bimedix-built-with-llama/",
      bold: true,
    },
    { text: " for " },
    { text: "BiMediX2", bold: true },
    {
      text: ", an Arabic-English medical multimodal model covering diverse clinical image modalities. This work was accepted to ",
    },
    {
      text: "EMNLP 2025",
      url: "https://aclanthology.org/2025.findings-emnlp.756/",
      bold: true,
    },
    { text: " and was featured on " },
    {
      text: "LinkedIn by Yann LeCun",
      url: "https://www.linkedin.com/posts/yann-lecun_fine-tuning-llama-31-researchers-at-mbzuai-activity-7274852534874214401-TTiZ",
      bold: true,
    },
    { text: "." },
  ],
  [
    { text: "Recipient of the " },
    { text: "MBZUAI CV Department Emerging Impact Award 2026", bold: true },
    { text: "." },
  ],
  [
    { text: "Co-author on " },
    {
      text: "MAviS",
      url: "https://aclanthology.org/2025.emnlp-main.1455/",
      bold: true,
    },
    { text: ", recognised with the " },
    {
      text: "EMNLP 2025 Senior Area Chair Highlight Award",
      url: "https://2025.emnlp.org/program/awards/",
      bold: true,
    },
    { text: "." },
  ],
  [
    { text: "Research supported by the " },
    { text: "NVIDIA Academic Grant", bold: true },
    { text: " and the " },
    { text: "MBZUAI–IIT Delhi Research Grant", bold: true },
    { text: ", with related work showcased at " },
    {
      text: "GITEX 2024",
      url: "https://mbzuai.ac.ae/news/mbzuais-bilingual-healthcare-model-wins-meta-award-ahead-of-gitex-showcase/",
      bold: true,
    },
    { text: ", " },
    {
      text: "Machines Can See 2025",
      url: "https://mbzuai.ac.ae/news/mbzuai-to-showcase-ai-innovation-at-machines-can-see-2025-with-expert-speakers-and-live-demos/",
      bold: true,
    },
    { text: ", and the " },
    { text: "AI4SD side event of the 79th UN General Assembly", bold: true },
    { text: "." },
  ],
  [
    { text: "Strong academic and open-source impact, with " },
    { text: "1,000+ citations", bold: true },
    { text: ", " },
    { text: "2,000+ GitHub stars", bold: true },
    { text: ", and " },
    { text: "nearly 1M downloads", bold: true },
    { text: " of publicly released models and datasets." },
  ],
  [
    { text: "Recipient of a granted " },
    {
      text: "US Patent",
      url: "https://patents.google.com/patent/US12380677B2/en",
      bold: true,
    },
    {
      text: " for open-world semi-supervised object detection, with additional U.S. patent filings in bilingual medical LLMs and pixel-grounded multimodal models.",
    },
  ],
  [
    {
      text: "JAIS Climate",
      url: "https://mbzuai.ac.ae/sustainability/jais-climate/",
      bold: true,
    },
    { text: ", showcased at " },
    {
      text: "COP28",
      url: "https://www.thenationalnews.com/business/technology/2023/11/22/uae-unveils-locally-developed-ai-large-language-model-dedicated-to-climate-intelligence/",
      bold: true,
    },
    { text: ", extended earlier work on " },
    {
      text: "Arabic Mini-ClimateGPT",
      url: "https://aclanthology.org/2023.findings-emnlp.941/",
      bold: true,
    },
    { text: ", published at EMNLP 2023 Findings." },
  ],
];

const ME = "Sahal Shaji Mullappilly";

export const publications: Publication[] = [
  {
    title: "BiMediX2: Bio-Medical EXpert LMM for Diverse Medical Modalities",
    authors: [
      ME,
      "Mohammed Irfan Kurpath",
      "Sara Pieri",
      "Saeed Yahya Alseiari",
      "Shanavas Cholakkal",
      "Khaled Aldahmani",
      "Fahad Khan",
      "Rao Anwer",
      "Salman Khan",
      "Timothy Baldwin",
      "Hisham Cholakkal",
    ],
    meIndex: 0,
    coFirst: [0, 1],
    venue: "EMNLP 2025 — Findings",
    notes: ["Meta Llama Impact Award", "LinkedIn feature by Yann LeCun"],
    description:
      "A bilingual Arabic–English medical multimodal model that unifies text and image understanding for diverse clinical tasks — multi-turn conversation, VQA, report generation and summarisation. Trained on 1.6M bilingual healthcare samples, it sets state of the art on both medical language and multimodal benchmarks.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2025.findings-emnlp.756/" },
      { label: "Meta blog", url: "https://ai.meta.com/blog/bimedix-built-with-llama/" },
      {
        label: "LinkedIn Feature",
        url: "https://www.linkedin.com/posts/yann-lecun_fine-tuning-llama-31-researchers-at-mbzuai-activity-7274852534874214401-TTiZ",
      },
    ],
    downloads: "9.1K+",
  },
  {
    title: "GLaMM: Pixel Grounding Large Multimodal Model",
    authors: [
      "Hanoona Rasheed",
      "Muhammad Maaz",
      ME,
      "Abdelrahman Shaker",
      "Salman Khan",
      "Hisham Cholakkal",
      "Rao M Anwer",
      "Eric Xing",
      "Ming-Hsuan Yang",
      "Fahad S Khan",
    ],
    meIndex: 2,
    coFirst: [0, 1],
    venue: "CVPR 2024",
    notes: ["Hugging Face featured"],
    description:
      "A multimodal model that generates natural-language responses grounded with pixel-level segmentation masks, enabling far more precise visual grounding than standard chat models. Introduces a large grounding dataset and evaluation for grounded conversation, with strong results on segmentation, captioning and conversational grounding.",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2311.03356" },
      { label: "HF paper", url: "https://huggingface.co/papers/2311.03356" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/groundingLMM" },
    ],
    downloads: "707K+",
  },
  {
    title: "MediX-R1: Open-Ended Medical Reinforcement Learning",
    authors: [
      ME,
      "Mohammed Irfan Kurpath",
      "Omair Mohamed",
      "Mohamed Zidan",
      "Fahad Khan",
      "Salman Khan",
      "Rao Anwer",
      "Hisham Cholakkal",
    ],
    meIndex: 0,
    coFirst: [0, 1],
    venue: "arXiv 2026",
    description:
      "An open-ended reinforcement learning framework for medical multimodal models, moving beyond brittle multiple-choice training toward clinically grounded free-form answers. Composite reward design and an LLM-as-judge evaluation framework improve open-ended medical reasoning across both text and image-text benchmarks using only ~51K instruction samples.",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2602.23363" },
      { label: "Project", url: "https://medix.cvmbzuai.com/" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/MediX-R1" },
      {
        label: "Coverage",
        url: "https://www.middleeastainews.com/p/mbzuai-advances-medical-ai-models",
      },
    ],
    downloads: "10.6K+",
  },
  {
    title: "BiMediX: Bilingual Medical Mixture of Experts LLM",
    authors: [
      "Sara Pieri",
      ME,
      "Fahad Shahbaz Khan",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Timothy Baldwin",
      "Hisham Cholakkal",
    ],
    meIndex: 1,
    coFirst: [0, 1],
    venue: "EMNLP 2024 — Findings",
    description:
      "The first bilingual Arabic–English medical mixture-of-experts LLM, designed for open-ended QA, multi-turn medical dialogue and multiple-choice reasoning in both languages. Introduces a large bilingual medical instruction corpus and benchmark, showing that multilingual medical tuning improves both accessibility and performance.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2024.findings-emnlp.989/" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/BiMediX" },
    ],
    downloads: "149K+",
  },
  {
    title: "MAviS: A Multimodal Conversational Assistant for Avian Species",
    authors: [
      "Yevheniia Kryklyvets",
      "Mohammed Irfan Kurpath",
      ME,
      "Jinxing Zhou",
      "Fahad Shahbaz Khan",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Hisham Cholakkal",
    ],
    meIndex: 2,
    venue: "EMNLP 2025",
    notes: ["SAC Highlight Award"],
    description:
      "A domain-specialised multimodal assistant for birds, combining image, audio and text understanding for fine-grained species recognition and multimodal QA. Introduces MAviS-Dataset and MAviS-Bench, showing that domain-adaptive multimodal models substantially improve biodiversity and ecological AI applications.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2025.emnlp-main.1455/" },
      { label: "Award", url: "https://2025.emnlp.org/program/awards/" },
      { label: "GitHub", url: "https://github.com/yevheniia-uv/MAviS" },
    ],
  },
  {
    title: "LLMVoX: Autoregressive Streaming Text-to-Speech for Any LLM",
    authors: [
      "Sambal Shikhar",
      "Mohammed Irfan Kurpath",
      ME,
      "Jean Lahoud",
      "Fahad Shahbaz Khan",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Hisham Cholakkal",
    ],
    meIndex: 2,
    venue: "ACL 2025 — Findings",
    description:
      "A lightweight streaming TTS model that plugs into any LLM without modifying it, preserving its reasoning and conversational quality. Achieves low-latency speech generation, supports long-form dialogue, generalises across backbones, and extends naturally to multilingual and multimodal settings.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2025.findings-acl.1051/" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/LLMVoX" },
    ],
  },
  {
    title:
      "XrayGPT: Chest Radiographs Summarisation using Large Medical Vision-Language Models",
    authors: [
      "Omkar Chakradhar Thawakar",
      "Abdelrahman M Shaker",
      ME,
      "Hisham Cholakkal",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Jorma Laaksonen",
      "Fahad Khan",
    ],
    meIndex: 2,
    coFirst: [0, 1, 2],
    venue: "ACL 2024 — BioNLP",
    description:
      "Aligns a medical visual encoder with an LLM for open-ended conversational understanding of chest X-rays — beyond fixed report generation. Shows that high-quality summary-style instruction data from radiology reports supports interactive radiograph understanding and clinically meaningful follow-up QA.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2024.bionlp-1.35/" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/XrayGPT" },
    ],
  },
  {
    title:
      "Arabic Mini-ClimateGPT: A Climate Change and Sustainability Tailored Arabic LLM",
    authors: [
      ME,
      "Abdelrahman Shaker",
      "Omkar Thawakar",
      "Hisham Cholakkal",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Fahad Khan",
    ],
    meIndex: 0,
    coFirst: [0, 1, 2],
    venue: "EMNLP 2023 — Findings · NeurIPS 2023 — ENLSP",
    description:
      "A lightweight Arabic LLM specialised for climate change and sustainability, built from a large conversational instruction dataset with retrieval support at inference. Improves Arabic climate-related responses over baseline open models and demonstrates the value of domain-specific LLMs for socially important topics.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2023.findings-emnlp.941/" },
      { label: "NeurIPS", url: "https://neurips.cc/virtual/2023/81199" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/ClimateGPT" },
      { label: "JAIS Climate", url: "https://mbzuai.ac.ae/sustainability/jais-climate/" },
    ],
  },
  {
    title:
      "LongShOT: A Benchmark and Agentic Framework for Omni-Modal Reasoning and Tool Use in Long Videos",
    authors: [
      "Mohammed Irfan Kurpath",
      "Jaseel Muhammad Kaithakkodan",
      "Jinxing Zhou",
      ME,
      "Mohammad Almansoori",
      "Noor Ahsan",
      "Beknur Kalmakhanbet",
      "Sambal Shikhar",
      "Rishabh Lalla",
      "Jean Lahoud",
      "Mariette Awad",
      "Fahad Shahbaz Khan",
      "Salman Khan",
      "Rao Muhammad Anwer",
      "Hisham Cholakkal",
    ],
    meIndex: 3,
    coFirst: [0, 1],
    venue: "CVPR 2026 — Findings",
    description:
      "A benchmark and agentic framework for long-video understanding that goes beyond vision-only tasks by incorporating speech, audio, tool use and open-ended reasoning. Designed to diagnose failures in perception, cross-modal integration and long-context reasoning, making evaluation of real-world omni-modal video systems more realistic and interpretable.",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2512.16978" },
      { label: "GitHub", url: "https://github.com/mbzuai-oryx/longshot" },
    ],
  },
  {
    title: "Semi-supervised Open-World Object Detection",
    authors: [
      ME,
      "Abhishek Singh Gehlot",
      "Rao Muhammad Anwer",
      "Fahad Shahbaz Khan",
      "Hisham Cholakkal",
    ],
    meIndex: 0,
    venue: "AAAI 2024 — Main Track",
    description:
      "Introduces semi-supervised open-world object detection, a more realistic setting where new categories are learned with limited labels and large amounts of unlabeled data. Proposes SS-OWFormer, improving feature alignment and pseudo-labeling for unknown objects, with strong results across multiple benchmarks including remote sensing.",
    links: [
      { label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/view/28227" },
      { label: "GitHub", url: "https://github.com/sahalshajim/SS-OWFormer" },
    ],
  },
  {
    title:
      "MuCoT: Multilingual Contrastive Training for Question-Answering in Low-Resource Languages",
    authors: [
      "Gokul Karthik Kumar",
      "Abhishek Gehlot",
      ME,
      "Karthik Nandakumar",
    ],
    meIndex: 2,
    venue: "ACL 2022 — DravidianLangTech (Oral)",
    description:
      "Studies QA for low-resource languages by augmenting training with translation and transliteration across languages, then applying multilingual contrastive learning during fine-tuning. Shows that contrastive training reduces degradation from cross-language transfer and improves multilingual QA performance.",
    links: [
      { label: "Paper", url: "https://aclanthology.org/2022.dravidianlangtech-1.3/" },
      { label: "GitHub", url: "https://github.com/gokulkarthik/mucot" },
    ],
  },
];

export const patents: Patent[] = [
  {
    title:
      "System and method of open-world semi-supervised satellite object detection",
    authors: [
      ME,
      "Abhishek Singh Gehlot",
      "Rao Muhammad Anwer",
      "Fahad Shahbaz Khan",
      "Hisham Cholakkal",
    ],
    status: "Granted",
    number: "US12380677B2",
    url: "https://patents.google.com/patent/US12380677B2/en",
  },
  {
    title: "Bilingual medical mixture of experts large language model",
    authors: [
      "Sara Pieri",
      ME,
      "Fahad Shahbaz Khan",
      "Rao Muhammad Anwer",
      "Salman Khan",
      "Timothy Baldwin",
      "Hisham Cholakkal",
    ],
    status: "Pending",
    number: "US20250266037A1",
    url: "https://patents.google.com/patent/US20250266037A1/en",
  },
  {
    title: "System and method of pixel grounding large multimodal model",
    authors: [
      "Hanoona Rasheed",
      "Muhammad Maaz",
      ME,
      "Abdelrahman Shaker",
      "Salman Khan",
      "Hisham Cholakkal",
      "Rao M Anwer",
      "Eric Xing",
      "Ming-Hsuan Yang",
      "Fahad S Khan",
    ],
    status: "Pending",
    number: "US20260017926A1",
    url: "https://patents.google.com/patent/US20260017926A1/en",
  },
];

export const education: EducationItem[] = [
  {
    degree: "PhD in Computer Vision",
    institution: "Mohamed bin Zayed University of Artificial Intelligence",
    period: "Aug 2023 — Present",
    notes: "UAE Golden Visa",
  },
  {
    degree: "MSc in Computer Vision",
    institution: "Mohamed bin Zayed University of Artificial Intelligence",
    period: "Sep 2022",
    gpa: "GPA 3.84 / 4.0",
    notes: "UAE Golden Visa",
  },
  {
    degree: "BTech in Computer Science Engineering",
    institution: "National Institute of Technology, Puducherry",
    period: "May 2021",
    gpa: "GPA 9.04 / 10",
    notes: "First Class with Distinction",
  },
  {
    degree: "Senior Secondary (Grade 12)",
    institution: "Indian High School, Dubai",
    period: "Mar 2017",
    gpa: "94.3%",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "AI Architect",
    org: "Aspire Zone · Intaleq",
    period: "Jun 2025",
  },
  {
    role: "Machine Learning Intern",
    org: "Microsoft, Dubai Internet City",
    period: "May 2019",
    link: "https://drive.google.com/file/d/1Zl9whR17-hb2-7DxlJD4dj-cJ6ZTejyt/view",
  },
  {
    role: "Machine Learning Engineer",
    org: "General Department of Artificial Intelligence, Dubai Police HQ",
    period: "Sep 2022",
  },
];

export const projects: Project[] = [
  {
    title: "DriveSafe",
    blurb: "Real-time driving threat detection across mobile and watch.",
    bullets: [
      "Cross-platform Flutter app — Android, iOS and watchOS.",
      "Continuously monitors road conditions and surfaces threats to the driver.",
      "Quantised SSD MobileNet v2 for object detection.",
      "Metal GPU delegate + Neural Processing cores — ~30 ms average inference.",
    ],
    demo: "https://www.youtube.com/watch?v=MNRIvBUjpJM",
  },
  {
    title: "DocApp",
    blurb: "Zero-cost clinic digitalisation system on smartphones.",
    bullets: [
      "Cross-platform Flutter app with Firestore backend.",
      "Appointment booking and live token streaming to client devices.",
      "Patient database with an analytics dashboard for the clinic.",
    ],
  },
];

export const interdisciplinary: string[] = [
  "Arduino-based plant hydration system",
  "Electric Bike (college Techfest)",
  "Mangoo — food delivery app",
  "Package delivery drone (IIT Bombay e-Yantra)",
];

export const awards: Award[] = [
  { title: "Emerging Impact Award — MBZUAI CV Department", year: "2026" },
  { title: "US Patent (US12380677B2) — Open-World Satellite Object Detection", year: "2025" },
  { title: "Meta Llama Impact Innovation Award (BiMediX2)", year: "2024" },
  { title: "UAE Golden Visa — Outstanding University Student", year: "2023" },
  { title: "ADAFSA Abu Dhabi Govt Hackathon — Winning Team (AED 30,000)", year: "2021" },
  { title: "BTech — First Class with Distinction", year: "2021" },
  { title: "SPDC Indian Govt Merit Scholarship Grant ($16,000)", year: "2017" },
  { title: "Academic Excellence Letter — Education Minister of India (MHRD)", year: "2015" },
];

export const featuredPosts: FeaturedPost[] = [
  {
    eyebrow: "LinkedIn · Yann LeCun",
    title: "Yann LeCun featuring BiMediX2",
    dek: "BiMediX2 highlighted as a bilingual Arabic–English medical AI system built on Llama, with strong multimodal performance across X-rays, CT, MRI and pathology.",
    href: "https://www.linkedin.com/posts/yann-lecun_fine-tuning-llama-31-researchers-at-mbzuai-activity-7274852534874214401-TTiZ",
    image: "/featured/1.png",
    objectPosition: "top",
  },
  {
    eyebrow: "LinkedIn · MBZUAI",
    title: "MBZUAI featuring MediX-R1",
    dek: "MediX-R1 introduced as an open-ended RL framework for clinical reasoning — moving beyond multiple-choice to free-form medical responses across 16 imaging modalities.",
    href: "https://www.linkedin.com/posts/mbzuai_medicalai-aiforimpact-activity-7447585496827871232-7qYk",
    image: "/featured/2.jpg",
  },
  {
    eyebrow: "Press · Middle East AI News",
    title: "Media coverage featuring MediX-R1",
    dek: "Highlighting MediX-R1 as a cost-efficient open-source medical AI framework trained with RL on ~51K examples — strong benchmark accuracy and expert preference results.",
    href: "https://www.middleeastainews.com/p/mbzuai-advances-medical-ai-models",
    image: "/featured/3.jpg",
  },
  {
    eyebrow: "YouTube · MediX-R1",
    title: "Featuring MediX-R1",
    dek: "A walkthrough of MediX-R1 as a fully open-source multimodal medical LLM framework — variants for different deployment settings, broad imaging coverage, RL-trained efficiency.",
    href: "https://www.linkedin.com/posts/sahalshajim_medicalai-multimodalai-reinforcementlearning-activity-7433167547488911360-JK_a",
    youtube: "https://www.youtube.com/watch?v=2nFvlcOCCX8",
    image: "/featured/4.png",
  },
  {
    eyebrow: "EMNLP 2025",
    title: "Presenting BiMediX2 and MAviS at EMNLP 2025",
    dek: "Two papers at EMNLP 2025 — BiMediX2, a bilingual medical multimodal model, alongside MAviS, a multimodal assistant for avian species across image, audio and text.",
    href: "https://www.linkedin.com/posts/sahalshajim_emnlp2025-emnlp2025-ai-activity-7394464931259236352-l-yV",
    image: "/featured/5.jpg",
  },
  {
    eyebrow: "GITEX 2025",
    title: "MBZUAI demos at GITEX 2025",
    dek: "MBZUAI's GITEX 2025 showcase of assistive AI — smart glasses for elderly care and a brain-computer-interface system connected to a robot dog. AI for accessibility.",
    href: "https://www.linkedin.com/posts/hisham-cholakkal-36464734_mbzuai-gitex2025-ai4good-activity-7384291662895771648-LGJL",
    image: "/featured/6.jpg",
  },
  {
    eyebrow: "US Patent",
    title: "Patent granted for satellite object detection",
    dek: "A U.S. patent on satellite imagery analysis for detecting both known and unknown objects under limited supervision — semi-supervised, open-world detection at scale.",
    href: "https://www.linkedin.com/posts/sahalshajim_uspatent-innovation-objectdetection-activity-7367639293051203584-HUgq",
    image: "/featured/7.jpg",
    objectPosition: "top left",
  },
  {
    eyebrow: "Meta · Open Source Summit",
    title: "Representing MBZUAI at Meta's Open Source Summit",
    dek: "At Meta HQ for the Global Open Source Innovation Summit — engaging with the open-source community and the latest developments in the Llama ecosystem.",
    href: "https://www.linkedin.com/posts/sahalshajim_aiatmeta-metaopensourcesummit-mbzuai-activity-7273082284621078528-RRg5",
    image: "/featured/8.jpg",
  },
  {
    eyebrow: "EMNLP 2024",
    title: "Presenting BiMediX at EMNLP 2024",
    dek: "BiMediX as the first bilingual Arabic–English medical mixture-of-experts LLM — multi-turn dialogue, multiple-choice QA, and open-ended medical question answering.",
    href: "https://www.linkedin.com/posts/sahalshajim_emnlp2024-activity-7263049311045775360-q4G8",
    image: "/featured/9.jpg",
  },
  {
    eyebrow: "AAAI 2024",
    title: "Presenting Semi-supervised Open-World Object Detection",
    dek: "SS-OWOD as an annotation-efficient framework for incremental open-world detection — feature alignment and object-query-guided pseudo-labeling, including remote sensing.",
    href: "https://www.linkedin.com/posts/sahalshajim_excited-to-present-our-work-semi-supervised-activity-7167052110776279040-COP_",
    image: "/featured/10.jpg",
  },
];

export const skills = {
  key: [
    "Analytical Reasoning",
    "Problem Solving",
    "Effective Communication",
    "Abstract Thinking",
    "Alternative Solutions",
    "Competitive Coding",
  ],
  programming: [
    { name: "Python", level: "Advanced" },
    { name: "Dart / Flutter", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "C / C++", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
  ],
  languages: ["English", "Malayalam", "Hindi", "Arabic"],
};

export const courses: string[] = [
  "Applied Data Science with Python — University of Michigan",
  "Machine Learning — Stanford",
  "Deep Learning Specialization — Coursera",
  "Kaggle: Deep Learning · Machine Learning · Feature Engineering",
  "CS50 — Introduction to Artificial Intelligence",
];
