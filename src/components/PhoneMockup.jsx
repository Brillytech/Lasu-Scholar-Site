export default function PhoneMockup({ image, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[255px] sm:w-[305px] lg:w-[345px] ${className}`}
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-orange-300/18 blur-[90px]" />

      <div className="relative rounded-[3.2rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 p-[10px] shadow-[0_45px_120px_rgba(15,23,42,.35)] ring-1 ring-slate-900/15">
        <div className="absolute inset-[5px] rounded-[2.9rem] border border-white/10" />

        <div className="absolute left-1/2 top-[18px] z-30 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,.14)] sm:w-[112px]" />

        <div className="pointer-events-none absolute inset-[10px] z-20 rounded-[2.6rem] bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-35" />

        <div className="overflow-hidden rounded-[2.6rem] bg-black">
          <img
            src={image}
            alt="LASU Scholar app screen"
           className="h-[520px] w-full object-cover object-top sm:h-[600px] lg:h-[640px]"
          />
        </div>
      </div>
    </div>
  );
}