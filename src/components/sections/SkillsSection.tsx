import { Boxes, Code2, Network, TestTube2, Server } from "lucide-react";
import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const icons = [Code2, Boxes, Network, TestTube2, Server];

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section site-section scroll-mt-20">
      <div className="site-container">
        <div className="section-heading-row skills-heading">
          <Reveal>
            <p className="section-kicker">Technologies I work with</p>

            <h2 className="section-title">
              My technical <span>skills.</span>
            </h2>

            <p className="section-intro">
              The technologies and tools I use to build, test, and maintain
              frontend applications.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <span className="section-side-note">
              01 <i /> TOOLKIT
            </span>
          </Reveal>
        </div>

        <div className="skills-grid">
          {skills.map(({ title, technologies }, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={title} delay={index * 75}>
                <article className="skill-tile">
                  <div className="skill-tile-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                  </div>

                  <h3>{title}</h3>

                  <p>{technologies.join(" , ")}</p>

                  <div className="skill-tile-line" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
