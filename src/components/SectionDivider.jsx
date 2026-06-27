export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 py-4">
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent dark:via-orange-500/20" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_16px_rgba(249,115,22,.35)] dark:shadow-[0_0_20px_rgba(249,115,22,.8)]" />
      </div>
    </div>
  );
}