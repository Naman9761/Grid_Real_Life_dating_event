import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { EventData } from "../data/events";

type EventCardProps = {
  event: EventData;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative w-[82vw] max-w-sm shrink-0 overflow-hidden rounded-2xl border border-white/10 glass md:w-auto"
    >
      <Link to={`/events/${event.id}`} className="block h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            src={event.image}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          {event.isSellingFast && (
            <div className="absolute left-4 top-4 rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Selling Fast
            </div>
          )}

          <div className="absolute inset-x-4 bottom-4 space-y-1">
            <h3 className="text-xl font-semibold text-white">{event.title}</h3>
            <p className="text-sm text-white/80">{event.date}</p>
            <p className="text-sm text-white/80">{event.price}</p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-brand-pink/60 group-hover:shadow-[0_0_32px_rgba(236,72,153,0.28)]" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/45 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-md"
        >
          View Event
        </motion.div>
      </Link>
    </motion.article>
  );
}
