import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const html = read("index.html");
const script = read("script.js");
const css = read("styles.css");
const nextPage = read("site/app/page.tsx");
const nextHero = read("site/components/Hero.tsx");
const nextExperience = read("site/components/Experience.tsx");
const nextCSS = read("site/app/globals.css");
const nextConfig = read("site/next.config.ts");

test("public page keeps functioning navigation, product explorer and CTAs", () => {
  for (const id of ["experience", "platform", "vision", "principles", "progress", "scene-panel"]) {
    assert.ok(html.includes('id="' + id + '"'), "missing section: " + id);
  }
  for (const key of ["stream", "ai", "energy"]) {
    assert.ok(html.includes('data-scene="' + key + '"'), "missing product option: " + key);
  }
  assert.match(html, /https:\/\/t\.me\/xiraenbot/);
  assert.match(html, /https:\/\/xiraen-mini-app\.xiraen\.workers\.dev\//);
  assert.match(html, /Tanpa batas perspektif/);
  assert.match(html, /Bukan token kripto/);
});

test("interactive fallback uses accessible button states and safe DOM text updates", () => {
  assert.match(html, /aria-pressed="true"/);
  assert.match(script, /setAttribute\('aria-pressed'/);
  assert.match(script, /textContent = fields\[id\]/);
  assert.match(script, /IntersectionObserver/);
  assert.match(script, /prefers-reduced-motion/);
  assert.doesNotMatch(script, /innerHTML\s*=/);
});

test("both implementations preserve reduced motion and original design tokens", () => {
  for (const sheet of [css, nextCSS]) {
    assert.match(sheet, /#0A0A0F/i);
    assert.match(sheet, /#7C5CFF/i);
    assert.match(sheet, /#5EE7F5/i);
    assert.match(sheet, /prefers-reduced-motion/);
  }
  assert.match(nextPage, /<Experience\s*\/>/);
  assert.match(nextHero, /Tanpa batas perspektif/);
  assert.match(nextExperience, /aria-pressed=\{selected === id\}/);
  assert.match(nextConfig, /output:\s*["']export["']/);
});

function luminance(color) {
  const hex = color.slice(1);
  const rgb = [0, 2, 4].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255);
  const linear = rgb.map((channel) => channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4);
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

function contrast(a, b) {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("core text and primary CTA meet WCAG AA normal-text contrast", () => {
  for (const [foreground, background] of [
    ["#F4F5F7", "#0A0A0F"],
    ["#9BA1AC", "#0A0A0F"],
    ["#9BA1AC", "#121218"],
    ["#9BA1AC", "#1A1B22"],
    ["#0A0A0F", "#7C5CFF"],
  ]) {
    assert.ok(contrast(foreground, background) >= 4.5,
      foreground + " on " + background + " contrast ratio too low");
  }
});
