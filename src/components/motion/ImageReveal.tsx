'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const clipPaths: Record<string, { hidden: string; visible: string }> = {
  left: { hidden: 'inset(0 100% 0 0)', visible: 'inset(0 0% 0 0)' },
  right: { hidden: 'inset(0 0 0 100%)', visible: 'inset(0 0 0 0%)' },
  up: { hidden: 'inset(100% 0 0 0)', visible: 'inset(0% 0 0 0)' },
  down: { hidden: 'inset(0 0 100% 0)', visible: 'inset(0 0 0% 0)' },
};

export function ImageReveal({ children, className, delay = 0, direction = 'left' }: ImageRevealProps) {
  const prefersReduced = useReducedMotion();
  const clip = clipPaths[direction];

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* Image revealed by clip-path */}
      <motion.div
        variants={{
          hidden: { clipPath: clip.hidden },
          visible: {
            clipPath: clip.visible,
            transition: { duration: 0.8, delay: delay + 0.3, ease: [0.76, 0, 0.24, 1] },
          },
        }}
      >
        {children}
      </motion.div>

      {/* Brand-colored overlay that wipes across */}
      <motion.div
        className="absolute inset-0 bg-brand-600 z-10"
        variants={{
          hidden: { scaleX: 0, originX: 0 },
          visible: {
            scaleX: [0, 1, 1, 0],
            originX: [0, 0, 1, 1],
            transition: {
              duration: 0.8,
              delay,
              ease: [0.76, 0, 0.24, 1],
              times: [0, 0.4, 0.4, 1],
            },
          },
        }}
      />
    </motion.div>
  );
}
