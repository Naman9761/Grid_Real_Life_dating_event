import { motion } from "motion/react";

const formats = [
  {
    title: "Match Grid",
    description: "Our signature format. Your colour tells them everything.",
    image:
      "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?auto=format&fit=crop&q=80&w=600",
    color: "from-brand-orange",
  },
  {
    title: "Pitch Your Mate",
    description: "Your friend pitches you to a room full of singles.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=600",
    color: "from-brand-pink",
  },
  {
    title: "Blind Date Dinner",
    description:
      "Exclusive & intimate. You won't know who you're meeting until you sit down.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
    color: "from-brand-purple",
  },
  {
    title: "Speed Mingle",
    description: "Speed dating, reimagined as a game. Fast & fun connections.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600",
    color: "from-brand-orange",
  },
];

export default function EventFormats() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-linear-to-b from-transparent to-black/30">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/10 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Event Formats
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            You'll experience something different every single tech
            conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/5"
            >
              <img
                src={format.image}
                alt={format.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute inset-0 bg-linear-to-t ${format.color} via-black/40 to-transparent opacity-60`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end gap-2">
                <h3 className="text-2xl font-bold font-display">
                  {format.title}
                </h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {format.description}
                </p>
                <div className="w-0 group-hover:w-full h-1 bg-white/30 transition-all duration-500 rounded-full mt-2" />
              </div>

              {/* Masking/Gradient border effect simulation */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-white/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
