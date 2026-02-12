"use client";

import { useEffect, useState, useRef } from "react";

interface CounterOptions {
  end: number;
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
}

/**
 * Custom hook for smooth counter animations
 * Triggers when element is 50% visible in viewport
 */
export const useCounterAnimation = ({
  end,
  duration = 2000,
  delay = 0,
  easing = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2), // easeInOutCubic
}: CounterOptions) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when 50% of element is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setHasAnimated(true);

            // Apply delay if specified
            setTimeout(() => {
              let startTime: number | null = null;

              const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min(
                  (timestamp - startTime) / duration,
                  1,
                );
                const easedProgress = easing(progress);

                setCount(Math.floor(easedProgress * end));

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCount(end);
                }
              };

              requestAnimationFrame(animate);
            }, delay);

            observer.disconnect();
          }
        });
      },
      {
        threshold: [0, 0.5, 1], // Check at 0%, 50%, and 100% visibility
        rootMargin: "0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, delay, easing, hasAnimated]);

  return { count, ref };
};

/**
 * Easing functions for different animation styles
 */
export const easingFunctions = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  easeInCubic: (t: number) => t * t * t,
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeInOutCubic: (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeInOutExpo: (t: number) =>
    t === 0
      ? 0
      : t === 1
        ? 1
        : t < 0.5
          ? Math.pow(2, 20 * t - 10) / 2
          : (2 - Math.pow(2, -20 * t + 10)) / 2,
};
