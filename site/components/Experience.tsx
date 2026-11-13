"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const scenes = {
  stream: {
    index: "01",
    label: "Stream",
    hint: "Ide yang menemukan ruangnya",
    path: "CONNECT / CREATE",
    heading: "Temukan suara baru.",
    description: "Publikasikan ide, ikuti akun yang relevan, dan bangun percakapan melalui Stream.",
    glyph: "◎",
  },
  ai: {
    index: "02",
    label: "AI Assistant",
    hint: "Eksplorasi dengan kecerdasan",
    path: "ASK / EXPLORE",
    heading: "Eksplorasi tanpa hambatan.",
    description: "Asisten AI satu model untuk menggali ide dan pertanyaan, dengan persetujuan pengguna dan kuota.",
    glyph: "✳",
  },
  energy: {
    index: "03",
    label: "XIRA Energy",
    hint: "Kredit internal untuk layanan",
    path: "CREDIT / UTILITY",
    heading: "Energi untuk layanan.",
    description: "XE adalah kredit layanan internal nontransferable, bukan token kripto atau instrumen investasi.",
    glyph: "ϟ",
  },
} as const;

type SceneId = keyof typeof scenes;

export default function Experience() {
  const [selected, setSelected] = useState<SceneId>("stream");
  const reducedMotion = useReducedMotion();
  const current = scenes[selected];

  return (
    <>
      <div className="page-shell" aria-label="Tiga elemen XIRAEN">
        <div className="living-rail">
          {(Object.keys(scenes) as SceneId[]).map((id) => (
            <div className="living-rail-item" key={id}>
              <span className="living-rail-number">{scenes[id].index}</span>
              <span>{scenes[id].label}</span>
              <span className="living-rail-symbol" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
      <section className="living-section" id="experience" aria-labelledby="living-heading">
        <div className="page-shell">
          <div className="living-intro">
            <Reveal>
              <p className="tracking-label eyebrow"><span className="label-mark" /> DISCOVER / THE EXPERIENCE</p>
              <h2 className="living-title font-display" id="living-heading">
                Satu ruang.<br /><span className="heading-soft">Banyak kemungkinan.</span>
              </h2>
            </Reveal>
            <p>Temukan elemen yang membentuk XIRAEN. Pilih kategori untuk melihat bagaimana setiap pengalaman saling terhubung.</p>
          </div>
          <div className="living-layout">
            <div className="living-options" role="group" aria-label="Jelajahi fitur XIRAEN">
              {(Object.keys(scenes) as SceneId[]).map((id) => {
                const scene = scenes[id];
                return (
                  <button
                    type="button"
                    key={id}
                    aria-pressed={selected === id}
                    aria-controls="living-preview"
                    className={"living-choice " + (selected === id ? "is-selected" : "")}
                    onClick={() => setSelected(id)}
                  >
                    <span className="living-choice-index">{scene.index}</span>
                    <span className="living-choice-copy"><strong className="font-display">{scene.label}</strong><small>{scene.hint}</small></span>
                    <span className="living-choice-arrow" aria-hidden="true">↗</span>
                  </button>
                );
              })}
              <p className="living-guidance">Pilih fitur untuk menjelajahi konsep antarmuka.</p>
            </div>
            <div className="living-preview" id="living-preview" data-scene={selected} aria-live="polite" aria-atomic="true">
              <div className="living-grid" aria-hidden="true" />
              <div className="living-preview-meta">
                <span className="living-signal" aria-hidden="true" />
                <span>XIRAEN / {current.label.toUpperCase()}</span>
                <span className="living-preview-index">INTERACTIVE PREVIEW — {current.index}/03</span>
              </div>
              <div className="living-visual" aria-hidden="true">
                <div className="living-orbit living-orbit-one" />
                <div className="living-orbit living-orbit-two" />
                <div className="living-orbit living-orbit-three" />
                <div className="living-emblem">
                  <motion.span
                    key={selected}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {current.glyph}
                  </motion.span>
                </div>
                <i className="living-pin pin-one" /><i className="living-pin pin-two" /><i className="living-pin pin-three" />
              </div>
              <motion.div
                className="living-content"
                key={"content-" + selected}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="living-kicker">{current.path}</span>
                <h3 className="font-display">{current.heading}</h3>
                <p>{current.description}</p>
              </motion.div>
              <span className="living-disclaimer">Visualisasi konseptual — bukan tampilan aplikasi yang sebenarnya.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
