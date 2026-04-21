import { motion } from "motion/react";
import { UserPlus, Calendar, GlassWater, Heart } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-brand-orange" />,
    title: "1. Create Your Profile",
    description: "Create your team & settings your Profile.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-brand-pink" />,
    title: "2. Choose Your Event",
    description: "Choose a calendar for your Event.",
  },
  {
    icon: <GlassWater className="w-6 h-6 text-brand-purple" />,
    title: "3. Meet in Real Life",
    description: "Meet in our newer to meet in Real Life.",
  },
  {
    icon: <Heart className="w-6 h-6 text-brand-pink" />,
    title: "4. Match & Connect",
    description: "Connect with match & & connections.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/10 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-6 group hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-display">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
