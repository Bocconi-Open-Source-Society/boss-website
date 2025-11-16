const Footer = () => {
  return (
    <footer className="glass-panel border-t border-ctp-surface1 py-10">
      <div className="container mx-auto px-6 text-center">
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
