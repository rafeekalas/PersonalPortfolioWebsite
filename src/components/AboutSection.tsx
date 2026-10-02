import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Product leadership at the intersection of AI and impact"
          description={profile.summary}
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-panel rounded-2xl p-8 md:col-span-2">
            <h3 className="font-display text-lg font-semibold">Focus areas</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Customer research and analysis inform every initiative—from
              triaging automation and team chat integrations to full ML platform
              design. I combine hands-on engineering depth with ownership of
              roadmap, architecture, and delivery.
            </p>
          </div>
          <div className="glass-panel flex flex-col justify-between rounded-2xl p-8">
            <div>
              <h3 className="font-display text-lg font-semibold">Based in</h3>
              <p className="mt-2 text-muted">{profile.location}</p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="font-mono text-xs text-accent">10+ years</p>
              <p className="mt-1 text-sm text-muted">Building intelligent products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
