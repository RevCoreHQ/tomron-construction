'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}

const wordVariants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function TextReveal({ children, className, as: Tag = 'h2', delay = 0 }: TextRevealProps) {
  const prefersReduced = useReducedMotion();
  const text = typeof children === 'string' ? children : '';

  if (prefersReduced || !text) {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = text.split(' ');

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.04, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
            {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
