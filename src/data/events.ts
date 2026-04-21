export type EventScheduleItem = {
  time: string;
  title: string;
};

export type EventData = {
  id: string;
  title: string;
  date: string;
  city: string;
  price: string;
  isSellingFast: boolean;
  attendees: string;
  venue: string;
  image: string;
  description: string;
  audience: string[];
  schedule: EventScheduleItem[];
  category: "Rooftop" | "Dinner" | "Mixer" | "Sunset";
};

export const events: EventData[] = [
  {
    id: "amsterdam-rooftop",
    title: "Match Grid: Amsterdam Rooftop",
    date: "May 24, 2026",
    city: "Amsterdam",
    price: "€35",
    isSellingFast: true,
    attendees: "120+",
    venue: "SkyLounge",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80&w=1600",
    description:
      "Step into real life and meet curated singles above the city skyline. The night combines intentional conversation rounds, social games, and an afterparty designed to make real chemistry happen naturally.",
    audience: ["Ages 25-38", "Social professionals", "Open-minded singles"],
    category: "Rooftop",
    schedule: [
      { time: "20:00", title: "Arrival and welcome drinks" },
      { time: "21:00", title: "Color grid assignment and introductions" },
      { time: "23:30", title: "Closing and afterparty" },
    ],
  },
  {
    id: "rotterdam-harbor-mixer",
    title: "Harbor Social Mixer",
    date: "June 14, 2026",
    city: "Rotterdam",
    price: "€32",
    isSellingFast: false,
    attendees: "100+",
    venue: "Pier 17",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600",
    description:
      "A high-energy waterfront mixer built for ambitious singles who value personality over swipes. Rotate through guided mini-conversations and meet people in a premium lounge setting.",
    audience: ["Ages 27-40", "Startup and creative crowd", "First-time attendees welcome"],
    category: "Mixer",
    schedule: [
      { time: "19:30", title: "Doors open and check-in" },
      { time: "20:30", title: "Guided speed rounds begin" },
      { time: "22:30", title: "Open mingling with DJ set" },
    ],
  },
  {
    id: "utrecht-sunset-dinner",
    title: "Sunset Connection Dinner",
    date: "July 05, 2026",
    city: "Utrecht",
    price: "€45",
    isSellingFast: true,
    attendees: "80+",
    venue: "Canal House",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    description:
      "An intimate candlelit dinner experience for meaningful conversations. Expect curated seating, premium cocktails, and a relaxed format that helps genuine connections develop.",
    audience: ["Ages 28-42", "Connection-focused singles", "Great for introverts"],
    category: "Dinner",
    schedule: [
      { time: "18:30", title: "Reception and welcome toast" },
      { time: "19:15", title: "Curated table experience" },
      { time: "21:45", title: "Dessert lounge and networking" },
    ],
  },
];

export const getEventById = (id: string) => events.find((event) => event.id === id);
