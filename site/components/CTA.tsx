import Reveal from "@/components/Reveal";
import { project } from "@/lib/content";

export default function CTA() {
  return (
    <section className="cta-section" id="visi" aria-labelledby="cta-title">
      <div className="page-shell">
        <div className="cta-panel">
          <div className="cta-atmosphere" aria-hidden="true" />
          <div className="cta-inner">
            <Reveal>
              <p className="tracking-label eyebrow"><span className="label-mark" /> 04 / THE NEXT CHAPTER</p>
              <h2 id="cta-title" className="cta-heading font-display">Masa depan dimulai<br /><span>dari sebuah perspektif.</span></h2>
            </Reveal>
            <div className="cta-bottom">
              <p>Terhubung melalui Stream. Jelajahi AI. Ikuti perjalanan XIRAEN membangun pengalaman digital yang lebih bermakna.</p>
              <a href={project.botUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                Masuk ke XIRAEN <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
