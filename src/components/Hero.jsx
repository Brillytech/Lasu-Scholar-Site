import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import CountStat from "./CountStat";

import dashboard from "../assets/screenshots/dashboard.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-32">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />
      <div className="absolute -left-32 top-36 h-[360px] w-[360px] rounded-full bg-orange-700/15 blur-[130px]" />
      <div className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[130px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,.12),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(255,237,213,.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-100 shadow-[0_0_30px_rgba(249,115,22,.12)] backdrop-blur-xl lg:mx-0">
              <Sparkles size={16} className="text-orange-400" />
              Powered by AIA•ACADEMY
            </div>

            <h1 className="text-[2.65rem] font-black leading-[1.05] tracking-tight text-white min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
              Study Smarter.
              <br />
              Practice Better.
              <br />
              <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Pass Stronger.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-orange-50/70 sm:text-lg sm:leading-8 lg:mx-0">
              LASU Scholar helps students learn course materials, practise
              exam-style questions, track progress and prepare for exams from
              one powerful platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
             <a
  href="#download"
  className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-orange-500 px-7 py-4 font-black text-white shadow-[0_0_45px_rgba(249,115,22,.45)] transition hover:scale-105 hover:shadow-[0_0_70px_rgba(249,115,22,.65)]"
>
  <span className="absolute inset-y-0 -left-24 w-14 rotate-12 bg-white/25 blur-md transition-all duration-1000 group-hover:left-[130%]" />
  <Download size={20} className="relative z-10" />
  <span className="relative z-10">Download App</span>
</a>

              <a
                href="#features"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-center font-bold text-orange-50 backdrop-blur-xl transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:flex sm:flex-wrap sm:gap-6 sm:p-5 lg:justify-start">
              <CountStat end={1200} suffix="+" label="Students Reached" />
              <CountStat end={80000} suffix="+" label="Questions" />

              <div className="min-w-[80px]">
                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  LASU
                </h3>
                <p className="mt-1 text-xs text-orange-50/55 sm:text-sm">
                  Focused
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-12 left-1/2 h-[260px] w-[300px] -translate-x-1/2 rounded-full bg-orange-500/25 blur-[90px] lg:h-[360px] lg:w-[460px]" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <PhoneMockup image={dashboard} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}