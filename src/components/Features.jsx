import { motion } from "framer-motion";
import {
  BookOpen,
  ClipboardList,
  Trophy,
  BarChart3,
  CheckCircle2,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Structured Study",
    text: "Courses, topics and learning materials are arranged so students can study with direction instead of jumping around randomly.",
    points: ["Course-based learning", "Topic organization", "Quick revision"],
  },
  {
    icon: ClipboardList,
    title: "Smart Practice",
    text: "Students can practise questions, review answers and focus on weak areas before tests and exams.",
    points: ["Question practice", "Retry wrong answers", "Weak area training"],
  },
  {
    icon: Timer,
    title: "Exam Preparation",
    text: "Timed exam mode helps students build speed, confidence and accuracy before entering real CBT-style exams.",
    points: ["Timed sessions", "Result review", "Exam-style practice"],
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    text: "XP, ranks and streaks make studying more engaging and help students stay consistent over time.",
    points: ["XP points", "Student ranking", "Study streaks"],
  },
];

function ProgressCard() {
  const bars = [
    ["Questions", "78%"],
    ["Topics", "63%"],
  ];

  return (
    <div className="relative mt-7 overflow-hidden rounded-[1.7rem] border border-[#EADBC7] bg-[#FDFBF8]/65 p-5 shadow-[0_20px_70px_rgba(15,23,42,.06)] dark:border-orange-400/15 dark:bg-black/35 dark:shadow-[0_0_60px_rgba(249,115,22,.1)]">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-300/25 blur-[60px] dark:bg-orange-500/15" />

      <div className="relative z-10 flex items-center gap-5">
        <div className="relative grid h-24 w-24 shrink-0 place-items-center rounded-full border-[8px] border-orange-500/20">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 280 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="absolute h-24 w-24 rounded-full border-[8px] border-transparent border-r-orange-500 border-t-orange-500"
          />

          <div className="text-center">
            <p className="text-xl font-black text-[#1F2937] dark:text-white">
              78%
            </p>
            <p className="text-[10px] font-bold text-[#7A818C] dark:text-orange-50/45">
              Progress
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4 grid grid-cols-3 gap-2 text-center">
            {[
              ["7", "Days"],
              ["128", "PQ's"],
              ["14", "Topics"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[#EADBC7] bg-[#FDFBF8]/70 px-2 py-2 dark:border-white/10 dark:bg-[#FCFAF7]/[0.04]"
              >
                <p className="text-sm font-black text-[#1F2937] dark:text-white">
                  {value}
                </p>
                <p className="text-[10px] text-[#7A818C] dark:text-orange-50/45">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {bars.map(([label, width]) => (
              <div key={label}>
                <div className="mb-1 flex justify-between text-[11px] font-bold text-[#7A818C] dark:text-orange-50/50">
                  <span>{label}</span>
                  <span>{width}</span>
                </div>

                <div className="h-2 rounded-full bg-orange-100 dark:bg-[#FCFAF7]/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1 }}
                    className="h-2 rounded-full bg-orange-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, large = false, children }) {
  const Icon = feature.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-[#EADBC7] bg-[#FDFBF8]/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,.07)] backdrop-blur-xl transition duration-300 hover:border-orange-200 hover:bg-[#FCFAF7] hover:shadow-[0_35px_100px_rgba(249,115,22,.12)] dark:border-white/10 dark:bg-[#080b10]/80 dark:shadow-[0_30px_100px_rgba(0,0,0,.55)] dark:hover:border-orange-400/30 dark:hover:bg-[#0d1118]/90 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-300/20 blur-[70px] dark:bg-orange-500/10" />

      <div className="relative z-10">
        <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-500 shadow-[0_14px_35px_rgba(249,115,22,.12)] dark:border-orange-400/15 dark:bg-orange-500/10 dark:text-orange-400 dark:shadow-[0_0_35px_rgba(249,115,22,.15)]">
          <Icon size={26} />
        </div>

        <h3 className="text-2xl font-black text-[#1F2937] dark:text-white">
          {feature.title}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F6673] sm:text-base dark:text-orange-50/60">
          {feature.text}
        </p>

        {children ? (
          children
        ) : (
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {feature.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-2xl border border-[#EADBC7] bg-[#FDFBF8]/65 px-4 py-3 text-sm font-bold text-[#5F6673] dark:border-white/10 dark:bg-[#FCFAF7]/[0.035] dark:text-orange-50/65"
              >
                <CheckCircle2 size={16} className="shrink-0 text-orange-500 dark:text-orange-400" />
                {point}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Features() {
  const progressFeature = {
    icon: BarChart3,
    title: "Progress Tracking",
    text: "LASU Scholar helps students see what they have completed, what they are improving and what still needs attention.",
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-24 transition-colors duration-300 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,.16),transparent_34%),linear-gradient(to_bottom,#F8F6F2,rgba(255,252,248,.7),#F8F6F2)] dark:bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,.18),transparent_34%),linear-gradient(to_bottom,black,transparent_18%,transparent_82%,black)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            Features
          </p>

          <h2 className="text-4xl font-black leading-tight text-[#1F2937] sm:text-5xl dark:text-white">
            Built for serious academic preparation.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5F6673] sm:text-base dark:text-orange-50/60">
            LASU Scholar combines study structure, practice, exam preparation
            and progress tracking in one focused student app.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <FeatureCard feature={features[0]} />
          <FeatureCard feature={features[1]} />

          <FeatureCard feature={progressFeature}>
            <ProgressCard />
          </FeatureCard>

          <FeatureCard feature={features[2]} />
          <FeatureCard feature={features[3]} />
        </div>
      </div>
    </section>
  );
}