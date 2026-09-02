"use client";

import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useToast } from "@/context/ToastContext";

const inputClass =
  "w-full rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-quiet focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

const EMPTY = { schoolName: "", contactName: "", role: "", email: "", phone: "", schoolSize: "", message: "", interests: [] };

const ROLE_OPTIONS = ["Administrator", "Teacher", "School Owner", "IT Staff", "Other"];
const SCHOOL_SIZE_OPTIONS = ["Under 50 students", "50–200 students", "200–500 students", "500+ students"];
const INTEREST_OPTIONS = ["Academics", "Administration", "Finance", "Communication", "AI Intelligence", "All Modules"];

export default function DemoRequestForm() {
  const toast = useToast();
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleInterest(option) {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(option) ? f.interests.filter((i) => i !== option) : [...f.interests, option],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiRequest("/demo-requests", {
        method: "POST",
        body: {
          schoolName: form.schoolName, contactName: form.contactName, role: form.role, email: form.email,
          phone: form.phone, schoolSize: form.schoolSize, message: form.message, interests: form.interests,
        },
      });
      setSubmitted(true);
      setForm(EMPTY);
    } catch (err) {
      toast.error("Couldn't Send Request", err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="marketing-fade-up rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow)]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink">Request received</h3>
        <p className="mt-1.5 text-sm text-slate-quiet">
          Thanks for your interest — we'll be in touch shortly to schedule your demo.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-teal hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">School Name *</label>
          <input required value={form.schoolName} onChange={(e) => set("schoolName", e.target.value)} className={inputClass} placeholder="e.g. Springfield Academy" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">Your Name *</label>
          <input required value={form.contactName} onChange={(e) => set("contactName", e.target.value)} className={inputClass} placeholder="e.g. Ama Owusu" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">Your Role</label>
          <select value={form.role} onChange={(e) => set("role", e.target.value)} className={inputClass}>
            <option value="">Select your role</option>
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">Email *</label>
          <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="you@school.edu.gh" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">Phone</label>
          <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} placeholder="0244000000" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">School Size</label>
          <select value={form.schoolSize} onChange={(e) => set("schoolSize", e.target.value)} className={inputClass}>
            <option value="">Select school size</option>
            {SCHOOL_SIZE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">What are you interested in?</label>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {INTEREST_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-1.5 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={form.interests.includes(option)}
                  onChange={() => toggleInterest(option)}
                  className="h-4 w-4 rounded border-border text-teal focus:ring-teal"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold text-slate-quiet">Message</label>
          <textarea rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} className={inputClass} placeholder="Tell us a bit about your school..." />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-5 w-full rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-gold-bright active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100 sm:w-auto"
      >
        {submitting ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
