import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section site-section scroll-mt-20">
      <div className="site-container">
        <Reveal>
          <div className="contact-panel contact-panel-refresh">
            <div className="contact-panel-copy">
              <p className="section-kicker section-kicker-light">
                Have something in mind?
              </p>
              <h2>
                Let&apos;s build something <span>that matters.</span>
              </h2>
              <p>
                I&apos;m open to connecting about frontend opportunities,
                interesting products and collaborative work.
              </p>
              <div className="contact-buttons">
                <Button asChild size="lg">
                  <a href="mailto:aswniikumari@gmail.com">
                    Start a conversation <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </div>
            <div className="contact-side">
              <p>GET IN TOUCH</p>
              <a href="mailto:aswniikumari@gmail.com">
                <Mail /> aswniikumari@gmail.com <ArrowUpRight />
              </a>
              <a
                href="https://linkedin.com/in/aswinikumari"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin /> LinkedIn profile <ArrowUpRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
