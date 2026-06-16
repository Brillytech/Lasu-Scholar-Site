import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-orange-50">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <AppShowcase />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}