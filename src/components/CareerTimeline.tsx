"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export function CareerTimeline() {
  return (
    <section id="journey" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-label mb-3">Career</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            A decade building AI products
          </h2>
          <p className="mt-4 text-lg text-muted">
            From embedded systems and research to leading NLP and conversation AI
            at enterprise scale.
          </p>
        </div>
        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-white/10 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />
          <ul className="space-y-12">
            {profile.experience.map((job, index) => (
              <motion.li
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="md:text-right">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {job.period}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-muted">{job.company}</p>
                  <p className="mt-2 text-sm text-foreground/70">{job.domain}</p>
                </div>
                <div className="glass-panel relative rounded-2xl p-6 md:mt-2">
                  <span
                    className="absolute -left-[3px] top-8 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)] md:left-1/2 md:-translate-x-1/2 md:-left-[calc(50%+0px)]"
                    aria-hidden
                  />
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
