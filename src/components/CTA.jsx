import { Download, Star } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-black px-5 py-20 text-center sm:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/22 blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,black,transparent_30%,transparent_70%,black)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">
          <Star size={14} />
          LASU Scholar
        </div>

        <h2 className="text-4xl font-black leading-tight text-white sm:text-7xl">
          Your next study session
          <br />
          should be smarter.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-orange-50/65 sm:text-lg sm:leading-8">
          Join students preparing with better structure, smarter practice and
          clearer academic progress.
        </p>

        <a
  href="#"
  className="group relative mx-auto mt-8 flex w-fit items-center gap-3 overflow-hidden rounded-2xl bg-orange-500 px-8 py-4 font-black text-white shadow-[0_0_60px_rgba(249,115,22,.55)] transition hover:scale-105 hover:shadow-[0_0_80px_rgba(249,115,22,.7)]"
>
  <span className="absolute inset-y-0 -left-24 w-14 rotate-12 bg-white/25 blur-md transition-all duration-1000 group-hover:left-[130%]" />
  <Download size={20} className="relative z-10" />
  <span className="relative z-10">Download App</span>
</a>

        <p className="mt-5 text-sm font-bold text-orange-50/45">
          1000+ students already reached through AIA•ACADEMY
        </p>
      </div>
    </section>
  );
}