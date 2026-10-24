// src/types/ecosystem.ts
export type IdeaStatus = "Seed" | "Exploring" | "Experimenting" | "Developed";
export type VisibilityMode = "Public" | "Unlisted" | "Private";

export interface IdeaNode {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: IdeaStatus;
  visibility: VisibilityMode;
  categories: string[];
  updatedAt: string;
  connectedChain: {
    stage: string;
    label: string;
  }[];
}

export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  question: string;
  establishedEvidence: string;
  citations: string[];
  myInterpretation: string;
  speculativeHypothesis: string;
  openQuestions: string[];
  relatedAgent: string;
}

export interface AgentProfile {
  id: string;
  name: string;
  role: string;
  purpose: string;
  status: "DEMO_READY" | "LIVE_CONFIGURED" | "AWAITING_APPROVAL";
  capabilities: string[];
  tools: string[];
  recentActivity: string;
  connectedProjects: string[];
}

export interface ArchiveRecord {
  id: string;
  title: string;
  type:
    | "Research Summary"
    | "Code Snippet"
    | "Scientific Paper"
    | "Diagram & Model"
    | "AI Report";
  category: string;
  date: string;
  tags: string[];
  visibility: VisibilityMode;
  excerpt: string;
  linkedEntity: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  category: string;
  status: string;
  problemStatement: string;
  proposedSolution: string;
  technologies: string[];
  visibility: VisibilityMode;
}

export interface ApplicationBlueprint {
  id: string;
  name: string;
  description: string;
  status: "Planned Extension" | "Architecture Spec" | "Prototype Module";
  deliveryMode: "Integrated Module" | "Connected Web App" | "Authenticated Mobile API";
  category: string;
}





// src/lib/demo-data.ts
import {
  IdeaNode,
  ResearchItem,
  AgentProfile,
  ArchiveRecord,
  ProjectRecord,
  ApplicationBlueprint,
} from "@/types/ecosystem";

export const CORE_PILLARS = [
  {
    id: "thinking",
    title: "My Thinking (Idea Studio)",
    subtitle: "Seed Questions to Testable Hypotheses",
    description:
      "A structured incubator where clinical observations, mathematical intuitions, and bioengineering questions evolve along explicit dependency graphs.",
    metric: "4 Stages: Seed -> Developed",
    href: "#thinking",
  },
  {
    id: "research",
    title: "Research Laboratory",
    subtitle: "Evidence Separated from Speculation",
    description:
      "Rigorous investigations across Medicine, Neuroscience, AI, and Robotics that strictly partition peer-reviewed literature from personal synthesis.",
    metric: "10 Scientific Disciplines",
    href: "#research",
  },
  {
    id: "agents",
    title: "Autonomous AI Agents",
    subtitle: "Controlled Multi-Agent Workflows",
    description:
      "Purpose-built agents for PubMed literature retrieval, methodological analysis, archival indexing, and computational prototyping with human approval gates.",
    metric: "4 Specialized Core Agents",
    href: "#agents",
  },
  {
    id: "archive",
    title: "Knowledge Archive",
    subtitle: "Long-Term Semantic Memory",
    description:
      "Searchable repository of physiological models, papers, Python algorithms, and diagrams structured for future Retrieval-Augmented Generation (RAG).",
    metric: "Strict Public/Private Isolation",
    href: "#archive",
  },
];

