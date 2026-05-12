import { motion } from "framer-motion";

export default function NoiseOverlay() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.035 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    >
      <motion.div 
        animate={{ 
          x: [0, -10, 10, -5, 5, 0],
          y: [0, 5, -5, 10, -10, 0]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-[-100%] opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}
