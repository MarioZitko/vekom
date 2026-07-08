import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedMotionContainer: Variants = {
  hidden: {},
  visible: {},
};

const reducedMotionItem: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

export function getMotionVariants(prefersReducedMotion: boolean | null) {
  if (prefersReducedMotion) {
    return { container: reducedMotionContainer, item: reducedMotionItem };
  }
  return { container: staggerContainer, item: fadeUpItem };
}
