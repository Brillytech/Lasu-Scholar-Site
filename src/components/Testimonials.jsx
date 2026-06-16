const reviews = [
  {
    name: "Aisha M.",
    meta: "Medicine & Surgery",
    score: "4.7 CGPA",
    text: "LASU Scholar makes studying feel more organized. I know what to read and what to practise before exams.",
  },
  {
    name: "Daniel O.",
    meta: "Physiotherapy",
    score: "4.5 CGPA",
    text: "Practice Mode helped me discover the topics I was weak in before the test.",
  },
  {
    name: "Mariam A.",
    meta: "Nursing",
    score: "4.8 CGPA",
    text: "The app feels like having past questions, notes and progress tracking in one place.",
  },
  {
    name: "Tolu B.",
    meta: "Computer Science",
    score: "4.4 CGPA",
    text: "I like how everything is arranged by course and topic. No more random reading.",
  },
  {
    name: "Favour E.",
    meta: "Accounting",
    score: "4.6 CGPA",
    text: "The CBT-style exam mode makes preparation feel more serious and realistic.",
  },
  {
    name: "Kenny S.",
    meta: "LASUCOM",
    score: "4.9 CGPA",
    text: "This is the kind of study tool LASU students actually need.",
  },
];

function ReviewCard({ review }) {
  return (
    <div className="group mx-4 flex h-[235px] w-[305px] shrink-0 flex-col justify-between rounded-[2rem] border border-white/10 bg-[#070b12]/75 p-6 shadow-[0_35px_110px_rgba(0,0,0,.7)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-[#0b111d]/85 hover:shadow-[0_40px_120px_rgba(249,115,22,.18)] sm:w-[340px]">
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div className="text-xs text-orange-400">★★★★★</div>

          <div className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-[10px] font-black text-orange-300">
            Verified
          </div>
        </div>

        <p className="text-sm italic leading-7 text-orange-50/75">
          “{review.text}”
        </p>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-orange-800 font-black text-white shadow-[0_0_30px_rgba(249,115,22,.42)]">
            {review.name.charAt(0)}
          </div>

          <div>
            <h3 className="text-sm font-black text-white">{review.name}</h3>
            <p className="text-[11px] text-orange-50/45">{review.meta}</p>
          </div>
        </div>

        <p className="text-sm font-black text-orange-400">{review.score}</p>
      </div>
    </div>
  );
}

function ReviewRow({ reverse = false }) {
  const row = [...reviews, ...reviews, ...reviews];

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
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.09)_1px,transparent_1px)] bg-[size:46px_46px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(249,115,22,.22),transparent_34%),linear-gradient(to_bottom,black,transparent_18%,transparent_78%,black)]" />

      <div className="relative z-10 mx-auto mb-14 max-w-3xl px-5 text-center">
        <div className="mx-auto mb-4 w-fit rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-400 backdrop-blur-xl">
          Student Reviews
        </div>

        <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
          Trusted by students preparing smarter.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-orange-50/60 sm:text-base">
          Early feedback from students using AIA•ACADEMY learning resources and
          the LASU Scholar experience.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/25 px-0 py-8 shadow-[0_45px_140px_rgba(0,0,0,.65)] backdrop-blur-sm sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,.12),transparent_45%)]" />

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black/95 to-transparent sm:w-40" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black/95 to-transparent sm:w-40" />

          <div className="relative z-10 space-y-8">
            <ReviewRow />
            <ReviewRow reverse />
          </div>
        </div>
      </div>
    </section>
  );
}