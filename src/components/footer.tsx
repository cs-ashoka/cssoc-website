import { jetbrainsMono } from "@/utils/fonts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-xl font-black tracking-tight mb-1">AUCSS</div>
          <p className="text-on-surface-variant text-sm">
            © {new Date().getFullYear()} Ashoka University Computer Science Society.
          </p>
        </div>
        <div className={`${jetbrainsMono.className} flex flex-col items-center md:items-end gap-3`}>
          <div className="flex flex-col gap-2 text-xs md:flex-row md:gap-6 md:text-sm uppercase tracking-wide">
             <a href="mailto:cs.society@ashoka.edu.in" className="text-on-surface-variant hover:text-primary transition-colors">
              Email
            </a>
            <a href="https://www.instagram.com/cs.ashoka/" className="text-on-surface-variant hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://www.twitter.com/cs_ashoka/" className="text-on-surface-variant hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://github.com/cs-ashoka" className="text-on-surface-variant hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/company/cs-society-ashoka-universtiy/" className="text-on-surface-variant hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="text-xs text-on-surface-variant/60">v1.0.0</div>
        </div>
      </div>
    </footer>
  );
}