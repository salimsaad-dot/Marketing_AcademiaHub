import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-display text-base font-semibold text-ink">
          Academia<span className="text-gold">Hub</span>
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate">
          <Link href="/features">Features</Link>
          <Link href="/ai-intelligence">AI Intelligence</Link>
          <Link href="/for-schools">For Schools</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#security">Security</Link>
        </nav>
        <p className="text-xs text-slate-quiet">&copy; {new Date().getFullYear()} Academia Hub</p>
      </div>
    </footer>
  );
}
