import Reveal from "@/components/Reveal";
import { proof } from "@/lib/content";

// Product facts take the place of fabricated endorsements or unsupported metrics.
export default function Testimonials() {
  return (
    <section id="transparansi" className="section-spacing evidence-section" aria-labelledby="evidence-heading">
      <div className="page-shell">
        <div className="section-intro">
          <Reveal>
            <p className="tracking-label eyebrow"><span className="label-mark" /> 03 / PRODUCT INTEGRITY</p>
            <h2 id="evidence-heading" className="section-heading font-display">Kepercayaan dibangun<br /><span className="heading-soft">dengan kejelasan.</span></h2>
          </Reveal>
          <p className="section-brief">Tanpa testimoni fiktif atau angka yang tidak dapat diverifikasi. Inilah tiga prinsip yang tercermin dalam produk.</p>
        </div>
        <div className="evidence-grid">
          {proof.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.075}>
              <article className="evidence-item">
                <div className="evidence-top"><span className="evidence-number font-display">{item.number}</span><span className="tracking-label">{item.label}</span></div>
                <h3 className="font-display">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="evidence-note">XIRA Energy adalah kredit layanan nontransferable, bukan token, instrumen investasi, atau aset yang dapat dicairkan. Penggunaan berbayar untuk AI multi-model belum diluncurkan.</p>
      </div>
    </section>
  );
}
