"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

// Matches the blueprint's own real nav structure now that these are all
// real pages. "Security" was never part of that nav — it was added ad hoc
// when Home was first built — so it drops out of the top nav here and
// stays reachable as a Home section from the footer instead.
const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/ai-intelligence", label: "AI Intelligence" },
  { href: "/for-schools", label: "For Schools" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          Academia<span className="text-gold">Hub</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate transition-colors duration-150 ease-out hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="ml-3 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-gold-bright active:scale-[0.98]"
          >
            Request a Demo
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-menu-enter border-t border-border bg-paper px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate transition-colors duration-150 ease-out hover:text-ink">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gold px-4 py-2 text-center text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-gold-bright active:scale-[0.98]"
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
