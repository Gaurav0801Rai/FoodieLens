"use client";

import { ChevronDown, MapPin, Minus, Plus, Search, Sparkles } from "lucide-react";
import { useCallback, useState } from "react";
import type { BudgetUi, FormState } from "@/types";

const BUDGET_OPTIONS: BudgetUi[] = ["Budget", "Medium", "Premium"];

interface PreferenceFormProps {
  locations: string[];
  defaultLocation: string;
  loading: boolean;
  onSubmit: (form: FormState) => void;
}

export function PreferenceForm({
  locations,
  defaultLocation,
  loading,
  onSubmit,
}: PreferenceFormProps) {
  const [location, setLocation] = useState(defaultLocation);
  const [budget, setBudget] = useState<BudgetUi>("Medium");
  const [cuisine, setCuisine] = useState("");
  const [minRating, setMinRating] = useState(4.0);
  const [topK, setTopK] = useState(5);
  const [additional, setAdditional] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ location, budget, cuisine, minRating, topK, additional });
    },
    [location, budget, cuisine, minRating, topK, additional, onSubmit],
  );

  return (
    <form
      id="discover"
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-accent/15 bg-[#18181B]/90 p-6 shadow-[0_28px_70px_rgba(0,0,0,0.45)] backdrop-blur sm:p-7"
    >
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="space-y-5">
          <Field label="Area">
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`${inputClass} appearance-none pl-10 pr-10`}
                required
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
          </Field>

          <Field label="Budget range">
            <div className="flex gap-2">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setBudget(opt)}
                  className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                    budget === opt
                      ? "border-accent bg-accent text-black shadow-[0_0_22px_rgba(252,128,25,0.28)]"
                      : "border-white/10 bg-[#121212] text-gray-400 hover:border-accent/40 hover:text-gray-200"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Preferred cuisines">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
              <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Search cuisines... (e.g. Italian, North Indian)"
                className={`${inputClass} pl-10`}
              />
            </div>
          </Field>
        </div>

        <div className="space-y-5">
          <Field label="Minimum rating">
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={5}
                step={0.1}
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-white/10 accent-accent"
              />
              <span className="min-w-[3.5rem] text-right text-lg font-semibold text-white">
                {minRating.toFixed(1)} star
              </span>
            </div>
          </Field>

          <Field label="Number of results">
            <div className="flex items-center gap-0 overflow-hidden rounded-xl border border-white/10 bg-[#121212]">
              <button
                type="button"
                onClick={() => setTopK((k) => Math.max(1, k - 1))}
                className="flex h-11 w-11 items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white"
                aria-label="Decrease results"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex flex-1 items-center justify-center text-base font-medium text-white">
                {topK}
              </span>
              <button
                type="button"
                onClick={() => setTopK((k) => Math.min(20, k + 1))}
                className="flex h-11 w-11 items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white"
                aria-label="Increase results"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </Field>

          <Field label="Additional preferences">
            <textarea
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              placeholder="Describe your perfect dining experience..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-[16px] bg-accent py-4 text-base font-black text-black shadow-[0_0_32px_rgba(252,128,25,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(252,128,25,0.56)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Sparkles className="h-4 w-4" />
        {loading ? "Finding restaurants..." : "Discover Dining"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-gray-400">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-2.5 text-sm text-gray-100 placeholder:text-gray-600 shadow-inner shadow-black/20 focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/20";
