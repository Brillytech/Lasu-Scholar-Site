import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#07101F] px-5 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 rounded-[2rem] border border-orange-400/15 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-10"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">
            LASU Scholar
          </p>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Terms of Use</h1>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-400">
            Effective Date: [22 June 2026] • Last Updated: [22 June 2026]
          </p>

          <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-500/10 p-4 text-sm font-semibold leading-7 text-orange-100">
            LASU Scholar is an independent educational tool powered by AIA•ACADEMY.
            It is not officially affiliated with Lagos State University and does not replace official LASU portals, notices, rules or communications.
          </div>
        </motion.div>

        <LegalSection title="1. Introduction">
          These Terms of Use explain the rules for using the LASU Scholar website, mobile app, study tools, practice mode, exam mode, profile features, reviews, notifications and related services.
        </LegalSection>

        <LegalSection title="2. Independent Platform Disclaimer">
          LASU Scholar is not officially affiliated with, endorsed by, sponsored by, or managed by Lagos State University or any official LASU body. Students should always confirm official matters through official LASU channels.
        </LegalSection>

        <LegalSection title="3. Educational Purpose">
          LASU Scholar is provided for learning, revision, practice, exam preparation and academic support. We aim to provide helpful learning support, but we do not guarantee that every material, question, explanation, score or recommendation is error-free or sufficient for any examination.
        </LegalSection>

        <LegalSection title="4. User Account">
          You are responsible for keeping your login details safe and for all activity on your account. You agree to provide accurate account and academic profile information.
        </LegalSection>

        <LegalSection title="5. Academic Profile and Course Access">
          Your school, faculty, department and level may determine what courses, materials, questions and recommendations you can access. To prevent abuse, LASU Scholar may limit how many times students can change school, faculty or department.
        </LegalSection>

        <LegalSection title="6. Acceptable Use">
          You agree not to impersonate another student, attempt unauthorized access, copy or resell protected content, upload harmful content, interfere with the app, or bypass account controls and access rules.
        </LegalSection>

        <LegalSection title="7. Student Reviews">
          If you submit a review, you give LASU Scholar permission to store, moderate and display the review on the LASU Scholar website or promotional materials after approval.
        </LegalSection>

        <LegalSection title="8. XP, Leaderboards and Performance">
          XP, streaks, rankings, practice scores, exam scores and progress analytics are app-based learning indicators. They are not official university grades or official academic records.
        </LegalSection>

        <LegalSection title="9. No Academic Guarantee">
          LASU Scholar can support your learning, but it does not guarantee examination success, admission, academic promotion, specific grades or official school outcomes.
        </LegalSection>

        <LegalSection title="10. Contact">
          LASU Scholar Support: support@lasuscholar.com • info@lasuscholar.com • +234 706 688 4933
        </LegalSection>
      </div>
    </main>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-400">{children}</p>
    </section>
  );
}
