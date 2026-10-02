import { profile } from "@/content/profile";

export function EducationPublications() {
  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="section-label mb-3">Education</p>
          <ul className="space-y-8">
            {profile.education.map((edu) => (
              <li key={edu.degree} className="border-l-2 border-accent/30 pl-6">
                <p className="font-mono text-xs text-accent">{edu.period}</p>
                <h3 className="font-display mt-2 text-lg font-semibold">
                  {edu.degree}
                </h3>
                <p className="text-muted">{edu.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted/90">
                  {edu.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="section-label mb-3 mt-12">Certifications</p>
          <ul className="space-y-2 text-sm text-muted">
            {profile.certifications.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-label mb-3">Research & awards</p>
          <ul className="space-y-6">
            {profile.publications.map((pub) => (
              <li key={pub.title} className="glass-panel rounded-xl p-5">
                <h3 className="text-sm font-medium leading-snug">{pub.title}</h3>
                <p className="mt-2 text-xs text-muted">{pub.venue}</p>
                {"link" in pub && pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-accent hover:underline"
                  >
                    View publication →
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
