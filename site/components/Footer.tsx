import { navigation, project } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell">
        <div className="footer-main">
          <div>
            <a href="#atas" className="footer-brand font-display" aria-label="Kembali ke atas">XIRAEN<span>.</span></a>
            <p>{project.fullName}<br />Ruang untuk perspektif baru.</p>
          </div>
          <nav aria-label="Navigasi footer" className="footer-links">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="footer-social">
            <a href={project.botUrl} target="_blank" rel="noopener noreferrer">Telegram ↗</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer">Mini App ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 XIRAEN. All rights reserved.</span>
          <span>BUILT WITH INTENT. DESIGNED TO EVOLVE.</span>
        </div>
      </div>
    </footer>
  );
}