export const DEMO_IDEAS: IdeaNode[] = [
  {
    id: "idea-01",
    slug: "baroreflex-pid-biomimetic-control",
    title: "Biomimetic Baroreflex Control Loops for Autonomous Hemodynamic Stabilization",
    summary:
      "[DEMO DATA] Investigating how carotid sinus baroreceptor firing rate adaptation can inspire non-linear adaptive control algorithms for artificial perfusion systems.",
    status: "Experimenting",
    visibility: "Public",
    categories: ["Medicine", "Bioengineering", "Control Systems"],
    updatedAt: "2026-10-18",
    connectedChain: [
      { stage: "Medical Problem", label: "Arterial pressure instability during acute perfusion shifts" },
      { stage: "Scientific Discovery", label: "Sigmoidal baroreceptor afferent rate-sensitivity mechanics" },
      { stage: "Computational Model", label: "Coupled differential equation state-space simulation in Python" },
      { stage: "AI Algorithm", label: "Physics-informed neural feedback controller" },
      { stage: "Experimental App", label: "Medical AI Laboratory Module" },
    ],
  },
  {
    id: "idea-02",
    slug: "alveolar-ventilation-graph-diagnostics",
    title: "State-Space Representation of Ventilation-Perfusion (V/Q) Mismatch",
    summary:
      "[DEMO DATA] Mapping continuous alveolar gas exchange equations into interactive multi-compartment computational graphs to visualize dead-space vs. shunt dynamics.",
    status: "Exploring",
    visibility: "Public",
    categories: ["Medicine", "Computer Science", "Mathematics"],
    updatedAt: "2026-10-12",
    connectedChain: [
      { stage: "Medical Problem", label: "Rapid bedside interpretation of complex hypoxia mechanisms" },
      { stage: "Scientific Discovery", label: "Alveolar gas equation & regional V/Q ratios" },
      { stage: "Computational Model", label: "NumPy multi-compartment gas transport solver" },
      { stage: "AI Algorithm", label: "Automated parameter sensitivity analyzer" },
      { stage: "Experimental App", label: "Interactive Physiology Explorer" },
    ],
  },
  {
    id: "idea-03",
    slug: "synaptic-pruning-sparse-neural-nets",
    title: "Developmental Synaptic Pruning as a Blueprint for Low-Power Edge AI",
    summary:
      "[DEMO DATA] Translating microglia-mediated activity-dependent synaptic elimination into dynamic weight-sparsification schedules for neural networks.",
    status: "Seed",
    visibility: "Public",
    categories: ["Neuroscience", "Artificial Intelligence", "Algorithms"],
    updatedAt: "2026-10-04",
    connectedChain: [
      { stage: "Biological Mechanism", label: "Activity-dependent complement cascade pruning" },
      { stage: "Computational Model", label: "Gradient-magnitude decay with metabolic cost penalty" },
      { stage: "AI Algorithm", label: "Bio-sparse dynamic topology training" },
    ],
  },
];

export const RESEARCH_CATEGORIES = [
  "Medicine",
  "Neuroscience",
  "Artificial Intelligence",
  "Machine Learning",
  "Robotics",
  "Bioengineering",
  "Computer Science",
  "Algorithms and Data Structures",
  "Mathematics",
  "Science Fiction Inspired by Real Science",
];

