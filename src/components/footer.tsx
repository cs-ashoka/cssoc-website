import { jetbrainsMono } from "@/utils/fonts";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-row justify-between items-center gap-4">
        <div className="text-left">
          <div className="text-sm md:text-xl font-black tracking-tight mb-1">AUCSS</div>
          <p className="text-on-surface-variant text-[10px] md:text-sm">
            © {new Date().getFullYear()} AUCSS.
          </p>
        </div>
        <div className={`${jetbrainsMono.className} flex flex-col items-end gap-2`}>
          <div className="flex flex-col items-end gap-1 text-[10px] md:flex-row md:items-center md:gap-6 md:text-sm uppercase tracking-wide">
            <a href="mailto:cs.society@ashoka.edu.in" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
            <a href="https://www.instagram.com/cs.ashoka/" className="text-on-surface-variant hover:text-primary transition-colors">Instagram</a>
            <a href="https://twitter.com/cs_ashoka" className="text-on-surface-variant hover:text-primary transition-colors">Twitter</a>
            <a href="https://github.com/cs-ashoka" className="text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/company/cs-society-ashoka-universtiy/" className="text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <div className="text-[10px] md:text-xs text-on-surface-variant/60">v1.0.0</div>
        </div>
      </div>
    </footer>
  );
}