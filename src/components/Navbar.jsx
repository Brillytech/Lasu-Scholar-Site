import { useEffect, useState } from "react";
import { Download, Moon, Sun } from "lucide-react";
import logo from "../assets/logos/aia-logo.png";

export default function Navbar({ theme, toggleTheme }) {
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
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 backdrop-blur-3xl transition duration-300 ${
          scrolled
            ? "border border-[#EADBC7] bg-[#FCFAF7]/85 shadow-[0_18px_60px_rgba(15,23,42,.12)] dark:border-white/10 dark:bg-black/70 dark:shadow-[0_20px_80px_rgba(0,0,0,.45)]"
            : "border border-[#EADBC7]/70 bg-[#FDFBF8]/65 shadow-[0_18px_60px_rgba(15,23,42,.08)] dark:border-white/5 dark:bg-black/30 dark:shadow-[0_20px_80px_rgba(0,0,0,.45)]"
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AIA Academy"
            className="h-10 w-10 object-contain"
          />

          <div className="leading-none">
            <p className="text-sm font-black tracking-tight text-orange-600 sm:text-base dark:text-orange-500">
              AIA•ACADEMY
            </p>

            <p className="mt-1 text-[10px] font-semibold text-[#7A818C] sm:text-xs dark:text-orange-100/55">
              LASU Scholar
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-[#5F6673] md:flex dark:text-orange-50/70">
          <a href="#features" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            Features
          </a>
          <a href="#testimonials" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            Reviews
          </a>
          <a href="#faq" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-[#EADBC7] bg-[#FDFBF8]/80 text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,.08)] transition hover:scale-105 dark:border-white/10 dark:bg-[#FCFAF7]/5 dark:text-orange-100"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#download"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-white shadow-[0_12px_30px_rgba(249,115,22,.28)] transition hover:scale-105 hover:bg-orange-600 sm:px-5 sm:text-sm dark:shadow-[0_0_30px_rgba(249,115,22,.45)]"
          >
            <Download size={15} />
            <span className="hidden min-[390px]:inline">Download</span>
          </a>
        </div>
      </nav>
    </header>
  );
}