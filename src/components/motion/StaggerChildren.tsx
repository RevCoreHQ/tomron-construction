'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const container = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}
