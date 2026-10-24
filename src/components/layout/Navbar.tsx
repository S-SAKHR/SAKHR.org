// src/components/layout/Navbar.tsx
"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Lock,
  Cpu,
  Sparkles,
  BookOpen,
  Database,
  FolderGit2,
  AppWindow,
  User,
  Home,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#top", icon: Home },
  { label: "My Thinking", href: "#thinking", icon: Sparkles },
  { label: "Research", href: "#research", icon: BookOpen },
  { label: "AI Agents", href: "#agents", icon: Cpu },
  { label: "Knowledge Archive", href: "#archive", icon: Database },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Applications", href: "#applications", icon: AppWindow },
  { label: "About", href: "#about", icon: User },
];

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleWorkspacePreview: () => void;
  workspaceUnlocked: boolean;
}

export default function Navbar({
  onOpenSearch,
  onToggleWorkspacePreview,
  workspaceUnlocked,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sakhr-muted/15 bg-sakhr-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <a
          href="#top"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sakhr-cyan rounded-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-sakhr-cyan/40 bg-sakhr-card shadow-[0_0_15px_rgba(49,133,255,0.25)]">
            <span className="font-mono text-sm font-bold tracking-tighter text-sakhr-cyan">
              S.
            </span>
          </div>
          <div>
            <span className="font-display text-base font-bold tracking-tight text-sakhr-text">
              SAKHR<span className="text-sakhr-electric">.org</span>
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-sakhr-muted">
              Intelligence & Innovation OS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-xs font-medium text-sakhr-muted transition-colors hover:bg-sakhr-card hover:text-sakhr-text focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Search + Private Workspace Login */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex h-10 items-center gap-2 rounded-md border border-sakhr-muted/20 bg-sakhr-secondary px-3 text-xs text-sakhr-muted transition-colors hover:border-sakhr-cyan/50 hover:text-sakhr-text focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
            aria-label="Search ecosystem"
          >
            <Search className="h-4 w-4 text-sakhr-cyan" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-block rounded bg-sakhr-bg px-1.5 py-0.5 font-mono text-[10px] text-sakhr-muted">
              /
            </kbd>
          </button>

          <button
            type="button"
            onClick={onToggleWorkspacePreview}
            className={`flex h-10 items-center gap-2 rounded-md px-3.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sakhr-cyan ${
              workspaceUnlocked
                ? "border border-sakhr-cyan bg-sakhr-cyan/15 text-sakhr-cyan"
                : "bg-sakhr-electric text-sakhr-text hover:bg-sakhr-electric/90 shadow-[0_0_15px_rgba(49,133,255,0.35)]"
            }`}
          >
            <Lock className="h-3.5 w-3.5" />
            <span>{workspaceUnlocked ? "Workspace: Active" : "Login"}</span>
          </button>

          {/* Mobile Drawer Button (Minimum 44x44px touch target for Android) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-sakhr-muted/20 bg-sakhr-secondary text-sakhr-text xl:hidden focus:outline-none focus:ring-2 focus:ring-sakhr-cyan"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-sakhr-cyan" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-sakhr-muted/15 bg-sakhr-secondary px-4 pt-3 pb-6 xl:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-sakhr-text hover:bg-sakhr-card"
                >
                  <Icon className="h-4 w-4 text-sakhr-cyan" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
