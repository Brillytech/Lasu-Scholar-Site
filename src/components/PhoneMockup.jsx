export default function PhoneMockup({ image, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[260px] sm:w-[310px] lg:w-[350px] ${className}`}
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-orange-500/30 blur-[90px]" />

      <div className="relative rounded-[3.2rem] bg-gradient-to-br from-zinc-700 via-zinc-950 to-black p-[10px] shadow-[0_45px_120px_rgba(0,0,0,.85)] ring-1 ring-white/15">
        <div className="absolute inset-[5px] rounded-[2.9rem] border border-white/10" />

        <div className="absolute left-1/2 top-[18px] z-30 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,.12)] sm:w-[112px]" />

        <div className="pointer-events-none absolute inset-[10px] z-20 rounded-[2.6rem] bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-35" />

        <div className="overflow-hidden rounded-[2.6rem] bg-black">
          <img
            src={image}
            alt="LASU Scholar app screen"
            className="h-[540px] w-full object-cover object-top sm:h-[630px] lg:h-[680px]"
          />
        </div>
      </div>
    </div>
  );
}