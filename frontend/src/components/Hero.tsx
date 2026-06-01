import { Aperture, Sparkles } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/lib/app";

export function Hero() {
  return (
    <header className="relative mb-10 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#202020_0%,#121212_48%,#000_100%)] px-6 py-16 text-center shadow-[0_30px_90px_rgba(0,0,0,0.5)] sm:px-10 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-highlight-teal/10 blur-[76px]" />
      <div className="pointer-events-none absolute left-8 top-8 hidden h-28 w-28 rounded-full border border-accent/20 shadow-[0_0_48px_rgba(252,128,25,0.18)] sm:block" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black/30 px-4 py-2 text-[0.68rem] font-bold uppercase text-accent shadow-[0_0_28px_rgba(252,128,25,0.2)] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          AI-powered dining
        </div>
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_42px_rgba(252,128,25,0.35)]">
          <Aperture className="h-8 w-8" strokeWidth={1.8} />
        </div>
        <h1 className="text-4xl font-black tracking-normal text-white sm:text-6xl md:text-7xl">
          {APP_NAME}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-xl font-bold leading-tight text-[#E0E0E0] sm:text-2xl md:text-3xl">
          {APP_TAGLINE}
        </p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Focus your cravings, filter the noise, and find the table that matches your mood.
        </p>
      </div>
    </header>
  );
}
