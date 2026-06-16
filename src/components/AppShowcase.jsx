import { motion } from "framer-motion";
import { BookOpen, Brain, Timer, TrendingUp } from "lucide-react";

const showcases = [
  {
    icon: BookOpen,
    title: "Study by course and topic",
    text: "Access materials, summaries and quick cards arranged exactly the way students need them.",
    tag: "Study Mode",
  },
  {
    icon: Brain,
    title: "Practice before exam pressure",
    text: "Train with questions, retry wrong answers and focus on weak areas before test day.",
    tag: "Practice Mode",
  },
  {
    icon: Timer,
    title: "Simulate real CBT exams",
    text: "Use timed exam sessions to build speed, confidence and accuracy.",
    tag: "Exam Mode",
  },
  {
    icon: TrendingUp,
    title: "Track your academic growth",
    text: "Monitor progress, streaks, XP and performance as you study.",
    tag: "Progress",
  },
];

function MiniScreen({ tag }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101f] p-5 shadow-2xl">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-500/20 blur-[60px]" />

      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-orange-300">{tag}</p>
          <h4 className="mt-1 text-lg font-black text-white">LASU Scholar</h4>
        </div>

        <div className="h-10 w-10 rounded-2xl bg-orange-500/20" />
      </div>

      <div className="space-y-3">
        <div className="h-16 rounded-2xl bg-white/10" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 rounded-2xl bg-orange-500/20" />
          <div className="h-20 rounded-2xl bg-white/10" />
        </div>
        <div className="h-24 rounded-2xl bg-gradient-to-br from-orange-500/25 to-white/5" />
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(249,115,22,.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            App Experience
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Built around how LASU students actually study.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-orange-50/60">
            From learning to practice to exam simulation, every screen is made
            to help students prepare with direction.
          </p>
        </div>

        <div className="space-y-6">
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
                className={`grid items-center gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_35px_120px_rgba(0,0,0,.55)] backdrop-blur-xl md:grid-cols-2 md:p-10 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                    <Icon size={28} />
                  </div>

                  <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-orange-500">
                    {item.tag}
                  </p>

                  <h3 className="text-3xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-orange-50/60">
                    {item.text}
                  </p>
                </div>

                <MiniScreen tag={item.tag} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}