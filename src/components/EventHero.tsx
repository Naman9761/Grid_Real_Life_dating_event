import { motion } from "motion/react";
import type { EventData } from "../data/events";

type EventHeroProps = {
  event: EventData;
};

export default function EventHero({ event }: EventHeroProps) {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10 sm:h-[460px]">
      <motion.img
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        src={event.image}
        alt={event.title}
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-[#0C0D10]/55 to-black/30" />

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
        {event.isSellingFast && (
          <span className="inline-flex rounded-full bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            Selling Fast
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-5xl">
          {event.title}
        </h1>
        <p className="mt-3 text-base text-white/85 sm:text-lg">
          {event.city} • {event.date}
        </p>
      </div>
    </div>
  );
}
