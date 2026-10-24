// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SAKHR.org — Personal Intelligence & Innovation Platform",
  description:
    "Exploring the intersections of medicine, artificial intelligence, neuroscience, robotics, and human imagination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-sakhr-bg font-sans text-sakhr-text antialiased selection:bg-sakhr-electric selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-sakhr-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}



// src/app/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import KnowledgeConstellation from "@/components/visuals/KnowledgeConstellation";
import {
  CORE_PILLARS,
  DEMO_IDEAS,
  RESEARCH_CATEGORIES,
  DEMO_RESEARCH,
  DEMO_AGENTS,
  AGENT_WORKFLOW_STEPS,
  DEMO_ARCHIVE,
  DEMO_PROJECTS,
  FUTURE_APPLICATIONS,
} from "@/lib/demo-data";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Terminal,
  Database,
  Search,
  Lock,
  Unlock,
  FileCode2,
  BookOpen,
  Cpu,
  Layers,
  ExternalLink,
  SlidersHorizontal,
  Download,
} from "lucide-react";

export default function SakhrHomePage() {
  // Interactive state for filtering & demonstration controls
  const [selectedResearchCategory, setSelectedResearchCategory] =
    useState<string>("All");
  const [archiveSearch, setArchiveSearch] = useState<string>("");
  const [archiveTypeFilter, setArchiveTypeFilter] = useState<string>("All");
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [workspaceUnlocked, setWorkspaceUnlocked] = useState<boolean>(false);
  const [approvedStep5, setApprovedStep5] = useState<boolean>(false);

  // Filter research entries
  const filteredResearch = useMemo(() => {
    if (selectedResearchCategory === "All") return DEMO_RESEARCH;
    return DEMO_RESEARCH.filter(
      (item) => item.category === selectedResearchCategory
    );
  }, [selectedResearchCategory]);

  // Filter archive records (Enforces Public vs. Private Workspace visibility!)
  const visibleArchive = useMemo(() => {
    return DEMO_ARCHIVE.filter((item) => {
      if (!workspaceUnlocked && item.visibility === "Private") return false;
      const matchesType =
        archiveTypeFilter === "All" || item.type === archiveTypeFilter;
      const matchesQuery =
        archiveSearch.trim() === "" ||
        item.title.toLowerCase().includes(archiveSearch.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(archiveSearch.toLowerCase()) ||
        item.tags.some((t) =>
          t.toLowerCase().includes(archiveSearch.toLowerCase())
        );
      return matchesType && matchesQuery;
    });
  }, [archiveSearch, archiveTypeFilter, workspaceUnlocked]);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-sakhr-bg">
      <Navbar
        onOpenSearch={() => setSearchModalOpen(true)}
        onToggleWorkspacePreview={() =>
          setWorkspaceUnlocked((prev) => !prev)
        }
        workspaceUnlocked={workspaceUnlocked}
      />

      {/* HONEST SYSTEM STATUS BANNER */}
      <div className="border-b border-sakhr-muted/15 bg-sakhr-secondary/80 px-4 py-2">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sakhr-cyan" />
            <span className="font-mono text-sakhr-text">
              SYSTEM MODE: PHASE 1 FOUNDATION (DEMONSTRATION DATA)
            </span>
          </div>
          <span className="text-sakhr-muted">
            AI Agents & PubMed APIs are in{" "}
            <strong className="text-sakhr-cyan">Setup/Simulation Mode</strong>{" "}
            until server environment keys are configured.
          </span>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        {/* =========================================================
             ========================================================= */}
        <section className="relative overflow-hidden bg-sakhr-radial border-b border-sakhr-muted/15 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Hero Text Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-sakhr-cyan/30 bg-sakhr-card/80 px-3.5 py-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-sakhr-cyan" />
                  <span className="font-mono text-xs uppercase tracking-wider text-sakhr-cyan">
                    Personal Knowledge & Innovation Ecosystem
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-sakhr-text leading-[1.08]">
                  A Mind Exploring{" "}
                  <span className="bg-gradient-to-r from-sakhr-electric to-sakhr-cyan bg-clip-text text-transparent">
                    the Future.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-sakhr-muted leading-relaxed max-w-2xl">
                  Exploring the intersections of medicine, artificial
                  intelligence, neuroscience, robotics, and human imagination.
                  Every question can become an idea. Every idea can become an
                  experiment. Every experiment can become something new.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#thinking"
                    className="inline-flex h-12 items-center gap-2 rounded-md bg-sakhr-electric px-6 text-sm font-semibold text-sakhr-text shadow-[0_0_24px_rgba(49,133,255,0.4)] transition-all hover:bg-sakhr-electric/90 focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
                  >
                    <span>Explore My World</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex h-12 items-center gap-2 rounded-md border border-sakhr-muted/30 bg-sakhr-card/70 px-6 text-sm font-semibold text-sakhr-text transition-colors hover:border-sakhr-cyan hover:bg-sakhr-card focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
                  >
                    <span>Discover My Projects</span>
                  </a>
                </div>

                {/* Architectural Telemetry Pill Bar */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-sakhr-muted/15">
                  <div>
                    <span className="block font-mono text-xs text-sakhr-muted">
                      CORE DISCIPLINES
                    </span>
                    <span className="font-display text-lg font-bold text-sakhr-text">
                      10 Domains
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-sakhr-muted">
                      AGENT PIPELINE
                    </span>
                    <span className="font-display text-lg font-bold text-sakhr-cyan">
                      4 Specialists
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-sakhr-muted">
                      WORKSPACE ACCESS
                    </span>
                    <span className="font-display text-lg font-bold text-sakhr-text">
                      {workspaceUnlocked ? "Admin Unlocked" : "Public View"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Interactive Constellation Column */}
              <div className="lg:col-span-6">
                <KnowledgeConstellation />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: PERSONAL MISSION & HIGH-CONTRAST LIGHT-BLUE BANNER
           ========================================================= */}
        <section className="py-16 bg-sakhr-secondary border-b border-sakhr-muted/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Light-Blue Surface with Dark Navy (#06111F) Headlines per Visual Identity Spec */}
            <div className="rounded-lg bg-sakhr-ice p-6 sm:p-10 shadow-xl border border-sakhr-electric/30">
              <div className="max-w-4xl space-y-3">
                <span className="inline-block rounded bg-sakhr-navy px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-sakhr-cyan">
                  Platform Architecture & Mission
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-sakhr-navy">
                  An Evolving Operating System for Scientific Discovery &
                  Invention
                </h2>
                <p className="text-sm sm:text-base text-sakhr-navy/85 leading-relaxed">
                  SAKHR.org connects clinical medicine and human physiology with
                  computer science, artificial intelligence, control systems,
                  and bioengineering. Rather than storing isolated blog posts,
                  this platform links questions to peer-reviewed evidence,
                  transforms equations into code, and coordinates AI agents to
                  accelerate research.
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_PILLARS.map((pillar) => (
                <a
                  key={pillar.id}
                  href={pillar.href}
                  className="group relative flex flex-col justify-between rounded-lg border border-sakhr-muted/20 bg-sakhr-card p-6 transition-all hover:-translate-y-0.5 hover:border-sakhr-cyan/60"
                >
                  <div>
                    <span className="font-mono text-xs text-sakhr-cyan">
                      {pillar.metric}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-sakhr-text group-hover:text-sakhr-cyan transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-sakhr-electric">
                      {pillar.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-sakhr-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold text-sakhr-text group-hover:text-sakhr-cyan">
                    <span>Enter Section</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= ========================================================= */}
        <section
          id="thinking"
          className="py-16 sm:py-20 bg-sakhr-bg border-b border-sakhr-muted/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                  01 / Intellectual Incubator
                </span>
                <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                  My Thinking — The Idea Studio
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-sakhr-muted">
                  Every idea is tracked from its initial seed question through
                  mathematical modeling and experimental verification, showing
                  its explicit causal chain.
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded border border-sakhr-muted/25 bg-sakhr-secondary px-2.5 py-1 text-sakhr-muted">
                  Statuses: Seed • Exploring • Experimenting • Developed
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {DEMO_IDEAS.map((idea) => (
                <article
                  key={idea.id}
                  className="rounded-lg border border-sakhr-muted/20 bg-sakhr-card bg-card-glow p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-sakhr-electric/20 border border-sakhr-electric/40 px-2.5 py-0.5 font-mono text-xs font-semibold text-sakhr-cyan">
                        Status: {idea.status}
                      </span>
                      <span className="rounded bg-sakhr-secondary px-2.5 py-0.5 font-mono text-xs text-sakhr-muted">
                        Visibility: {idea.visibility}
                      </span>
                      {idea.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded border border-sakhr-muted/20 px-2 py-0.5 text-xs text-sakhr-muted"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-xs text-sakhr-muted">
                      Updated: {idea.updatedAt}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-sakhr-text">
                    {idea.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-sakhr-muted leading-relaxed">
                    {idea.summary}
                  </p>

                  {/* Visual Relationship Chain */}
                  <div className="mt-6 pt-5 border-t border-sakhr-muted/15">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-sakhr-cyan mb-3">
                      Connected Epistemic Chain (Knowledge Graph Path)
                    </span>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                      {idea.connectedChain.map((node, idx) => (
                        <div
                          key={node.stage}
                          className="relative rounded border border-sakhr-muted/20 bg-sakhr-secondary/90 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase text-sakhr-electric">
                              0{idx + 1}. {node.stage}
                            </span>
                          </div>
                          <p className="mt-1 text-xs font-medium text-sakhr-text">
                            {node.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= ========================================================= */}
        <section
          id="research"
          className="py-16 sm:py-20 bg-sakhr-secondary border-b border-sakhr-muted/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                02 / Scientific Investigations
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                Research Laboratory
              </h2>
              <p className="mt-2 max-w-3xl text-sm sm:text-base text-sakhr-muted">
                Every research entry enforces strict epistemic separation
                between{" "}
                <strong className="text-sakhr-text">
                  Established Scientific Evidence
                </strong>
                ,{" "}
                <strong className="text-sakhr-text">
                  Personal Interpretation
                </strong>
                , and{" "}
                <strong className="text-sakhr-cyan">
                  Untested Speculative Hypotheses
                </strong>
                .
              </p>
            </div>

            {/* 10 Expandable Discipline Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedResearchCategory("All")}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                  selectedResearchCategory === "All"
                    ? "bg-sakhr-electric text-white font-semibold"
                    : "border border-sakhr-muted/20 bg-sakhr-card text-sakhr-muted hover:text-sakhr-text"
                }`}
              >
                All Disciplines (10)
              </button>
              {RESEARCH_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedResearchCategory(category)}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                    selectedResearchCategory === category
                      ? "bg-sakhr-electric text-white font-semibold"
                      : "border border-sakhr-muted/20 bg-sakhr-card text-sakhr-muted hover:text-sakhr-text"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Research Entries */}
            <div className="space-y-8">
              {filteredResearch.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-lg border border-sakhr-muted/20 bg-sakhr-card p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sakhr-muted/15 pb-4">
                    <span className="rounded bg-sakhr-electric/20 px-3 py-1 font-mono text-xs font-semibold text-sakhr-cyan">
                      Discipline: {entry.category}
                    </span>
                    <span className="font-mono text-xs text-sakhr-muted">
                      Connected Agent: {entry.relatedAgent}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-sakhr-text">
                      {entry.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs sm:text-sm text-sakhr-cyan">
                      Research Question: {entry.question}
                    </p>
                  </div>

                  {/* Three-Column Epistemic Separation Grid */}
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {/* Column 1: Established Evidence */}
                    <div className="rounded-md border border-emerald-400/30 bg-sakhr-bg/80 p-4">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>1. Established Scientific Evidence</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-sakhr-text leading-relaxed">
                        {entry.establishedEvidence}
                      </p>
                      <div className="mt-3 pt-3 border-t border-sakhr-muted/15">
                        <span className="block font-mono text-[10px] uppercase text-sakhr-muted">
                          Verified References:
                        </span>
                        <ul className="mt-1 space-y-1 text-[11px] text-sakhr-muted font-mono">
                          {entry.citations.map((cite) => (
                            <li key={cite}>• {cite}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Analytical Interpretation */}
                    <div className="rounded-md border border-sakhr-electric/40 bg-sakhr-bg/80 p-4">
                      <div className="flex items-center gap-2 text-sakhr-electric font-mono text-xs font-bold uppercase">
                        <BookOpen className="h-4 w-4" />
                        <span>2. My Analytical Interpretation</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-sakhr-text leading-relaxed">
                        {entry.myInterpretation}
                      </p>
                    </div>

                    {/* Column 3: Untested Speculative Hypothesis */}
                    <div className="rounded-md border border-amber-400/35 bg-sakhr-bg/80 p-4">
                      <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase">
                        <AlertTriangle className="h-4 w-4" />
                        <span>3. Speculative / Untested Hypothesis</span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-sakhr-text leading-relaxed">
                        {entry.speculativeHypothesis}
                      </p>
                      <div className="mt-3 pt-3 border-t border-sakhr-muted/15">
                        <span className="block font-mono text-[10px] uppercase text-amber-300/90">
                          Open Questions for Investigation:
                        </span>
                        <ul className="mt-1 space-y-1 text-xs text-sakhr-muted">
                          {entry.openQuestions.map((q) => (
                            <li key={q}>• {q}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= ========================================================= */}
        <section
          id="agents"
          className="py-16 sm:py-20 bg-sakhr-bg border-b border-sakhr-muted/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                  03 / Autonomous Research & Engineering Crew
                </span>
                <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                  AI Agents & Collaborative Workflow Studio
                </h2>
                <p className="mt-2 max-w-3xl text-sm sm:text-base text-sakhr-muted">
                  Agents inside SAKHR.org are architected as server-side tools
                  with explicit capability registries, untrusted-input
                  sanitization, and mandatory human approval before publishing
                  or modifying data.
                </p>
              </div>

              {/* Honest Configuration Diagnostic Badge */}
              <div className="rounded-md border border-sakhr-cyan/40 bg-sakhr-secondary p-3.5 text-xs max-w-md">
                <div className="flex items-center gap-2 font-mono font-semibold text-sakhr-cyan">
                  <ShieldAlert className="h-4 w-4 shrink-0" />
                  <span>API Integration Status: Demonstration Mode</span>
                </div>
                <p className="mt-1 text-sakhr-muted">
                  No external LLM or PubMed API call is falsified. Configure{" "}
                  <code className="text-sakhr-text">NCBI_API_KEY</code> and{" "}
                  <code className="text-sakhr-text">AI_PROVIDER_KEY</code> in{" "}
                  <code className="text-sakhr-text">.env.local</code> to switch
                  agents from Demo Simulation to Live Execution.
                </p>
              </div>
            </div>

            {/* 4 Specialist Agents Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {DEMO_AGENTS.map((agent) => (
                <div
                  key={agent.id}
                  className="flex flex-col justify-between rounded-lg border border-sakhr-muted/20 bg-sakhr-card p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-sakhr-cyan">
                        {agent.role}
                      </span>
                      <span className="rounded border border-sakhr-cyan/40 bg-sakhr-bg px-2.5 py-0.5 font-mono text-[11px] text-sakhr-cyan">
                        {agent.status}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-sakhr-text">
                      {agent.name}
                    </h3>
                    <p className="mt-1 text-sm text-sakhr-muted">
                      {agent.purpose}
                    </p>

                    <div className="mt-4">
                      <span className="font-mono text-[11px] uppercase text-sakhr-muted">
                        Capabilities:
                      </span>
                      <ul className="mt-1.5 space-y-1 text-xs text-sakhr-text">
                        {agent.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2">
                            <span className="text-sakhr-electric">▹</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {agent.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded bg-sakhr-bg px-2 py-0.5 font-mono text-[11px] text-sakhr-muted border border-sakhr-muted/15"
                        >
                          tool:{tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded bg-sakhr-bg/90 p-3 border border-sakhr-muted/15 font-mono text-xs text-sakhr-muted">
                    {agent.recentActivity}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Multi-Agent Collaboration Pipeline */}
            <div className="rounded-lg border border-sakhr-electric/35 bg-sakhr-secondary p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase text-sakhr-cyan">
                    Interactive Pipeline Visualizer
                  </span>
                  <h3 className="font-display text-xl font-bold text-sakhr-text">
                    6-Stage Collaborative Research & Approval Workflow
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setApprovedStep5((prev) => !prev)}
                  className="rounded-md bg-sakhr-electric px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-sakhr-electric/90 focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
                >
                  {approvedStep5
                    ? "Reset Approval Gate Simulation"
                    : "Simulate Step 5 Human Approval"}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {AGENT_WORKFLOW_STEPS.map((item) => {
                  const effectiveStatus =
                    item.step === 5 && approvedStep5
                      ? "APPROVED_BY_SAKHR"
                      : item.step === 6 && approvedStep5
                      ? "READY_TO_PUBLISH"
                      : item.status;

                  return (
                    <div
                      key={item.step}
                      className={`rounded-md border p-4 ${
                        effectiveStatus === "AWAITING_USER_APPROVAL"
                          ? "border-amber-400/50 bg-sakhr-card"
                          : "border-sakhr-muted/20 bg-sakhr-bg/80"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="text-sakhr-cyan font-bold">
                          STEP 0{item.step}
                        </span>
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] ${
                            effectiveStatus === "AWAITING_USER_APPROVAL"
                              ? "bg-amber-400/20 text-amber-300"
                              : "bg-sakhr-electric/20 text-sakhr-cyan"
                          }`}
                        >
                          {effectiveStatus}
                        </span>
                      </div>
                      <h4 className="mt-2 font-display text-sm font-bold text-sakhr-text">
                        {item.action}
                      </h4>
                      <span className="block font-mono text-[11px] text-sakhr-electric">
                        Actor: {item.actor}
                      </span>
                      <p className="mt-2 text-xs text-sakhr-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
           ========================================================= */}
        <section
          id="archive"
          className="py-16 sm:py-20 bg-sakhr-secondary border-b border-sakhr-muted/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                  04 / Long-Term Platform Memory (RAG-Ready Schema)
                </span>
                <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                  My Knowledge Archive
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-sakhr-muted">
                  Searchable repository of text notes, scientific papers, code
                  snippets, and diagrams. Toggle the{" "}
                  <strong className="text-sakhr-cyan">Login</strong> button in
                  the top bar to see how private items are strictly hidden from
                  public visitors.
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="search"
                  value={archiveSearch}
                  onChange={(e) => setArchiveSearch(e.target.value)}
                  placeholder="Filter notes, tags, Python..."
                  className="h-10 rounded-md border border-sakhr-muted/25 bg-sakhr-bg px-3 text-xs text-sakhr-text placeholder:text-sakhr-muted focus:border-sakhr-cyan focus:outline-none"
                />
                <select
                  value={archiveTypeFilter}
                  onChange={(e) => setArchiveTypeFilter(e.target.value)}
                  className="h-10 rounded-md border border-sakhr-muted/25 bg-sakhr-bg px-3 text-xs text-sakhr-text focus:border-sakhr-cyan focus:outline-none"
                  aria-label="Filter Archive by Content Type"
                >
                  <option value="All">All Types</option>
                  <option value="Code Snippet">Code Snippets</option>
                  <option value="Research Summary">Research Summaries</option>
                  <option value="Diagram & Model">Diagrams & Models</option>
                  <option value="AI Report">AI Reports</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {visibleArchive.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-lg border p-6 ${
                    item.visibility === "Private"
                      ? "border-amber-400/40 bg-sakhr-card/90"
                      : "border-sakhr-muted/20 bg-sakhr-card"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-sakhr-cyan">{item.type}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] ${
                          item.visibility === "Private"
                            ? "bg-amber-400/20 text-amber-300"
                            : "bg-sakhr-bg text-sakhr-muted"
                        }`}
                      >
                        {item.visibility}
                      </span>
                      <span className="text-sakhr-muted">{item.date}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-sakhr-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-sakhr-muted leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-sakhr-muted/15">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-sakhr-bg px-2 py-0.5 font-mono text-[10px] text-sakhr-muted"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[11px] text-sakhr-electric">
                      Linked → {item.linkedEntity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
             ========================================================= */}
        <section
          id="projects"
          className="py-16 sm:py-20 bg-sakhr-bg border-b border-sakhr-muted/15"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Projects Subsection */}
            <div className="space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                  05 / Engineering & Prototyping
                </span>
                <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                  Research & Engineering Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {DEMO_PROJECTS.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-lg border border-sakhr-muted/20 bg-sakhr-card p-6 sm:p-8 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                        <span className="text-sakhr-cyan">
                          {project.category}
                        </span>
                        <span className="rounded bg-sakhr-bg px-2.5 py-0.5 text-sakhr-muted">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-sakhr-text">
                        {project.title}
                      </h3>
                      <div>
                        <span className="font-mono text-xs uppercase text-sakhr-electric">
                          Problem Statement:
                        </span>
                        <p className="mt-1 text-sm text-sakhr-muted">
                          {project.problemStatement}
                        </p>
                      </div>
                      <div>
                        <span className="font-mono text-xs uppercase text-sakhr-cyan">
                          Proposed Architecture & Solution:
                        </span>
                        <p className="mt-1 text-sm text-sakhr-text">
                          {project.proposedSolution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-sakhr-muted/15 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-sakhr-muted/20 bg-sakhr-bg px-2.5 py-1 font-mono text-xs text-sakhr-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications Subsection */}
            <div id="applications" className="space-y-8 pt-8 border-t border-sakhr-muted/15">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                  06 / Modular Software Ecosystem
                </span>
                <h2 className="mt-1 font-display text-3xl font-bold text-sakhr-text">
                  Applications Launchpad (Future Extensions)
                </h2>
                <p className="mt-2 max-w-3xl text-sm sm:text-base text-sakhr-muted">
                  Designed with a plug-and-play registry so new applications can
                  run as internal modules, standalone web apps, or mobile apps
                  communicating through authenticated SAKHR.org APIs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {FUTURE_APPLICATIONS.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-lg border border-sakhr-muted/20 bg-sakhr-secondary p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                        <span className="text-sakhr-electric">
                          {app.category}
                        </span>
                        <span className="rounded bg-sakhr-card px-2 py-0.5 text-sakhr-cyan">
                          {app.status}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold text-sakhr-text">
                        {app.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-sakhr-muted leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-sakhr-muted/15 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-sakhr-muted">
                        Mode: {app.deliveryMode}
                      </span>
                      <span className="font-mono text-xs text-sakhr-cyan">
                        Modular Slot Ready
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ========================================================= */}
        <section id="about" className="py-16 sm:py-20 bg-sakhr-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* About Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sakhr-cyan">
                07 / The Mind Behind the Platform
              </span>
              <h2 className="font-display text-3xl font-bold text-sakhr-text">
                About SAKHR.org
              </h2>
              <p className="text-sm sm:text-base text-sakhr-muted leading-relaxed">
                SAKHR.org is an evolving record of my journey across medicine,
                science, computation, and invention. Driven by deep curiosity
                and interdisciplinary thinking, this platform exists to bridge
                human physiology and clinical knowledge with algorithms,
                artificial intelligence, and biomimetic engineering.
              </p>
              <p className="text-sm sm:text-base text-sakhr-muted leading-relaxed">
                Every biographical field, milestone, and publication record in
                this section is stored as an editable configuration object inside
                the Private Administration Workspace—ensuring zero fabricated
                credentials and complete ownership over how my work is presented.
              </p>
            </div>

            {/* Private Workspace & Portable Data Export Panel */}
            <div className="lg:col-span-5 rounded-lg border border-sakhr-electric/40 bg-sakhr-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-sakhr-cyan">
                  Administration & Sovereignty
                </span>
                <span className="rounded bg-sakhr-bg px-2.5 py-1 font-mono text-xs text-sakhr-text">
                  Draft → Review → Publish
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-sakhr-text">
                Private Workspace & Portable Archive
              </h3>
              <p className="text-xs sm:text-sm text-sakhr-muted leading-relaxed">
                Your intellectual work belongs to you permanently. Export all
                ideas, research notes, citations, and graph edges as a portable
                JSON bundle at any time.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setWorkspaceUnlocked((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-md bg-sakhr-electric px-4 py-2.5 text-xs font-semibold text-white hover:bg-sakhr-electric/90"
                >
                  {workspaceUnlocked ? (
                    <>
                      <Unlock className="h-4 w-4" />
                      <span>Lock Private Workspace Preview</span>
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      <span>Unlock Private Workspace Preview</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-sakhr-bg/80 p-4 pt-20 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Global Ecosystem Search"
        >
          <div className="w-full max-w-xl rounded-lg border border-sakhr-cyan/40 bg-sakhr-card p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-sakhr-muted/20 pb-3">
              <span className="font-mono text-xs text-sakhr-cyan">
                GLOBAL ECOSYSTEM SEARCH
              </span>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="font-mono text-xs text-sakhr-muted hover:text-sakhr-text"
              >
                [ESC / Close]
              </button>
            </div>
            <input
              type="search"
              autoFocus
              value={archiveSearch}
              onChange={(e) => setArchiveSearch(e.target.value)}
              placeholder="Search across Ideas, Research, Agents, Archive..."
              className="mt-4 w-full rounded-md border border-sakhr-muted/30 bg-sakhr-bg px-4 py-3 text-sm text-sakhr-text focus:border-sakhr-cyan focus:outline-none"
            />
            <p className="mt-3 font-mono text-xs text-sakhr-muted">
              Matching Archive Items: {visibleArchive.length} records found.
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-sakhr-muted/15 bg-sakhr-bg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sakhr-muted">
          <span>
            © {new Date().getFullYear()} SAKHR.org — Personal Intelligence &
            Innovation Platform
          </span>
          <span className="font-mono">
            Built for Interdisciplinary Discovery • Medicine × AI × Engineering
          </span>
        </div>
      </footer>
    </div>
  );
}



