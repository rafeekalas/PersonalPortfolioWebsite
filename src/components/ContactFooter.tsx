import Link from "next/link";
import { profile } from "@/content/profile";

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="glass-panel overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="section-label mb-4">Contact</p>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Let&apos;s build what&apos;s next
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Open to leadership conversations, AI product partnerships, and
                selective advisory work.
              </p>
            </div>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="text-accent hover:underline"
              >
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-muted hover:text-foreground">
                {profile.phone}
              </a>
              <Link href="/portfolio" className="text-muted hover:text-accent">
                Portfolio →
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-muted">
          © 2026 {profile.name}. Crafted with Next.js.
        </p>
      </div>
    </footer>
  );
}
