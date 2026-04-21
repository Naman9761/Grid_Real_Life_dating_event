import { Briefcase, HeartHandshake, Sparkles, UserRound, Users } from "lucide-react";

type EventAudienceProps = {
  audience: string[];
};

const getAudienceIcon = (label: string) => {
  const normalized = label.toLowerCase();

  if (normalized.includes("age")) {
    return UserRound;
  }
  if (normalized.includes("professional") || normalized.includes("startup") || normalized.includes("creative")) {
    return Briefcase;
  }
  if (normalized.includes("open-minded") || normalized.includes("connection")) {
    return HeartHandshake;
  }
  if (normalized.includes("introvert")) {
    return Sparkles;
  }
  return Users;
};

export default function EventAudience({ audience }: EventAudienceProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Who It's For</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {audience.map((item) => {
          const Icon = getAudienceIcon(item);

          return (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/85 backdrop-blur-lg"
            >
              <Icon className="mx-auto mb-2 h-5 w-5 text-white/75" />
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}
