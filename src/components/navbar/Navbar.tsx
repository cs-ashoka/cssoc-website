"use client"
import { jetbrainsMono } from "@/utils/fonts";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
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
        <a href="/" className="flex items-center">
          <Image
            src="/cssoc_logo.jpg"
            alt="CS Society Logo"
            width={44}
            height={44}
            className="object-cover rounded-full border-2 border-on-surface"
          />
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

        
  <a href="https://cs-society-ashoka.github.io/Inductions"
  target="_blank"
  rel="noopener noreferrer"
  className={`${jetbrainsMono.className} hidden md:inline-block bg-primary text-on-primary px-5 py-2 text-sm uppercase tracking-wide rounded hover:opacity-90 transition-opacity`}
>
  Join Us
</a>
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