import { motion } from "motion/react";
import { Crown } from "lucide-react";
import NeonBackground from "./NeonBackground";

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
    className={`glass p-4 rounded-2xl w-44 md:w-52 flex flex-col items-center gap-3 relative overflow-hidden transition-all duration-500 shadow-2xl ${isActive ? "scale-110 z-20 ring-1 ring-white/20" : "z-10"}`}
  >
    {/* Inner glow */}
    <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />

    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-black/20">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover rounded-full"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="text-center relative z-10">
      <h3 className="font-bold text-lg md:text-xl text-white">{name}</h3>
      <p className="text-xs text-white/50">
        {location}, {age}
      </p>
    </div>

    <div className="px-3 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-lg flex items-center gap-1.5 relative z-10">
      <Crown className="w-3 h-3 text-brand-orange fill-brand-orange" />
      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">
        {tier}
      </span>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-10 pb-24 px-5 overflow-hidden min-h-screen flex items-center">
      <NeonBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tighter text-white">
              Stop <span className="text-gradient">Swiping.</span>
              <br />
              Start Showing Up.
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed font-medium">
              GRID is Amsterdam's new singles events brand. Real matchmaking,
              real venues, real conversations — no algorithm, no ghosting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="px-10 py-5 rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple text-lg font-black text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-tight">
              Join the GRID Network
            </button>
          </motion.div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Subtle container glow */}
          <div className="absolute inset-0 bg-radial from-brand-pink/5 to-transparent blur-3xl opacity-50" />

          <div className="relative flex items-center justify-center -space-x-8 md:-space-x-12">
            <ProfileCard
              name="Maya R."
              location="Amsterdam"
              age={25}
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
    </section>
  );
}
