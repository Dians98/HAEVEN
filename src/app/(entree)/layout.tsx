import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { cormorant, dmSans } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "HAEVEN",
  robots: { index: false, follow: true },
};

export default function EntryLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable)}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
