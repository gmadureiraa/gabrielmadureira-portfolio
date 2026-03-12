export const dynamic = "force-dynamic";

import { Newsletter } from "@/components/newsletter";
import RetroGrid from "@/components/magicui/retro-grid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function NewsletterPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* Background Effect */}
      <RetroGrid className="opacity-30 fixed inset-0 pointer-events-none" />

      {/* Header / Nav */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-white transition-colors hover:bg-white/5 py-2 px-4 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao portfólio
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Content (v0 Newsletter UI) */}
      <main className="flex-1 relative z-10 w-full h-full pb-10">
        <Newsletter />
      </main>
    </div>
  );
}
