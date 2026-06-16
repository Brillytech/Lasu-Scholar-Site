import { Mail, Camera, ShieldCheck } from "lucide-react";
import logo from "../assets/logos/aia-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-5 pt-20 pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black,transparent_25%,black)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="AIA Academy"
                className="h-11 w-11 object-contain"
              />

              <div>
                <h3 className="font-black text-orange-500">AIA•ACADEMY</h3>
                <p className="text-sm text-orange-50/50">LASU Scholar</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-orange-50/55">
              LASU Scholar is an AIA•ACADEMY learning product built to help
              LASU students study smarter, practise better and prepare for
              exams with more direction.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-orange-50/60">
                Study Mode
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-orange-50/60">
                Practice Mode
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-orange-50/60">
                Exam Mode
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-black text-white">Product</h4>

            <div className="space-y-3 text-sm text-orange-50/55">
              <a href="#features" className="block hover:text-orange-400">
                Features
              </a>
              <a href="#testimonials" className="block hover:text-orange-400">
                Student Reviews
              </a>
              <a href="#faq" className="block hover:text-orange-400">
                FAQ
              </a>
              <a href="#download" className="block hover:text-orange-400">
                Download App
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-black text-white">Contact</h4>

            <div className="space-y-3 text-sm text-orange-50/55">
              <a href="mailto:hello@aiaacademy.com" className="flex items-center gap-2 hover:text-orange-400">
                <Mail size={16} />
                hello@aiaacademy.com
              </a>

              <a href="#" className="flex items-center gap-2 hover:text-orange-400">
                <Camera size={16} />
                Instagram
              </a>

              <a href="#" className="flex items-center gap-2 hover:text-orange-400">
                <ShieldCheck size={16} />
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

       <div className="mt-14 border-t border-white/10 pt-8">
  <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
    <div>
      <p className="font-medium text-orange-50/50">
        © 2026 AIA•ACADEMY. All rights reserved.
      </p>

      <p className="mt-2 text-sm leading-6 text-orange-50/35">
        Empowering students through technology,
        smarter learning and academic excellence.
      </p>
    </div>

    <div className="text-sm text-orange-50/40">
      Designed & developed by{" "}
      <span className="font-bold text-orange-400">
        BrillyTech Networks
      </span>
    </div>
  </div>
</div>
      </div>
    </footer>
  );
}