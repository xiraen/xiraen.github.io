import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Showcase() {
  return (
    <section id="pengalaman" className="section-spacing showcase-section" aria-labelledby="showcase-title">
      <div className="page-shell">
        <div className="section-intro">
          <Reveal>
            <p className="tracking-label eyebrow"><span className="label-mark" /> 02 / THE EXPERIENCE</p>
            <h2 className="section-heading font-display" id="showcase-title">Terasa sederhana.<br /><span className="heading-soft">Dirancang menyeluruh.</span></h2>
          </Reveal>
          <p className="section-brief">Fokus pada apa yang berarti: koneksi, ide, dan eksplorasi tanpa antarmuka yang membebani.</p>
        </div>
        <div className="showcase-row">
          <Reveal className="showcase-media">
            <div className="social-preview" role="img" aria-label="Ilustrasi konsep Stream XIRAEN dengan susunan posting dan interaksi">
              <div className="preview-header"><span className="preview-mark">X.</span><span>STREAM / PREVIEW</span><span className="preview-menu">•••</span></div>
              <div className="preview-post">
                <div className="preview-author"><span className="avatar-placeholder">X</span><span><strong>Ide dan perspektif</strong><small>Ruang untuk terhubung</small></span><span className="preview-ellipsis">···</span></div>
                <p>Koneksi bermakna dimulai dari ruang untuk berbagi pemikiran.</p>
                <div className="preview-shapes"><span /><span /><span /></div>
                <div className="preview-interactions"><span>♡ &nbsp; Apresiasi</span><span>↪ &nbsp; Balas</span><span>◇ &nbsp; Simpan</span></div>
              </div>
              <div className="preview-lower"><span /><span /><span /></div>
              <div className="preview-label">ILUSTRASI KONSEP · BUKAN TANGKAPAN PRODUK</div>
            </div>
          </Reveal>
          <Reveal className="showcase-copy" delay={0.08}>
            <p className="tracking-label">SOCIAL / 001</p>
            <h3 className="showcase-title font-display">Bukan sekadar melihat.<br /><span className="heading-soft">Ikut membentuk dialog.</span></h3>
            <p>Stream XIRAEN menghubungkan profil, unggahan, balasan, dan akun yang Anda ikuti. Simpan hal yang ingin dibaca kembali, tanpa kehilangan fokus pada percakapan.</p>
            <span className="micro-proof">Sosial dalam Telegram Mini App <span aria-hidden="true">↗</span></span>
          </Reveal>
        </div>
        <div className="showcase-row showcase-row-reverse">
          <Reveal className="showcase-media">
            <div className="ai-preview" role="img" aria-label="Ilustrasi konseptual arah jaringan AI spesialis XIRAEN">
              <div className="ai-preview-top"><span>INTELLIGENCE / CONCEPT</span><span>∞</span></div>
              <Image src="/visuals/network-field.svg" alt="" aria-hidden="true" width={1200} height={1050} loading="lazy" className="ai-preview-image" />
              <div className="ai-preview-caption"><span>ONE QUESTION</span><span className="ai-connector" /><span>FUTURE EXPERT NETWORK</span></div>
            </div>
          </Reveal>
          <Reveal className="showcase-copy" delay={0.08}>
            <p className="tracking-label">INTELLIGENCE / 002</p>
            <h3 className="showcase-title font-display">Satu pertanyaan.<br /><span className="heading-soft">Lebih banyak sudut pandang.</span></h3>
            <p>Saat ini XIRAEN menyediakan asisten AI satu model, dengan persetujuan dan kuota. Visi berikutnya: menggabungkan AI spesialis dan verifikasi independen. Tujuan ini belum menjadi fitur produksi.</p>
            <span className="micro-proof">Fitur AI tersedia · jaringan spesialis masih visi</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
