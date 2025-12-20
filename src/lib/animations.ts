import { animate, scroll, inView, stagger } from "motion";

/**
 * Animate elements on scroll into view
 */
export function animateOnScroll(selector: string, options?: {
  delay?: number;
  duration?: number;
  stagger?: number;
}) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    scroll(
      animate(
        el as HTMLElement,
        {
          opacity: [0, 1],
          y: [20, 0],
        },
        {
          duration: options?.duration || 0.6,
          delay: options?.delay || 0,
        }
      ),
      {
        target: el as HTMLElement,
      }
    );
  });
}

/**
 * Animate elements when they come into view
 */
export function animateInView(selector: string, options?: {
  delay?: number;
  duration?: number;
  stagger?: number;
}) {
  const elements = document.querySelectorAll(selector);
  
  inView(
    elements[0] as HTMLElement,
    () => {
      animate(
        elements as NodeListOf<HTMLElement>,
        {
          opacity: [0, 1],
          y: [30, 0],
        },
        {
          duration: options?.duration || 0.6,
          delay: stagger(options?.stagger || 0.1),
        }
      );
    },
    {
      margin: "-100px",
    }
  );
}

/**
 * Animate element on hover
 */
export function animateHover(element: HTMLElement, options?: {
  scale?: number;
  duration?: number;
}) {
  element.addEventListener("mouseenter", () => {
    animate(
      element,
      {
        scale: options?.scale || 1.05,
      },
      {
        duration: options?.duration || 0.3,
      }
    );
  });

  element.addEventListener("mouseleave", () => {
    animate(
      element,
      {
        scale: 1,
      },
      {
        duration: options?.duration || 0.3,
      }
    );
  });
}

/**
 * Fade in animation
 */
export function fadeIn(element: HTMLElement, options?: {
  delay?: number;
  duration?: number;
}) {
  animate(
    element,
    {
      opacity: [0, 1],
    },
    {
      duration: options?.duration || 0.6,
      delay: options?.delay || 0,
    }
  );
}

/**
 * Slide up animation
 */
export function slideUp(element: HTMLElement, options?: {
  delay?: number;
  duration?: number;
  distance?: number;
}) {
  animate(
    element,
    {
      opacity: [0, 1],
      y: [options?.distance || 30, 0],
    },
    {
      duration: options?.duration || 0.6,
      delay: options?.delay || 0,
    }
  );
}

