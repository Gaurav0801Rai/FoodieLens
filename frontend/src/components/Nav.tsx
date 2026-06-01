import { Aperture } from "lucide-react";
import { APP_NAME } from "@/lib/app";

export function Nav() {
  return (
    <nav className="sticky top-4 z-20 mb-10 flex items-center justify-between rounded-2xl border border-white/10 bg-[#121212]/75 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_28px_rgba(252,128,25,0.28)]">
          <Aperture className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="text-lg font-black tracking-normal text-white">{APP_NAME}</span>
      </div>
      <a
        href="#discover"
        className="rounded-full border border-accent/30 bg-accent px-5 py-2 text-sm font-bold text-black shadow-[0_0_24px_rgba(252,128,25,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(252,128,25,0.55)]"
      >
        Discover
      </a>
    </nav>
  );
}
