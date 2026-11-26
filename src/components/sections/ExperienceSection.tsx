import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const roles = [
  {
    title: "React.js Developer",
    period: "Nov 2021 — Present",
    domain: "Telecom & E-commerce · Client: Verizon",
    points: [
      "Micro Frontend architecture and shared React modules",
      "Secure checkout, authentication and order workflows",
      "Performance optimization and operational monitoring",
      "Jest and React Testing Library quality coverage",
    ],
  },
  {
    title: "Frontend Engineer",
    period: "",
    domain: "E-commerce & Entertainment · Client: Informa",
    points: [
      "Figma-led UI delivery and sprint-based development",
      "Scalable routing for complex customer journeys",
      "Reusable component libraries and shared modules",
      "Cypress and Vitest test coverage improvements",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section site-section scroll-mt-20"
    >
      <div className="site-container">
        <div className="experience-heading">
          <Reveal>
            <p className="section-kicker section-kicker-light">
              Where I&apos;ve contributed
            </p>
            <h2 className="section-title">
              Experience that
              <br />
              <span>shapes my approach.</span>
            </h2>
            <p className="experience-location">
              <MapPin size={16} /> Hyderabad, India
            </p>
          </Reveal>
        </div>
        <div className="experience-timeline">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 140}>
              <article className="experience-role">
                <div className="role-marker">0{index + 1}</div>
                <div className="role-content">
                  <div className="role-heading">
                    <div>
                      <p className="role-company">Tata Consultancy Services</p>
                      <h3>{role.title}</h3>
                    </div>
                    {role.period && (
                      <span className="role-period">{role.period}</span>
                    )}
                  </div>
                  <p className="role-domain">{role.domain}</p>
                  <ul>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <a
          className="experience-bottom-link"
          href="mailto:aswniikumari@gmail.com"
        >
          Let&apos;s discuss what I can bring to your team{" "}
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
