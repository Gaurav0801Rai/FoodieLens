import { UtensilsCrossed } from "lucide-react";
import { APP_NAME } from "@/lib/app";

export function Nav() {
  return (
    <nav className="mb-10 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border-muted bg-gradient-to-br from-[#2a2a35] to-[#1a1a22] text-base">
        <UtensilsCrossed className="h-4 w-4 text-gray-300" strokeWidth={2} />
      </div>
      <span className="text-lg font-semibold tracking-tight text-white">{APP_NAME}</span>
    </nav>
  );
}
