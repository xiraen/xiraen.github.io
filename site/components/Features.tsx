import Reveal from "@/components/Reveal";
import { principles } from "@/lib/content";

export default function Features() {
  return (
    <section id="platform" className="section-spacing" aria-labelledby="features-title">
      <div className="page-shell">
        <div className="section-intro">
          <Reveal>
            <p className="tracking-label eyebrow"><span className="label-mark" /> 01 / OUR FOUNDATION</p>
            <h2 id="features-title" className="section-heading font-display">Lebih terhubung.<br /><span className="heading-soft">Lebih berarti.</span></h2>
          </Reveal>
          <p className="section-brief">Satu tempat untuk manusia, gagasan, dan teknologi yang memperluas cara kita melihat dunia.</p>
        </div>
        <div className="editorial-list">
          {principles.map((item, index) => (
            <Reveal key={item.index} delay={index * 0.06}>
              <article className="editorial-row">
                <div className="editorial-index">{item.index} <span className="thin-line" /></div>
                <div>
                  <p className="tracking-label item-eyebrow">{item.eyebrow}</p>
                  <h3 className="editorial-title font-display">{item.title}</h3>
                </div>
                <p className="editorial-description">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
