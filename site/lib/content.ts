export const project = {
  name: "XIRAEN",
  fullName: "XIRA Expert Network",
  tagline: "Ruang untuk perspektif baru.",
  description: "XIRAEN menghubungkan ruang sosial, asisten AI, dan layanan digital dalam satu pengalaman berbasis Telegram.",
  botUrl: "https://t.me/xiraenbot",
  appUrl: "https://xiraen-mini-app.xiraen.workers.dev/",
  githubUrl: "https://github.com/xiraen",
} as const;

export const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "Experience", href: "#experience" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Visi", href: "#visi" },
  { label: "Transparansi", href: "#transparansi" },
] as const;

export const principles = [
  { index: "01", eyebrow: "CONNECTED", title: "Percakapan yang lebih bermakna.", description: "Berbagi pemikiran, membangun koneksi, dan menemukan perspektif dari komunitas dalam satu Stream." },
  { index: "02", eyebrow: "INTELLIGENCE", title: "Ruang untuk berpikir lebih jauh.", description: "Gunakan asisten AI terintegrasi untuk mengeksplorasi pertanyaan dan mengembangkan ide." },
  { index: "03", eyebrow: "UTILITY", title: "Pengalaman yang tetap sederhana.", description: "Identitas Telegram dan XIRA Energy sebagai kredit layanan internal, tanpa kompleksitas aset kripto." },
] as const;

export const proof = [
  { number: "01", label: "Identitas", title: "Login melalui Telegram", description: "Akun menggunakan verifikasi sesi Telegram, bukan formulir pendaftaran terpisah." },
  { number: "02", label: "Kendali AI", title: "Persetujuan dan kuota", description: "Penggunaan asisten AI mengikuti persetujuan pengguna dan batas penggunaan." },
  { number: "03", label: "Kejelasan XE", title: "Kredit internal, bukan kripto", description: "Energy tidak dapat ditransfer, ditukar, atau dicairkan sebagai token." },
] as const;
