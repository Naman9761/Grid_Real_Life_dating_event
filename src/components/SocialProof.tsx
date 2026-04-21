import { motion } from "motion/react";

const avatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=64&h=64",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=64&h=64",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=64&h=64",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=64&h=64",
];

type SocialProofProps = {
  embedded?: boolean;
};

export default function SocialProof({ embedded = false }: SocialProofProps) {
  return (
    <section
      className={
        embedded
          ? "relative overflow-hidden pt-5 sm:pt-8"
          : "relative overflow-hidden pb-10 md:pb-16 px-4 sm:px-6"
      }
    >
      {!embedded && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-pink/10 blur-[120px] rounded-full -z-10" />
      )}
      <div className={`${embedded ? "max-w-7xl" : "max-w-6xl"} mx-auto relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-brand-dark"
                  alt="user"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-left">
              <h4 className="text-4xl font-black tracking-tight">3,000+</h4>
              <p className="text-lg text-white/70">
                matches made in real life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="33"
                  className="fill-none stroke-white/5 stroke-4"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="33"
                  className="fill-none stroke-brand-pink stroke-4"
                  strokeDasharray={`${2 * Math.PI * 33}`}
                  strokeDashoffset={`${2 * Math.PI * 33 * (1 - 0.92)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={avatars[0]}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  alt="profile"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-4xl font-black tracking-tight">92%</h4>
              <p className="text-lg text-white/70">
                of attendees find a connection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <div className="flex -space-x-3">
              <img
                src={avatars[2]}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-brand-dark"
                alt="user"
                referrerPolicy="no-referrer"
              />
              <img
                src={avatars[3]}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-brand-dark"
                alt="user"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <h4 className="text-4xl font-black tracking-tight">4.9/5</h4>
              <p className="text-lg text-white/70">average event rating.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
