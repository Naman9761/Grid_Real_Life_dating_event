import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="rounded-full fixed top-1 left-10 right-10 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/10 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight">
          <span>GRID</span>
          <Sparkles className="w-5 h-5 text-brand-pink fill-brand-pink" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-white transition-colors">
          Events
        </a>
        <a href="#" className="hover:text-white transition-colors">
          How It Works
        </a>
        <a href="#" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Support
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white/5 text-sm font-medium text-white transition-all">
          Sign In
        </button>
        <button className="px-5 py-2 rounded-full bg-white text-black font-bold text-sm shadow-lg shadow-white/5 hover:scale-105 active:scale-95 transition-all">
          Join Now
        </button>
      </div>
    </motion.nav>
  );
}
