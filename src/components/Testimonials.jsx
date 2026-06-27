import { useEffect, useState } from "react";
import { getApprovedReviews } from "../services/reviews";

const fallbackReviews = [
  {
    name: "Aisha M.",
    meta: "Medicine & Surgery",
    score: "Early Feedback",
    text: "LASU Scholar makes studying feel more organized. I know what to read and what to practise before exams.",
    rating: 5,
  },
  {
    name: "Daniel O.",
    meta: "Physiotherapy",
    score: "Early Feedback",
    text: "Practice Mode helped me discover the topics I was weak in before the test.",
    rating: 5,
  },
  {
    name: "Mariam A.",
    meta: "Nursing",
    score: "Early Feedback",
    text: "The app feels like having past questions, notes and progress tracking in one place.",
    rating: 5,
  },
  {
    name: "Tolu B.",
    meta: "Computer Science",
    score: "Early Feedback",
    text: "I like how everything is arranged by course and topic. No more random reading.",
    rating: 5,
  },
  {
    name: "Favour E.",
    meta: "Accounting",
    score: "Early Feedback",
    text: "The CBT-style exam mode makes preparation feel more serious and realistic.",
    rating: 5,
  },
  {
    name: "Kenny S.",
    meta: "LASUCOM",
    score: "Early Feedback",
    text: "This is the kind of study tool LASU students actually need.",
    rating: 5,
  },
];

function normalizeReview(item) {
  return {
    name: item.display_name || "LASU Scholar Student",
    meta: [item.department, item.level].filter(Boolean).join(" • ") || "Student",
    score: "Student Review",
    text: item.review || "",
    rating: item.rating || 5,
  };
}

function StarText({ rating = 5 }) {
  const safeRating = Math.max(1, Math.min(5, Number(rating || 5)));

  return (
    <div className="text-xs text-orange-400">
      {"★".repeat(safeRating)}
      <span className="text-orange-200 dark:text-orange-400/20">
        {"★".repeat(5 - safeRating)}
      </span>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="group mx-4 flex h-[235px] w-[305px] shrink-0 flex-col justify-between rounded-[2rem] border border-[#EADBC7] bg-[#FCFAF7]/85 p-6 shadow-[0_25px_80px_rgba(15,23,42,.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-orange-200 hover:bg-[#FCFAF7] hover:shadow-[0_35px_100px_rgba(249,115,22,.14)] sm:w-[340px] dark:border-white/10 dark:bg-[#070b12]/75 dark:shadow-[0_35px_110px_rgba(0,0,0,.7)] dark:hover:border-orange-400/40 dark:hover:bg-[#0b111d]/85 dark:hover:shadow-[0_40px_120px_rgba(249,115,22,.18)]">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <StarText rating={review.rating} />

          <div className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[10px] font-black text-orange-600 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300">
            Verified
          </div>
        </div>

        <p className="text-sm italic leading-7 text-[#5F6673] dark:text-orange-50/75">
          “{review.text}”
        </p>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 font-black text-white shadow-[0_14px_35px_rgba(249,115,22,.28)] dark:to-orange-800 dark:shadow-[0_0_30px_rgba(249,115,22,.42)]">
            {review.name.charAt(0)}
          </div>

          <div>
            <h3 className="text-sm font-black text-[#1F2937] dark:text-white">
              {review.name}
            </h3>
            <p className="text-[11px] font-semibold text-[#7A818C] dark:text-orange-50/45">
              {review.meta}
            </p>
          </div>
        </div>

        <p className="text-xs font-black text-orange-500 dark:text-orange-400">
          {review.score}
        </p>
      </div>
    </div>
  );
}

function ReviewRow({ reviews, reverse = false }) {
  const limitedReviews = reviews.slice(0, 15);
  const row = [...limitedReviews, ...limitedReviews, ...limitedReviews];

  return (
    <div className="relative mx-auto max-w-[1120px] overflow-hidden py-2">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    loadApprovedReviews();
  }, []);

  async function loadApprovedReviews() {
    try {
      const approved = await getApprovedReviews();

      if (approved && approved.length > 0) {
        setReviews(approved.slice(0, 15).map(normalizeReview));
      }
    } catch (error) {
      console.log("Reviews fetch error:", error);
      setReviews(fallbackReviews);
    }
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F8F6F2] py-24 transition-colors duration-300 sm:py-28 dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:46px_46px] dark:bg-[linear-gradient(rgba(249,115,22,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(249,115,22,.18),transparent_34%),linear-gradient(to_bottom,#F8F6F2,rgba(255,252,248,.65),#F8F6F2)] dark:bg-[radial-gradient(circle_at_50%_28%,rgba(249,115,22,.22),transparent_34%),linear-gradient(to_bottom,black,transparent_18%,transparent_78%,black)]" />

      <div className="relative z-10 mx-auto mb-14 max-w-3xl px-5 text-center">
        <div className="mx-auto mb-4 w-fit rounded-full border border-orange-200 bg-[#FDFBF8]/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-600 shadow-[0_12px_35px_rgba(249,115,22,.1)] backdrop-blur-xl dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-400">
          Student Reviews
        </div>

        <h2 className="text-4xl font-black leading-tight text-[#1F2937] sm:text-5xl dark:text-white">
          Trusted by students preparing smarter.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5F6673] sm:text-base dark:text-orange-50/60">
          Feedback from students using AIA•ACADEMY learning resources and the
          LASU Scholar experience.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#EADBC7] bg-[#FCFAF7]/55 px-0 py-8 shadow-[0_35px_120px_rgba(15,23,42,.08)] backdrop-blur-sm sm:px-6 dark:border-white/10 dark:bg-black/25 dark:shadow-[0_45px_140px_rgba(0,0,0,.65)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,.10),transparent_45%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,.12),transparent_45%)]" />

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F8F6F2] to-transparent sm:w-40 dark:from-black/95" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F8F6F2] to-transparent sm:w-40 dark:from-black/95" />

          <div className="relative z-10 space-y-8">
            <ReviewRow reviews={reviews} />
            <ReviewRow reviews={reviews} reverse />
          </div>
        </div>
      </div>

      <p className="relative z-10 mx-auto mt-10 max-w-3xl px-5 text-center text-xs font-semibold leading-6 text-slate-400 dark:text-orange-50/35">
        LASU Scholar is an independent learning platform powered by AIA•ACADEMY
        and is not officially affiliated with Lagos State University.
      </p>
    </section>
  );
}