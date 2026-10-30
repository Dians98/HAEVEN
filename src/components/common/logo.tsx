import { cn } from "@/lib/utils";

// Teinté par currentColor : bleu poudré sur fond clair, ivoire sur fond bleu.
export function Logo({ className }: { className?: string }) {
  return <span className={cn("logo-mask", className)} aria-hidden="true" />;
}
