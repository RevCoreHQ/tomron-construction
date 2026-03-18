'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on first visit in this browser session
    if (sessionStorage.getItem('tomron-loaded')) return;
    setShow(true);
    sessionStorage.setItem('tomron-loaded', '1');
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-charcoal-900 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-display text-3xl sm:text-4xl tracking-tight text-white uppercase">
                <span className="font-bold">Tomron</span>{' '}
                <span className="font-extralight">Construction</span>
              </span>
            </motion.div>

            {/* Animated underline */}
            <motion.div
              className="h-0.5 bg-brand-600 mt-4 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-white/40 text-sm mt-4 tracking-widest uppercase"
            >
              We Build What Lasts
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
