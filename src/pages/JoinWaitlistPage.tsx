import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Flame, Sparkles, Users2 } from "lucide-react";
import NeonBackground from "../components/NeonBackground";

const perks = [
  "Priority invites to Amsterdam launch events",
  "Early-bird pricing before public release",
  "Members-only social nights and hosted tables",
  "Faster matching flow and premium support",
];

export default function JoinWaitlistPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      <NeonBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6">
        <section className="glass-dark overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-10 md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12"
          >
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-brand-orange/60 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-white/90">
                <Flame className="mr-2 h-4 w-4 text-brand-orange" />
                Join GRID Waitlist
              </div>
              <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
                Get early access to the next wave of real-life dating events.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                Designed for ambitious singles who want chemistry in person, not endless swiping. Drop your details
                and we will reserve your priority invitation.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
                    <span className="text-sm text-white/80">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-7 lg:col-span-5">
              <h2 className="text-2xl font-bold text-white">Reserve your spot</h2>
              <p className="mt-2 text-sm text-white/60">We only onboard a limited number of people per event cycle.</p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-pink/60 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-pink/60 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="City (e.g. Amsterdam)"
                  className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-pink/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-5 py-3.5 text-sm font-black text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Users2 className="h-4 w-4 text-brand-purple" />
                  1,250+ joined this month
                </div>
                <div className="flex items-center gap-1 text-xs text-white/70">
                  <Sparkles className="h-4 w-4 text-brand-pink" />
                  Premium tier
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="glass rounded-[1.75rem] p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Not ready yet?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/65">
            Explore how GRID works and what makes our real-life events different from apps.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/how-it-works"
              className="rounded-full border border-white/20 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              See how it works
            </Link>
            <Link
              to="/"
              className="rounded-full border border-brand-pink/50 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/5"
            >
              Back to homepage
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