export const DEMO_RESEARCH: ResearchItem[] = [
  {
    id: "res-01",
    title: "Autonomic Regulation of Sinoatrial Node Pacemaker Potentials & Computational Pacing",
    category: "Medicine",
    question:
      "How do funny current (If) and T-type calcium channel kinetics quantitatively govern heart rate variability under sympathetic vs. vagal tone?",
    establishedEvidence:
      "[DEMO DATA — ESTABLISHED EVIDENCE] Hyperpolarization-activated cyclic nucleotide-gated (HCN4) channels conduct the inward 'funny' current (If) during Phase 4 depolarization. Sympathetic beta-1 adrenergic stimulation elevates intracellular cAMP, shifting the HCN activation curve to more positive potentials and accelerating spontaneous firing rates.",
    citations: [
      "DiFrancesco D. The role of the funny current in pacemaker activity. Circ Res. (PMID: 20167941)",
      "Guyton and Hall Textbook of Medical Physiology, Unit III: The Heart",
    ],
    myInterpretation:
      "[DEMO DATA — INTERPRETATION] The SA node behaves as a dual-input non-linear voltage-controlled oscillator where cAMP concentration acts as a continuous gain modulator rather than a binary switch.",
    speculativeHypothesis:
      "[DEMO DATA — UNTESTED HYPOTHESIS] A coupled silicon oscillator modeling HCN4 cAMP kinetics alongside M2 muscarinic potassium (IKACh) decay time constants could predict paroxysmal atrial arrhythmia transitions 30 seconds earlier than linear HRV frequency-domain metrics.",
    openQuestions: [
      "What is the minimal differential equation order needed to run real-time HCN4 kinetics on an embedded microcontroller?",
      "How does local myocardial ischemia alter the phase-response curve of the pacemaker model?",
    ],
    relatedAgent: "Research Agent + Engineering Agent",
  },
  {
    id: "res-02",
    title: "Graph-Based Knowledge Distillation Across Heterogeneous Biomedical Corpora",
    category: "Artificial Intelligence",
    question:
      "Can small, schema-constrained language models extract verifiable physiological causal chains from PubMed abstracts without hallucinating unsupported links?",
    establishedEvidence:
      "[DEMO DATA — ESTABLISHED EVIDENCE] Unrestricted generative summarization frequently conflates correlation with causation in clinical abstracts. Enforcing strict JSON-schema entity-relation extraction with mandatory sentence-level source span offsets significantly reduces ungrounded claims.",
    citations: [
      "NCBI Entrez Programming Utilities (E-utilities) Technical Documentation",
    ],
    myInterpretation:
      "[DEMO DATA — INTERPRETATION] Retrieval-Augmented Generation must separate the 'Evidence Extraction' pass from the 'Hypothesis Generation' pass using distinct agent roles and database fields.",
    speculativeHypothesis:
      "[DEMO DATA — UNTESTED HYPOTHESIS] Pairing a deterministic graph-cycle detector with an LLM extraction agent can automatically flag contradictory findings across clinical trials.",
    openQuestions: [
      "How should conflicting sample sizes across studies be weighted in the knowledge graph edge confidence score?",
    ],
    relatedAgent: "Scientific Analysis Agent",
  },
];

export const DEMO_AGENTS: AgentProfile[] = [
  {
    id: "agent-research",
    name: "Research Agent",
    role: "Scientific Literature & Metadata Retriever",
    purpose:
      "Search scientific literature via NCBI PubMed APIs and collect verified article metadata, abstracts, and identifiers.",
    status: "DEMO_READY",
    capabilities: [
      "Query PubMed E-utilities (esearch & efetch)",
      "Extract PMIDs, DOIs, structured abstracts, and publication dates",
      "Organize structured bibliography records",
      "Queue candidate studies for archival approval",
    ],
    tools: ["ncbi_pubmed_search", "ncbi_pubmed_fetch", "citation_normalizer"],
    recentActivity:
      "[DEMO LOG] Simulated query: 'baroreflex sensitivity mathematical model' -> Parsed 5 structured PMID records.",
    connectedProjects: ["Autonomous Literature Synthesis Pipeline"],
  },
  {
    id: "agent-analysis",
    name: "Scientific Analysis Agent",
    role: "Methodological Critic & Epistemic Classifier",
    purpose:
      "Examine material collected by the Research Agent and strictly separate empirical findings from speculation.",
    status: "DEMO_READY",
    capabilities: [
      "Compare study cohorts, methods, and statistical endpoints",
      "Partition empirical results from author speculation",
      "Identify methodological limitations and open questions",
      "Generate structured Markdown research briefs",
    ],
    tools: ["epistemic_splitter", "study_matrix_builder", "question_synthesizer"],
    recentActivity:
      "[DEMO LOG] Classified 3 abstract claims into 'Verified Empirical' vs. 'Untested Hypothesis'.",
    connectedProjects: ["Medical AI Laboratory"],
  },
  {
    id: "agent-archivist",
    name: "Knowledge Archivist",
    role: "Taxonomy & Graph Topology Curator",
    purpose:
      "Organize the growing knowledge collection, detect duplicates, and propose cross-disciplinary edges.",
    status: "DEMO_READY",
    capabilities: [
      "Auto-tag notes across 10 scientific disciplines",
      "Detect semantic overlap with existing archive items",
      "Propose KnowledgeEdge links between Ideas and Research",
      "Enforce Private vs. Public visibility boundaries",
    ],
    tools: ["graph_edge_proposer", "duplicate_detector", "visibility_auditor"],
    recentActivity:
      "[DEMO LOG] Proposed edge: Idea #01 (Baroreflex Control) -> Research #01 (SA Node Pacemaker).",
    connectedProjects: ["Knowledge Graph Explorer"],
  },
  {
    id: "agent-engineering",
    name: "Engineering Agent",
    role: "Computational Prototyping & Architecture Specialist",
    purpose:
      "Transform scientific concepts and equations into clean Python simulations, algorithms, and software architectures.",
    status: "DEMO_READY",
    capabilities: [
      "Translate physiological ODEs into NumPy/SciPy state-space code",
      "Propose modular software schemas and API contracts",
      "Generate verification unit tests for mathematical models",
      "Draft experiment documentation",
    ],
    tools: ["python_model_scaffolder", "schema_architect", "complexity_analyzer"],
    recentActivity:
      "[DEMO LOG] Generated Python alveolar ventilation calculator prototype spec.",
    connectedProjects: ["Biomimetic Hemodynamic Simulator"],
  },
];

