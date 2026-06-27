import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What exactly is LASU Scholar?",
    a: "LASU Scholar is a study and exam preparation app built for LASU students. It brings study materials, past questions, practice questions, CBT-style exams, progress tracking and rankings into one platform.",
  },
  {
    q: "Who can use LASU Scholar?",
    a: "The app is built mainly for LASU students. At launch, it will support selected levels, faculties and departments, then expand gradually as more courses and materials are added.",
  },
  {
    q: "Is LASU Scholar only for past questions?",
    a: "No. Past questions are part of it, but the app is bigger than that. Students can study by course and topic, practise questions, review weak areas, track progress and prepare with exam-style tests.",
  },
  {
    q: "How does Practice Mode help me?",
    a: "Practice Mode helps you train before exams. You can answer questions, submit, see your result, review answers and retry wrong questions so you know the areas you need to improve.",
  },
  {
    q: "What is Exam Mode?",
    a: "Exam Mode gives students a CBT-style experience with timing and scoring. It is designed to help students practise under exam pressure before the real test or exam.",
  },
  {
    q: "Will LASU Scholar track my progress?",
    a: "Yes. The app tracks your learning progress, completed topics, performance, goals, streaks and weak areas so you can study with direction instead of reading randomly.",
  },
  {
    q: "Is the app connected to AIA•ACADEMY?",
    a: "Yes. LASU Scholar is powered by AIA•ACADEMY, the academic brand focused on helping students prepare better through tutorials, resources and technology-driven learning.",
  },
  {
    q: "Will more courses and departments be added?",
    a: "Yes. LASU Scholar will keep expanding. More courses, departments, questions and study materials will be added as the platform grows.",
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="group w-full rounded-[1.7rem] border border-[#EADBC7] bg-[#FDFBF8]/80 p-6 text-left shadow-[0_25px_80px_rgba(15,23,42,.07)] backdrop-blur-xl transition hover:border-orange-200 hover:bg-[#FCFAF7] dark:border-white/10 dark:bg-[#FCFAF7]/[0.04] dark:shadow-[0_25px_80px_rgba(0,0,0,.45)] dark:hover:border-orange-400/30 dark:hover:bg-[#FCFAF7]/[0.055]"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-black text-[#1F2937] sm:text-lg dark:text-white">
          {item.q}
        </h3>

        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
          <Plus className={`transition ${open ? "rotate-45" : ""}`} size={19} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-4 leading-7 text-[#5F6673] dark:text-orange-50/60">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-24 transition-colors duration-300 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,.14),transparent_35%),linear-gradient(to_bottom,#F8F6F2,rgba(255,252,248,.7),#F8F6F2)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,.14),transparent_35%),linear-gradient(to_bottom,black,transparent_20%,transparent_80%,black)]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-500">
            FAQ
          </p>

          <h2 className="text-4xl font-black leading-tight text-[#1F2937] sm:text-5xl dark:text-white">
            Questions students usually ask.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}