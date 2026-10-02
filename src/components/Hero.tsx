"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-24">
      <div
        className="glow-orb -left-32 top-20 h-72 w-72 bg-accent/25"
        aria-hidden
      />
      <div
        className="glow-orb -right-20 top-1/3 h-96 w-96 bg-warm/15"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
        >
          {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-xl text-muted md:text-2xl"
        >
          {profile.title}
          <span className="text-foreground/80"> — </span>
          {profile.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="#journey"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110"
          >
            View career journey
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            Portfolio
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 grid gap-4 border-t border-white/5 pt-10 sm:grid-cols-3"
        >
          {profile.highlights.map((item) => (
            <li
              key={item}
              className="font-mono text-xs leading-relaxed text-muted md:text-sm"
            >
              <span className="mr-2 text-accent">▸</span>
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
