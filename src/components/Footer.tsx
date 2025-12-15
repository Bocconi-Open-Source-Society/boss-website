import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-panel border-t border-ctp-surface1 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://github.com/Bocconi-Open-Source-Society"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctp-overlay0 hover:text-ctp-lavender transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/boss-bocconi-open-source-society"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctp-overlay0 hover:text-ctp-lavender transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-ctp-overlay0">
          <span className="font-semibold gradient-text">BOSS</span> — a{" "}
          <a 
            href="https://bsmachinelearning.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ctp-text hover:text-ctp-lavender transition-colors duration-300 hover:no-underline"
          >
            BSML
          </a> spin-off © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
