import { motion } from 'motion/react';

export default function NeonBackground() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#0C0D10]">
      {/* Base Radial Gradients for Atmosphere - Stronger */}
      <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-brand-orange/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-[5%] right-[0%] w-[700px] h-[700px] bg-brand-purple/20 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-pink/10 blur-[180px] rounded-full" />

      {/* SVG Neon Flowing Lines */}
      <svg
        className="absolute inset-0 w-full h-full mix-blend-screen"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="neonGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0" />
            <stop offset="40%" stopColor="#EC4899" stopOpacity="1" />
            <stop offset="70%" stopColor="#A855F7" stopOpacity="1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
          
          <filter id="neonGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="neonGlowSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
          </filter>
        </defs>

        {/* Path 1: Main Energetic Line */}
        <motion.path
          d="M -100 650 C 300 550, 900 800, 1600 350"
          stroke="url(#neonGradient1)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#neonGlowStrong)"
          animate={{
            strokeDasharray: ["0, 1200", "1200, 0"],
            strokeDashoffset: [1200, 0],
            y: [0, -25, 0]
          }}
          transition={{
            strokeDasharray: { duration: 8, repeat: Infinity, ease: "linear" },
            strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="opacity-70"
        />

        {/* Path 2: Subordinate Secondary Line */}
        <motion.path
          d="M -100 750 C 400 450, 1000 850, 1600 250"
          stroke="url(#neonGradient1)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#neonGlowStrong)"
          animate={{
            strokeDasharray: ["0, 1000", "1000, 0"],
            strokeDashoffset: [1000, 200],
            y: [0, 15, 0]
          }}
          transition={{
            strokeDasharray: { duration: 10, repeat: Infinity, ease: "linear" },
            strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="opacity-50"
        />

        {/* Path 3: Top Flow */}
        <motion.path
          d="M -50 400 C 500 600, 1100 300, 1600 500"
          stroke="url(#neonGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#neonGlowSoft)"
          animate={{
            strokeDasharray: ["0, 1500", "1500, 0"],
            strokeDashoffset: [1500, 0],
            y: [0, -10, 0]
          }}
          transition={{
            strokeDasharray: { duration: 12, repeat: Infinity, ease: "linear" },
            strokeDashoffset: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="opacity-40"
        />

        {/* Path 4: Extra Fine Highlight */}
        <motion.path
          d="M 200 850 C 600 650, 1200 750, 1600 400"
          stroke="#EC4899"
          strokeWidth="1.5"
          filter="url(#neonGlowSoft)"
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            pathLength: [0.8, 1, 0.8]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Backdrop blur layer for depth */}
      <div className="absolute inset-0 backdrop-blur-[1px] opacity-20 pointer-events-none" />
    </div>
  );
}