export const AGENT_WORKFLOW_STEPS = [
  {
    step: 1,
    actor: "Sakhr (Principal Investigator)",
    action: "Submit Research Question",
    detail: "Defines scope: 'How can carotid baroreceptor adaptation inform closed-loop perfusion control?'",
    status: "COMPLETED",
  },
  {
    step: 2,
    actor: "Research Agent",
    action: "Retrieve PubMed Literature",
    detail: "Queries NCBI E-utilities API, retrieves PMIDs, abstracts, and MeSH terms (Treated as untrusted external input).",
    status: "COMPLETED",
  },
  {
    step: 3,
    actor: "Scientific Analysis Agent",
    action: "Epistemic Analysis & Comparison",
    detail: "Extracts experimental firing-rate curves and isolates established physiology from theoretical claims.",
    status: "COMPLETED",
  },
  {
    step: 4,
    actor: "Knowledge Archivist",
    action: "Index & Propose Graph Links",
    detail: "Links new summary to 'Baroreflex Control Idea' in private draft state.",
    status: "COMPLETED",
  },
  {
    step: 5,
    actor: "Engineering Agent",
    action: "Propose Computational Prototype",
    detail: "Drafts Python differential equation solver and control loop architecture.",
    status: "AWAITING_USER_APPROVAL",
  },
  {
    step: 6,
    actor: "Sakhr (Human-in-the-Loop Gate)",
    action: "Review, Edit & Authorize Publication",
    detail: "Verifies citations, tests code, and promotes entry from PRIVATE DRAFT to PUBLIC.",
    status: "PENDING",
  },
];

export const DEMO_ARCHIVE: ArchiveRecord[] = [
  {
    id: "arc-101",
    title: "Alveolar Ventilation & Dead Space Python Simulation Script",
    type: "Code Snippet",
    category: "Medicine",
    date: "2026-10-15",
    tags: ["Physiology", "Python", "NumPy", "Respiratory"],
    visibility: "Public",
    excerpt:
      "[DEMO DATA] Vectorized Python implementation modeling minute ventilation, anatomical dead space, and alveolar partial pressure curves.",
    linkedEntity: "Idea: State-Space V/Q Mismatch",
  },
  {
    id: "arc-102",
    title: "Cranial Pharyngeal Arch Muscle Innervation & Embryological Origin Matrix",
    type: "Research Summary",
    category: "Medicine",
    date: "2026-10-09",
    tags: ["Anatomy", "Neuroanatomy", "Cranial Nerves"],
    visibility: "Public",
    excerpt:
      "[DEMO DATA] Comparative structural synthesis distinguishing palatoglossus (CN X pharyngeal plexus) vs. stylopharyngeus (CN IX) motor pathways.",
    linkedEntity: "Application: Interactive Anatomy Explorer",
  },
  {
    id: "arc-103",
    title: "Asymptotic Recurrence Bounds vs. Empirical Runtime in Graph Traversal",
    type: "Diagram & Model",
    category: "Algorithms and Data Structures",
    date: "2026-09-28",
    tags: ["Algorithms", "Big-O", "Graph Theory"],
    visibility: "Public",
    excerpt:
      "[DEMO DATA] Analytical notes comparing Master Theorem recurrence bounds against cache-locality bottlenecks in sparse biomedical adjacency lists.",
    linkedEntity: "Project: Knowledge Graph Explorer",
  },
  {
    id: "arc-104",
    title: "Unpublished Hypothesis: Closed-Loop Autonomic Pacing Telemetry",
    type: "AI Report",
    category: "Bioengineering",
    date: "2026-10-20",
    tags: ["Private Draft", "Bionics", "Electrophysiology"],
    visibility: "Private",
    excerpt:
      "[DEMO DATA — PRIVATE WORKSPACE PREVIEW] Restricted working notes on sensor noise filtering. Visible only when authenticated as Administrator.",
    linkedEntity: "Idea: Biomimetic Baroreflex Control",
  },
];

