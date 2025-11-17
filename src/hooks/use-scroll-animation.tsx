import { useEffect, useState } from "react";

export type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = (type: AnimationType = "fade-up", config: AnimationConfig = {}) => {
  const {
    duration = 0.6,
    delay = 0,
    threshold = 0.1,
    once = true
  } = config;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return {
      initial: {},
      whileInView: {},
      viewport: { once, amount: threshold },
      transition: { duration: 0 }
    };
  }

  const animations = {
    "fade-up": {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 }
    },
    "fade-in": {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 }
    },
    "slide-left": {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0 }
    },
    "slide-right": {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0 }
    },
    "scale-in": {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 }
    }
  };

  return {
    ...animations[type],
    viewport: { once, amount: threshold },
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  };
};

export const useStaggerAnimation = (childCount: number, config: AnimationConfig = {}) => {
  const {
    duration = 0.6,
    delay = 0,
    threshold = 0.1,
    once = true
  } = config;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return {
      container: {},
      item: {}
    };
  }

  return {
    container: {
      initial: {},
      whileInView: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      viewport: { once, amount: threshold }
    },
    item: {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };
};
