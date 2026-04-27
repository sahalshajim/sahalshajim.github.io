"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type Parsed = {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
  hasComma: boolean;
};

function parseValue(v: string): Parsed {
  const match = v.match(/^(\D*?)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: v, decimals: 0, hasComma: false };
  }
  const [, prefix, numStr, suffix] = match;
  const hasComma = numStr.includes(",");
  const clean = numStr.replace(/,/g, "");
  const decimals = (clean.split(".")[1] || "").length;
  const number = parseFloat(clean);
  return { prefix, number, suffix, decimals, hasComma };
}

function format(n: number, decimals: number, hasComma: boolean) {
  const fixed = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  if (!hasComma) return fixed;
  const [int, frac] = fixed.split(".");
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac !== undefined ? `${withCommas}.${frac}` : withCommas;
}

export default function CountUp({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(
    () =>
      `${parsed.prefix}${format(0, parsed.decimals, parsed.hasComma)}${parsed.suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, parsed.number, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => {
        setDisplay(
          `${parsed.prefix}${format(v, parsed.decimals, parsed.hasComma)}${parsed.suffix}`,
        );
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, parsed, mv]);

  return <span ref={ref}>{display}</span>;
}
