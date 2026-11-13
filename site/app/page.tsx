import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="konten">
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
