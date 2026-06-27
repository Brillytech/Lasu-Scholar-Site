import { useEffect, useState } from "react";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  const isPrivacyPage =
    hostname === "privacy.lasuscholar.com" ||
    pathname === "/privacy" ||
    pathname === "/privacy-policy";

  const isTermsPage =
    hostname === "terms.lasuscholar.com" ||
    pathname === "/terms" ||
    pathname === "/terms-of-use";

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  if (isTermsPage) {
    return <TermsOfUse />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8F6F2] text-[#1F2937] transition-colors duration-300 dark:bg-[#050505] dark:text-orange-50">
      <Particles />

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
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