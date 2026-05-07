import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export type DockItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  type: "internal" | "external";
  href?: string;
};

export const FloatingDock = ({
  items,
  activeItem,
  onItemClick,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop 
        items={items} 
        activeItem={activeItem}
        onItemClick={onItemClick}
        className={desktopClassName} 
      />
      <FloatingDockMobile 
        items={items} 
        activeItem={activeItem}
        onItemClick={onItemClick}
        className={mobileClassName} 
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  activeItem,
  onItemClick,
  className,
}: {
  items: DockItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchAccum = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchAccum.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const deltaX = touchStartX.current - currentX; // positive if swiping left
    touchStartX.current = currentX;

    touchAccum.current += deltaX;

    // 45px swipe distance per index change gives a smooth, 1:1 natural feel
    const threshold = 45;

    if (Math.abs(touchAccum.current) >= threshold) {
      const increments = Math.trunc(touchAccum.current / threshold);
      setScrollIndex((prev) => {
        const next = prev + increments;
        return Math.max(0, Math.min(items.length - 1, next));
      });
      touchAccum.current -= increments * threshold; // keep the remainder
    }
  };

  // Keep a click handler to allow manual overrides
  const handleItemClick = (id: string, idx: number) => {
    setScrollIndex(idx);
    onItemClick?.(id);
  };

  return (
    <div className={cn("relative block md:hidden w-full max-w-[calc(100vw-2rem)]", className)}>
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="flex h-16 items-center gap-4 rounded-2xl bg-gray-50/90 px-4 dark:bg-neutral-900/90 backdrop-blur-md overflow-x-auto shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 dark:border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
      >
        {items.map((item, idx) => {
          const isActive = activeItem === item.id;
          const isScrollActive = scrollIndex === idx;
          
          const content = (
            <motion.div
              layout
              className={cn(
                "relative flex h-10 items-center justify-center rounded-full transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-300 hover:bg-gray-300 dark:hover:bg-neutral-700",
                isScrollActive ? "w-auto px-4 gap-2" : "w-10 shrink-0"
              )}
            >
              <motion.div layout className="h-5 w-5 flex items-center justify-center shrink-0">
                {item.icon}
              </motion.div>
              <AnimatePresence>
                {isScrollActive && (
                  <motion.span 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );

          if (item.type === "external" && item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                onClick={() => handleItemClick(item.id, idx)}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id, idx)}
              className="shrink-0 cursor-pointer"
              type="button"
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  activeItem,
  onItemClick,
  className,
}: {
  items: DockItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer 
          mouseX={mouseX} 
          key={item.id} 
          {...item}
          isActive={activeItem === item.id}
          onItemClick={onItemClick}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  id,
  title,
  icon,
  href,
  type,
  isActive,
  onItemClick,
}: {
  mouseX: MotionValue;
  id: string;
  title: string;
  icon: React.ReactNode;
  href?: string;
  type: "internal" | "external";
  isActive?: boolean;
  onItemClick?: (id: string) => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const linkContent = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "bg-gray-200 dark:bg-neutral-800"
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );

  if (type === "external" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {linkContent}
      </a>
    );
  }

  return (
    <button
      onClick={() => onItemClick?.(id)}
      className="cursor-pointer"
      type="button"
    >
      {linkContent}
    </button>
  );
}
