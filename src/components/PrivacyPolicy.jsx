import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#07101F] px-5 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 rounded-[2rem] border border-orange-400/15 bg-[#FCFAF7]/[0.04] p-6 shadow-2xl shadow-black/20 md:p-10"
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">
            LASU Scholar
          </p>
          <h1 className="mt-4 text-3xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-400">
            Effective Date: [22 June 2026] • Last Updated: [22 June 2026]
          </p>

          <div className="mt-6 rounded-2xl border border-orange-400/20 bg-orange-500/10 p-4 text-sm font-semibold leading-7 text-orange-100">
            LASU Scholar is an independent educational platform powered by AIA•ACADEMY.
            It is not officially affiliated with, endorsed by, sponsored by, or managed by
            Lagos State University or any official LASU body.
          </div>
        </motion.div>

        <LegalSection title="1. Introduction">
          This Privacy Policy explains how LASU Scholar collects, uses, stores, and protects information when students use the LASU Scholar website, mobile app, study tools, practice mode, exam mode, profile features, reviews, notifications, and related services.
        </LegalSection>

        <LegalSection title="2. Information We Collect">
          We may collect account information such as name, username, email address, school, faculty, department, level, profile completion status and profile picture. We may also collect learning activity such as study progress, materials opened, topics completed, questions answered, practice attempts, exam attempts, accuracy, confidence tags, XP, streaks, leaderboard ranking and time spent learning.
        </LegalSection>

        <LegalSection title="3. How We Use Your Information">
          We use your information to create and manage your account, show relevant courses and materials, track study progress, calculate XP and leaderboard ranking, improve app performance, provide support, moderate reviews and protect the platform from misuse or wrong course access.
        </LegalSection>

        <LegalSection title="4. Academic Profile Change Limit">
          School, faculty and department affect the courses and learning content a student can access. To reduce abuse, LASU Scholar may limit how many times a student can change these fields. After the change limit is reached, students may need to contact support.
        </LegalSection>

        <LegalSection title="5. Data Storage and Security">
          We use reasonable technical and organizational measures to protect user data from unauthorized access, loss, misuse, or alteration. No online platform can guarantee perfect security, but we work to keep user data safe and limit access to authorized use only.
        </LegalSection>

        <LegalSection title="6. Reviews and Public Display">
          If you submit a review, LASU Scholar may store it for moderation. Only approved reviews may be displayed publicly on the LASU Scholar website or marketing pages. We may display your submitted name, department, level, rating and review text.
        </LegalSection>

        <LegalSection title="7. Third-Party Links">
          LASU Scholar may link to services such as Google Drive, YouTube, WhatsApp, email services or external learning materials. We are not responsible for the privacy practices of third-party websites or services.
        </LegalSection>

        <LegalSection title="8. Your Rights">
          You may request to access, correct, update or delete your personal data where applicable. To make a data request, contact support@lasuscholar.com or info@lasuscholar.com.
        </LegalSection>

        <LegalSection title="9. Disclaimer of Affiliation">
          LASU Scholar is not an official LASU platform. Official academic decisions, notices, results, admission information, school fees, examinations, and institutional rules should always be confirmed through official LASU channels.
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
    <section className="mb-6 rounded-3xl border border-white/10 bg-[#FCFAF7]/[0.04] p-6">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm font-medium leading-7 text-slate-400">{children}</p>
    </section>
  );
}


