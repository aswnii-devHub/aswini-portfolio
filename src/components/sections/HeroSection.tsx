import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

const codeLines = [
  {
    n: "01",
    code: (
      <>
        <span className="code-purple">const</span>{" "}
        <span className="code-blue">developer</span> = &#123;
      </>
    ),
  },
  {
    n: "02",
    code: (
      <>
        &nbsp;&nbsp;name:{" "}
        <span className="code-green">&quot;Aswini Gundu&quot;</span>,
      </>
    ),
  },
  {
    n: "03",
    code: (
      <>
        &nbsp;&nbsp;role:{" "}
        <span className="code-green">&quot;Frontend Engineer&quot;</span>,
      </>
    ),
  },
  {
    n: "04",
    code: (
      <>
        &nbsp;&nbsp;focus: [
        <span className="code-green">&quot;React&quot;</span>,{" "}
        <span className="code-green">&quot;UI&quot;</span>,{" "}
        <span className="code-green">&quot;Quality&quot;</span>],
      </>
    ),
  },
  {
    n: "05",
    code: (
      <>
        &nbsp;&nbsp;mindset:{" "}
        <span className="code-green">&quot;Keep improving&quot;</span>
      </>
    ),
  },
  { n: "06", code: "};" },
];

export function HeroSection() {
  return (
    <section id="home" className="hero-section scroll-mt-24">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="site-container hero-layout">
        <Reveal className="hero-copy" direction="left">
          <p className="hero-availability">
            <span /> Available for frontend opportunities
          </p>
          <p className="hero-eyebrow">HELLO, I&apos;M</p>
          <h1>
            Aswini <span>Gundu.</span>
          </h1>
          <h2>
            Frontend Engineer <i>·</i> React.js Developer
          </h2>
          <p className="hero-description">
            I create a high-performance, scalable React applications for
            intricate telecom and e-commerce products into seamless user
            experiences.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href="#projects">
                Explore my work <ArrowUpRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="/Aswini-Gundu-Resume.pdf"
                download="Aswini-Gundu-Resume.pdf"
              >
                Download resume <ArrowDown />
              </a>
            </Button>
          </div>
          <div className="hero-socials">
            <a
              className="social-link"
              href="https://linkedin.com/in/aswinikumari"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
            <a className="social-link" href="mailto:aswniikumari@gmail.com">
              <Mail /> Email
            </a>
            <span className="social-link">
              <MapPin /> Hyderabad, India
            </span>
          </div>
        </Reveal>
        <Reveal className="hero-visual-wrap" direction="right" delay={180}>
          <div className="hero-code-card">
            <div className="code-card-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>about-me.ts</span>
              <Code2 size={16} />
            </div>
            <div className="code-card-body">
              {codeLines.map((line) => (
                <div className="code-line" key={line.n}>
                  <span className="line-number">{line.n}</span>
                  <code>{line.code}</code>
                </div>
              ))}
            </div>
            <div className="code-card-bottom">
              <span className="code-status-dot" /> Building thoughtful digital
              experiences <Github size={15} />
            </div>
          </div>
          <div className="hero-float-chip hero-chip-top">
            <span>✳</span> React ecosystem
          </div>
          <div className="hero-float-chip hero-chip-bottom">
            <span>✓</span> Quality-minded development
          </div>
        </Reveal>
      </div>
      <a className="hero-scroll-cue" href="#skills">
        <span /> Scroll to explore
      </a>
    </section>
  );
}
