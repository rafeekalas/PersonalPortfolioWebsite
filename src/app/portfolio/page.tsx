import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Rafeek Alas",
  description: "Selected work and case studies — launching soon.",
};

const placeholders = [
  {
    title: "Conversation AI for triaging",
    tag: "Enterprise ML",
    status: "Case study coming soon",
  },
  {
    title: "Teams-integrated ML assistant",
    tag: "Azure · NLP",
    status: "Case study coming soon",
  },
  {
    title: "End-to-end ML product architecture",
    tag: "Product · Platform",
    status: "Case study coming soon",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-xs text-accent hover:underline"
        >
          ← Back home
        </Link>
        <p className="section-label mt-8">Portfolio</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          Work that ships—<span className="text-gradient">stories arriving soon</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Detailed case studies for NLP, conversation AI, and product leadership
          engagements will live here. Until then, explore the career journey on
          the home page or reach out directly.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {placeholders.map((item) => (
            <article
              key={item.title}
              className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition hover:border-accent/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-mono text-xs text-accent">{item.tag}</p>
              <h2 className="font-display relative mt-4 text-lg font-semibold">
                {item.title}
              </h2>
              <p className="relative mt-4 text-sm text-muted">{item.status}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background"
          >
            Discuss a project
          </Link>
        </div>
      </div>
    </div>
  );
}
