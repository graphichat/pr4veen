import { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function NumberTicker({
  value,
  suffix = "",
  className,
  duration = 1.5,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const cleanup = inView(
      el,
      () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        animate(0, value, {
          duration,
          ease: "easeOut",
          onUpdate: (v) => {
            if (el) el.textContent = String(Math.round(v)) + suffix;
          },
        });
      },
      { margin: "-50px" }
    );

    return cleanup;
  }, [value, duration, suffix]);

  return (
    <span ref={ref} className={cn(className)}>
      0{suffix}
    </span>
  );
}
