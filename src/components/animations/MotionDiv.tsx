import { useRef, useEffect, type ReactNode } from "react";
import { animate, inView } from "motion";
import { cn } from "@/lib/utils";

interface MotionDivProps {
  children: ReactNode;
  animation?: "fadeIn" | "slideUp" | "scaleIn" | "slideInLeft" | "slideInRight" | "slideDown";
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: "mount" | "inView";
  margin?: string;
}

export function MotionDiv({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className,
  trigger = "mount",
  margin = "-100px",
}: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const animations = {
      fadeIn: {
        opacity: [0, 1],
      },
      slideUp: {
        opacity: [0, 1],
        y: [30, 0],
      },
      scaleIn: {
        opacity: [0, 1],
        scale: [0.95, 1],
      },
      slideInLeft: {
        opacity: [0, 1],
        x: [-30, 0],
      },
      slideInRight: {
        opacity: [0, 1],
        x: [30, 0],
      },
      slideDown: {
        opacity: [0, 1],
        y: [-20, 0],
      },
    };

    if (trigger === "mount") {
      animate(
        element,
        animations[animation],
        {
          duration,
          delay,
        }
      );
    } else {
      inView(
        element,
        () => {
          animate(
            element,
            animations[animation],
            {
              duration,
              delay,
            }
          );
        },
        {
          margin: margin as any,
        }
      );
    }
  }, [animation, delay, duration, trigger, margin]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

