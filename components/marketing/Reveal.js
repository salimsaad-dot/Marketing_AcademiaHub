"use client";

import { useEffect, useRef, useState } from "react";

// Fades a section up into place the first time it scrolls into view —
// applied to below-the-fold marketing sections, never to something already
// on screen at load (hero copy uses the .marketing-fade-up class directly
// instead, no observer needed there). Triggers once and disconnects; a
// visitor scrolling back up and down again won't see it replay, which is
// the "the best animation is that which goes unnoticed" bar for a page
// people read top-to-bottom exactly once. A 2s fallback guards against the
// rare case the observer never fires (e.g. a very fast programmatic
// scroll) — content must never stay invisible.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    const fallback = setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? "marketing-fade-up" : "opacity-0"} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
