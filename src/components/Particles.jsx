const dots = Array.from({ length: 18 });

export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {dots.map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-orange-400/45 shadow-[0_0_18px_rgba(249,115,22,.9)] animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}