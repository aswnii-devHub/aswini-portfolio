import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

// @ts-ignore - the stylesheet is handled by Vite's CSS pipeline
import "./project-showcase.css";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  demoUrl: string;
};

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`project-showcase-section scroll-mt-20 bg-soft py-20 lg:py-28 ${
        isVisible ? "projects-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="project-editorial-heading">
          <div>
            <p className="section-kicker">Some things I've built</p>
            <h2 className="section-title">Projects.</h2>
            <p className="project-section-intro">
              A collection of projects where I've turned ideas into practical solutions.
            </p>
          </div>
          {/* <span className="project-count">
            <span>{String(projects.length).padStart(2, "0")}</span> / WORK
          </span> */}
        </div>

        <div className="project-editorial-list">
          {projects.map((project, index) => (
            <article
              className="project-editorial-row"
              key={project.name}
              style={{ "--project-delay": `${index * 180}ms` } as React.CSSProperties}
            >
              <span className="project-editorial-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="project-editorial-copy">
                <span className="project-editorial-category">
                  <i /> {index === 0 ? "LEARNING TOOL" : "WEB APPLICATION"}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-editorial-meta">
                <div className="project-editorial-tech" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-editorial-links">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-editorial-live"
                  >
                    Live demo <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-editorial-source"
                  >
                    <Github size={15} aria-hidden="true" /> Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
