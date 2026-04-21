import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  HeartHandshake,
  MessageSquareHeart,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";
import NeonBackground from "../components/NeonBackground";

const steps = [
  {
    icon: UserPlus,
    title: "Create your dating profile",
    description:
      "Share your vibe, values, and what you are looking for so we can place you in the right room energy.",
  },
  {
    icon: CalendarCheck2,
    title: "Select your event night",
    description:
      "Choose a city and format that fits your style, from rooftop mixers to high-energy themed nights.",
  },
  {
    icon: Sparkles,
    title: "Arrive and get your GRID",
    description:
      "At check-in you receive your color-coded flow and prompt cards that make first conversations easy.",
  },
  {
    icon: HeartHandshake,
    title: "Connect face-to-face",
    description:
      "Meet people in curated rounds, with hosts and music guiding the room so it feels natural, not forced.",
  },
];

const timeline = [
  { time: "19:30", title: "Smart check-in", detail: "Hosts welcome you, explain the format, and set your vibe profile." },
  { time: "20:00", title: "Guided connection rounds", detail: "Short rounds remove pressure and warm everyone up quickly." },
  { time: "21:00", title: "Open social momentum", detail: "Free-flowing conversations with music, prompts, and hosted intros." },
  { time: "22:15", title: "Private match selection", detail: "Submit your picks privately and get mutual matches after the event." },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Safe by design",
    description: "Host-led flow, curated attendance, and respectful match mechanics keep quality high.",
  },
  {
    icon: MessageSquareHeart,
    title: "No awkward small talk",
    description: "Built-in prompts and format cues help people move to meaningful conversations quickly.",
  },
  {
    icon: Users,
    title: "Real chemistry, real people",
    description: "You meet people in person, in one night, with context that apps can never replicate.",
  },
];

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pt-24 pb-20">
      <NeonBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6">
        <section className="glass-dark overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-10 md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-brand-orange/60 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-white/90">
              How GRID works
            </div>
            <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
              A premium, offline-first way to meet people.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              We design every detail around real chemistry. No endless swiping, no algorithm games, just structured
              social momentum that feels natural and fun.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/join-waitlist"
                className="rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-7 py-3.5 text-base font-black text-white shadow-[0_10px_30px_rgba(236,72,153,0.3)] transition-transform hover:scale-105 active:scale-95"
              >
                Join waitlist
              </Link>
              <Link
                to="/"
                className="rounded-full border border-white/20 bg-black/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Back to homepage
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                  <Icon className="h-6 w-6 text-brand-pink" />
                </div>
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">{step.title}</h2>
                <p className="text-sm leading-relaxed text-white/65">{step.description}</p>
              </motion.article>
            );
          })}
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-dark rounded-[2rem] border border-white/10 p-7 sm:p-9 lg:col-span-7"
          >
            <h3 className="mb-6 text-3xl font-bold text-white">Inside your event night</h3>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.time} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="min-w-16 rounded-lg bg-white/10 px-3 py-1.5 text-center text-sm font-bold text-white">
                    {item.time}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-[2rem] p-7 sm:p-9 lg:col-span-5"
          >
            <h3 className="mb-6 text-3xl font-bold text-white">Why people choose GRID</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/75">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                Curated rooms and host-led flow keep quality high and conversations intentional.
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <MessageSquareHeart className="mt-0.5 h-5 w-5 shrink-0 text-brand-pink" />
                Built-in prompts make it easy to move beyond small talk quickly.
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                Match privately at the end of the night so it feels confident and respectful.
              </li>
            </ul>
            <Link
              to="/join-waitlist"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/90 transition-colors hover:text-white"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <Icon className="h-5 w-5 text-brand-pink" />
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </motion.article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
