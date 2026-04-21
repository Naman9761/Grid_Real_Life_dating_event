import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Ghost,
  Users,
  Zap,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  SmartphoneNfc,
  Sparkles,
} from "lucide-react";
import NeonBackground from "../components/NeonBackground";

const values = [
  {
    icon: Users,
    title: "Offline First",
    description: "We don't want you on our app. We want you in our rooms, meeting real people, hearing real laughs, and feeling real chemistry.",
    color: "text-brand-orange",
    bg: "brand-orange",
  },
  {
    icon: ShieldCheck,
    title: "Curated Energy",
    description: "Every event is designed with intentionality. We balance ratios, ensure safety, and build environments where natural connections thrive.",
    color: "text-brand-pink",
    bg: "brand-pink",
  },
  {
    icon: HeartHandshake,
    title: "Zero Pressure",
    description: "No awkward cold approaches. Our signature grids and host-led moments give you the perfect excuse to talk to everyone.",
    color: "text-brand-purple",
    bg: "brand-purple",
  },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      <NeonBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6">
        {/* Hero Section */}
        <section className="glass-dark overflow-hidden rounded-[2.5rem] border border-white/10 relative mt-4 sm:mt-10">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-pink/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-md">
                <span className="bg-white text-black px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Our Mission
                </span>
                We are killing the swipe.
              </div>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
                The Anti-Dating App.<br/>
                <span className="text-gradient">Born Offline.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-white/70 sm:text-2xl font-medium">
                Modern dating promised connection but delivered isolation. 
                We're rebuilding romance from the ground up—in real life, where it belongs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem vs Solution */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[2rem] p-8 sm:p-10 border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 border border-white/10">
              <SmartphoneNfc className="h-7 w-7 text-white/40" />
            </div>
            <h2 className="mb-4 text-3xl font-black text-white/50">The Old Way</h2>
            <ul className="space-y-4">
              {[
                { icon: Ghost, text: "Endless ghosting and left on read" },
                { icon: SmartphoneNfc, text: "Hours of swiping, zero dates" },
                { icon: Users, text: "Catfishing and outdated photos" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/40 text-lg font-medium">
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-dark rounded-[2rem] p-8 sm:p-10 border border-brand-pink/20 relative overflow-hidden group shadow-[0_0_40px_rgba(236,72,153,0.1)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-brand-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-pink/20 blur-3xl rounded-full" />

            <div className="mb-8 relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-brand-orange to-brand-pink shadow-lg shadow-brand-pink/20">
              <Zap className="h-7 w-7 text-white fill-white/20" />
            </div>
            <h2 className="mb-4 text-3xl font-black text-white">The GRID Way</h2>
            <ul className="space-y-4">
              {[
                { icon: Sparkles, text: "Immediate high-quality matches" },
                { icon: HeartHandshake, text: "Natural, guided interactions" },
                { icon: ShieldCheck, text: "Curated guest lists and venues" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/90 text-lg font-bold">
                  <item.icon className="h-6 w-6 shrink-0 text-brand-pink" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Core Values */}
        <section>
          <div className="mb-10 lg:mb-14 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Philosophy</h2>
            <p className="text-lg text-white/60 font-medium">We obsess over the details so you can obsess over each other.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center group border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className={`mb-6 h-20 w-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                    <Icon className={`h-10 w-10 ${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                  <p className="text-base text-white/60 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Big CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-16 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple opacity-90" />
          <div className="absolute inset-0 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1577998474537-88ba5b47e256?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Ready to feel sparks again?
            </h2>
            <p className="max-w-xl text-lg sm:text-xl text-white/90 font-medium">
              Join thousands of singles who have traded screen time for real face time. Your next great story starts in the room.
            </p>
            <div className="pt-4">
              <Link
                to="/events/amsterdam-rooftop"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-black text-black shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 group"
              >
                Find an Event Near You
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
