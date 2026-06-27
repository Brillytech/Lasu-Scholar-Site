import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import CountStat from "./CountStat";

import dashboard from "../assets/screenshots/dashboard.png";

export default function Hero() {
  return (
    
    <section className="relative overflow-hidden bg-[#F8F6F2] px-5 pb-36 pt-32 transition-colors duration-300 sm:px-6 sm:pb-40 sm:pt-36 lg:px-8 lg:pb-44 dark:bg-black">  <div className="absolute -left-32 top-36 h-[360px] w-[360px] rounded-full bg-orange-200/40 blur-[130px] dark:bg-orange-700/15" />
      <div className="absolute -right-32 bottom-10 h-[360px] w-[360px] rounded-full bg-amber-100/80 blur-[130px] dark:bg-orange-400/10" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:52px_52px] dark:bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#F8F6F2,rgba(255,252,248,.65),#F8F6F2)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,.12),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(255,237,213,.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-[#FCFAF7]/75 px-4 py-2 text-sm font-bold text-orange-600 shadow-[0_12px_35px_rgba(249,115,22,.12)] backdrop-blur-xl lg:mx-0 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-100 dark:shadow-[0_0_30px_rgba(249,115,22,.12)]">
              <Sparkles size={16} className="text-orange-500 dark:text-orange-400" />
              Powered by AIA•ACADEMY
            </div>

            <h1 className="text-[2.65rem] font-black leading-[1.05] tracking-tight text-[#1F2937] min-[390px]:text-5xl sm:text-6xl lg:text-7xl dark:text-white">
              Study Smarter.
              <br />
              Practice Better.
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent dark:from-orange-300 dark:via-orange-500 dark:to-orange-600">
                Pass Stronger.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#5F6673] sm:text-lg sm:leading-8 lg:mx-0 dark:text-orange-50/70">
              LASU Scholar helps students learn course materials, practise
              exam-style questions, track progress and prepare for exams from
              one powerful platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#download"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-orange-500 px-7 py-4 font-black text-white shadow-[0_18px_40px_rgba(249,115,22,.28)] transition hover:scale-105 hover:bg-orange-600 hover:shadow-[0_24px_60px_rgba(249,115,22,.38)] dark:shadow-[0_0_45px_rgba(249,115,22,.45)] dark:hover:shadow-[0_0_70px_rgba(249,115,22,.65)]"
              >
                <span className="absolute inset-y-0 -left-24 w-14 rotate-12 bg-[#FCFAF7]/25 blur-md transition-all duration-1000 group-hover:left-[130%]" />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download App</span>
              </a>

              <a
                href="#features"
                className="rounded-2xl border border-orange-200 bg-[#FCFAF7]/75 px-7 py-4 text-center font-black text-slate-800 shadow-[0_12px_35px_rgba(15,23,42,.06)] backdrop-blur-xl transition hover:border-orange-300 hover:bg-[#FCFAF7] dark:border-white/10 dark:bg-[#FCFAF7]/5 dark:text-orange-50 dark:hover:bg-[#FCFAF7]/10"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 rounded-3xl border border-[#EADBC7] bg-[#FCFAF7]/75 p-4 shadow-[0_25px_80px_rgba(15,23,42,.08)] backdrop-blur-xl sm:flex sm:flex-wrap sm:gap-6 sm:p-5 lg:justify-start dark:border-white/10 dark:bg-[#FCFAF7]/[0.04]">
              <CountStat end={1200} suffix="+" label="Students Reached" />
              <CountStat end={80000} suffix="+" label="Questions" />

              <div className="min-w-[80px]">
                <h3 className="text-2xl font-black text-[#1F2937] sm:text-3xl dark:text-white">
                  LASU
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#7A818C] sm:text-sm dark:text-orange-50/55">
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
            <div className="absolute -top-12 left-1/2 h-[260px] w-[300px] -translate-x-1/2 rounded-full bg-orange-300/18 blur-[90px] lg:h-[360px] lg:w-[460px] dark:bg-orange-500/25" />

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