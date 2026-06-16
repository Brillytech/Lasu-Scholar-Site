import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import logo from "../assets/logos/aia-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-3xl transition duration-300 ${
          scrolled
            ? "border border-white/10 bg-black/70"
            : "border border-white/5 bg-black/30"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AIA Academy"
            className="h-10 w-10 object-contain"
          />

          <div className="leading-none">
            <p className="text-sm font-black tracking-tight text-orange-500 sm:text-base">
              AIA•ACADEMY
            </p>

            <p className="mt-1 text-[10px] text-orange-100/55 sm:text-xs">
              LASU Scholar
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-orange-50/70 md:flex">
          <a href="#features" className="transition hover:text-orange-400">
            Features
          </a>
          <a href="#testimonials" className="transition hover:text-orange-400">
            Reviews
          </a>
          <a href="#faq" className="transition hover:text-orange-400">
            FAQ
          </a>
        </div>

        <a
          href="#download"
          className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white shadow-[0_0_30px_rgba(249,115,22,.45)] transition hover:scale-105 sm:px-5 sm:text-sm"
        >
          <Download size={15} />
          <span className="hidden min-[360px]:inline">Download</span>
        </a>
      </nav>
    </header>
  );
}