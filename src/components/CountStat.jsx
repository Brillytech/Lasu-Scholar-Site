import { useEffect, useState } from "react";

export default function CountStat({ end, suffix = "", label }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

 return (
  <div className="min-w-[80px]">
    <h3 className="text-2xl font-black text-[#1F2937] sm:text-3xl dark:text-white">
      {value.toLocaleString()}
      {suffix}
    </h3>
    <p className="mt-1 text-xs font-semibold text-[#7A818C] sm:text-sm dark:text-orange-50/55">
      {label}
    </p>
  </div>
);
}