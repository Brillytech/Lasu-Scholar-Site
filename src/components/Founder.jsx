import { Award, GraduationCap, Laptop2 } from "lucide-react";
import founder from "../assets/aia-founder.jpg";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#F8F6F2] px-5 py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(249,115,22,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,.18),transparent_35%),linear-gradient(to_bottom,#F8F6F2,rgba(255,252,248,.75),#F8F6F2)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(249,115,22,.16),transparent_35%),linear-gradient(to_bottom,black,transparent_20%,transparent_80%,black)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* IMAGE */}
        <div className="order-2 flex justify-center lg:order-1">
          <div className="relative">

            <div className="absolute inset-0 rounded-[2.5rem] bg-orange-500/20 blur-3xl" />

            <img
              src={founder}
              alt="Ayodeji Idris Akinsanya"
              className="
              relative
              h-[330px]
              w-[250px]
              rounded-[2rem]
              object-cover
              border
              border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,.35)]

              sm:h-[420px]
              sm:w-[310px]

              lg:h-[560px]
              lg:w-[420px]
              lg:rounded-[2.5rem]
            "
            />

            {/* Name Card */}
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-center backdrop-blur-xl">

              <h3 className="font-black text-white">
                Ayodeji Idris Akinsanya
              </h3>

              <p className="mt-1 text-xs text-orange-300">
                Founder & CEO • AIA•ACADEMY
              </p>

            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="order-1 text-center lg:order-2 lg:text-left">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-400">
            <Laptop2 size={15} />
            Student Tech Founder & Tutor
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] sm:text-4xl lg:text-5xl dark:text-white">
            Built by Students.
            <br />
            For Students.
          </h2>

          <p className="mt-6 text-base leading-7 text-[#5F6673] sm:text-lg sm:leading-8 dark:text-orange-50/65">
            <span className="font-bold text-orange-500">
              Ayodeji Idris Akinsanya (AIA)
            </span>{" "}
            is a 300 Level Nursing student at Lagos State University College of
            Medicine (LASUCOM) and the <strong>Founder & CEO of
            AIA•ACADEMY</strong>, an educational platform dedicated to helping
            students achieve academic excellence through technology,
            high-quality learning resources and innovative teaching.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F6673] sm:text-lg sm:leading-8 dark:text-orange-50/65">
            He also <strong>founded and leads LASU Scholar</strong>, a digital
            learning platform designed to help LASU students study smarter with
            structured study materials, practice questions, progress tracking
            and exam-focused preparation.
          </p>

          <p className="mt-5 text-base leading-7 text-[#5F6673] sm:text-lg sm:leading-8 dark:text-orange-50/65">
            As an educator, entrepreneur and technology innovator, AIA
            continues to drive the vision of creating practical digital
            solutions that make learning simpler, smarter and more effective
            for thousands of students.
          </p>

          {/* Tags */}

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-orange-400">
              Founder & CEO
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-orange-400">
              Founder • LASU Scholar
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-orange-400">
              <GraduationCap
                size={15}
                className="mr-2 inline-block"
              />
              LASUCOM Nursing
            </span>

          </div>

          {/* Quote */}

          <div className="mt-10 rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 backdrop-blur-xl">

            <Award
              className="mx-auto mb-3 text-orange-400 lg:mx-0"
              size={30}
            />

            <p className="text-xl font-black italic text-[#1F2937] dark:text-white">
              "Learn Smarter. Score Higher."
            </p>

            <p className="mt-2 text-sm text-[#5F6673] dark:text-orange-50/50">
              — Ayodeji Idris Akinsanya (AIA)
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}