"use client"
import { jetbrainsMono } from "@/utils/fonts";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "#" },
  { label: "Media", href: "#" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          AUCSS
        </a>

        <ul className={`${jetbrainsMono.className} hidden md:flex items-center gap-8 text-sm uppercase tracking-wide`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-on-surface-variant hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={`${jetbrainsMono.className} hidden md:inline-block bg-primary text-on-primary px-5 py-2 text-sm uppercase tracking-wide rounded hover:opacity-90 transition-opacity`}>
          Join Us
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-on-surface"></span>
          <span className="block w-6 h-0.5 bg-on-surface"></span>
          <span className="block w-6 h-0.5 bg-on-surface"></span>
        </button>
      </div>

      {open && (
        <ul className={`${jetbrainsMono.className} md:hidden flex flex-col gap-4 px-6 pb-6 text-sm uppercase tracking-wide`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              
                <a href={link.href}
                onClick={() => setOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}