import { useMemo, useState } from "react";
import { motion } from "motion/react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

const filters = ["All", "Rooftop", "Dinner", "Mixer", "Sunset"] as const;

export default function EventsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesQuery = `${event.title} ${event.city} ${event.venue}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesFilter = activeFilter === "All" || event.category === activeFilter;
      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-dark px-4 pb-24 pt-28 sm:px-6 lg:px-10"
    >
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">Events</h1>
          <p className="mt-2 text-white/70">Find your city. Book your next real-life connection.</p>
        </div>

        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search by city, venue, or event"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand-pink/60 md:max-w-sm"
          />
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                  activeFilter === filter
                    ? "border-transparent bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple text-white"
                    : "border-white/15 bg-white/5 text-white/70 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/75">
            No events found. Try adjusting your search or filter.
          </div>
        ) : (
          <>
            <div className="flex gap-4 overflow-x-auto pb-4 md:hidden">
              {filteredEvents.map((event) => (
                <div key={event.id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
            <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <div key={event.id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </motion.div>
  );
}
