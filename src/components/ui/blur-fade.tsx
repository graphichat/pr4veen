import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
  yOffset?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.4,
  inView: useInView = true,
  yOffset = 8,
}: BlurFadeProps) {
  const initial = { opacity: 0, filter: "blur(6px)", y: yOffset };
  const visible = { opacity: 1, filter: "blur(0px)", y: 0 };
  const transition = { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] as const };

  if (useInView) {
    return (
      <motion.div
        initial={initial}
        whileInView={visible}
        viewport={{ once: true, margin: "-40px" }}
        transition={transition}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      animate={visible}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
