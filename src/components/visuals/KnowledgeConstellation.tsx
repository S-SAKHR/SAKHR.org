// src/components/visuals/KnowledgeConstellation.tsx
"use client";

import React, { useState } from "react";
import { Cpu, Activity, BookOpen, Sparkles, Layers, Network } from "lucide-react";

interface ConstellationNode {
  id: string;
  title: string;
  stage: string;
  domain: string;
  x: number;
  y: number;
  description: string;
  connections: string[];
}

const NODES: ConstellationNode[] = [
  {
    id: "node-med",
    title: "Physiological Question",
    stage: "01 / Observation",
    domain: "Medicine & Neuroscience",
    x: 18,
    y: 28,
    description:
      "Clinical & anatomical questions—e.g., autonomic baroreflex dynamics, alveolar gas exchange, or neural pathway topology.",
    connections: ["node-res", "node-math"],
  },
  {
    id: "node-res",
    title: "Empirical Discovery",
    stage: "02 / Evidence",
    domain: "Research Laboratory",
    x: 52,
    y: 18,
    description:
      "Peer-reviewed literature retrieved via PubMed APIs, strictly separating established mechanisms from untested hypotheses.",
    connections: ["node-math", "node-agent"],
  },
  {
    id: "node-math",
    title: "Computational Model",
    stage: "03 / Formalization",
    domain: "Mathematics & Python",
    x: 34,
    y: 62,
    description:
      "Translating biological mechanisms into differential equations, state-space matrices, and vectorized Python simulations.",
    connections: ["node-ai", "node-agent"],
  },
  {
    id: "node-agent",
    title: "Multi-Agent Synthesis",
    stage: "04 / Intelligence",
    domain: "AI Agent Studio",
    x: 78,
    y: 36,
    description:
      "Collaborative workflow across Research, Scientific Analysis, Archivist, and Engineering agents with human approval gates.",
    connections: ["node-ai", "node-app"],
  },
  {
    id: "node-ai",
    title: "Algorithm & Architecture",
    stage: "05 / Engineering",
    domain: "AI & Control Systems",
    x: 62,
    y: 76,
    description:
      "Designing biomimetic control loops, neural network architectures, and data structures inspired by biological systems.",
    connections: ["node-app"],
  },
  {
    id: "node-app",
    title: "Experimental Application",
    stage: "06 / Ecosystem",
    domain: "Live Software Module",
    x: 86,
    y: 70,
    description:
      "Deploying modular applications (MedGuide, Medical AI Lab, Anatomy Explorer) integrated into SAKHR.org.",
    connections: [],
  },
];

export default function KnowledgeConstellation() {
  const [selectedId, setSelectedId] = useState<string>("node-med");
  const activeNode = NODES.find((n) => n.id === selectedId) || NODES[0];

  return (
    <div className="relative rounded-lg border border-sakhr-muted/20 bg-sakhr-secondary/90 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
      {/* Top specular highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sakhr-cyan/60 to-transparent" />

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sakhr-muted/15 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Network className="h-4 w-4 text-sakhr-cyan" />
          <span className="font-mono text-xs uppercase tracking-wider text-sakhr-cyan">
            Interactive Epistemic Topology
          </span>
        </div>
        <span className="font-mono text-[11px] text-sakhr-muted">
          Tap any node to trace connection pathways
        </span>
      </div>

      {/* SVG Constellation Canvas */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-md bg-sakhr-bg/90 border border-sakhr-muted/10">
        {/* Subtle technical grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(#42D9F5 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-label="Interactive Knowledge Graph Constellation"
        >
          {/* Directed Edges */}
          {NODES.map((source) =>
            source.connections.map((targetId) => {
              const target = NODES.find((n) => n.id === targetId);
              if (!target) return null;
              const isHighlighted =
                source.id === selectedId || target.id === selectedId;
              return (
                <line
                  key={`${source.id}-${target.id}`}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  stroke={isHighlighted ? "#42D9F5" : "#3185FF"}
                  strokeOpacity={isHighlighted ? "0.85" : "0.28"}
                  strokeWidth={isHighlighted ? "0.7" : "0.35"}
                  strokeDasharray={isHighlighted ? "none" : "1.5 1.5"}
                />
              );
            })
          )}
        </svg>

        {/* Interactive HTML Node Overlay for Accessible Touch & Keyboard Navigation */}
        {NODES.map((node) => {
          const isSelected = node.id === selectedId;
          const isConnected =
            activeNode.connections.includes(node.id) ||
            node.connections.includes(activeNode.id);

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedId(node.id)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-full px-2.5 py-1.5 text-left transition-all focus:outline-none focus:ring-2 focus:ring-sakhr-cyan ${
                isSelected
                  ? "z-20 bg-sakhr-electric text-sakhr-text ring-2 ring-sakhr-cyan shadow-[0_0_20px_rgba(66,217,245,0.45)]"
                  : isConnected
                  ? "z-10 bg-sakhr-card/95 text-sakhr-text border border-sakhr-cyan/50 hover:border-sakhr-cyan"
                  : "z-10 bg-sakhr-secondary/90 text-sakhr-muted border border-sakhr-muted/25 hover:text-sakhr-text"
              }`}
              aria-pressed={isSelected}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isSelected
                    ? "bg-sakhr-cyan animate-ping"
                    : isConnected
                    ? "bg-sakhr-cyan"
                    : "bg-sakhr-electric/60"
                }`}
              />
              <span className="font-mono text-[10px] sm:text-xs font-medium whitespace-nowrap">
                {node.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Telemetry Inspector */}
      <div className="mt-4 rounded-md border border-sakhr-electric/30 bg-sakhr-card/80 p-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-sakhr-electric/20 px-2 py-0.5 font-mono text-[11px] text-sakhr-cyan">
              {activeNode.stage}
            </span>
            <h3 className="font-display text-sm sm:text-base font-semibold text-sakhr-text">
              {activeNode.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-sakhr-muted">
            Domain: {activeNode.domain}
          </span>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-sakhr-muted leading-relaxed">
          {activeNode.description}
        </p>
      </div>
    </div>
  );
}
