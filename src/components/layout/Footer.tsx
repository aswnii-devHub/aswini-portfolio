import { ArrowUpRight } from "lucide-react";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <Brand />
        <p>Designed & built with care · © 2026 Aswini Kumari Gundu</p>
        <a href="#home">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
