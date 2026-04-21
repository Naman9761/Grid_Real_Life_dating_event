import type { EventData } from "../data/events";

type EventScheduleProps = {
  schedule: EventData["schedule"];
};

export default function EventSchedule({ schedule }: EventScheduleProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Schedule</h2>
      <div className="relative border-l border-white/15 pl-6">
        {schedule.map((item, index) => (
          <div key={`${item.time}-${index}`} className="relative mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 last:mb-0">
            <span className="absolute -left-[30px] top-5 h-2.5 w-2.5 rounded-full bg-brand-pink" />
            <p className="text-sm font-semibold text-white">{item.time}</p>
            <p className="text-sm text-white/75">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
