import React, { useEffect, useRef, useState } from "react";

// Splits "80+" into { prefix: "", target: 80, suffix: "+" }.
function parseValue(value) {
  const match = String(value).match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: Number(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

// Counts a stat up from zero when it scrolls into view.
function CountUp({ value, duration = 1400 }) {
  const parsed = parseValue(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const target = parseValue(value);
    const el = ref.current;
    if (!target || !el) return undefined;

    const reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setCurrent(target.target);
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(target.target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  if (!parsed) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {parsed.prefix}
      {current}
      {parsed.suffix}
    </span>
  );
}

export default CountUp;
