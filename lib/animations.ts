// lib/animations.ts
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: EASE_OUT_EXPO,
    },
  }),
};

export const clipReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT_EXPO },
  },
};

export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.2, ease: EASE_OUT_EXPO } },
};

export const hoverGlow = {
  whileHover: { scale: 1.03, transition: { duration: 0.2, ease: EASE_OUT_EXPO } },
};
