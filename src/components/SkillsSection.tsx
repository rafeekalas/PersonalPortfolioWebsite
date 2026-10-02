"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="expertise" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="Technical depth, product discipline"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-surface-elevated px-3 py-1 text-sm text-foreground/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
