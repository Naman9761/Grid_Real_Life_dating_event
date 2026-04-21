import type { EventData } from "../data/events";

type EventInfoBarProps = {
  event: EventData;
};

export default function EventInfoBar({ event }: EventInfoBarProps) {
  return (
    <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:grid-cols-3 sm:gap-0 sm:px-6">
      <div className="text-sm uppercase tracking-wider text-white/80 sm:text-center">
        Venue: <span className="font-semibold text-white">{event.venue}</span>
      </div>
      <div className="text-sm uppercase tracking-wider text-white/80 sm:border-x sm:border-white/10 sm:text-center">
        Attendees: <span className="font-semibold text-white">{event.attendees}</span>
      </div>
      <div className="text-sm uppercase tracking-wider text-white/80 sm:text-center">
        Price: <span className="font-semibold text-white">{event.price}</span>
      </div>
    </div>
  );
}
