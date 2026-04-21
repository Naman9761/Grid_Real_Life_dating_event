import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import EventAudience from "../components/EventAudience";
import EventHero from "../components/EventHero";
import EventInfoBar from "../components/EventInfoBar";
import EventSchedule from "../components/EventSchedule";
import { getEventById } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = id ? getEventById(id) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-brand-dark px-4 pb-20 pt-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-3xl font-semibold text-white">Event not found</h1>
          <p className="mt-2 text-white/70">The event you are looking for does not exist.</p>
          <Link
            to="/events"
            className="mt-6 inline-block rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-dark px-4 pb-28 pt-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <EventHero event={event} />
        <EventInfoBar event={event} />

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-semibold text-white">About the Event</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{event.description}</p>
        </section>

        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8 lg:grid-cols-2">
          <EventSchedule schedule={event.schedule} />
          <EventAudience audience={event.audience} />
        </div>

        <div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_rgba(236,72,153,0.3)] transition"
          >
            Book Your Spot
          </motion.button>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-2xl bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-6 py-4 text-base font-semibold text-white shadow-[0_0_35px_rgba(236,72,153,0.35)]"
        >
          Book Your Spot
        </motion.button>
      </div>
    </motion.div>
  );
}
