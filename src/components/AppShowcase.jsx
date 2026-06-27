import { motion } from "framer-motion";
import { BookOpen, Brain, LayoutDashboard } from "lucide-react";

import dashboard from "../assets/screenshots/dashboard.png";
import study from "../assets/screenshots/Study.png";
import practice from "../assets/screenshots/practice.png";

const showcases = [
  {
    icon: LayoutDashboard,
    title: "Start from a focused dashboard",
    text: "Students can see their progress, quick actions, streaks and where to continue learning from one clean home screen.",
    tag: "Dashboard",
    image: dashboard,
    position: "50% 0%",
  },
  {
    icon: BookOpen,
    title: "Study by course and topic",
    text: "Course materials are arranged into topics so students know exactly what to study next.",
    tag: "Study Mode",
    image: study,
    position: "50% 0%",
  },
  {
    icon: Brain,
    title: "Practice before exam pressure",
    text: "Practice Mode helps students train with questions and build confidence before exam day.",
    tag: "Practice Mode",
    image: practice,
    position: "50% 0%",
  },
];

function PhonePreview({ image, tag, position = "50% 0%" }) {
  return (
    <div className="relative mx-auto w-[210px] sm:w-[235px]">
      <div className="absolute -inset-5 rounded-[2.7rem] bg-orange-400/20 blur-[60px] dark:bg-orange-500/18" />

      <div className="relative rounded-[2.45rem] border border-slate-900/10 bg-slate-950 p-2 shadow-[0_30px_90px_rgba(15,23,42,.25)] dark:border-white/15 dark:bg-[#050505] dark:shadow-[0_35px_100px_rgba(0,0,0,.7)]">
        <div className="absolute left-1/2 top-3 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <img
            src={image}
            alt={`${tag} screenshot`}
            style={{ objectPosition: position }}
            className="h-[380px] w-full object-cover sm:h-[430px]"
          />
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section
      id="app-showcase"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-24 transition-colors duration-300 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(249,115,22,.16),transparent_35%),linear-gradient(to_bottom,#F8F6F2,rgba(248,246,242,.7),#F8F6F2)] dark:bg-[radial-gradient(circle_at_50%_25%,rgba(249,115,22,.18),transparent_35%),linear-gradient(to_bottom,black,transparent_18%,transparent_82%,black)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            App Experience
          </p>

          <h2 className="text-4xl font-black leading-tight text-[#1F2937] sm:text-5xl dark:text-white">
            Built around how LASU students actually study.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5F6673] sm:text-base dark:text-orange-50/60">
            From dashboard to study mode and practice mode, every screen is made
            to help students prepare with direction.
          </p>
        </div>

        <div className="space-y-8">
          {showcases.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-[#EADBC7] bg-[#FDFBF8]/80 p-6 shadow-[0_35px_100px_rgba(15,23,42,.08)] backdrop-blur-xl md:grid-cols-2 md:p-10 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_35px_120px_rgba(0,0,0,.55)] ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-300/25 blur-[90px] dark:bg-orange-500/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-500 shadow-[0_14px_35px_rgba(249,115,22,.12)] dark:border-orange-400/15 dark:bg-orange-500/15 dark:text-orange-400 dark:shadow-[0_0_35px_rgba(249,115,22,.18)]">
                    <Icon size={28} />
                  </div>

                  <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-orange-500">
                    {item.tag}
                  </p>

                  <h3 className="text-3xl font-black leading-tight text-[#1F2937] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-[#5F6673] dark:text-orange-50/60">
                    {item.text}
                  </p>
                </div>

                <div className="relative z-10">
                  <PhonePreview
                    image={item.image}
                    tag={item.tag}
                    position={item.position}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}