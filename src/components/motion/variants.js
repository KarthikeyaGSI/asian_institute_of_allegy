/**
 * Anti-Gravity 2026 Hyper Premium Motion System
 * Global Motion Tokens & Variants
 */

export const easePremium = [0.22, 1, 0.36, 1];
export const easeLuxury = [0.16, 1, 0.3, 1];
export const easeSmooth = [0.65, 0, 0.35, 1];

export const durations = {
  micro: 0.2,
  standard: 0.5,
  cinematic: 1.2,
};

export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 24, 
    scale: 0.985, 
    filter: 'blur(12px)' 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)' 
  },
  exit: {
    opacity: 0,
    y: -24,
    filter: 'blur(12px)',
    transition: { duration: 0.5, ease: easePremium }
  },
  transition: { 
    duration: 1.1, 
    ease: easeLuxury 
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: easePremium }
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  animate: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const revealVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.97, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easePremium }
  }
};

export const textReveal = {
  initial: { y: '120%', opacity: 0, filter: 'blur(10px)' },
  animate: { 
    y: '0%', 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easePremium }
  }
};
