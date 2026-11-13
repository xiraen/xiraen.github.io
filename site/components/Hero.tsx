import Image from "next/image";
import Reveal from "@/components/Reveal";
import { project } from "@/lib/content";

export default function Hero() {
  return (
    <section id="atas" className="hero relative overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="page-shell relative">
        <div className="hero-overline">
          <span className="tracking-label">XIRA / EXPERT NETWORK</span>
          <span className="hero-coordinate">00° / HUMAN × INTELLIGENCE</span>
        </div>
        <Reveal>
          <h1 id="hero-title" className="hero-heading font-display">
            Ruang untuk<br /><span className="hero-heading-accent">perspektif baru.</span>
          </h1>
        </Reveal>
        <div className="hero-base">
          <div className="hero-description">
            <Reveal delay={0.08}>
              <p className="body-lead">{project.description} Berbagi hari ini. Bereksplorasi lebih jauh bersama kecerdasan buatan.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="button-group">
                <a href={project.botUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                  Mulai di Telegram <span aria-hidden="true">↗</span>
                </a>
                <a href="#platform" className="button button-ghost">Kenali XIRAEN <span aria-hidden="true">↓</span></a>
              </div>
            </Reveal>
            <p className="hero-footnote"><span className="status-indicator" /> Telegram Mini App · AI multi-model masih dalam pengembangan.</p>
          </div>
          <Reveal className="hero-image-wrap" delay={0.14}>
            <div className="hero-image-frame">
              <Image src="/visuals/network-field.svg" alt="Visual konseptual jaringan manusia dan AI XIRAEN" width={1200} height={1050} priority className="hero-image" />
              <div className="visual-caption">
                <span>FIG.01 — CONNECTED INTELLIGENCE</span>
                <span>CONCEPT STUDY / 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="hero-bottom-rule"><span>SCROLL TO EXPLORE</span><span>01 — 05</span></div>
      </div>
    </section>
  );
}
