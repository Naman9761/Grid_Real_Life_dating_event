import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="rounded-full fixed top-2 left-3 right-3 sm:left-6 sm:right-6 lg:left-10 lg:right-10 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 backdrop-blur-md bg-black/20 border border-white/10"
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          <span>GRID</span>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink fill-brand-pink" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-md font-medium text-white/70">
        <Link to="/events" className="hover:text-white transition-colors">
          Events
        </Link>
        <Link to="/how-it-works" className="hover:text-white transition-colors">
          How It Works
        </Link>
        <Link to="/about" className="hover:text-white transition-colors">
          About
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden sm:inline-flex px-4 sm:px-5 py-2 rounded-full border border-white/20 hover:bg-white/5 text-xs sm:text-sm font-medium text-white transition-all">
          Sign In
        </button>
        <Link to="/join-waitlist" className="px-4 sm:px-5 py-2 rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-pink/20 hover:scale-105 active:scale-95 transition-all inline-block text-center">
          Join Now
        </Link>
      </div>
    </motion.nav>
  );
}
