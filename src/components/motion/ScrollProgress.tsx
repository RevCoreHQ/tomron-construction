'use client';

import { motion, useScroll, useReducedMotion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-brand-600 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
