import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function UpcomingEvents() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/10 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Upcoming Events
          </h2>
          <p className="text-white/50">
            Deliver incredible stress pigeon your second event events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[2rem] overflow-hidden group border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row h-full"
            >
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={event.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={event.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20" />
                {event.isSellingFast && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-pink text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-brand-pink/40">
                    Selling Fast
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-between w-full md:w-1/2 bg-white/[0.02]">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Featured Event
                  </p>
                  <div>
                    <h3 className="text-3xl font-bold font-display leading-tight">
                      {event.city},
                    </h3>
                    <h3 className="text-3xl font-bold font-display leading-tight">
                      {event.date}
                    </h3>
                  </div>

                  <div className="space-y-1 pt-4">
                    <p className="text-xs text-white/50">Venue: {event.venue}</p>
                    <p className="text-xs text-white/50">{event.attendees} Attendees</p>
                    <p className="text-xs text-white/50">Tickets from {event.price}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to={`/events/${event.id}`} className="w-full py-4 rounded-full bg-linear-to-r from-brand-orange to-brand-pink text-sm font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all inline-block text-center">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
