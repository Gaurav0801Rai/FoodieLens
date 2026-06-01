import { Heart, MapPin, Sparkles, Star, UtensilsCrossed } from "lucide-react";
import type { Recommendation } from "@/types";
import { formatBudgetBand, formatCost, truncateLocation } from "@/lib/format";

interface RestaurantCardProps {
  recommendation: Recommendation;
}

export function RestaurantCard({ recommendation }: RestaurantCardProps) {
  const { restaurant, rank, explanation, match_percent: matchPercent } = recommendation;
  const heroInitial = restaurant.name.charAt(0).toUpperCase();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#18181B] shadow-[0_18px_46px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-accent/55 hover:shadow-[0_24px_60px_rgba(0,0,0,0.48),0_0_28px_rgba(252,128,25,0.18)]">
      <div className="relative h-44 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(252,128,25,0.55),transparent_30%),radial-gradient(circle_at_78%_76%,rgba(45,212,191,0.25),transparent_28%),linear-gradient(135deg,#2A1A12,#080808)]">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.12)_42%,transparent_58%)] opacity-45 transition duration-500 group-hover:translate-x-8" />
        <div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-black/35 text-3xl font-black text-white shadow-[0_0_32px_rgba(252,128,25,0.28)] backdrop-blur">
          {heroInitial}
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-bold text-gray-100 backdrop-blur">
            Rank #{rank}
          </span>
          <span className="rounded-full border border-accent/35 bg-accent/90 px-3 py-1 text-xs font-black text-black shadow-[0_0_20px_rgba(252,128,25,0.36)]">
            {matchPercent}% MATCH
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-start justify-between">
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gray-500">
            FoodieLens pick
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-highlight-teal">
            AI scored
          </span>
        </div>

        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold tracking-normal text-white">{restaurant.name}</h3>
          <button
            type="button"
            className="text-gray-500 transition hover:text-accent"
            aria-label="Save restaurant"
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-300">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {restaurant.rating.toFixed(1)}
          </span>
          <span className="inline-flex items-center gap-1">
            <UtensilsCrossed className="h-3.5 w-3.5 text-highlight-purple" />
            {formatBudgetBand(restaurant.budget_band)}
          </span>
        </div>

        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="inline-flex items-center gap-1 text-gray-400">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
            {truncateLocation(restaurant.location)}
          </span>
          <span className="font-semibold text-accent">{formatCost(restaurant.estimated_cost)}</span>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {restaurant.cuisines.slice(0, 6).map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.68rem] text-gray-300"
            >
              {c.toLowerCase()}
            </span>
          ))}
          {restaurant.cuisines.length > 6 && (
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.68rem] text-gray-500">
              +{restaurant.cuisines.length - 6}
            </span>
          )}
        </div>

        <div className="mt-auto rounded-xl border border-accent/15 bg-black/35 p-3">
          <div className="mb-2 flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent">
            <Sparkles className="h-3 w-3" />
            Why AI picked it
          </div>
          <p className="text-[0.78rem] italic leading-relaxed text-gray-400">
            &ldquo;{explanation}&rdquo;
          </p>
        </div>
      </div>
    </article>
  );
}