export const DEMO_PROJECTS: ProjectRecord[] = [
  {
    id: "proj-01",
    title: "Computational Physiology & Hemodynamic Modeling Suite",
    category: "Medical AI & Scientific Visualization",
    status: "Active Prototype (Demonstration)",
    problemStatement:
      "Static textbook diagrams obscure how simultaneous changes in vascular resistance, compliance, and autonomic tone dynamically shift cardiac output.",
    proposedSolution:
      "A modular Python and TypeScript simulation engine that couples classical physiological equations with interactive state-space plots.",
    technologies: ["Python", "NumPy", "Matplotlib", "TypeScript", "Next.js"],
    visibility: "Public",
  },
  {
    id: "proj-02",
    title: "SAKHR Autonomous Literature & Epistemic Synthesis Engine",
    category: "AI Research Agents",
    status: "Architecture Specification",
    problemStatement:
      "Standard LLM chat interfaces mix verified clinical evidence with speculative extrapolation and lack persistent graph memory.",
    proposedSolution:
      "A server-side multi-agent pipeline integrating NCBI Entrez APIs, strict JSON schema validation, and human-in-the-loop publishing controls.",
    technologies: ["Next.js API Routes", "PostgreSQL", "Prisma", "NCBI E-utilities"],
    visibility: "Public",
  },
];

export const FUTURE_APPLICATIONS: ApplicationBlueprint[] = [
  {
    id: "app-medguide",
    name: "MedGuide",
    description:
      "Structured medication pharmacology, mechanism-of-action, and contraindication organization system.",
    status: "Planned Extension",
    deliveryMode: "Authenticated Mobile API",
    category: "Medical Applications",
  },
  {
    id: "app-med-ai-lab",
    name: "Medical AI Laboratory",
    description:
      "Interactive sandbox for running physiological simulations, clinical dataset feature analysis, and classification models.",
    status: "Prototype Module",
    deliveryMode: "Integrated Module",
    category: "Medical AI",
  },
  {
    id: "app-anatomy",
    name: "Interactive Anatomy Explorer",
    description:
      "Relational anatomical explorer mapping muscles, embryological origins, vascular supply, and clinical lesions.",
    status: "Planned Extension",
    deliveryMode: "Integrated Module",
    category: "Educational Tools",
  },
  {
    id: "app-kg-explorer",
    name: "Knowledge Graph Explorer",
    description:
      "Full-screen force-directed graph visualizer for traversing links between Ideas, Research, Papers, and Code.",
    status: "Architecture Spec",
    deliveryMode: "Integrated Module",
    category: "Scientific Visualization",
  },
  {
    id: "app-agent-studio",
    name: "AI Agent Collaboration Studio",
    description:
      "Visual orchestration console for dispatching research questions across the 4 specialized SAKHR agents.",
    status: "Prototype Module",
    deliveryMode: "Integrated Module",
    category: "AI Research Agents",
  },
  {
    id: "app-story-studio",
    name: "Scientific Storytelling Studio",
    description:
      "Environment for crafting hard science-fiction narratives and visual explanations grounded in real physical and biological laws.",
    status: "Planned Extension",
    deliveryMode: "Connected Web App",
    category: "Sci-Fi Concepts",
  },
];
