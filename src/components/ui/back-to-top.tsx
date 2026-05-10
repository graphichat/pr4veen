import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-md text-muted-foreground hover:text-foreground hover:shadow-lg transition-colors md:bottom-8 bottom-24"
          aria-label="Back to top"
          type="button"
        >
          <ChevronUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
