import { useEffect, useRef } from "react";
import { animate, inView, stagger } from "motion";

/**
 * Hook to animate element on mount
 */
export function useMotionAnimation(
  animation: "fadeIn" | "slideUp" | "scaleIn" | "slideInLeft" | "slideInRight",
  options?: {
    delay?: number;
    duration?: number;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const duration = options?.duration || 0.6;
    const delay = options?.delay || 0;

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
    };

    animate(
      element,
      animations[animation],
      {
        duration,
        delay,
      }
    );
  }, [animation, options?.delay, options?.duration]);

  return ref;
}

/**
 * Hook to animate element when it comes into view
 */
export function useMotionInView(
  animation: "fadeIn" | "slideUp" | "scaleIn",
  options?: {
    delay?: number;
    duration?: number;
    margin?: string;
  }
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const duration = options?.duration || 0.6;
    const delay = options?.delay || 0;
    const margin = options?.margin || "-100px";

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
    };

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
  }, [animation, options?.delay, options?.duration, options?.margin]);

  return ref;
}

/**
 * Hook to animate multiple elements with stagger
 */
export function useMotionStagger(
  selector: string,
  animation: "fadeIn" | "slideUp" | "scaleIn",
  options?: {
    delay?: number;
    duration?: number;
    stagger?: number;
    margin?: string;
  }
) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const duration = options?.duration || 0.6;
    const staggerDelay = options?.stagger || 0.1;
    const margin = options?.margin || "-100px";

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
    };

    inView(
      container,
      () => {
        animate(
          elements as NodeListOf<HTMLElement>,
          animations[animation],
          {
            duration,
            delay: stagger(staggerDelay),
          }
        );
      },
        {
          margin: margin as any,
        }
    );
  }, [selector, animation, options?.delay, options?.duration, options?.stagger, options?.margin]);

  return containerRef;
}

