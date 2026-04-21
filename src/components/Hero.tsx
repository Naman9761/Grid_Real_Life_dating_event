import { motion } from "motion/react";
import { Crown } from "lucide-react";
import { Link } from "react-router-dom";
import NeonBackground from "./NeonBackground";
import SocialProof from "./SocialProof";

const ProfileCard = ({
  name,
  location,
  age,
  tier,
  imageUrl,
  delay,
  rotation = "0",
  isActive = false,
}: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
      transition: {
        opacity: { delay, duration: 0.8 },
        scale: { delay, duration: 0.8 },
        y: {
          delay: delay + 1,
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    }}
    whileHover={{
      scale: 1.05,
      rotate: 0,
      zIndex: 50,
      transition: { duration: 0.3 },
    }}
    style={{ rotate: `${rotation}deg` }}
    className={`glass p-3 rounded-2xl w-32 sm:w-36 md:w-40 flex flex-col items-center gap-2.5 relative overflow-hidden transition-all duration-500 shadow-2xl ${isActive ? "scale-105 sm:scale-110 z-20 ring-1 ring-white/20" : "z-10"}`}
  >
    {/* Inner glow */}
    <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />

    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-black/20">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover rounded-full"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="text-center relative z-10">
      <h3 className="font-bold text-base sm:text-lg text-white">{name}</h3>
      <p className="text-xs text-white/50">
        {location}, {age}
      </p>
    </div>

    <div className="px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-lg flex items-center gap-1.5 relative z-10">
      <Crown className="w-3 h-3 text-brand-orange fill-brand-orange" />
      <span className="text-[9px] font-bold text-brand-orange uppercase tracking-wider">
        {tier}
      </span>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-24 pb-14 sm:pb-16 px-4 sm:px-6 overflow-hidden min-h-[78vh] flex items-center">
      <NeonBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">
          <div className="space-y-6 lg:space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="inline-flex items-center rounded-full border border-brand-orange/60 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-white/90 shadow-[0_0_25px_rgba(236,72,153,0.15)]">
                Amsterdam • May 2026 • Selling Fast
              </div>
              <h1 className="font-black leading-[0.95] tracking-tighter text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">
                  Stop <span className="text-gradient">Swiping.</span>
                </span>
                <span className="block sm:whitespace-nowrap">Start Showing Up.</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/60 max-w-xl leading-tight font-medium">
                No ghosting. No small talk.
                <br />
                Just real chemistry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <Link to="/join-waitlist" className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple text-base sm:text-lg font-black text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all inline-block text-center">
                Get Early Access
              </Link>
              <Link to="/events/amsterdam-rooftop" className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full border border-brand-pink/60 bg-black/20 text-base sm:text-lg font-bold text-white shadow-[0_0_25px_rgba(236,72,153,0.2)] hover:bg-white/5 active:scale-95 transition-all inline-block text-center">
                View Events
              </Link>
            </motion.div>
          </div>

          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">
            {/* Subtle container glow */}
            <div className="absolute inset-0 bg-radial from-brand-pink/5 to-transparent blur-3xl opacity-50" />

            <div className="relative flex items-center justify-center -space-x-4 sm:-space-x-7 md:-space-x-10">
              <ProfileCard
                name="Maya R."
                location="Amsterdam"
                age={26}
                tier="GOLD"
                imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
                delay={0.2}
                rotation="-10"
              />

              <ProfileCard
                name="Liam K."
                location="Rotterdam"
                age={28}
                tier="GOLD"
                imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300"
                delay={0.4}
                rotation="0"
                isActive={true}
              />

              <ProfileCard
                name="Eva S."
                location="Utrecht"
                age={26}
                tier="GOLD"
                imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300"
                delay={0.6}
                rotation="8"
              />
            </div>
          </div>
        </div>

        <SocialProof embedded />
      </div>
    </section>
  );
}
