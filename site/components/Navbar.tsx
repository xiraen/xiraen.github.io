"use client";

import { useEffect, useState } from "react";
import { navigation, project } from "@/lib/content";

function BrandMark() {
  return (
    <svg viewBox="0 0 48 48" width="23" height="23" role="img" aria-label="Logo XIRAEN">
      <path fill="currentColor" d="M7 8h10l7 11 8-11h10L29 24l13 16H32l-8-11-8 11H6l13-16z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEsc);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("keydown", closeOnEsc);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  return (
    <header className={"site-nav " + (scrolled || open ? "nav-solid" : "")}>
      <div className="page-shell nav-layout">
        <a href="#atas" className="brand-link" aria-label="XIRAEN — beranda" onClick={() => setOpen(false)}>
          <span className="brand-symbol" aria-hidden="true"><BrandMark /></span>
          <span className="brand-word">XIRAEN<span className="accent-dot">.</span></span>
        </a>
        <nav className={"nav-items " + (open ? "is-open" : "")} id="primary-navigation" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a href={item.href} onClick={() => setOpen(false)} key={item.href} className="nav-text">
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-button" href={project.botUrl} target="_blank" rel="noopener noreferrer">
          Buka XIRAEN <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}
